import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIY_VS_SPECSWAP } from "@/lib/constants";

export function OnePointOfContact() {
  return (
    <section id="one-point-of-contact" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="Why not just go yourself?"
          title="Having someone on the ground changes everything"
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="font-display text-lg font-bold text-navy-900">
              {DIY_VS_SPECSWAP.diy.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {DIY_VS_SPECSWAP.diy.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <X className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-coral-50 p-8">
            <h3 className="font-display text-lg font-bold text-navy-900">
              {DIY_VS_SPECSWAP.specswap.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {DIY_VS_SPECSWAP.specswap.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-navy-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
