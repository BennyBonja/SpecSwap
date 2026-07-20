import {
  ShieldCheck,
  Lock,
  ListChecks,
  FileCheck2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TRUST_POINTS } from "@/lib/constants";

const POINT_ICONS: Record<string, LucideIcon> = {
  "Factory assessment & QC": ShieldCheck,
  "Staged-payment protection": Lock,
  "Compliance discipline": ListChecks,
  "Warranties & after-sales": FileCheck2,
};

export function TeamCredibility() {
  return (
    <section id="team-credibility" className="scroll-mt-16 bg-slate-50 py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Trust & process"
          title="Built by people who go and check, not just promise"
        />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {TRUST_POINTS.map((point) => {
            const Icon = POINT_ICONS[point.title] ?? ShieldCheck;
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-50 text-coral-600">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
