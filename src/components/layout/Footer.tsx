"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/common/BrandLogo";
import { MagneticButton } from "@/components/common/MagneticButton";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-coffee text-cream relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16 border-t border-coffee-dark">
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Big Callout */}
        <div className="pb-16 sm:pb-24 border-b border-cream/15 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-widest block">
              ✦ Ready for what comes next?
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight leading-[1.1]">
              Let&apos;s make something <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-peach">
                worth talking about.
              </span>
            </h2>
          </div>

          <div className="flex-shrink-0">
            <MagneticButton
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
              className="text-lg px-9 py-4"
            >
              Start a Project
            </MagneticButton>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo light size="lg" animated={false} />
            <p className="text-cream/70 text-base sm:text-lg max-w-sm font-sans leading-relaxed">
              We build bold brands, beautiful websites, and digital experiences
              that turn attention into action.
            </p>
            <div className="pt-2 space-y-2">
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-peach hover:text-cream font-medium transition-colors text-base"
                >
                  <span>{siteConfig.contact.email}</span>
                  <ArrowUpRight className="w-4 h-4 text-terracotta" />
                </a>
              </div>
              <div className="flex flex-col space-y-1 text-sm text-cream/75">
                {siteConfig.contact.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="hover:text-peach transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{phone.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links (Cols 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-semibold block">
              Explore
            </span>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 hover:text-cream hover:underline underline-offset-4 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (Cols 8-10) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-semibold block">
              Capabilities
            </span>
            <ul className="space-y-3">
              {siteConfig.services.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.slug}`}
                    className="text-cream/80 hover:text-cream text-sm transition-colors block line-clamp-1"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Channels (Cols 11-12) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-semibold block">
              Connect
            </span>
            <ul className="space-y-3 text-sm">
              {siteConfig.contact.instagramUrl && (
                <li>
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-cream inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
                  </a>
                </li>
              )}
              {siteConfig.contact.linkedinUrl && (
                <li>
                  <a
                    href={siteConfig.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-cream inline-flex items-center gap-1 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
                  </a>
                </li>
              )}
              {siteConfig.contact.whatsappNumber && (
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-cream inline-flex items-center gap-1 transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-terracotta" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Oversized low-opacity "oopswedidit." wordmark */}
        <div className="w-full select-none overflow-hidden py-4 sm:py-6 border-t border-cream/10 flex justify-center">
          <span className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[140px] text-cream/5 tracking-tighter leading-none whitespace-nowrap block text-center">
            oopswedidit.
          </span>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-cream transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-cream transition-colors underline-offset-2 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
