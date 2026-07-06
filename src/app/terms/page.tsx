import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service — SpecSwap",
  description: "The terms that apply when you use SpecSwap.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Legal
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              1. Our service
            </h2>
            <p className="mt-2">
              SpecSwap reviews furniture, fixtures and equipment (FF&E)
              schedules and identifies better-value or faster-available
              alternatives. Depending on the service tier you choose, we may
              also manage sourcing, ordering, supplier coordination,
              delivery and handover on your behalf.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              2. No guaranteed savings
            </h2>
            <p className="mt-2">
              Savings, lead times and availability vary by item, category
              and market conditions at the time of quoting. Figures shown on
              this site are illustrative — your actual quote will reflect
              your specific schedule and is reviewed by our team before it
              reaches you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              3. Uploading your schedule
            </h2>
            <p className="mt-2">
              You&apos;re responsible for making sure you have the right to
              share any schedule, drawing or document you upload with us.
              Uploading a schedule for review doesn&apos;t obligate you to
              proceed with any recommendation or engage our full
              procurement service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              4. Fees
            </h2>
            <p className="mt-2">
              There&apos;s no cost to upload a schedule and receive a
              comparison quote. Fees apply only if you choose to proceed
              with report-only, order-on-behalf or full procurement
              services, as set out in your quote.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              5. Limitation of liability
            </h2>
            <p className="mt-2">
              We review every recommendation against design intent, quality
              and fit, but final decisions on any swap remain yours. To the
              extent permitted by law, SpecSwap isn&apos;t liable for
              indirect or consequential losses arising from your use of our
              service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              6. Changes to these terms
            </h2>
            <p className="mt-2">
              We may update these terms from time to time. Continued use of
              our service after changes are posted means you accept the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              7. Contact us
            </h2>
            <p className="mt-2">
              Questions about these terms? Contact us at{" "}
              <a
                href="mailto:hello@specswap.com.au"
                className="font-medium text-coral-600 hover:underline"
              >
                hello@specswap.com.au
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
