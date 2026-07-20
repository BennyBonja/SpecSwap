import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SlotScarcity } from "@/components/trip/SlotScarcity";
import { CHINA_PROGRAMME } from "@/lib/constants";

export function ChinaProgramme() {
  return (
    <section
      id="china-programme"
      className="bg-blueprint-grid scroll-mt-16 border-y border-navy-800 bg-navy-900 py-20"
    >
      <Container className="max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-coral-400">
          {CHINA_PROGRAMME.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          {CHINA_PROGRAMME.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
          {CHINA_PROGRAMME.body}
        </p>
        <ul className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {CHINA_PROGRAMME.prompts.map((prompt) => (
            <li
              key={prompt}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-navy-100"
            >
              {prompt}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <SlotScarcity tone="dark" className="flex flex-col items-center" />
        </div>
        <div className="mt-6 flex justify-center">
          <Button href="/china-trip">Nominate a package →</Button>
        </div>
        <p className="mx-auto mt-6 max-w-lg text-xs text-navy-300">
          {CHINA_PROGRAMME.footnote}
        </p>
      </Container>
    </section>
  );
}
