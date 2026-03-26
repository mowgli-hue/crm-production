import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChefHat, Clock3, Smartphone, UtensilsCrossed } from "lucide-react";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Tiffin Go",
  description:
    "Tiffin Go by Jungle Labs is a restaurant ordering and operations app designed to improve speed, reduce order errors, and increase repeat visits."
};

const coreBenefits = [
  {
    icon: Clock3,
    title: "Faster table turnaround",
    detail: "Guests can place and update orders directly from the table screen without waiting for manual order entry."
  },
  {
    icon: ChefHat,
    title: "Cleaner kitchen workflows",
    detail: "Orders route to a live kitchen display with clear prep status so teams can manage rush hours better."
  },
  {
    icon: Smartphone,
    title: "Better customer experience",
    detail: "Live order tracking, waiter call support, and less confusion at peak service time."
  },
  {
    icon: UtensilsCrossed,
    title: "Operational visibility",
    detail: "Restaurant owners get performance insights on wait times, order flow, and service bottlenecks."
  }
];

const launchPhases = [
  "Phase 1 (Current): Core ordering engine + table interface + kitchen dashboard",
  "Phase 2: Staff workflow tools, service alerts, and admin controls",
  "Phase 3: Analytics layer for repeat customer and menu performance insights"
];

export default function TiffinGoPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/75 transition hover:border-cyan-300/35 hover:text-cyan-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back Home
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker">Hospitality Product</p>
            <h1 className="section-title">Tiffin Go is launching as a smarter restaurant ordering app</h1>
            <p className="mt-5 max-w-3xl text-white/75">
              Tiffin Go is built for restaurants that want faster service, fewer ordering mistakes, and a better dine-in
              experience. We are actively launching the app in phases with live restaurant workflows at the center.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:admin@junglelabsworld.com?subject=Tiffin%20Go%20Early%20Access"
                className="inline-flex rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200"
              >
                Join Early Access
              </a>
              <a
                href="/#contact"
                className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/15"
              >
                Book a Demo Call
              </a>
            </div>
          </div>

          <div className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.1em] text-cyan-200/85">Launch Status</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Active Build and Pilot Rollout</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              We are currently onboarding pilot restaurants and refining operations data loops before wider rollout.
            </p>
            <ul className="mt-5 space-y-3">
              {launchPhases.map((phase) => (
                <li key={phase} className="flex items-start gap-2 text-sm text-cyan-100/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <span>{phase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell mt-14">
        <div className="mb-7">
          <p className="section-kicker">How Tiffin Go Helps</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">Built to solve real restaurant bottlenecks</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {coreBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="glass-card p-6">
                <span className="mb-4 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-white/72">{benefit.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell mt-14 pb-10">
        <div className="glass-card p-7">
          <p className="section-kicker">For Restaurant Owners</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">If you want to pilot Tiffin Go, we can onboard your location</h2>
          <p className="mt-4 max-w-3xl text-white/72">
            We are inviting selected restaurants to test the launch version and co-design the final rollout with our product team.
          </p>
          <div className="mt-6">
            <a
              href="mailto:admin@junglelabsworld.com?subject=Tiffin%20Go%20Pilot%20Program"
              className="inline-flex rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:from-emerald-200 hover:to-cyan-200"
            >
              Apply for Pilot Program
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
