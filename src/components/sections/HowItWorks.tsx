import { Upload, Search, PhoneCall, Ship, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

function UploadMockup() {
  return (
    <div className="flex h-24 w-full items-center gap-4 rounded-2xl border-2 border-dashed border-slate-300 bg-white px-5">
      <Upload className="h-7 w-7 shrink-0 text-coral-500" aria-hidden="true" />
      <div className="flex flex-wrap gap-1.5">
        <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">
          spec.pdf
        </span>
        <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">
          schedule.xlsx
        </span>
      </div>
    </div>
  );
}

function ReviewMockup() {
  return (
    <div className="flex h-24 w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5">
      <Search className="h-7 w-7 shrink-0 text-coral-500" aria-hidden="true" />
      <div className="w-full space-y-2">
        <div className="h-2 w-4/5 rounded-full bg-slate-200" />
        <div className="h-2 w-3/5 rounded-full bg-slate-200" />
        <div className="h-2 w-2/3 rounded-full bg-coral-200" />
      </div>
    </div>
  );
}

function CallMockup() {
  return (
    <div className="flex h-24 w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600">
        <PhoneCall className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="font-display text-base font-bold text-navy-900">
        Let&apos;s talk it through
      </p>
    </div>
  );
}

function ManageMockup() {
  const lines = ["Factory sourced", "QC passed", "Freight booked"];
  return (
    <div className="flex h-24 w-full flex-col justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5">
      {lines.map((line) => (
        <div key={line} className="flex items-center gap-2">
          <CheckCircle2
            className="h-4 w-4 shrink-0 text-coral-500"
            aria-hidden="true"
          />
          <span className="text-sm text-slate-600">{line}</span>
        </div>
      ))}
    </div>
  );
}

const STEP_MOCKUPS = [UploadMockup, ReviewMockup, CallMockup, ManageMockup];
const STEP_ICONS = [Upload, Search, PhoneCall, Ship];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From upload to delivery, one process"
          align="center"
        />
        <ol className="no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-2 scroll-pl-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 sm:scroll-pl-0 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Mockup = STEP_MOCKUPS[index]!;
            const Icon = STEP_ICONS[index]!;
            return (
              <li key={step.title} className="w-[78%] shrink-0 snap-center sm:w-auto sm:shrink">
                <Mockup />
                <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Icon className="h-3.5 w-3.5 text-coral-500" aria-hidden="true" />
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
