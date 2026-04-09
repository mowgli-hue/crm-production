import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { addAuditLog, addMessage, addNotification, findCaseByPhone, listUsers, recordInboundClientContact } from "@/lib/store";

function getVerifyToken() {
  return String(process.env.WHATSAPP_VERIFY_TOKEN || "").trim();
}

function getAppSecret() {
  return String(process.env.WHATSAPP_APP_SECRET || "").trim();
}

function buildSignature(rawBody: string) {
  return `sha256=${createHmac("sha256", getAppSecret()).update(rawBody).digest("hex")}`;
}

function isValidSignature(rawBody: string, providedSignature: string) {
  const expected = buildSignature(rawBody);
  const a = Buffer.from(expected);
  const b = Buffer.from(String(providedSignature || ""));
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

function cleanPhone(value: string) {
  return String(value || "").replace(/[^\d]/g, "");
}

type WhatsAppWebhookPayload = {
  entry?: Array<{
    changes?: Array<{
      value?: {
        messages?: Array<{
          from: string;
          id: string;
          type: string;
          text?: { body?: string };
        }>;
      };
    }>;
  }>;
};

async function notifyStaff(companyId: string, caseId: string, clientName: string, preview: string) {
  const users = await listUsers(companyId);
  const targetUsers = users.filter((u) => u.active !== false);
  await Promise.all(
    targetUsers.map((user) =>
      addNotification({
        companyId,
        userId: user.id,
        type: "ai_alert",
        message: `WhatsApp reply from ${clientName} (${caseId}): ${preview}`
      })
    )
  );
}

async function handleIncomingText(phone: string, text: string) {
  const matchedCase = await findCaseByPhone(phone);
  if (!matchedCase) return { matched: false as const };

  await addMessage({
    companyId: matchedCase.companyId,
    caseId: matchedCase.id,
    senderType: "client",
    senderName: matchedCase.client,
    text: `[WhatsApp] ${text}`
  });
  await recordInboundClientContact({
    companyId: matchedCase.companyId,
    caseId: matchedCase.id,
    phone
  });
  await notifyStaff(
    matchedCase.companyId,
    matchedCase.id,
    matchedCase.client,
    String(text || "").trim().slice(0, 120)
  );
  await addAuditLog({
    companyId: matchedCase.companyId,
    actorUserId: "system:whatsapp",
    actorName: "WhatsApp Webhook",
    action: "whatsapp.inbound_message",
    resourceType: "case",
    resourceId: matchedCase.id,
    metadata: {
      phone: cleanPhone(phone),
      preview: String(text || "").trim().slice(0, 120)
    }
  });
  return { matched: true as const, caseId: matchedCase.id };
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  if (mode === "subscribe" && token === getVerifyToken()) {
    return new NextResponse(challenge || "", { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-hub-signature-256") || "";
  if (getAppSecret() && !isValidSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = JSON.parse(rawBody || "{}") as WhatsAppWebhookPayload;
  const messages =
    body.entry?.flatMap((entry) =>
      (entry.changes || []).flatMap((change) => change.value?.messages || [])
    ) || [];

  for (const message of messages) {
    if (message.type !== "text") continue;
    const text = String(message.text?.body || "").trim();
    const phone = String(message.from || "").trim();
    if (!text || !phone) continue;
    await handleIncomingText(phone, text);
  }

  return NextResponse.json({ ok: true });
}
