import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — SpecSwap",
  description: "How SpecSwap collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Legal
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              1. What we collect
            </h2>
            <p className="mt-2">
              When you upload a schedule for review or contact us, we collect
              the information you provide directly — including your name,
              company name, project details, contact details, and any
              schedules, drawings or documents you upload for review.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              2. How we use it
            </h2>
            <p className="mt-2">
              We use this information to review your FF&E schedule, prepare
              your comparison quote, communicate with you about your project,
              and — where you engage our full procurement service — to
              manage sourcing, ordering, delivery and handover on your
              behalf. We don&apos;t sell your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              3. Sharing with suppliers
            </h2>
            <p className="mt-2">
              To source alternatives and manage procurement, we may share
              relevant parts of your schedule with suppliers in our network.
              We only share what&apos;s needed to get you accurate pricing
              and lead times.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              4. Data security
            </h2>
            <p className="mt-2">
              We take reasonable steps to protect the information you share
              with us, including uploaded files, from misuse, loss and
              unauthorised access.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              5. Your rights
            </h2>
            <p className="mt-2">
              You can ask us what information we hold about you, request a
              correction, or ask us to delete it, subject to any records we
              need to keep for legal or accounting purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-navy-900">
              6. Contact us
            </h2>
            <p className="mt-2">
              If you have questions about this policy or how your
              information is handled, contact us at{" "}
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
