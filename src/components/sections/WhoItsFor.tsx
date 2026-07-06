import { HardHat, PenTool, Building2, Home, Check, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { AUDIENCE_SEGMENTS } from "@/lib/constants";

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  Builders: HardHat,
  Designers: PenTool,
  Developers: Building2,
  Homeowners: Home,
};

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for anyone tired of chasing FF&E suppliers"
          align="center"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {AUDIENCE_SEGMENTS.map((segment, index) => (
            <Card
              key={segment.audience}
              className="flex flex-col transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <IconBadge
                  icon={AUDIENCE_ICONS[segment.audience] ?? HardHat}
                  tone={index % 2 === 0 ? "coral" : "navy"}
                  size="lg"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-coral-600">
                    {segment.audience}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
                    {segment.headline}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {segment.description}
              </p>
              <ul className="mt-3 flex-1 space-y-1.5">
                {segment.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral-500"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <UploadCtaButton variant="secondary" className="mt-6 self-start">
                {segment.ctaLabel}
              </UploadCtaButton>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
