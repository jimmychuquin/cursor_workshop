"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/constants/content";
import { motionTransition, motionViewport } from "@/lib/motion";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const t = motionTransition(reduceMotion);
  const { testimonials } = siteContent;

  return (
    <section
      id={testimonials.id}
      className="scroll-mt-20 border-b border-zinc-900/60 bg-zinc-900/[0.12] py-20 md:py-28"
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
            {testimonials.eyebrow}
          </p>
          <h2 className="font-syne mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            {testimonials.title}
          </h2>
        </motion.header>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {testimonials.items.map((item, index) => (
            <motion.figure
              key={item.name}
              className="flex flex-col border-l-2 border-zinc-800 pl-6 transition-colors hover:border-accent/55 sm:pl-8"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{ ...t, delay: reduceMotion ? 0 : index * 0.08 }}
            >
              <blockquote className="font-syne text-lg font-medium leading-snug text-zinc-200 lg:text-xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm text-zinc-500">
                <span className="font-medium text-zinc-300">{item.name}</span>
                <span className="mx-2 text-zinc-600">·</span>
                {item.role}, {item.business}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
