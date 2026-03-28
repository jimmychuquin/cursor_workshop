"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/constants/content";
import { motionTransition, motionViewport } from "@/lib/motion";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const t = motionTransition(reduceMotion);
  const { process } = siteContent;

  return (
    <section
      id={process.id}
      className="scroll-mt-20 border-b border-zinc-900/60 bg-zinc-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.header
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={t}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">
            {process.eyebrow}
          </p>
          <h2 className="font-syne mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            {process.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {process.subtitle}
          </p>
        </motion.header>

        <ol className="mt-20 max-w-3xl space-y-14">
          {process.steps.map((step, index) => (
            <motion.li
              key={step.title}
              className="flex gap-6 sm:gap-10"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{ ...t, delay: reduceMotion ? 0 : index * 0.05 }}
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-700/90 bg-zinc-900/50 font-syne text-xs font-semibold tabular-nums text-accent"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-syne text-xl font-semibold text-zinc-50 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
