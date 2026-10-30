"use client";

import { MagneticButton } from "@/components/common/MagneticButton";
import { SunburstRays } from "@/components/common/SunburstRays";
import { HandUnderline } from "@/components/common/HandUnderline";

export function HomeFinalCTA() {
  return (
    <section className="w-full bg-cream py-24 sm:py-32 lg:py-40 relative overflow-hidden text-center border-t border-coffee/10">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2">
          <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
            ✦ Next Steps
          </span>
          <SunburstRays size={28} color="#C46F39" />
        </div>

        <div className="space-y-2">
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-coffee tracking-tight">
            Got a wild idea?
          </h2>
          <div className="relative inline-block">
            <span className="font-serif italic font-normal text-5xl sm:text-7xl lg:text-8xl text-terracotta tracking-normal block">
              Oops, let&apos;s make it happen.
            </span>
            <div className="w-full mt-2">
              <HandUnderline color="#C46F39" height={16} />
            </div>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-coffee/80 max-w-xl mx-auto font-sans leading-relaxed pt-2">
          Whether you need a flagship brand redesign, a high-converting website,
          or custom workflow automations — let&apos;s talk about what&apos;s possible.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            href="/contact"
            variant="primary"
            size="lg"
            withArrow
            className="text-lg px-10 py-5"
          >
            Tell Us About It
          </MagneticButton>

          <MagneticButton
            href="/services"
            variant="outline"
            size="lg"
            className="text-lg px-8 py-5"
          >
            Review Capabilities
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
