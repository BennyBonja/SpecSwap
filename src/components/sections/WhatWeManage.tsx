import { CheckCircle2, AlertTriangle, ShieldQuestion, Check, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Badge } from "@/components/ui/Badge";
import { WHAT_WE_SOURCE_GROUPS, WHAT_WE_SOURCE_CLOSING_LINE } from "@/lib/constants";

const TIER_ICONS: Record<string, LucideIcon> = {
  "Ready now — low compliance, strong value": CheckCircle2,
  "Select projects — reviewed before we commit": ShieldQuestion,
  "Not actively sold": AlertTriangle,
};

const TIER_TONES: Record<string, "coral" | "navy"> = {
  "Ready now — low compliance, strong value": "coral",
  "Select projects — reviewed before we commit": "navy",
  "Not actively sold": "navy",
};

export function WhatWeManage() {
  return (
    <section id="what-we-source" className="scroll-mt-16 bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="What we source"
          title="Where China-direct sourcing makes sense — and where it doesn't"
          subtitle="We stay disciplined about category risk. Low-compliance categories are our focus today; anything structural or fire-rated is reviewed individually, not blanket-offered."
        />
        <div className="no-scrollbar -mx-6 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 scroll-pl-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 sm:scroll-pl-0 lg:grid-cols-3">
          {WHAT_WE_SOURCE_GROUPS.map((group) => (
            <div
              key={group.tier}
              className="w-[80%] shrink-0 snap-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 sm:w-auto sm:shrink"
            >
              <div className="flex items-start justify-between">
                <IconBadge
                  icon={TIER_ICONS[group.tier] ?? CheckCircle2}
                  tone={TIER_TONES[group.tier] ?? "coral"}
                  size="lg"
                />
                <Badge tone={TIER_TONES[group.tier] === "navy" ? "navy" : "coral"}>
                  {group.riskLabel}
                </Badge>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                {group.tier}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {group.description}
              </p>
              <ul className="mt-4 space-y-1.5 border-t border-slate-200 pt-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral-500"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-display text-lg font-bold text-navy-900">
          {WHAT_WE_SOURCE_CLOSING_LINE}
        </p>
      </Container>
    </section>
  );
}
