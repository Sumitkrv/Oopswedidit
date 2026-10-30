"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionReveal } from "@/components/common/SectionReveal";
import { MagneticButton } from "@/components/common/MagneticButton";

export function HomeSelectedWork() {
  const featuredProjects = siteConfig.projects.slice(0, 3);

  return (
    <section className="w-full bg-cream-card py-20 sm:py-28 lg:py-36 relative overflow-hidden border-t border-coffee/10">
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] block">
              ✦ Selected Live Client Work
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-coffee tracking-tight">
              Made with intention. <br />
              <span className="font-serif italic font-normal text-terracotta">
                Remembered
              </span>{" "}
              for impact.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <MagneticButton href="/work" variant="coffee" size="md" withArrow>
              Explore All 12 Projects
            </MagneticButton>
          </div>
        </div>

        {/* Alternating Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Project 1 (Large Full-Width Feature: Cols 1-12) */}
          {featuredProjects[0] && (
            <div className="lg:col-span-12">
              <SectionReveal direction="up">
                <div className="group block relative rounded-3xl overflow-hidden border border-coffee/15 bg-cream transition-all duration-500 hover:shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    {/* Visual Art (Cols 1-7) */}
                    <Link
                      href={`/work/${featuredProjects[0].slug}`}
                      className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-coffee block"
                    >
                      <Image
                        src={featuredProjects[0].image}
                        alt={featuredProjects[0].title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {featuredProjects[0].liveUrl ? (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-coffee text-cream shadow-sm flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Live Client Project</span>
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cream text-coffee shadow-sm">
                            Concept Project
                          </span>
                        )}
                      </div>
                    </Link>

                    {/* Metadata (Cols 8-12) */}
                    <div className="lg:col-span-5 p-8 sm:p-12 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest text-terracotta font-bold">
                          {featuredProjects[0].categoryLabel}
                        </span>
                        <span className="text-xs text-coffee/60">
                          {featuredProjects[0].year}
                        </span>
                      </div>

                      <Link
                        href={`/work/${featuredProjects[0].slug}`}
                        className="font-display font-bold text-3xl sm:text-4xl text-coffee hover:text-terracotta transition-colors tracking-tight block"
                      >
                        {featuredProjects[0].title}
                      </Link>

                      <p className="text-coffee/80 text-base leading-relaxed">
                        {featuredProjects[0].tagline}
                      </p>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Link
                          href={`/work/${featuredProjects[0].slug}`}
                          className="flex items-center gap-2 text-terracotta font-semibold text-sm hover:underline underline-offset-4"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>

                        {featuredProjects[0].liveUrl && (
                          <a
                            href={featuredProjects[0].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-peach/40 hover:bg-terracotta hover:text-cream text-coffee transition-colors"
                          >
                            <span>Visit Live Site</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          )}

          {/* Project 2 (Cols 1-6) */}
          {featuredProjects[1] && (
            <div className="lg:col-span-6">
              <SectionReveal direction="up" delay={0.1}>
                <div className="group block relative rounded-3xl overflow-hidden border border-coffee/15 bg-cream transition-all duration-500 hover:shadow-2xl h-full flex flex-col justify-between">
                  <Link
                    href={`/work/${featuredProjects[1].slug}`}
                    className="relative aspect-[16/11] overflow-hidden bg-cream-card block"
                  >
                    <Image
                      src={featuredProjects[1].image}
                      alt={featuredProjects[1].title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-coffee text-cream shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Client Project</span>
                      </span>
                    </div>
                  </Link>

                  <div className="p-8 space-y-4">
                    <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
                      {featuredProjects[1].categoryLabel}
                    </span>
                    <Link
                      href={`/work/${featuredProjects[1].slug}`}
                      className="font-display font-bold text-2xl sm:text-3xl text-coffee hover:text-terracotta transition-colors tracking-tight block"
                    >
                      {featuredProjects[1].title}
                    </Link>
                    <p className="text-coffee/80 text-sm leading-relaxed">
                      {featuredProjects[1].tagline}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        href={`/work/${featuredProjects[1].slug}`}
                        className="flex items-center gap-2 text-terracotta font-semibold text-sm hover:underline"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      {featuredProjects[1].liveUrl && (
                        <a
                          href={featuredProjects[1].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-peach/40 hover:bg-terracotta hover:text-cream text-coffee transition-colors"
                        >
                          <span>Visit Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          )}

          {/* Project 3 (Cols 7-12) */}
          {featuredProjects[2] && (
            <div className="lg:col-span-6">
              <SectionReveal direction="up" delay={0.2}>
                <div className="group block relative rounded-3xl overflow-hidden border border-coffee/15 bg-cream transition-all duration-500 hover:shadow-2xl h-full flex flex-col justify-between">
                  <Link
                    href={`/work/${featuredProjects[2].slug}`}
                    className="relative aspect-[16/11] overflow-hidden bg-cream-card block"
                  >
                    <Image
                      src={featuredProjects[2].image}
                      alt={featuredProjects[2].title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-coffee text-cream shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Client Project</span>
                      </span>
                    </div>
                  </Link>

                  <div className="p-8 space-y-4">
                    <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
                      {featuredProjects[2].categoryLabel}
                    </span>
                    <Link
                      href={`/work/${featuredProjects[2].slug}`}
                      className="font-display font-bold text-2xl sm:text-3xl text-coffee hover:text-terracotta transition-colors tracking-tight block"
                    >
                      {featuredProjects[2].title}
                    </Link>
                    <p className="text-coffee/80 text-sm leading-relaxed">
                      {featuredProjects[2].tagline}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        href={`/work/${featuredProjects[2].slug}`}
                        className="flex items-center gap-2 text-terracotta font-semibold text-sm hover:underline"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      {featuredProjects[2].liveUrl && (
                        <a
                          href={featuredProjects[2].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-peach/40 hover:bg-terracotta hover:text-cream text-coffee transition-colors"
                        >
                          <span>Visit Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
