import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "ZTalent Solutions | Recruitment, Internships, CAQ & Red Seal",
  description:
    "ZTalent Solutions is a recruitment and workforce support business in Delta, BC focused on recruitment, internships, and CAQ and Red Seal support."
};

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <footer className="border-t border-white/10 bg-[#060c10]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8fdcf0]">ZTalent Solutions</p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-white/62">
                Recruitment, internships, and CAQ and Red Seal support for employers, students, and skilled professionals.
              </p>
              <p className="mt-2 text-sm text-white/62">8327 120 Street, Delta, BC</p>
              <p className="mt-1 text-sm text-white/62">604-902-8699</p>
              <p className="mt-1 text-sm text-white/62">ztalentsolutions@gmail.com</p>
            </div>
            <div className="grid gap-3 text-sm text-white/70">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
              <Link href="mailto:ztalentsolutions@gmail.com" className="transition hover:text-white">
                Email Us
              </Link>
              <Link href="tel:+16049028699" className="transition hover:text-white">
                Call Us
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
