import { AboutSection } from "@/components/about-section";
import { FaqSection } from "@/components/faq-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-50 antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <PortfolioSection />
        <FaqSection />
        <FinalCtaSection />
        <SiteFooter />
      </main>
    </div>
  );
}
