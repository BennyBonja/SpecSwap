import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ComparisonExamples } from "@/components/sections/ComparisonExamples";
import { WhatWeManage } from "@/components/sections/WhatWeManage";
import { InlineCta } from "@/components/sections/InlineCta";
import { OnePointOfContact } from "@/components/sections/OnePointOfContact";
import { TeamCredibility } from "@/components/sections/TeamCredibility";
import { PricingModel } from "@/components/sections/PricingModel";
import { QuoteIncludes } from "@/components/sections/QuoteIncludes";
import { ServiceTiers } from "@/components/sections/ServiceTiers";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { Faq } from "@/components/sections/Faq";
import { UploadCta } from "@/components/sections/UploadCta";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <HowItWorks />
      <ComparisonExamples />
      <WhatWeManage />
      <InlineCta />
      <OnePointOfContact />
      <TeamCredibility />
      <PricingModel />
      <QuoteIncludes />
      <ServiceTiers />
      <WhoItsFor />
      <Faq />
      <UploadCta />
    </main>
  );
}
