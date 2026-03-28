"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteContent } from "@/constants/content";
import { motionTransition, motionViewport } from "@/lib/motion";

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion();
  const t = motionTransition(reduceMotion);
  const { finalCta, footer } = siteContent;

  return (
    <section
      id={finalCta.id}
      className="scroll-mt-20 bg-zinc-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 via-zinc-900/80 to-zinc-950 px-8 py-16 sm:px-12 md:px-16 md:py-20"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={t}
        >
          <div
            className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-accent/25 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2 className="font-syne text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl md:text-[2.5rem]">
              {finalCta.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
              {finalCta.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href={finalCta.button.href}
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-emerald-950/40 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              >
                {finalCta.button.label}
              </a>
              <a
                href={footer.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-500/80 bg-zinc-950/30 px-8 py-3.5 text-base font-semibold text-zinc-100 backdrop-blur-sm transition-colors hover:border-zinc-300 hover:bg-zinc-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
            </div>
            <p className="mt-8 text-sm text-zinc-400">{finalCta.secondaryNote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
