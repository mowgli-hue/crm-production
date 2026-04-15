import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, CheckCircle2, FileSearch, ScanSearch, ShieldCheck } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "RepTrack",
  description:
    "RepTrack by Jungle Labs is an immigration review and case risk scanner that helps teams identify missing items, document gaps, and submission issues earlier."
};

const reviewPoints = [
  {
    icon: ScanSearch,
    title: "Review immigration files faster",
    detail:
      "RepTrack helps teams review document-heavy file packages with a clearer structure so important items are not missed during intake or pre-submission review."
  },
  {
    icon: AlertTriangle,
    title: "Catch missing or risky items earlier",
    detail:
      "The workflow is designed to surface missing supporting documents, inconsistent details, and common submission risks before the file moves forward."
  },
  {
    icon: ShieldCheck,
    title: "Improve quality control",
    detail:
      "Teams can use RepTrack as an internal quality layer before final review, reducing avoidable back-and-forth and file delays."
  },
  {
    icon: FileSearch,
    title: "Build cleaner internal operations",
    detail:
      "RepTrack supports a more repeatable review process for growing teams handling document-heavy immigration workflows."
  }
];

const useCases = [
  "Pre-submission file review for incomplete application packages",
  "Internal quality checks for immigration support teams",
  "Document triage before advisor or lawyer review",
  "Operational systems where immigration workflow speed and accuracy both matter"
];

export default function RepTrackPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RepTrack",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.reptrack.ca",
    description:
      "An immigration review and case risk scanner for teams that need cleaner document workflows and stronger submission readiness."
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Navbar />

      <section className="section-shell pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/75 transition hover:border-cyan-300/35 hover:text-cyan-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back Home
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="section-kicker">Immigration Tech</p>
            <h1 className="section-title">RepTrack is the new Jungle Labs product for immigration review and submission readiness</h1>
            <p className="mt-4 text-white/72">
              RepTrack is built to help immigration teams review document-heavy files more efficiently. The focus is on
              reducing missed items, improving internal review quality, and making pre-submission checks more reliable.
            </p>
            <p className="mt-4 text-white/72">
              This is an operational review product for real teams, not a generic upload interface. It is designed for
              cleaner immigration workflow execution and better case readiness.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.reptrack.ca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200"
              >
                Visit RepTrack
              </a>
              <a
                href="mailto:admin@junglelabsworld.com?subject=RepTrack%20Early%20Access"
                className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/15"
              >
                Request Early Access
              </a>
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.11em] text-cyan-200/80">Current Direction</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Built for internal review and submission readiness</h2>
            <div className="mt-5 space-y-3">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-cyan-100/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-14">
        <div className="mb-6 max-w-3xl">
          <p className="section-kicker">How It Helps</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">A practical scanner for real immigration operations</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {reviewPoints.map((point) => {
            const Icon = point.icon;
            return (
              <article key={point.title} className="glass-card p-6">
                <span className="mb-4 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-white/72">{point.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell mt-14 pb-10">
        <div className="glass-card p-7">
          <p className="section-kicker">Live Site</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">RepTrack is live at reptrack.ca</h2>
          <p className="mt-4 max-w-3xl text-white/72">
            Jungle Labs now references the product under its real brand. Visitors can learn about the system here and
            continue to the main website at reptrack.ca.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
