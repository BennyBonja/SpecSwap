import { Factory, Ship, Store, User, Handshake, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconBadge } from "@/components/ui/IconBadge";
import { COST_CHAIN, COST_CHAIN_HEADING, COST_CHAIN_SUBTITLE } from "@/lib/constants";

const TRADITIONAL_STEP_ICONS: LucideIcon[] = [Factory, Ship, Store, User];
const SPECSWAP_STEP_ICONS: LucideIcon[] = [Factory, Handshake, User];

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

export function ComparisonExamples() {
  return (
    <section id="comparison-examples" className="scroll-mt-16 py-20">
      <Container>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Same access
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            {COST_CHAIN_HEADING}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            {COST_CHAIN_SUBTITLE}
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
        <p className="mt-6 text-center text-xs text-slate-500">Illustrative.</p>
      </Container>
    </section>
  );
}
