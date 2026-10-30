import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service and engagement principles for oopswedidit studio.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-cream py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-coffee hover:text-terracotta transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
            Legal &amp; Terms
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-coffee tracking-tight">
            Terms of Service
          </h1>
          <p className="text-coffee/60 text-sm">
            Last updated: October 2026
          </p>
        </div>

        <div className="prose prose-coffee max-w-none space-y-8 text-coffee/85 font-sans leading-relaxed text-base sm:text-lg">
          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              1. Scope of Engagement
            </h2>
            <p>
              oopswedidit provides creative, branding, website design, software
              engineering, and workflow automation services. Detailed deliverable
              schedules, timelines, and payment terms are formally governed by
              individual client Statements of Work (SOW) executed prior to project kickoff.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              2. Intellectual Property Rights
            </h2>
            <p>
              Upon receipt of final payment in full, all agreed-upon bespoke deliverables
              (including source designs, branding assets, and custom code) become the
              property of the client, subject to the retention of studio portfolio display
              rights unless an explicit NDA or white-label agreement is executed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              3. Concept Projects Notice
            </h2>
            <p>
              Items specifically designated on this website as &ldquo;Concept Projects&rdquo;
              represent studio design explorations and research monographs created by
              oopswedidit to demonstrate capabilities, and do not constitute endorsements
              or paid commercial partnerships unless expressly specified.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              4. Warranties &amp; Support
            </h2>
            <p>
              Custom web and software projects include post-launch warranty support
              to verify functionality across target viewports and modern browser versions.
              Ongoing enhancements, content management, or infrastructure scaling are
              supported via active retainer agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              5. Inquiries
            </h2>
            <p>
              For legal questions regarding our terms, please contact{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-terracotta underline font-medium"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

