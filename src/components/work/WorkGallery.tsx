"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/config/site";

interface WorkGalleryProps {
  projects: Project[];
}

const CATEGORIES = [
  "All",
  "Websites",
  "Software",
  "Branding",
  "Marketing",
  "Automation",
] as const;

type Category = (typeof CATEGORIES)[number];

export function WorkGallery({ projects }: WorkGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                isActive
                  ? "text-cream bg-coffee font-semibold shadow-sm"
                  : "text-coffee/80 bg-cream-card hover:bg-peach/30 hover:text-coffee border border-coffee/10"
              }`}
            >
              <span>{cat}</span>
              {isActive && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-coffee rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Grid with layout animation */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            // Span 12 for the very first project if viewing "All", else span 6
            const isFullWidth = activeCategory === "All" && index === 0;
            const colSpan = isFullWidth ? "lg:col-span-12" : "lg:col-span-6";

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={colSpan}
              >
                <div className="group block relative rounded-3xl overflow-hidden border border-coffee/15 bg-cream transition-all duration-500 hover:shadow-2xl h-full flex flex-col justify-between">
                  {/* Artwork Container */}
                  <Link
                    href={`/work/${project.slug}`}
                    className={`relative w-full overflow-hidden bg-cream-card block ${
                      isFullWidth ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[16/11]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Tag badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.liveUrl ? (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-coffee text-cream shadow-sm flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Live Client Work</span>
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cream/95 text-coffee shadow-sm border border-coffee/10">
                          Concept Monograph
                        </span>
                      )}
                    </div>

                    {/* View project floating badge on hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-coffee text-cream flex items-center justify-center shadow-lg border border-cream/20">
                        <ArrowUpRight className="w-5 h-5 text-terracotta" />
                      </div>
                    </div>
                  </Link>

                  {/* Metadata Row */}
                  <div className="p-8 sm:p-10 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="uppercase tracking-widest text-terracotta font-bold">
                          {project.categoryLabel}
                        </span>
                        <span className="text-coffee/60 font-medium">
                          {project.year}
                        </span>
                      </div>

                      <Link
                        href={`/work/${project.slug}`}
                        className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-coffee hover:text-terracotta transition-colors tracking-tight block"
                      >
                        {project.title}
                      </Link>

                      <p className="text-coffee/80 text-sm sm:text-base leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Action buttons bar */}
                    <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-coffee/10 mt-4">
                      <span className="text-xs text-coffee/60 font-medium">
                        {project.clientIndustry}
                      </span>

                      <div className="flex items-center gap-4">
                        <Link
                          href={`/work/${project.slug}`}
                          className="flex items-center gap-1.5 text-sm font-semibold text-coffee hover:text-terracotta transition-colors underline-offset-4 hover:underline"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-peach/40 text-coffee hover:bg-terracotta hover:text-cream transition-colors"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
