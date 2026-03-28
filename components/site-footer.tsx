"use client";

import { AtSign, Mail, MessageCircle } from "lucide-react";
import { siteContent } from "@/constants/content";

export function SiteFooter() {
  const { brand, nav, footer } = siteContent;
  const year = new Date().getFullYear();
  const copyright = footer.copyright.replace("{year}", String(year));

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <a
            href={`#${siteContent.hero.id}`}
            className="font-syne text-xl font-semibold text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            {brand.name}
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
            {footer.tagline}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:col-span-7 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
              {footer.linksColumnTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
              {footer.contactColumnTitle}
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {footer.email}
                </a>
              </li>
              <li>
                <a
                  href={footer.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <MessageCircle
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden
                  />
                  {footer.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={footer.social.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <AtSign className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {footer.social.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-zinc-900 px-4 pt-8">
        <p className="text-center text-xs text-zinc-600 md:text-left">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
