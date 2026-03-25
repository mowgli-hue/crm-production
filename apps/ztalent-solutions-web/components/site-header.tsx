"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#091116]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logoztalent.png"
            alt="ZTalent Solutions logo"
            width={220}
            height={64}
            priority
            className="h-auto w-[170px] sm:w-[220px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/74 transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="tel:+16049028699" className="rounded-full bg-[#2ab7d6] px-5 py-2.5 text-sm font-semibold text-[#082033]">
            Call Us
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex rounded-full border border-white/15 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0a1520] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-white/78" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:+16049028699"
              className="mt-2 rounded-full bg-[#2ab7d6] px-5 py-3 text-center text-sm font-semibold text-[#082033]"
              onClick={() => setOpen(false)}
            >
              Call Us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
