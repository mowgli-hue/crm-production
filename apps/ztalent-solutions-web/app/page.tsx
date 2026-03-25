import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  Wrench
} from "lucide-react";

const stats = [
  { value: "3", label: "Core service areas" },
  { value: "1", label: "Clear point of contact" },
  { value: "Delta, BC", label: "Local business presence" }
];

const services = [
  {
    title: "Recruitment",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hiring support for employers who need dependable candidates, stronger shortlists, and a smoother recruitment process.",
    bullets: ["Candidate sourcing", "Screening support", "Role matching"]
  },
  {
    title: "Internships",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Practical internship pathways that connect students and emerging professionals with meaningful workplace opportunities.",
    bullets: ["Student placement", "Career exposure", "Employer coordination"]
  },
  {
    title: "CAQ & Red Seal",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    description:
      "Straightforward support for applicants who need guidance with CAQ and Red Seal-related documentation and next steps.",
    bullets: ["Document guidance", "Process clarity", "Readiness support"]
  }
];

const industries = [
  { title: "Trades", text: "Support for skilled workers and qualification-focused pathways.", icon: Wrench },
  { title: "Business Support", text: "Administrative and office-focused recruitment support for growing teams.", icon: Building2 },
  { title: "Early Career", text: "Internship opportunities for students and emerging professionals.", icon: Users },
  { title: "Employer Hiring", text: "Practical recruitment help for businesses that need reliable talent.", icon: Handshake }
];

const process = [
  {
    step: "01",
    title: "Understand the need",
    text: "We start with the actual hiring, placement, or support goal so the process is built around the right outcome."
  },
  {
    step: "02",
    title: "Create the pathway",
    text: "We align talent, opportunities, and documentation support in a way that is clear and realistic."
  },
  {
    step: "03",
    title: "Move it forward",
    text: "From first contact to final support, we keep communication practical, responsive, and organized."
  }
];

const strengths = [
  "Professional branding that builds trust quickly",
  "Dedicated positioning for recruitment, internships, and support services",
  "Clean contact paths for calls and email inquiries",
  "Responsive layout that works well on desktop and mobile"
];

