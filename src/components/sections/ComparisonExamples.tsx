import { Armchair, Table, Monitor, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconBadge } from "@/components/ui/IconBadge";
import { CountUp } from "@/components/ui/CountUp";
import { COMPARISON_EXAMPLES } from "@/lib/constants";

const ITEM_ICONS: Record<string, LucideIcon> = {
  "Task chair": Armchair,
  "Boardroom table": Table,
  "Monitor arm": Monitor,
};

export function ComparisonExamples() {
  return (
    <section id="comparison-examples" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="Real-world examples"
          title="A few examples of what a swap looks like"
          subtitle="Every schedule is different, but here's the shape of the savings we typically find."
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {COMPARISON_EXAMPLES.map((row, index) => (
            <Card
              key={row.item}
              className="flex flex-col transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <IconBadge
                  icon={ITEM_ICONS[row.item] ?? Armchair}
                  tone={index % 2 === 0 ? "coral" : "navy"}
                />
                <Badge>
                  <CountUp value={row.saving} suffix="% off" />
                </Badge>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                {row.item}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-sm text-slate-400 line-through">
                  ${row.originalPrice}
                </span>
                <span className="font-display text-2xl font-bold text-coral-600">
                  $<CountUp value={row.swapPrice} />
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
                <span className="text-slate-500">Lead time</span>
                <span className="font-medium text-navy-900">
                  {row.leadTime}
                </span>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          Illustrative examples — your quote reflects your actual schedule
          and is reviewed by our team before it reaches you.
        </p>
      </Container>
    </section>
  );
}
