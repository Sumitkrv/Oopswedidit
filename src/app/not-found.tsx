import { SunburstRays } from "@/components/common/SunburstRays";
import { MagneticButton } from "@/components/common/MagneticButton";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] bg-cream flex items-center justify-center py-20 px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2">
          <span className="text-terracotta font-display font-semibold text-xs uppercase tracking-[0.25em]">
            ✦ 404 // Lost in Transit
          </span>
          <SunburstRays size={24} color="#C46F39" />
        </div>

        <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-coffee tracking-tight">
          Oops. <br />
          <span className="font-serif italic font-normal text-terracotta">
            We didn&apos;t make this page.
          </span>
        </h1>

        <p className="text-coffee/80 text-base font-sans leading-relaxed">
          The link you followed might be broken or the page may have moved to a
          new location.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <MagneticButton href="/" variant="primary" size="md" withArrow>
            Return to Homepage
          </MagneticButton>
          <MagneticButton href="/work" variant="outline" size="md">
            View Our Work
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
