import { Container } from "@/components/ui/Container";
import { TAGLINE_STEPS } from "@/lib/constants";

export function TaglineStrip() {
  return (
    <div className="border-b border-slate-200 bg-slate-50 py-6">
      <Container className="flex justify-center">
        <p className="flex flex-wrap items-center justify-center gap-x-3 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-navy-900 shadow-sm">
          {TAGLINE_STEPS.map((step, index) => (
            <span key={step} className="flex items-center gap-3">
              {index > 0 ? (
                <span className="text-coral-500" aria-hidden="true">
                  ·
                </span>
              ) : null}
              {step}
            </span>
          ))}
        </p>
      </Container>
    </div>
  );
}
