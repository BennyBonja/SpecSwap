import {
  Factory,
  Ship,
  Store,
  User,
  Handshake,
  ArrowRight,
  Warehouse,
  Armchair,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconBadge } from "@/components/ui/IconBadge";
import { CountUp } from "@/components/ui/CountUp";
import { COST_CHAIN, CASE_STUDY_EXAMPLES } from "@/lib/constants";

const TRADITIONAL_STEP_ICONS: LucideIcon[] = [Factory, Ship, Store, User];
const SPECSWAP_STEP_ICONS: LucideIcon[] = [Factory, Handshake, User];

const CASE_STUDY_ICONS: Record<string, LucideIcon> = {
  "Joinery & cabinetry": Warehouse,
  "Loose furniture": Armchair,
  "Tiling & flooring": Layers,
};

function ChainRow({ steps, icons }: { steps: string[]; icons: LucideIcon[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1.5">
            <IconBadge icon={icons[index] ?? Factory} tone="navy" />
            <span className="text-[11px] font-medium text-slate-500">{step}</span>
          </div>
          {index < steps.length - 1 ? (
            <ArrowRight className="h-4 w-4 text-slate-300" aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function formatCurrency(value: number) {
  return `$${value.toLocaleString("en-AU")}`;
}

export function ComparisonExamples() {
  return (
    <section id="comparison-examples" className="scroll-mt-16 py-20">
      <Container>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Same access
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            Same quality.{" "}
            <span className="relative inline-block">
              Better pricing.
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-coral-500" />
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            We cut out the local middlemen and connect you directly with
            vetted factories in China.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {COST_CHAIN.traditional.label}
              </p>
              <p className="font-display text-2xl font-bold text-navy-900">
                {COST_CHAIN.traditional.price}
              </p>
            </div>
            <ChainRow
              steps={COST_CHAIN.traditional.steps}
              icons={TRADITIONAL_STEP_ICONS}
            />
            <p className="text-xs text-slate-500">
              {COST_CHAIN.traditional.priceLabel}
            </p>
          </Card>

          <Card tinted className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Badge>{COST_CHAIN.specswap.label}</Badge>
              <p className="font-display text-3xl font-bold text-coral-600">
                {COST_CHAIN.specswap.price}
              </p>
            </div>
            <ChainRow
              steps={COST_CHAIN.specswap.steps}
              icons={SPECSWAP_STEP_ICONS}
            />
            <p className="text-xs text-slate-500">
              {COST_CHAIN.specswap.priceLabel}
            </p>
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="font-display text-xl font-bold text-navy-900">
            Real project case studies
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            The shape of the savings we typically find on real project packages.
          </p>
        </div>

        <div className="no-scrollbar -mx-6 mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 scroll-pl-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 sm:scroll-pl-0 lg:grid-cols-3">
          {CASE_STUDY_EXAMPLES.map((row, index) => (
            <Card
              key={row.title}
              className="flex w-[80%] shrink-0 snap-center flex-col transition-transform duration-200 hover:-translate-y-1 sm:w-auto sm:shrink"
            >
              <div className="flex items-start justify-between">
                <IconBadge
                  icon={CASE_STUDY_ICONS[row.category] ?? Warehouse}
                  tone={index % 2 === 0 ? "coral" : "navy"}
                />
                <Badge>
                  <CountUp value={row.saving} suffix="% saved" />
                </Badge>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-coral-600">
                {row.category}
              </p>
              <h4 className="mt-1 font-display text-lg font-bold text-navy-900">
                {row.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {row.description}
              </p>
              <div className="mt-4 flex items-baseline gap-2 border-t border-slate-200 pt-4">
                <span className="text-sm text-slate-400 line-through">
                  {formatCurrency(row.localPrice)}
                </span>
                <span className="font-display text-2xl font-bold text-coral-600">
                  {formatCurrency(row.chinaPrice)}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Local trade vs. China-direct</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          Illustrative case studies — updated with real figures after our
          August 2026 China trip.
        </p>
      </Container>
    </section>
  );
}
