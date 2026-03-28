"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/constants/content";
import { motionTransition, motionViewport } from "@/lib/motion";

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const t = motionTransition(reduceMotion);
  const { about } = siteContent;

  return (
    <section
      id={about.id}
      className="scroll-mt-20 border-b border-zinc-900/60 bg-zinc-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="grid gap-14 md:grid-cols-12 md:gap-12 lg:gap-16"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={t}
        >
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">
              {about.eyebrow}
            </p>
            <h2 className="font-syne mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.5rem]">
              {about.title}
            </h2>
            <blockquote className="mt-10 border-l-2 border-accent pl-6 font-syne text-lg font-medium leading-snug text-zinc-200 lg:text-xl">
              {about.pullQuote}
            </blockquote>
          </div>
          <div className="md:col-span-7 md:border-l md:border-zinc-800/80 md:pl-10 lg:pl-14">
            <div className="space-y-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
