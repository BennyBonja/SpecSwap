import { Container } from "@/components/ui/Container";
import { RESIDENTIAL_STRIP } from "@/lib/constants";

export function ResidentialStrip() {
  return (
    <section id="residential" className="scroll-mt-16 border-y border-slate-200 bg-white py-12">
      <Container className="max-w-2xl text-center">
        <h3 className="font-display text-xl font-bold text-navy-900">
          {RESIDENTIAL_STRIP.heading}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {RESIDENTIAL_STRIP.body}
        </p>
        <a
          href="#start-with-one-package"
          className="mt-4 inline-block text-sm font-semibold text-coral-600 hover:underline"
        >
          {RESIDENTIAL_STRIP.linkLabel}
        </a>
      </Container>
    </section>
  );
}
