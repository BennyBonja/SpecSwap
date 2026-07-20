import { Container } from "@/components/ui/Container";
import { FOUNDER } from "@/lib/constants";

export function Founder() {
  return (
    <section id="founder" className="scroll-mt-16 bg-slate-50 py-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
        {/* Placeholder avatar — swap for a real photo of Ben once taken (Context04 §8.3, open item #4). */}
        <div className="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl bg-navy-900 lg:mx-0">
          <span className="font-display text-6xl font-bold text-coral-400">
            {FOUNDER.initials}
          </span>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            The founder
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
            {FOUNDER.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {FOUNDER.body}
          </p>
          <a
            href="/china-trip"
            className="mt-5 inline-block text-sm font-semibold text-coral-600 hover:underline"
          >
            {FOUNDER.linkLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
