"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/common/SectionReveal";
import { HandUnderline } from "@/components/common/HandUnderline";

export function AgencyIntro() {
  return (
    <section id="agency-intro" className="w-full bg-cream-card py-20 sm:py-28 lg:py-36 relative overflow-hidden border-y border-coffee/10">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Typography (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <SectionReveal direction="up" delay={0.1}>
              <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] block">
                ✦ Not Your Usual Agency
              </span>
            </SectionReveal>

            <SectionReveal direction="up" delay={0.2}>
              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-coffee tracking-tight leading-[1.1]">
                A little{" "}
                <span className="font-serif italic font-normal text-terracotta">
                  unexpected.
                </span>{" "}
                <br />
                A lot unforgettable.
              </h2>
            </SectionReveal>

            <SectionReveal direction="up" delay={0.3}>
              <div className="w-48 my-2">
                <HandUnderline color="#C46F39" height={12} />
              </div>
              <p className="text-xl sm:text-2xl text-coffee/85 font-sans leading-relaxed pt-2">
                We&apos;re a creative-first digital studio turning ambitious ideas
                into meaningful brand experiences. From the first sketch to the
                final launch, we make digital feel different.
              </p>
            </SectionReveal>

            <SectionReveal direction="up" delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-coffee/75">
                <div className="border-l-2 border-terracotta pl-4 space-y-1">
                  <h3 className="font-display font-bold text-coffee text-base">
                    Strategy Before Aesthetics
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We interrogate the business model first so every design
                    decision drives commercial momentum.
                  </p>
                </div>
                <div className="border-l-2 border-terracotta pl-4 space-y-1">
                  <h3 className="font-display font-bold text-coffee text-base">
                    Craftsmanship in Every Pixel
                  </h3>
                  <p className="text-sm leading-relaxed">
                    No bloated page builders or cut corners. Clean Next.js
                    architectures engineered to convert.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="up" delay={0.5}>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-terracotta hover:text-coffee font-display font-semibold text-lg group transition-colors"
                >
                  <span>Discover what we do</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Editorial Brand Visual (Cols 8-12) */}
          <div className="lg:col-span-5 relative">
            <SectionReveal direction="right" delay={0.3}>
              <div className="relative w-full aspect-[4/5] max-w-[460px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-coffee/15 bg-coffee">
                <Image
                  src="/brand/intro-art.svg"
                  alt="oopswedidit studio architectural brand visual"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

