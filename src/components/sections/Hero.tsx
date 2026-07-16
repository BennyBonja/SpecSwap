import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import {
  HERO_ANNOUNCEMENT,
  HERO_PANELS,
  CATEGORY_BROWSE_ITEMS,
} from "@/lib/constants";

export function Hero() {
  return (
    <section className="scroll-mt-16 bg-white">
      <div className="bg-coral-500 py-2.5 text-center text-sm font-medium text-white">
        {HERO_ANNOUNCEMENT}
      </div>

      <div className="mx-auto max-w-[90rem] px-6 py-14 sm:px-8 lg:px-10">
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 scroll-pl-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 sm:scroll-pl-0 lg:grid-cols-3">
          {HERO_PANELS.map((panel, index) => (
            <div
              key={panel.title}
              className={`relative flex min-h-[420px] w-[82%] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-2xl sm:aspect-[3/4] sm:min-h-0 sm:w-auto sm:shrink lg:aspect-[4/5] ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
              <div className="relative p-8">
                <span className="inline-flex items-center rounded-full bg-coral-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                  {panel.eyebrow}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-white">
                  {panel.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-100">
                  {panel.description}
                </p>
                <div className="mt-6">
                  {panel.ctaType === "upload" ? (
                    <UploadCtaButton className="w-full justify-center">
                      {panel.ctaLabel}
                    </UploadCtaButton>
                  ) : (
                    <Button
                      href={panel.ctaHref ?? "#how-it-works"}
                      className="w-full justify-center"
                    >
                      {panel.ctaLabel}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="no-scrollbar -mx-6 mt-16 flex snap-x snap-mandatory gap-x-8 overflow-x-auto px-6 pb-2 scroll-pl-6 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-8 sm:overflow-visible sm:px-0 sm:pb-0 sm:scroll-pl-0">
          {CATEGORY_BROWSE_ITEMS.map((category) => (
            <a
              key={category.label}
              href={category.href}
              className="flex shrink-0 snap-start flex-col items-center gap-2.5 text-center"
            >
              <span className="relative block h-24 w-24 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-sm transition-transform hover:-translate-y-1 sm:h-28 sm:w-28">
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </span>
              <span className="text-xs font-medium text-slate-600 sm:text-sm">
                {category.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
