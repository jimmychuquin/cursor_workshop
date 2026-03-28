"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/constants/content";
import { motionTransition } from "@/lib/motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const t = motionTransition(reduceMotion);
  const { hero, brand } = siteContent;

  return (
    <section
      id={hero.id}
      className="relative scroll-mt-20 border-b border-zinc-900/80 bg-zinc-950"
    >
      <div className="flex min-h-[calc(100svh-4.25rem)] flex-col-reverse lg:grid lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-2">
        <motion.div
          className="flex flex-col justify-center px-4 py-14 sm:py-16 lg:py-20 lg:pl-8 lg:pr-10 xl:pl-12"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...t, delay: reduceMotion ? 0 : 0.06 }}
        >
          <div className="mx-auto w-full max-w-lg lg:mx-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">
              {brand.name}
            </p>
            <p className="mt-3 text-sm text-zinc-500">{brand.tagline}</p>
            <h1 className="font-syne mt-8 text-[2rem] font-semibold leading-[1.07] tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.05] lg:text-[3.15rem]">
              {hero.titleLead}{" "}
              <span className="bg-gradient-to-r from-emerald-200 via-accent to-teal-200 bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
              {hero.titleTrail ? ` ${hero.titleTrail}` : null}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-zinc-700/90 px-7 py-3.5 text-base font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[42svh] min-h-[240px] w-full lg:h-auto lg:min-h-[calc(100svh-4.25rem)]"
          initial={reduceMotion ? false : { opacity: 0.85, scale: 1.02 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ ...t, duration: reduceMotion ? 0 : 0.85 }}
        >
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/15 to-transparent lg:bg-gradient-to-l lg:from-zinc-950 lg:via-zinc-950/35 lg:to-transparent"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
