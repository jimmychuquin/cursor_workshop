"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/constants/content";
import { motionTransition, motionViewport } from "@/lib/motion";

export function FaqSection() {
  const reduceMotion = useReducedMotion();
  const t = motionTransition(reduceMotion);
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id={faq.id}
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
            {faq.eyebrow}
          </p>
          <h2 className="font-syne mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            {faq.title}
          </h2>
        </motion.header>

        <motion.div
          className="mx-auto mt-16 max-w-3xl divide-y divide-zinc-800/90 border-t border-zinc-800/90"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={t}
        >
          {faq.items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question} className="py-2">
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="flex w-full items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="font-syne text-base font-semibold leading-snug text-zinc-100 sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-zinc-500 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
                      }
                    >
                      <p className="pb-6 pr-2 text-base leading-relaxed text-zinc-400">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
