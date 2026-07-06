import { Plus } from "lucide-react";

export function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-slate-200 py-4 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-navy-900">
        <span>{question}</span>
        <Plus
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-coral-500 transition-transform group-open:rotate-45"
        />
      </summary>
      <p className="mt-3 leading-relaxed text-slate-600">{answer}</p>
    </details>
  );
}
