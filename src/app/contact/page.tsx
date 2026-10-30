import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Mail, MessageSquare, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { SunburstRays } from "@/components/common/SunburstRays";
import { HandUnderline } from "@/components/common/HandUnderline";

export const metadata: Metadata = {
  title: "Contact & Start a Project",
  description:
    "Get in touch with oopswedidit studio. Start a project inquiry, request a discovery consultation, or say hello.",
};

function FormFallback() {
  return (
    <div className="bg-cream-card rounded-3xl p-12 border border-coffee/15 text-center text-coffee/60">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-coffee/10 rounded w-1/3 mx-auto" />
        <div className="h-12 bg-coffee/10 rounded" />
        <div className="h-12 bg-coffee/10 rounded" />
        <div className="h-28 bg-coffee/10 rounded" />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col bg-cream min-h-screen">
      {/* SECTION 1: CONTACT HERO */}
      <section className="w-full py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
                ✦ Studio Inquiries
              </span>
              <SunburstRays size={24} color="#C46F39" />
            </div>

            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-coffee tracking-tight leading-[1.08]">
                Every great thing <br />
                <span className="font-serif italic font-normal text-terracotta">
                  starts with a hello.
                </span>
              </h1>
              <div className="w-56">
                <HandUnderline color="#C46F39" height={14} />
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-coffee/80 font-sans leading-relaxed pt-2">
              Tell us the big idea, the tiny detail, or the problem keeping you
              up at night. We&apos;re all ears.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: FORM & ALTERNATIVE CONTACT CHANNELS */}
      <section className="w-full pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Interactive Form (Cols 1-7) wrapped in Suspense */}
            <div className="lg:col-span-7">
              <Suspense fallback={<FormFallback />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right: Alternative Channels & Studio Info (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct channels card */}
              <div className="bg-cream-card rounded-3xl p-8 border border-coffee/15 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
                    Direct Channels
                  </span>
                  <h3 className="font-display font-bold text-2xl text-coffee">
                    Alternative ways to connect
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Direct Phone Numbers */}
                  {siteConfig.contact.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-cream border border-coffee/10 hover:border-terracotta transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-peach/40 text-coffee group-hover:bg-terracotta group-hover:text-cream flex items-center justify-center transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-coffee/50 block font-semibold">
                          Call Us Directly
                        </span>
                        <span className="text-coffee font-medium text-sm sm:text-base">
                          {phone.display}
                        </span>
                      </div>
                    </a>
                  ))}

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-cream border border-coffee/10 hover:border-terracotta transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-peach/40 text-coffee group-hover:bg-terracotta group-hover:text-cream flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-coffee/50 block font-semibold">
                        Email Us Directly
                      </span>
                      <span className="text-coffee font-medium text-sm sm:text-base">
                        {siteConfig.contact.email}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  {siteConfig.contact.whatsappNumber && (
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-cream border border-coffee/10 hover:border-terracotta transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-peach/40 text-coffee group-hover:bg-terracotta group-hover:text-cream flex items-center justify-center transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-coffee/50 block font-semibold">
                          Quick Chat // WhatsApp
                        </span>
                        <span className="text-coffee font-medium text-sm sm:text-base">
                          +91 92679 70341
                        </span>
                      </div>
                    </a>
                  )}

                  {/* Socials */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {siteConfig.contact.instagramUrl && (
                      <a
                        href={siteConfig.contact.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-cream border border-coffee/10 hover:border-terracotta text-coffee text-xs font-semibold transition-colors"
                      >
                        <svg className="w-4 h-4 text-terracotta fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                        <span>Instagram</span>
                      </a>
                    )}
                    {siteConfig.contact.linkedinUrl && (
                      <a
                        href={siteConfig.contact.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-cream border border-coffee/10 hover:border-terracotta text-coffee text-xs font-semibold transition-colors"
                      >
                        <svg className="w-4 h-4 text-terracotta fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect width="4" height="12" x="2" y="9"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Response Commitment */}
                <div className="pt-4 border-t border-coffee/10 flex items-start gap-3 text-xs text-coffee/70">
                  <Clock className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.responseCommitment}</span>
                </div>
              </div>

              {/* Studio Location / Atmosphere visual card */}
              <div className="bg-coffee text-cream rounded-3xl p-8 border border-coffee-dark space-y-6 relative overflow-hidden">
                <div className="relative aspect-square w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden">
                  <Image
                    src="/brand/contact-art.svg"
                    alt="oopswedidit studio coffee hospitality artwork"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2 text-center">
                  <span className="text-xs uppercase tracking-widest text-peach font-bold block">
                    Global Remote Collaboration
                  </span>
                  <h4 className="font-display font-bold text-2xl text-cream">
                    No time zone too far.
                  </h4>
                  <p className="text-cream/75 text-sm leading-relaxed font-sans">
                    We collaborate with ambitious teams across the Americas,
                    Europe, and Asia Pacific via organized async pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PERSONALIZED CTA */}
      <section className="w-full bg-cream-card py-20 sm:py-28 border-t border-coffee/10 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-terracotta font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
              ✦ Tomorrow Starts Today
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-coffee tracking-tight">
            The next big thing? <br />
            <span className="font-serif italic font-normal text-terracotta">
              Could be ours.
            </span>
          </h2>
          <p className="text-coffee/75 text-base sm:text-lg font-sans max-w-lg mx-auto">
            Bring your vision, your doubts, and your ambitions. We&apos;ll bring
            the coffee and the craftsmanship.
          </p>
        </div>
      </section>
    </div>
  );
}
