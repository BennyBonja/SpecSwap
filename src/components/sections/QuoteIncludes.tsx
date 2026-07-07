import { Check, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QUOTE_INCLUDES_ITEMS } from "@/lib/constants";

function QuoteDocumentMockup() {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between bg-navy-900 px-6 py-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-navy-300">
          <FileText className="h-4 w-4 text-coral-400" aria-hidden="true" />
          Sample quote
        </div>
        <span className="rounded-full bg-coral-500 px-2.5 py-1 text-xs font-semibold text-white">
          Ready
        </span>
      </div>
      <ul className="divide-y divide-slate-100">
        {QUOTE_INCLUDES_ITEMS.map((item) => (
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
        Reviewed by our team before it reaches you.
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
            eyebrow="What your quote includes"
            title="Everything you need to make the call"
            subtitle="No black boxes — every comparison quote is laid out the same way, so you can compare on the details that matter."
          />
        </div>
        <QuoteDocumentMockup />
      </Container>
    </section>
  );
}
