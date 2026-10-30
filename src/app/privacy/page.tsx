import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data handling practices of oopswedidit studio.",
};

export default function PrivacyPage() {
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
            Legal &amp; Transparency
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-coffee tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-coffee/60 text-sm">
            Last updated: October 2026
          </p>
        </div>

        <div className="prose prose-coffee max-w-none space-y-8 text-coffee/85 font-sans leading-relaxed text-base sm:text-lg">
          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry through our contact form or contact us via
              email or messaging channels, we collect the details you voluntarily
              provide. This typically includes your name, work email address, company
              name, project budget, and project requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              2. How We Use Your Information
            </h2>
            <p>
              We use this information exclusively to communicate with you about your
              project inquiry, prepare discovery proposals, and deliver creative
              services. We never sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              3. Data Storage &amp; Security
            </h2>
            <p>
              Inquiries submitted through our forms are securely processed and retained
              only as long as necessary to facilitate ongoing business communication. We
              employ industry-standard transport layer encryption (TLS/SSL) to protect
              data in transit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              4. Cookies &amp; Tracking
            </h2>
            <p>
              This website uses minimal essential telemetry and respects user privacy.
              We do not deploy intrusive third-party tracking pixels or behavioral
              advertising trackers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display font-bold text-2xl text-coffee">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding your data or wish to request data
              deletion, please reach out to us at{" "}
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

