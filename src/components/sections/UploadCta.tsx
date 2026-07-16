import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { TURNAROUND_CLAIM } from "@/lib/constants";

export function UploadCta() {
  return (
    <section
      id="upload-cta"
      className="scroll-mt-16 bg-coral-500 py-24"
    >
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          Ready to find out what&apos;s possible?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          Upload your project and we&apos;ll review it within {TURNAROUND_CLAIM}{" "}
          — before you ever pay for a discovery call.
        </p>
        <div className="mt-8 flex justify-center">
          <UploadCtaButton
            variant="secondary"
            className="border-white bg-white text-coral-600 hover:bg-coral-50"
          >
            Start a project
          </UploadCtaButton>
        </div>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white">
          <BadgeCheck className="h-4 w-4" aria-hidden="true" />
          No cost or obligation to have your project reviewed.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-xs text-coral-50">
          Upload only documents you&apos;re authorised to share. We treat
          project documents confidentially and only share relevant extracts
          with suppliers where needed for pricing and lead-time checks.
        </p>
      </Container>
    </section>
  );
}
