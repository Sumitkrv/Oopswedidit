"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { SunburstRays } from "@/components/common/SunburstRays";
import { HandUnderline } from "@/components/common/HandUnderline";

export function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-cream pt-8 pb-20 md:pt-14 md:pb-28 lg:pt-16 lg:pb-32">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Expressive Typography (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach/40 border border-coffee/15 text-coffee text-xs font-semibold uppercase tracking-[0.2em]"
            >
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span>Independent Creative &amp; Digital Studio</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <div className="relative inline-flex items-center gap-3">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-coffee leading-none"
                >
                  Oops.
                </motion.h1>
                <div className="relative -top-3 sm:-top-5">
                  <SunburstRays size={44} color="#C46F39" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-coffee leading-[1.05]"
              >
                We made it
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="relative inline-block"
              >
                <span className="font-serif italic font-normal text-5xl sm:text-7xl lg:text-8xl text-terracotta tracking-normal leading-[1.1]">
                  impossible to ignore.
                </span>
                <div className="w-full mt-1 sm:mt-2">
                  <HandUnderline color="#C46F39" height={16} />
                </div>
              </motion.div>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-coffee/80 max-w-xl font-sans leading-relaxed pt-2"
            >
              We build bold brands, beautiful websites, and digital experiences
              that turn attention into action.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton
                href="/contact"
                variant="primary"
                size="lg"
                withArrow
              >
                Start a Project
              </MagneticButton>

              <MagneticButton
                href="/work"
                variant="outline"
                size="lg"
              >
                Explore Our Work
              </MagneticButton>
            </motion.div>

            {/* Small Rotating Badge & Quick Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pt-8 flex items-center gap-6 text-xs text-coffee/70 font-medium"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                <span>Available for Q3/Q4 Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-coffee" />
                <span>Global Clientele</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Original Editorial Visual Composition (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="relative w-full max-w-[540px] aspect-[10/9] rounded-2xl overflow-visible"
            >
              {/* Bespoke SVG Art Direction */}
              <div className="w-full h-full relative">
                <Image
                  src="/brand/hero-composition.svg"
                  alt="oopswedidit studio creative layered composition"
                  fill
                  priority
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Floating Interactive Badge (Rotating) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                className="absolute -bottom-6 -left-6 hidden sm:flex w-24 h-24 rounded-full bg-terracotta text-cream items-center justify-center p-2 shadow-lg border-2 border-cream select-none cursor-pointer"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-display font-bold uppercase tracking-[2px] fill-cream">
                    <textPath xlinkHref="#circlePath">
                      ✦ OOPS WEDIDIT ✦ BOUTIQUE ✦
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-3 h-3 rounded-full bg-cream" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="hidden lg:flex justify-center pt-12">
          <a
            href="#agency-intro"
            aria-label="Scroll to introduction"
            className="flex flex-col items-center gap-1.5 text-xs uppercase tracking-widest text-coffee/50 hover:text-terracotta transition-colors group"
          >
            <span>Scroll</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

