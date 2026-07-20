import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import {
  FINAL_CTA,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
} from "@/lib/constants";

export function UploadCta() {
  return (
    <section id="upload-cta" className="scroll-mt-16 bg-coral-500 py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          {FINAL_CTA.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          {FINAL_CTA.body}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <UploadCtaButton
            variant="secondary"
            className="justify-center border-white bg-white text-coral-600 hover:bg-coral-50"
          >
            Submit a package
          </UploadCtaButton>
          <Button href="/china-trip" variant="outline-light" className="justify-center">
            Claim an inspection slot
          </Button>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-white sm:flex-row sm:gap-6">
          <a href={`tel:${CONTACT_PHONE_TEL}`} className="flex items-center gap-2 hover:underline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CONTACT_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:underline">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-xs text-coral-50">
          Upload only documents you&apos;re authorised to share. We treat
          project documents confidentially and only share relevant extracts
          with suppliers where needed for pricing and lead-time checks.
        </p>
      </Container>
    </section>
  );
}