const faqItems = [
  {
    question: "Who can contact ZTalent Solutions?",
    answer: "Employers, students, job seekers, and individuals looking for CAQ or Red Seal-related guidance can all reach out."
  },
  {
    question: "Do you support internship opportunities?",
    answer: "Yes. The site presents internships as a serious pathway for growth and workplace experience, not just a secondary service."
  },
  {
    question: "Can employers use this site to inquire about hiring support?",
    answer: "Yes. The messaging and contact flow are designed to make it easy for employers to start a recruitment conversation."
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
            alt="Professional office workspace"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(5,15,25,0.96),rgba(5,15,25,0.78),rgba(42,183,214,0.28))]" />
        </div>

        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="section-kicker">Recruitment and Workforce Support</p>
            <h1 className="section-title mt-5 max-w-4xl text-white">
              Helping businesses hire, helping people move forward.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/74 sm:text-lg">
              ZTalent Solutions supports recruitment, internships, and CAQ and Red Seal-related guidance with a practical, people-first approach built for real outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#2ab7d6] px-6 py-3 text-sm font-semibold text-[#082033] transition hover:bg-[#5ed7f0]"
              >
                Explore Services
                <ArrowRight size={16} />
              </Link>
              <Link
                href="tel:+16049028699"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call 604-902-8699
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-[24px] px-5 py-5">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="glass-panel rounded-[28px] p-6 sm:translate-y-10">
              <Handshake className="text-[#2ab7d6]" />
              <h2 className="mt-4 text-xl font-semibold text-white">Employer support</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Built for businesses that want a professional first impression and a more organized hiring process.
              </p>
            </article>
            <article className="glass-panel rounded-[28px] p-6">
              <GraduationCap className="text-[#2ab7d6]" />
              <h2 className="mt-4 text-xl font-semibold text-white">Internship pathways</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                A stronger presentation for internships as meaningful stepping stones into long-term careers.
              </p>
            </article>
            <article className="glass-panel rounded-[28px] p-6">
              <ShieldCheck className="text-[#2ab7d6]" />
              <h2 className="mt-4 text-xl font-semibold text-white">Process clarity</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Clear messaging for people who need guidance and support without unnecessary confusion.
              </p>
            </article>
            <article className="rounded-[28px] bg-[#dff5fa] p-6 text-[#102433]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#165a7f]">Why this site works</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#33434d]">
                {strengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#209fc3]" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Services</p>
            <h2 className="section-title mt-4 max-w-3xl text-white">
              Clear service areas with business-ready messaging.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/66">
            Each section is designed to make it obvious what ZTalent Solutions offers and how people can take the next step.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,25,30,0.96),rgba(12,18,23,0.98))] shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                <div className="relative h-64">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1419] via-[#0e1419]/35 to-transparent" />
                </div>
                <div className="p-6">
                  <Icon className="text-[#2ab7d6]" />
                  <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{service.description}</p>
                  <ul className="mt-5 space-y-3 text-sm text-[#b8ddea]">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#2ab7d6]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="industries" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,24,35,0.95),rgba(7,17,26,0.98))] p-8 sm:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-kicker">Industries</p>
              <h2 className="section-title mt-4 max-w-3xl text-white">
                Built for employers, students, and skilled professionals.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/66">
              ZTalent Solutions can present itself confidently across multiple client needs without losing clarity.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div key={industry.title} className="glass-panel rounded-[26px] p-5">
                  <Icon className="text-[#2ab7d6]" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{industry.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[34px] bg-[#eef8fc] p-8 text-[#172026]">
            <p className="section-kicker !text-[#1f6f96]">About Us</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              Connecting employers and talent with practical, reliable support.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#3d4a53]">
              ZTalent Solutions is built around a simple goal: helping businesses and individuals move forward with confidence. We support employers looking for dependable candidates, guide internship opportunities for emerging professionals, and assist people who need direction with CAQ and Red Seal-related pathways.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#3d4a53]">
              Our approach is direct, professional, and people-focused. Good recruitment is not just about filling positions. It is about creating the right fit, supporting growth, and making every step easier to understand from the start.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-white/75 p-5">
                <BadgeCheck className="text-[#209fc3]" />
                <h3 className="mt-3 text-lg font-semibold">Professional service</h3>
                <p className="mt-2 text-sm leading-6 text-[#44525b]">
                  Clear communication and a strong business-facing presentation from first contact onward.
                </p>
              </div>
              <div className="rounded-[24px] bg-white/75 p-5">
                <Users className="text-[#209fc3]" />
                <h3 className="mt-3 text-lg font-semibold">People-first approach</h3>
                <p className="mt-2 text-sm leading-6 text-[#44525b]">
                  Services built around matching the right opportunity with the right level of readiness.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[34px] border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
                alt="Team collaboration and planning"
                className="h-[280px] w-full object-cover"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {process.map((item) => (
                <div key={item.step} className="glass-panel rounded-[28px] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8fdcf0]">{item.step}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,29,40,0.95),rgba(8,17,25,0.98))] p-8">
            <p className="section-kicker">Why Choose Us</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-white">
              A cleaner and more credible digital presence for your business.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[24px] p-5">
                <Clock3 className="text-[#2ab7d6]" />
                <h3 className="mt-3 text-lg font-semibold text-white">Responsive contact flow</h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Visitors can call or email directly without friction.
                </p>
              </div>
              <div className="glass-panel rounded-[24px] p-5">
                <FileCheck2 className="text-[#2ab7d6]" />
                <h3 className="mt-3 text-lg font-semibold text-white">Clear service structure</h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  Recruitment, internships, and support services each have their own place.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[34px] bg-[#dff5fa] p-8 text-[#102433]">
            <p className="section-kicker !text-[#165a7f]">FAQ</p>
            <div className="mt-5 space-y-5">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-[22px] bg-white/65 p-5">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#35505f]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-[36px] border border-[#2ab7d6]/20 bg-[linear-gradient(140deg,#0f2433,#0a1620_55%,#1b6d8f)] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="section-kicker">Contact Us</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl">
                Speak with ZTalent Solutions about hiring, internships, or candidate support.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72">
                Reach out for employer hiring support, internship opportunities, or guidance related to CAQ and Red Seal pathways.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="tel:+16049028699" className="rounded-full bg-[#dff5fa] px-6 py-3 text-sm font-semibold text-[#102433]">
                  Call Now
                </Link>
                <Link href="mailto:ztalentsolutions@gmail.com" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">
                  Send Email
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="glass-panel rounded-[28px] p-5">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 text-[#8fdcf0]" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fdcf0]">Phone</p>
                    <Link href="tel:+16049028699" className="mt-2 block text-lg font-semibold text-white">
                      604-902-8699
                    </Link>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-5">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 text-[#8fdcf0]" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fdcf0]">Email</p>
                    <Link href="mailto:ztalentsolutions@gmail.com" className="mt-2 block break-all text-lg font-semibold text-white">
                      ztalentsolutions@gmail.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-5">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 text-[#8fdcf0]" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8fdcf0]">Address</p>
                    <p className="mt-2 text-lg font-semibold text-white">8327 120 Street, Delta, BC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
