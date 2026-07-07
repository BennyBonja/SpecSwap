import {
  ClipboardList,
  Truck,
  FileCheck2,
  HardHat,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM_CREDIBILITY_POINTS } from "@/lib/constants";

const POINT_ICONS: Record<string, LucideIcon> = {
  "Project coordination": ClipboardList,
  "Supplier management": Truck,
  "Schedules & handover": FileCheck2,
  "Construction admin": HardHat,
};

export function TeamCredibility() {
  return (
    <section
      id="team-credibility"
      className="scroll-mt-16 relative overflow-hidden bg-navy-900 py-20"
    >
      <div
        className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Who's behind SpecSwap"
          title="Built by people who understand construction, fitout and procurement"
          subtitle="SpecSwap is operated by Bonja Group. The team's background is in the day-to-day of project delivery — not just sourcing products, but the coordination, schedules and handover admin that comes with a live build."
        />
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_CREDIBILITY_POINTS.map((point) => {
            const Icon = POINT_ICONS[point.title] ?? HardHat;
            return (
              <div
                key={point.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-coral-400">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
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
