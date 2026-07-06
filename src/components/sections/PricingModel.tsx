import { Target, Repeat, Ship, Star, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconBadge } from "@/components/ui/IconBadge";
import { SOURCING_MODELS } from "@/lib/constants";

const MODEL_ICONS: Record<string, LucideIcon> = {
  Specified: Target,
  Swapped: Repeat,
  Imported: Ship,
};

function StarRating({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < value ? "fill-coral-500 text-coral-500" : "text-slate-200"
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export function PricingModel() {
  return (
    <section id="pricing-model" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="Specified, swapped, imported"
          title="The swap is the heart of what we do"
          subtitle="For most schedules, we swap the specified item for a better-value alternative that protects design intent. Specified and imported are the exceptions we also handle well."
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SOURCING_MODELS.map((model, index) => {
            const isSwap = model.title === "Swapped";
            return (
              <Card
                key={model.title}
                highlighted={isSwap}
                className={`flex flex-col transition-transform duration-200 ${
                  isSwap
                    ? "shadow-lg lg:-translate-y-3"
                    : "hover:-translate-y-1"
                }`}
              >
                <div className="flex items-start justify-between">
                  <IconBadge
                    icon={MODEL_ICONS[model.title] ?? Target}
                    tone={isSwap || index % 2 === 0 ? "coral" : "navy"}
                  />
                  {isSwap ? <Badge>Most common</Badge> : null}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {model.description}
                </p>
                <dl className="mt-6 space-y-3 border-t border-slate-200 pt-4 text-sm">
                  <div>
                    <dt className="text-slate-500">Savings</dt>
                    <dd className="font-medium text-navy-900">
                      {model.savings}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Lead time</dt>
                    <dd className="font-medium text-navy-900">
                      {model.leadTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Best for</dt>
                    <dd className="font-medium text-navy-900">
                      {model.bestFor}
                    </dd>
                  </div>
                </dl>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 font-medium text-slate-500 sm:px-6">
                  &nbsp;
                </th>
                {SOURCING_MODELS.map((model) => (
                  <th
                    key={model.title}
                    className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide sm:px-6 ${
                      model.title === "Swapped"
                        ? "text-coral-600"
                        : "text-navy-900"
                    }`}
                  >
                    {model.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <th className="px-4 py-3 font-medium text-slate-500 sm:px-6">
                  Price
                </th>
                {SOURCING_MODELS.map((model) => (
                  <td
                    key={model.title}
                    className="px-4 py-3 text-navy-900 sm:px-6"
                  >
                    {model.priceLabel}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="px-4 py-3 font-medium text-slate-500 sm:px-6">
                  Lead time
                </th>
                {SOURCING_MODELS.map((model) => (
                  <td
                    key={model.title}
                    className="px-4 py-3 text-navy-900 sm:px-6"
                  >
                    {model.leadTime}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="px-4 py-3 font-medium text-slate-500 sm:px-6">
                  Design fidelity
                </th>
                {SOURCING_MODELS.map((model) => (
                  <td key={model.title} className="px-4 py-3 sm:px-6">
                    <div className="flex items-center gap-2">
                      <StarRating value={model.designFidelity} />
                      <span className="text-xs text-slate-500">
                        {model.fidelityLabel}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <th className="px-4 py-3 font-medium text-slate-500 sm:px-6">
                  Best for
                </th>
                {SOURCING_MODELS.map((model) => (
                  <td
                    key={model.title}
                    className="px-4 py-3 text-navy-900 sm:px-6"
                  >
                    {model.bestFor}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
