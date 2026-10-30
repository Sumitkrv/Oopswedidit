import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { WorkGallery } from "@/components/work/WorkGallery";
import { SunburstRays } from "@/components/common/SunburstRays";
import { HandUnderline } from "@/components/common/HandUnderline";
import { MagneticButton } from "@/components/common/MagneticButton";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Explore digital experiences, creative branding explorations, and high-performance websites by oopswedidit studio.",
};

export default function WorkPage() {
  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: PORTFOLIO HERO */}
      <section className="w-full bg-cream py-16 sm:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
                ✦ The Archive
              </span>
              <SunburstRays size={24} color="#C46F39" />
            </div>

            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-coffee tracking-tight leading-[1.08]">
                Proof that ideas look better <br />
                when they&apos;re{" "}
                <span className="font-serif italic font-normal text-terracotta">
                  made real.
                </span>
              </h1>
              <div className="w-64">
                <HandUnderline color="#C46F39" height={14} />
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-coffee/80 font-sans leading-relaxed pt-2">
              A curated collection of digital experiences, creative explorations,
              and ambitious ideas built to inspire and convert.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: CATEGORY FILTERS & PROJECT GALLERY */}
      <section className="w-full bg-cream pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkGallery projects={siteConfig.projects} />
        </div>
      </section>

      {/* SECTION 4: PORTFOLIO CTA */}
      <section className="w-full bg-coffee text-cream py-20 sm:py-28 text-center relative overflow-hidden border-t border-coffee-dark">
        <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-cream tracking-tight">
            Your project{" "}
            <span className="font-serif italic font-normal text-peach">
              could be next.
            </span>
          </h2>
          <p className="text-cream/80 text-lg sm:text-xl max-w-xl mx-auto font-sans leading-relaxed">
            Every iconic digital experience started with an honest conversation.
            Let&apos;s map out yours.
          </p>
          <div className="pt-4 flex justify-center">
            <MagneticButton
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
              className="text-lg px-10 py-5"
            >
              Let&apos;s Make It Happen
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}

