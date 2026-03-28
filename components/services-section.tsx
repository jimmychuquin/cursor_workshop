"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe, Headphones, Workflow, type LucideIcon } from "lucide-react";
import { siteContent, type ServiceIconName } from "@/constants/content";
import { motionTransition, motionViewport } from "@/lib/motion";

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  Globe,
  Workflow,
  Headphones,
};

export function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const t = motionTransition(reduceMotion);
  const { services } = siteContent;

  return (
    <section
      id={services.id}
      className="scroll-mt-20 border-b border-zinc-900/60 bg-zinc-900/[0.12] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={t}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">
            {services.eyebrow}
          </p>
          <h2 className="font-syne mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {services.intro}
          </p>
        </motion.div>

        <ul className="mt-16 divide-y divide-zinc-800/90 border-t border-zinc-800/90">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[service.iconName];
            return (
              <motion.li
                key={service.title}
                className="group grid gap-8 py-12 md:grid-cols-12 md:items-start md:gap-10 md:py-16"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ ...t, delay: reduceMotion ? 0 : index * 0.05 }}
              >
                <div className="flex items-start gap-4 md:col-span-4 lg:col-span-3">
                  <span className="font-syne text-sm tabular-nums text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-700/80 text-accent transition-colors group-hover:border-accent/45 group-hover:text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden strokeWidth={1.65} />
                  </div>
                </div>
                <div className="md:col-span-8 lg:col-span-9">
                  <h3 className="font-syne text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
