import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STRATEGY_SESSION_INCLUDES } from "@/lib/constants";

function SessionDocumentMockup() {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between bg-navy-900 px-6 py-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-navy-300">
          <Sparkles className="h-4 w-4 text-coral-400" aria-hidden="true" />
          Sourcing Strategy Session — $499
        </div>
        <span className="rounded-full bg-coral-500 px-2.5 py-1 text-xs font-semibold text-white">
          Credited
        </span>
      </div>
      <ul className="divide-y divide-slate-100">
        {STRATEGY_SESSION_INCLUDES.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 px-6 py-2.5 text-sm text-navy-900"
          >
            <span
              aria-hidden="true"
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600"
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
      <p className="border-t border-slate-200 bg-slate-50 px-6 py-3 text-xs text-slate-500">
        Free discovery call happens first — this is the paid deep-dive.
      </p>
    </div>
  );
}

export function QuoteIncludes() {
  return (
    <section id="quote-includes" className="scroll-mt-16 bg-slate-50 py-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="What's in your strategy session"
            title="We plan your DIY journey — then you decide"
            subtitle="Most clients start here to see exactly what sourcing from China direct would take. No black boxes — every session covers the same ground."
          />
        </div>
        <SessionDocumentMockup />
      </Container>
    </section>
  );
}
