"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MagneticButton } from "@/components/common/MagneticButton";

export function HomeServicesPreview() {
  const [activeService, setActiveService] = useState<string>(siteConfig.services[0].id);

  return (
    <section className="w-full bg-cream py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-coffee/15">
          <div className="max-w-xl space-y-3">
            <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] block">
              ✦ Capabilities
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-coffee tracking-tight">
              Big ideas.{" "}
              <span className="font-serif italic font-normal text-terracotta">
                Beautiful
              </span>{" "}
              execution.
            </h2>
          </div>
          <p className="text-coffee/75 text-base sm:text-lg max-w-md font-sans">
            Everything your brand needs to look brilliant, work smarter, and grow
            further.
          </p>
        </div>

        {/* Editorial Service Directory (List View) */}
        <div className="divide-y divide-coffee/15">
          {siteConfig.services.map((service) => {
            const isHovered = activeService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className={`group transition-all duration-300 py-8 sm:py-12 ${
                  isHovered ? "bg-peach/15 px-4 sm:px-6 rounded-2xl" : "px-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Number & Title (Cols 1-7) */}
                  <div className="lg:col-span-7 flex items-baseline gap-4 sm:gap-6">
                    <span className="font-display font-bold text-lg sm:text-2xl text-terracotta/70 group-hover:text-terracotta transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <Link
                        href={`/services#${service.slug}`}
                        className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-coffee group-hover:text-terracotta transition-colors tracking-tight block"
                      >
                        {service.title}
                      </Link>
                      <p className="text-sm sm:text-base font-serif italic text-coffee/70 mt-1">
                        &ldquo;{service.positioning}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Description & Deliverables Pills (Cols 8-11) */}
                  <div className="lg:col-span-4 space-y-3">
                    <p className="text-sm sm:text-base text-coffee/80 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-cream-card text-coffee/80 border border-coffee/10"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow CTA Icon (Col 12) */}
                  <div className="lg:col-span-1 flex justify-end">
                    <Link
                      href={`/services#${service.slug}`}
                      className="w-12 h-12 rounded-full border border-coffee/20 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream flex items-center justify-center text-coffee transition-all duration-300"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-coffee/15 mt-8">
          <p className="text-coffee/70 text-base">
            Need a bespoke combination of services? We tailor every scope.
          </p>
          <MagneticButton href="/services" variant="coffee" size="md" withArrow>
            View All Services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
