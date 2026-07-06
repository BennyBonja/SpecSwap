import { Package, FileText, ShieldCheck, Check, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconBadge } from "@/components/ui/IconBadge";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { SERVICE_TIERS } from "@/lib/constants";

const TIER_CTA_LABELS: Record<string, string> = {
  "Full FF&E procurement": "Start full procurement",
  "Report & supply list": "Get a report",
  "Order-on-behalf": "Ask about order-on-behalf",
};

const TIER_ICONS: Record<string, LucideIcon> = {
  "Full FF&E procurement": Package,
  "Report & supply list": FileText,
  "Order-on-behalf": ShieldCheck,
};

export function ServiceTiers() {
  return (
    <section id="service-tiers" className="scroll-mt-16 bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="How you work with us"
          title="Full procurement, report-only, or order-on-behalf"
          subtitle="Full FF&E procurement is our primary service — but if you want to keep control in-house, we have options for that too."
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICE_TIERS.map((tier) => (
            <Card
              key={tier.title}
              highlighted={tier.recommended}
              className={`flex flex-col transition-transform ${
                tier.recommended ? "shadow-lg lg:-translate-y-3" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <IconBadge
                  icon={TIER_ICONS[tier.title] ?? Package}
                  tone={tier.recommended ? "coral" : "navy"}
                />
                <Badge tone={tier.recommended ? "coral" : "navy"}>
                  {tier.tagline}
                </Badge>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
                {tier.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {tier.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2 border-t border-slate-200 pt-4 text-sm text-navy-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-coral-500"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <UploadCtaButton
                variant={tier.recommended ? "primary" : "secondary"}
                className="mt-6 w-full justify-center"
              >
                {TIER_CTA_LABELS[tier.title] ?? "Get started"}
              </UploadCtaButton>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
