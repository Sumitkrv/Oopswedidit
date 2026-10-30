import { HomeHero } from "@/components/home/HomeHero";
import { BrandMarquee } from "@/components/common/BrandMarquee";
import { AgencyIntro } from "@/components/home/AgencyIntro";
import { HomeServicesPreview } from "@/components/home/HomeServicesPreview";
import { HomeSelectedWork } from "@/components/home/HomeSelectedWork";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeDifferentiator } from "@/components/home/HomeDifferentiator";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* SECTION 2: HERO */}
      <HomeHero />

      {/* SECTION 3: INFINITE CREATIVE MARQUEE */}
      <BrandMarquee />

      {/* SECTION 4: SHORT AGENCY INTRODUCTION */}
      <AgencyIntro />

      {/* SECTION 5: SERVICES PREVIEW */}
      <HomeServicesPreview />

      {/* SECTION 6: SELECTED WORK */}
      <HomeSelectedWork />

      {/* SECTION 7: OUR PROCESS */}
      <HomeProcess />

      {/* SECTION 8: DIFFERENTIATOR SECTION */}
      <HomeDifferentiator />

      {/* SECTION 9: FINAL CTA */}
      <HomeFinalCTA />
    </div>
  );
}
