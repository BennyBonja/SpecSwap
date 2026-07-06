import Image from "next/image";
import {
  ShieldCheck,
  TrendingDown,
  Users,
  Repeat,
  Zap,
  ChevronDown,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { CountUp } from "@/components/ui/CountUp";
import { TURNAROUND_CLAIM } from "@/lib/constants";

const HERO_STATS: {
  label: string;
  icon: LucideIcon;
  render: () => React.ReactNode;
}[] = [
  {
    label: "Design intent",
    icon: ShieldCheck,
    render: () => "Preserved",
  },
  {
    label: "Typical savings",
    icon: TrendingDown,
    render: () => (
      <>
        Up to <CountUp value={42} suffix="%" />
      </>
    ),
  },
  {
    label: "Suppliers you deal with",
    icon: Users,
    render: () => "Just 1",
  },
];

export function Hero() {
  return (
    <section className="scroll-mt-16 relative bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex flex-col justify-center overflow-hidden bg-navy-900 px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
          <div className="bg-blueprint-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <Badge>{TURNAROUND_CLAIM} turnaround</Badge>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              We swap specified FF&E for smarter, more cost-effective
              alternatives.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-200">
              Upload your schedule and we&apos;ll review, source and manage
              it — replacing overpriced or slow-to-source items with
              better-value options that protect your design intent. One
              point of contact from specification to site.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <UploadCtaButton />
              <Button variant="outline-light" href="#how-it-works">
                See how it works
              </Button>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-navy-300">
              <BadgeCheck className="h-4 w-4 text-coral-400" aria-hidden="true" />
              No cost or obligation to get your comparison quote.
            </p>
            <dl className="mt-12 divide-y divide-white/10 border-t border-white/10">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between py-3"
                >
                  <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-navy-300">
                    <stat.icon className="h-4 w-4 text-coral-400" aria-hidden="true" />
                    {stat.label}
                  </dt>
                  <dd className="font-display text-sm font-semibold text-white">
                    {stat.render()}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex items-center bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
          <div className="relative mt-4 w-full">
            <span
              style={{ transform: "rotate(-3deg)" }}
              className="animate-float-tag absolute -top-4 left-6 z-20 rounded-full bg-coral-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md"
            >
              Swap your FF&E
            </span>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between gap-4 rounded-t-2xl bg-navy-900 px-6 py-4">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-navy-300">
                  <TrendingDown className="h-4 w-4 text-coral-400" aria-hidden="true" />
                  Typical schedule saving
                </div>
                <p className="font-display text-lg font-bold text-white">
                  $<CountUp value={18420} />{" "}
                  <span className="text-coral-400">(18.7%)</span>
                </p>
              </div>
              <p className="px-6 pt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Task chair, Item 4.2
              </p>
              <div className="relative mt-4 grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <span className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-white shadow-md sm:flex">
                  <Repeat className="h-5 w-5 animate-slow-spin" aria-hidden="true" />
                </span>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Specified
                  </p>
                  <div className="relative mt-3">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
                      <Image
                        src="/images/hero-chair-specified.png"
                        alt="The originally specified task chair"
                        fill
                        sizes="(min-width: 640px) 220px, 45vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <p className="mt-3 font-display text-lg font-bold text-navy-900">
                    Original spec
                  </p>
                  <dl className="mt-4 space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <dt>Price</dt>
                      <dd className="font-medium text-navy-900">
                        $620 / unit
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Lead time</dt>
                      <dd className="font-medium text-navy-900">
                        10–12 weeks
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Supplier</dt>
                      <dd className="font-medium text-navy-900">
                        Original spec
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="bg-coral-50 p-6">
                  <Badge>Swapped</Badge>
                  <div className="relative mt-3">
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-white">
                      <Image
                        src="/images/hero-chair-swapped.png"
                        alt="The swapped, better-value task chair"
                        fill
                        sizes="(min-width: 640px) 220px, 45vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute -right-3 -top-3 z-10 flex h-14 w-14 rotate-6 items-center justify-center rounded-full bg-coral-600 text-center text-xs font-bold leading-tight text-white shadow-lg">
                      34%
                      <br />
                      off
                    </span>
                    <span className="animate-wiggle-pulse absolute -bottom-3 -left-3 z-10 flex items-center gap-1 rounded-full bg-navy-900 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      <Zap className="h-3.5 w-3.5 text-coral-400" aria-hidden="true" />
                      Faster too
                    </span>
                  </div>
                  <p className="mt-3 font-display text-lg font-bold text-navy-900">
                    Equivalent task chair
                  </p>
                  <dl className="mt-4 space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <dt>Price</dt>
                      <dd className="font-medium text-coral-700">
                        $410 / unit (34% saving)
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Lead time</dt>
                      <dd className="font-medium text-coral-700">3–4 weeks</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Supplier</dt>
                      <dd className="font-medium text-navy-900">
                        SpecSwap network
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <p className="border-t border-slate-200 bg-white px-6 py-4 text-xs text-slate-500">
                Illustrative example — your quote reflects your actual
                schedule and is reviewed by our team before it reaches you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#how-it-works"
        aria-label="Scroll to how it works"
        className="animate-bounce absolute -bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-navy-600 shadow-md hover:text-coral-600 sm:flex"
      >
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  );
}
