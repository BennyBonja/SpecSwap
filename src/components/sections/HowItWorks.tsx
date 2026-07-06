import { Upload, Check, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

function UploadMockup() {
  return (
    <div className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-white">
      <Upload className="h-5 w-5 text-coral-500" aria-hidden="true" />
      <div className="flex gap-1.5">
        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-500">
          spec.pdf
        </span>
        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-500">
          schedule.xlsx
        </span>
      </div>
    </div>
  );
}

function MatchMockup() {
  return (
    <div className="flex h-24 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
      <div className="h-14 w-10 rounded-md bg-slate-200" />
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
      </span>
      <div className="h-14 w-10 rounded-md bg-coral-200" />
    </div>
  );
}

function QuoteMockup() {
  return (
    <div className="h-24 rounded-xl border border-slate-200 bg-white p-3">
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
          Your quote
        </span>
        <span className="rounded-full bg-coral-50 px-1.5 py-0.5 text-[9px] font-semibold text-coral-600">
          Ready
        </span>
      </div>
      <p className="mt-1.5 font-display text-xl font-bold text-navy-900">
        $18,420
      </p>
      <p className="text-[9px] text-slate-500">potential saving</p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-3/4 rounded-full bg-coral-500" />
      </div>
    </div>
  );
}

function ApproveMockup() {
  const lines = ["Order placed", "Delivery scheduled", "Handover ready"];
  return (
    <div className="h-24 rounded-xl border border-slate-200 bg-white p-3">
      <div className="space-y-2">
        {lines.map((line) => (
          <div key={line} className="flex items-center gap-1.5">
            <CheckCircle2
              className="h-3.5 w-3.5 shrink-0 text-coral-500"
              aria-hidden="true"
            />
            <span className="text-[10px] text-slate-600">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const STEP_MOCKUPS = [UploadMockup, MatchMockup, QuoteMockup, ApproveMockup];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From upload to handover, one process"
          align="center"
        />
        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Mockup = STEP_MOCKUPS[index]!;
            return (
              <li key={step.title}>
                <Mockup />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
