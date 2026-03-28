"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/constants/content";
import { motionTransition, motionViewport } from "@/lib/motion";

export function PortfolioSection() {
  const reduceMotion = useReducedMotion();
  const t = motionTransition(reduceMotion);
  const { portfolio } = siteContent;

  return (
    <section
      id={portfolio.id}
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
            {portfolio.eyebrow}
          </p>
          <h2 className="font-syne mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            {portfolio.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {portfolio.subtitle}
          </p>
        </motion.header>

        <div className="mt-20 flex flex-col gap-20 md:gap-24">
          {portfolio.items.map((item, index) => {
            const imageRight = index % 2 === 1;
            return (
              <motion.article
                key={item.title}
                className={`grid gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:gap-20 ${
                  imageRight
                    ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                    : ""
                }`}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{ ...t, delay: reduceMotion ? 0 : 0.04 }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent/90">
                    {item.category}
                  </p>
                  <h3 className="font-syne mt-4 text-2xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
                    {item.description}
                  </p>
                  <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500">
                    <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden />
                    {portfolio.imageCaption}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
