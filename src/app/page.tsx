import { Hero } from "@/components/sections/Hero";
import { TaglineStrip } from "@/components/sections/TaglineStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatWeManage } from "@/components/sections/WhatWeManage";
import { InlineCta } from "@/components/sections/InlineCta";
import { OnePointOfContact } from "@/components/sections/OnePointOfContact";
import { PricingModel } from "@/components/sections/PricingModel";
import { ServiceTiers } from "@/components/sections/ServiceTiers";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { Faq } from "@/components/sections/Faq";
import { UploadCta } from "@/components/sections/UploadCta";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <TaglineStrip />
      <HowItWorks />
      <WhatWeManage />
      <InlineCta />
      <OnePointOfContact />
      <PricingModel />
      <ServiceTiers />
      <WhoItsFor />
      <Faq />
      <UploadCta />
    </main>
  );
}
