import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ComparisonExamples } from "@/components/sections/ComparisonExamples";
import { StartWithOnePackage } from "@/components/sections/StartWithOnePackage";
import { ChinaProgramme } from "@/components/sections/ChinaProgramme";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatWeManage } from "@/components/sections/WhatWeManage";
import { OnePointOfContact } from "@/components/sections/OnePointOfContact";
import { TeamCredibility } from "@/components/sections/TeamCredibility";
import { Founder } from "@/components/sections/Founder";
import { HowWeCharge } from "@/components/sections/HowWeCharge";
import { ResidentialStrip } from "@/components/sections/ResidentialStrip";
import { Faq } from "@/components/sections/Faq";
import { UploadCta } from "@/components/sections/UploadCta";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <TrustStrip />
      <ComparisonExamples />
      <StartWithOnePackage />
      <ChinaProgramme />
      <HowItWorks />
      <WhatWeManage />
      <OnePointOfContact />
      <TeamCredibility />
      <Founder />
      <HowWeCharge />
      <ResidentialStrip />
      <Faq />
      <UploadCta />
    </main>
  );
}
