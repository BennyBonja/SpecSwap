import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { TURNAROUND_CLAIM } from "@/lib/constants";

export function UploadCta() {
  return (
    <section
      id="upload-cta"
      className="scroll-mt-16 relative overflow-hidden bg-navy-900 py-24"
    >
      <Image
        src="/images/cta-banner.png"
        alt="A finished modern office fitout"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/90 to-navy-900/70" />
      <Container className="relative text-center">
        <SectionHeading
          tone="dark"
          align="center"
          title="Ready to swap your spec for something smarter?"
          subtitle={`Upload your schedule and get a comparison quote within ${TURNAROUND_CLAIM}.`}
        />
        <div className="mt-8 flex justify-center">
          <UploadCtaButton />
        </div>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-navy-300">
          <BadgeCheck className="h-4 w-4 text-coral-400" aria-hidden="true" />
          No cost or obligation to get your comparison quote.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-xs text-navy-400">
          Upload only documents you&apos;re authorised to share. We treat
          project documents confidentially and only share relevant extracts
          with suppliers where needed for pricing and lead-time checks.
        </p>
      </Container>
    </section>
  );
}
