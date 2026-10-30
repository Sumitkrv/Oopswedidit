import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MagneticButton } from "@/components/common/MagneticButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = siteConfig.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = siteConfig.projects[projectIndex];
  const nextProject =
    siteConfig.projects[(projectIndex + 1) % siteConfig.projects.length];

  return (
    <article className="w-full bg-cream min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="w-full bg-cream-card/60 border-b border-coffee/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-coffee hover:text-terracotta transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </Link>

          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-coffee font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Client Project // {project.year}</span>
              </span>
            ) : (
              <span className="text-xs uppercase tracking-widest text-coffee/70 font-semibold">
                Concept Monograph // {project.year}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Project Hero Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-peach/40 border border-coffee/15 text-coffee text-xs font-semibold uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          {project.liveUrl ? (
            <span className="px-3.5 py-1.5 rounded-full bg-coffee text-cream text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Live in Production</span>
            </span>
          ) : (
            <span className="px-3.5 py-1.5 rounded-full bg-cream-card border border-coffee/15 text-coffee/80 text-xs font-semibold uppercase tracking-wider">
              Concept Project
            </span>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-coffee tracking-tight">
              {project.title}
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl text-terracotta leading-relaxed">
              &ldquo;{project.tagline}&rdquo;
            </p>
          </div>

          {project.liveUrl && (
            <div className="flex-shrink-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-terracotta hover:bg-coffee text-cream font-display font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Launch Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Large Featured Project Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-coffee/15 bg-coffee">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Overview & Deliverables Spec Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Story & Strategy (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-coffee">
                Overview &amp; Purpose
              </h2>
              <p className="text-lg text-coffee/80 leading-relaxed font-sans">
                {project.summary}
              </p>
            </div>

            {/* The Challenge */}
            <div className="space-y-4 p-8 rounded-2xl bg-cream-card border border-coffee/10">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
                01 // The Problem
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-coffee">
                The Challenge
              </h3>
              <p className="text-base sm:text-lg text-coffee/80 leading-relaxed font-sans">
                {project.challenge}
              </p>
            </div>

            {/* The Approach */}
            <div className="space-y-4 p-8 rounded-2xl bg-cream-card border border-coffee/10">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
                02 // Strategic Architecture
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-coffee">
                Our Creative Approach
              </h3>
              <p className="text-base sm:text-lg text-coffee/80 leading-relaxed font-sans">
                {project.approach}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4 p-8 rounded-2xl bg-coffee text-cream border border-coffee-dark">
              <span className="text-xs uppercase tracking-widest text-peach font-bold block">
                03 // Execution &amp; Craft
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-cream">
                The Final Solution
              </h3>
              <p className="text-base sm:text-lg text-cream/80 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Sidebar Spec Column (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-cream-card rounded-2xl p-8 border border-coffee/15 space-y-6 sticky top-28">
              <h3 className="font-display font-bold text-xl text-coffee border-b pb-4 border-coffee/10">
                Project Specs
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-coffee/50 block font-semibold">
                    Category
                  </span>
                  <span className="font-medium text-coffee text-base">
                    {project.categoryLabel}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-coffee/50 block font-semibold">
                    Industry Sector
                  </span>
                  <span className="font-medium text-coffee text-base">
                    {project.clientIndustry}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-coffee/50 block font-semibold">
                    Year Designed
                  </span>
                  <span className="font-medium text-coffee text-base">
                    {project.year}
                  </span>
                </div>

                {project.liveUrl && (
                  <div>
                    <span className="text-xs uppercase tracking-wider text-coffee/50 block font-semibold">
                      Live Destination
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-terracotta hover:underline break-all inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>{project.liveUrl.replace("https://", "")}</span>
                      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    </a>
                  </div>
                )}

                <div>
                  <span className="text-xs uppercase tracking-wider text-coffee/50 block font-semibold">
                    Deliverables &amp; Scope
                  </span>
                  <ul className="mt-2 space-y-2">
                    {project.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-coffee/85">
                        <CheckCircle2 className="w-4 h-4 text-terracotta flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-coffee/10 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-terracotta hover:bg-coffee text-cream font-display font-bold text-sm shadow-md transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <MagneticButton
                  href={`/contact?service=${encodeURIComponent(project.categoryLabel)}`}
                  variant="outline"
                  size="md"
                  withArrow
                  className="w-full justify-center"
                >
                  Request Similar Project
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Gallery Exploration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32 border-t border-coffee/10 pt-16 sm:pt-24 space-y-12">
        <div className="space-y-2">
          <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] block">
            ✦ Visual System Exploration
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-coffee">
            Design details &amp; monographs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.galleryImages.map((gallery, gIdx) => (
            <div
              key={gIdx}
              className="bg-cream-card rounded-2xl p-6 border border-coffee/10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs text-terracotta font-bold">
                  FIG. 0{gIdx + 1}
                </span>
                <h4 className="font-display font-bold text-lg text-coffee">
                  {gallery.title}
                </h4>
                <p className="text-xs sm:text-sm text-coffee/80 leading-relaxed font-sans">
                  {gallery.caption}
                </p>
              </div>
              <div className="pt-3 border-t border-coffee/10 text-xs text-coffee/50 font-mono">
                oopswedidit archive // specimen {gIdx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="w-full bg-coffee text-cream py-16 sm:py-24 border-t border-coffee-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-peach font-bold block">
              Up Next In Archive
            </span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-cream">
              {nextProject.title}
            </h3>
            <p className="text-cream/70 text-sm max-w-md">
              {nextProject.tagline}
            </p>
          </div>

          <MagneticButton
            href={`/work/${nextProject.slug}`}
            variant="secondary"
            size="lg"
            withArrow
          >
            View Next Case Study
          </MagneticButton>
        </div>
      </section>
    </article>
  );
}
