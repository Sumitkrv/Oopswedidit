"use client";

import { SectionReveal } from "@/components/common/SectionReveal";
import { SunburstRays } from "@/components/common/SunburstRays";

const DIFFERENTIATORS = [
  {
    title: "Strategy Before Aesthetics",
    description:
      "A gorgeous website that confuses your customer is a liability. We analyze your commercial model, pricing, and friction points before making aesthetic decisions.",
    accent: "01",
  },
  {
    title: "Creativity with Commercial Purpose",
    description:
      "We reject both soulless corporate templates and self-indulgent art projects. Every typographic decision and interaction serves brand positioning and conversion.",
    accent: "02",
  },
  {
    title: "Built Around Your Business",
    description:
      "No shoehorning into generic third-party themes. We construct bespoke Next.js and digital product architectures tailored precisely to your operational needs.",
    accent: "03",
  },
  {
    title: "Long-Term Digital Thinking",
    description:
      "We design modular scalable design systems and maintainable codebases so your digital presence continues evolving gracefully as your business scales.",
    accent: "04",
  },
];

export function HomeDifferentiator() {
  return (
    <section className="w-full bg-coffee text-cream py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6 pb-16 sm:pb-24">
          <SectionReveal direction="up">
            <div className="inline-flex items-center gap-2">
              <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
                ✦ Studio Ethos
              </span>
              <SunburstRays size={24} color="#C46F39" />
            </div>
          </SectionReveal>

          <SectionReveal direction="up" delay={0.15}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-cream tracking-tight leading-[1.08]">
              We don&apos;t do ordinary. <br />
              <span className="font-serif italic font-normal text-peach">
                Neither should your brand.
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal direction="up" delay={0.25}>
            <p className="text-cream/80 text-lg sm:text-xl font-sans leading-relaxed">
              In a digital landscape drowned in identical minimalist templates and
              impersonal AI clutter, true distinction is the ultimate unfair
              advantage.
            </p>
          </SectionReveal>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {DIFFERENTIATORS.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.12}>
              <div className="p-8 sm:p-10 rounded-3xl bg-coffee-dark/60 border border-cream/10 hover:border-terracotta/50 transition-colors h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-terracotta tracking-widest">
                      {item.accent}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-peach/40 group-hover:bg-terracotta transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-cream tracking-tight group-hover:text-peach transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-cream/70 text-base sm:text-lg leading-relaxed font-sans pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
