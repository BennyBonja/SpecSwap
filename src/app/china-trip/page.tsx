import type { Metadata } from "next";
import { Factory, LineChart, Video, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ChinaTripForm } from "@/components/trip/ChinaTripForm";
import { SlotScarcity } from "@/components/trip/SlotScarcity";
import {
  TRIP_DATES,
  TRIP_CITIES,
  TRIP_SLOTS_TOTAL,
  TRIP_NOMINATIONS_CLOSE,
  FOUNDER,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "What should we inspect for you in China? — SpecSwap August Factory Programme",
  description:
    "SpecSwap is meeting manufacturers across China this August. Nominate a package, product or price you want tested — free for the first 10 builders.",
};

const WHAT_YOU_GET = [
  { icon: Factory, text: "Factory inspection of your nominated items" },
  { icon: LineChart, text: "Side-by-side factory vs local pricing benchmark" },
  { icon: Video, text: "Photo & video report from the floor" },
  { icon: ShieldCheck, text: "An honest read on whether it stacks up — no obligation" },
];

export default function ChinaTripPage() {
  return (
    <main id="main" className="flex-1">
      <section className="bg-blueprint-grid bg-navy-900 py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-coral-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
            {TRIP_DATES} · {TRIP_CITIES}
          </span>
          <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            We&apos;re going to the factories. Tell us what to inspect for you.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
            SpecSwap is meeting manufacturers across China this August. Nominate a
            package, product or price you want tested — we&apos;ll investigate it on
            the ground and send you what we find. Free for the first{" "}
            {TRIP_SLOTS_TOTAL} builders.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">What you get</h2>
            <ul className="mt-6 space-y-4">
              {WHAT_YOU_GET.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="pt-1.5 text-sm leading-relaxed text-slate-600">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900">
                  <span className="font-display text-lg font-bold text-coral-400">
                    {FOUNDER.initials}
                  </span>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Who&apos;s going
                  </p>
                  <p className="font-display text-base font-bold text-navy-900">
                    {FOUNDER.name}, Founder
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {FOUNDER.body}
              </p>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-slate-600">
              This costs you nothing. If the numbers work and you want it
              brokered: 5% of landed cost, minimum $4,500 — that&apos;s the whole
              business model.
            </p>

            <div className="mt-6 rounded-2xl bg-coral-50 p-5">
              <SlotScarcity />
              <p className="mt-3 text-sm font-medium text-coral-700">
                Nominations close {TRIP_NOMINATIONS_CLOSE}.
              </p>
            </div>
          </div>

          <div>
            <ChinaTripForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
