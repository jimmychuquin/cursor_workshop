"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteContent } from "@/constants/content";

export function SiteHeader() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const headerShadow = useTransform(
    scrollY,
    [0, 72],
    [
      "0 0 0 0 rgba(0,0,0,0)",
      "0 18px 50px -20px rgba(0,0,0,0.55)",
    ],
  );

  const { brand, nav } = siteContent;

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl backdrop-saturate-150"
      style={reduceMotion ? undefined : { boxShadow: headerShadow }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:h-[4.25rem]">
        <a
          href={`#${siteContent.hero.id}`}
          className="font-syne shrink-0 text-lg font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          {brand.name}
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-1 md:flex md:flex-1 md:justify-center lg:gap-2"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 lg:px-3"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.contactCtaHref}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/15 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-5"
        >
          {nav.contactCtaLabel}
        </a>
      </div>
    </motion.header>
  );
}
