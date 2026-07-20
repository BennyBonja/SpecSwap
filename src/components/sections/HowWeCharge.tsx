import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  HOW_WE_CHARGE_TIERS,
  HOW_WE_CHARGE_FOOTNOTE_TITLE,
  HOW_WE_CHARGE_FOOTNOTE_FAQ,
} from "@/lib/constants";

export function HowWeCharge() {
  return (
    <section id="how-we-charge" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Clear fees. Transparent product costs."
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {HOW_WE_CHARGE_TIERS.map((tier) => (
            <Card key={tier.title} className="flex flex-col">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-white">
                {tier.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                {tier.title}
              </h3>
              <p className="mt-2 inline-flex w-fit items-baseline rounded-full bg-coral-50 px-3 py-1 font-display text-xl font-extrabold text-coral-600">
                {tier.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {tier.description}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-semibold text-navy-900">
          {HOW_WE_CHARGE_FOOTNOTE_TITLE}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
          {HOW_WE_CHARGE_FOOTNOTE_FAQ}
        </p>
      </Container>
    </section>
  );
}
