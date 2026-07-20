import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { PackageReviewCard } from "@/components/sections/PackageReviewCard";
import { HERO_BADGE, HERO_HEADLINE, HERO_SUBLINE, HERO_MICROTRUST } from "@/lib/constants";

export function Hero() {
  return (
    <section className="scroll-mt-16 grid grid-cols-1 lg:grid-cols-[55%_45%]">
      <div className="bg-blueprint-grid relative overflow-hidden bg-navy-900 px-6 py-16 sm:px-10 lg:py-24">
        <div className="relative mx-auto max-w-xl">
          <span className="inline-flex items-center rounded-full bg-coral-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
            {HERO_BADGE}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            {HERO_HEADLINE}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-100">
            {HERO_SUBLINE}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <UploadCtaButton className="justify-center">Submit a package</UploadCtaButton>
            <Button href="/china-trip" variant="outline-light" className="justify-center">
              What should we inspect for you? →
            </Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-navy-200">
            <Check className="h-4 w-4 shrink-0 text-coral-400" aria-hidden="true" />
            {HERO_MICROTRUST}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-slate-50 px-6 py-16 sm:px-10">
        <PackageReviewCard />
      </div>
    </section>
  );
}
