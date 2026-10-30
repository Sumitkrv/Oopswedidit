import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MagneticButton } from "@/components/common/MagneticButton";
import { SunburstRays } from "@/components/common/SunburstRays";
import { HandUnderline } from "@/components/common/HandUnderline";
import { FaqAccordion } from "@/components/services/FaqAccordion";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore oopswedidit studio capabilities across Website Design & Development, Software & Digital Products, Brand Identity, Marketing, and AI Automation.",
};

const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "Discovery & Immersion",
    desc: "We analyze your audience, competitive space, business model, and operational friction to establish sharp strategic objectives.",
  },
  {
    step: "02",
    title: "Strategic Blueprint",
    desc: "We map user journeys, architecture specifications, conversion loops, and artistic direction before entering production.",
  },
  {
    step: "03",
    title: "Art Direction & Design",
    desc: "Tactile typographic systems, custom UI components, responsive layout systems, and interactive prototypes.",
  },
  {
    step: "04",
    title: "Development & Engineering",
    desc: "Production Next.js / React implementation with clean semantic code, lightning-fast Core Web Vitals, and strict QA.",
  },
  {
    step: "05",
    title: "Launch & Momentum",
    desc: "Deployment on cloud infrastructure, analytics verification, handover recordings, and ongoing growth support.",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: SERVICE HERO */}
      <section className="w-full bg-cream py-16 sm:py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach/40 border border-coffee/15 text-coffee text-xs font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span>End-to-End Capabilities</span>
              </div>

              <div className="space-y-2">
                <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-coffee tracking-tight leading-[1.08]">
                  Whatever the idea. <br />
                  <span className="font-serif italic font-normal text-terracotta">
                    We&apos;ve got the magic.
                  </span>
                </h1>
                <div className="w-64">
                  <HandUnderline color="#C46F39" height={14} />
                </div>
              </div>

              <p className="text-xl sm:text-2xl text-coffee/80 max-w-xl font-sans leading-relaxed pt-2">
                From making your first impression unforgettable to building the
                technology behind your next big move — we&apos;re here for the whole
                journey.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <MagneticButton href="#capabilities" variant="primary" size="lg" withArrow>
                  Explore Capabilities
                </MagneticButton>
                <MagneticButton href="/contact" variant="outline" size="lg">
                  Discuss a Project
                </MagneticButton>
              </div>
            </div>

            {/* Right Visual (Cols 8-12) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full aspect-[10/7] max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-coffee/15 bg-coffee">
                <Image
                  src="/brand/services-art.svg"
                  alt="oopswedidit capabilities composition"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DETAILED SERVICE EXPERIENCES */}
      <section id="capabilities" className="w-full bg-cream py-16 sm:py-24 border-t border-coffee/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {siteConfig.services.map((service, index) => {
            const isEven = index % 2 === 0;
            const bgClass =
              index % 3 === 0
                ? "bg-cream-card"
                : index % 3 === 1
                ? "bg-peach/15"
                : "bg-coffee text-cream";

            const isDark = index % 3 === 2;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`rounded-3xl p-8 sm:p-12 lg:p-16 border ${
                  isDark
                    ? "border-cream/15 text-cream"
                    : "border-coffee/15 text-coffee"
                } ${bgClass} relative overflow-hidden transition-all duration-300`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Column (Cols 1-7) */}
                  <div
                    className={`space-y-6 ${
                      isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-display font-bold text-xl sm:text-2xl ${
                          isDark ? "text-peach" : "text-terracotta"
                        }`}
                      >
                        {service.number} {"//"} CAPABILITY
                      </span>
                      <SunburstRays
                        size={22}
                        color={isDark ? "#E8B79A" : "#C46F39"}
                      />
                    </div>

                    <h2
                      className={`font-display font-bold text-3xl sm:text-5xl tracking-tight ${
                        isDark ? "text-cream" : "text-coffee"
                      }`}
                    >
                      {service.title}
                    </h2>

                    <p
                      className={`text-xl sm:text-2xl font-serif italic ${
                        isDark ? "text-peach" : "text-terracotta"
                      }`}
                    >
                      &ldquo;{service.positioning}&rdquo;
                    </p>

                    <p
                      className={`text-base sm:text-lg leading-relaxed font-sans ${
                        isDark ? "text-cream/80" : "text-coffee/80"
                      }`}
                    >
                      {service.fullDescription}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-4 space-y-3">
                      <span
                        className={`text-xs uppercase tracking-widest font-bold block ${
                          isDark ? "text-cream/60" : "text-coffee/60"
                        }`}
                      >
                        What We Deliver:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2 text-sm font-medium"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                isDark ? "text-peach" : "text-terracotta"
                              }`}
                            />
                            <span
                              className={isDark ? "text-cream/90" : "text-coffee/90"}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <MagneticButton
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant={isDark ? "secondary" : "primary"}
                        size="md"
                        withArrow
                      >
                        {service.ctaText}
                      </MagneticButton>
                    </div>
                  </div>

                  {/* Contextual Visual (Cols 8-12) */}
                  <div
                    className={`${
                      isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
                    }`}
                  >
                    <div
                      className={`relative aspect-[4/3] rounded-2xl overflow-hidden border p-6 flex flex-col justify-between ${
                        isDark
                          ? "bg-coffee-dark border-cream/10"
                          : "bg-cream border-coffee/15 shadow-md"
                      }`}
                    >
                      {/* Top mockup header */}
                      <div className="flex items-center justify-between border-b pb-4 border-current/10">
                        <span className="font-display font-bold text-xs uppercase tracking-widest opacity-60">
                          SPEC // {service.id}
                        </span>
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-terracotta" />
                          <span className="w-2.5 h-2.5 rounded-full bg-peach" />
                          <span className="w-2.5 h-2.5 rounded-full bg-coffee/40" />
                        </div>
                      </div>

                      {/* Visual Centerpiece representation */}
                      <div className="py-8 text-center space-y-3">
                        <span className="font-display font-extrabold text-6xl lg:text-7xl opacity-20 block">
                          {service.number}
                        </span>
                        <p className="font-serif italic text-xl sm:text-2xl font-normal">
                          {service.positioning}
                        </p>
                      </div>

                      {/* Bottom status */}
                      <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs opacity-75 font-mono">
                        <span>STATUS: ACTIVE SPRINT</span>
                        <span>NEXT.JS ARCHITECTURE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: HOW WE WORK (Numbered progress layout) */}
      <section className="w-full bg-cream-card py-20 sm:py-28 border-t border-coffee/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
              ✦ Engagement Flow
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-coffee tracking-tight">
              How we turn chaos into clarity.
            </h2>
            <p className="text-coffee/75 text-base sm:text-lg font-sans">
              From our first discovery call to ongoing release cycles, here is
              exactly how we partner with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOW_WE_WORK_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="bg-cream rounded-2xl p-6 border border-coffee/10 hover:border-terracotta/40 transition-colors flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <span className="font-display font-black text-3xl text-terracotta block">
                    {item.step}
                  </span>
                  <h3 className="font-display font-bold text-lg text-coffee">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-coffee/80 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-coffee/10 text-[11px] uppercase tracking-wider text-coffee/50 font-semibold">
                  Step 0{idx + 1} of 05
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQS ACCORDION */}
      <section className="w-full bg-cream py-20 sm:py-28 border-t border-coffee/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
              ✦ Clarity &amp; Transparency
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-coffee tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-coffee/75 text-base sm:text-lg font-sans">
              Clear answers to how we work, who we work with, and what to expect.
            </p>
          </div>

          <FaqAccordion items={siteConfig.faqs} />
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="w-full bg-coffee text-cream py-20 sm:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="font-display font-bold text-4xl sm:text-6xl text-cream tracking-tight">
            One good conversation <br />
            <span className="font-serif italic font-normal text-peach">
              could change everything.
            </span>
          </h2>
          <p className="text-cream/80 text-lg sm:text-xl max-w-xl mx-auto font-sans leading-relaxed">
            Tell us where you are, where you want to be, and what&apos;s standing
            in the way.
          </p>
          <div className="pt-4 flex justify-center">
            <MagneticButton
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
              className="text-lg px-10 py-5"
            >
              Let&apos;s Build Something
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
