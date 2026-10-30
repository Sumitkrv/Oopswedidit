"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { SectionReveal } from "@/components/common/SectionReveal";
import { SunburstRays } from "@/components/common/SunburstRays";

export function HomeProcess() {
  return (
    <section className="w-full bg-cream py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 pb-16 sm:pb-24">
          <div className="inline-flex items-center gap-2">
            <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
              ✦ The Framework
            </span>
            <SunburstRays size={24} color="#C46F39" />
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-coffee tracking-tight">
            From &ldquo;what if&rdquo; <br className="hidden sm:inline" />
            to{" "}
            <span className="font-serif italic font-normal text-terracotta">
              &ldquo;we did it.&rdquo;
            </span>
          </h2>
          <p className="text-coffee/75 text-base sm:text-lg font-sans">
            A tested collaborative cadence engineered to remove ambiguity, protect
            momentum, and launch work that commands attention.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line (Terracotta) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-coffee/10 z-0">
            <motion.div
              className="h-full bg-terracotta origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* 4 Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {siteConfig.process.map((stage, idx) => (
              <SectionReveal key={stage.step} delay={idx * 0.15}>
                <div className="bg-cream-card/90 rounded-2xl p-6 sm:p-8 border border-coffee/10 hover:border-terracotta/40 transition-colors h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    {/* Step Circle with Handcrafted Accent */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-coffee group-hover:bg-terracotta text-cream font-display font-bold text-base flex items-center justify-center transition-colors shadow-sm">
                        {stage.step}
                      </div>
                      <span className="text-xs uppercase tracking-widest text-coffee/50 font-semibold">
                        Phase {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-coffee group-hover:text-terracotta transition-colors pt-2">
                      {stage.title}
                    </h3>

                    <p className="text-sm font-serif italic text-terracotta font-medium">
                      &ldquo;{stage.headline}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-coffee/80 leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-6 border-t border-coffee/10 mt-6 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-coffee/60 font-semibold block">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1">
                      {stage.deliverables.map((d, i) => (
                        <li
                          key={i}
                          className="text-xs text-coffee/75 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

