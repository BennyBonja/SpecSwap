import Image from "next/image";
import { Check, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { OFFSHORE_BIBLE } from "@/lib/constants";

export function ServiceTiers() {
  return (
    <section id="offshore-bible" className="scroll-mt-16 overflow-hidden bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="The offshore bible"
          title="Start with the guide, no call required"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] -rotate-2 overflow-hidden rounded-2xl border-8 border-white shadow-2xl transition-transform duration-300 hover:rotate-0">
              <Image
                src="/images/hero-offshore-bible.webp"
                alt={OFFSHORE_BIBLE.title}
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-xl font-bold leading-tight text-white">
                  {OFFSHORE_BIBLE.title}
                </p>
              </div>
            </div>
            <span className="absolute -right-4 -top-4 flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-full bg-coral-500 text-center shadow-lg">
              <span className="font-display text-lg font-extrabold leading-none text-white">
                {OFFSHORE_BIBLE.price}
              </span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-coral-100">
                one-off
              </span>
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              What's inside
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {OFFSHORE_BIBLE.whatsInside.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-coral-500"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-navy-500" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Who it's for
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {OFFSHORE_BIBLE.whoItsFor}
                </p>
              </div>
            </div>

            <Button href="#pricing-model" className="mt-8 hover:scale-[1.03]">
              {OFFSHORE_BIBLE.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
