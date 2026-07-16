import {
  BookOpen,
  PhoneCall,
  Sparkles,
  Ship,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconBadge } from "@/components/ui/IconBadge";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/constants";

const TIER_ICONS: Record<string, LucideIcon> = {
  "Construction Offshore Bible": BookOpen,
  "Free Discovery Call": PhoneCall,
  "Sourcing Strategy Session": Sparkles,
  "Full-Cycle Sourcing & Management": Ship,
};

const TIER_CTA_LABELS: Record<string, string> = {
  "Construction Offshore Bible": "Get the guide",
  "Free Discovery Call": "Book your free call",
  "Sourcing Strategy Session": "Book your session",
};

export function PricingModel() {
  return (
    <section id="pricing-model" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="4 ways to work with us"
          subtitle="Start wherever makes sense for you. The Bible and the strategy session are both credited toward the next step if you keep going."
          align="center"
        />
        <div className="no-scrollbar -mx-6 mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 pt-4 scroll-pl-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 sm:scroll-pl-0 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <Card
              key={tier.title}
              highlighted={tier.recommended}
              tinted={tier.recommended}
              className={`relative flex w-[80%] shrink-0 snap-center flex-col overflow-visible transition-transform sm:w-auto sm:shrink ${
                tier.recommended ? "shadow-xl lg:-translate-y-4" : ""
              }`}
            >
              {tier.recommended ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-navy-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                  {tier.tagline}
                </span>
              ) : (
                <Badge tone="navy">{tier.tagline}</Badge>
              )}
              <IconBadge
                icon={TIER_ICONS[tier.title] ?? BookOpen}
                tone={tier.recommended ? "coral" : "navy"}
                className="mt-4"
              />
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                {tier.title}
              </h3>
              <p
                className={`mt-2 inline-flex w-fit items-baseline gap-1 rounded-full px-3 py-1 font-display text-2xl font-extrabold ${
                  tier.recommended
                    ? "bg-coral-500 text-white"
                    : "bg-coral-50 text-coral-600"
                }`}
              >
                {tier.price}
              </p>
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
              {tier.title === "Full-Cycle Sourcing & Management" ? (
                <Button
                  href="#one-point-of-contact"
                  variant="secondary"
                  className="mt-6 w-full justify-center"
                >
                  Learn more
                </Button>
              ) : (
                <UploadCtaButton
                  variant={tier.recommended ? "primary" : "secondary"}
                  className="mt-6 w-full justify-center hover:scale-[1.03]"
                >
                  {TIER_CTA_LABELS[tier.title] ?? "Get started"}
                </UploadCtaButton>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
