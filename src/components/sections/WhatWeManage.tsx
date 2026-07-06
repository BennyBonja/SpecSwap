import Image from "next/image";
import {
  Armchair,
  Lightbulb,
  Refrigerator,
  Monitor,
  Wrench,
  Blinds,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { WHAT_WE_MANAGE_CATEGORIES } from "@/lib/constants";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Furniture: Armchair,
  Lighting: Lightbulb,
  "Appliances & whitegoods": Refrigerator,
  "IT & AV": Monitor,
  "Hardware & accessories": Wrench,
  "Selected fitout items": Blinds,
};

const CATEGORY_IMAGES: Record<string, string> = {
  Furniture: "/images/category-furniture.png",
  Lighting: "/images/category-lighting.png",
  "Appliances & whitegoods": "/images/category-appliances.png",
  "IT & AV": "/images/category-itav.png",
  "Hardware & accessories": "/images/category-hardware.png",
  "Selected fitout items": "/images/category-fitout.png",
};

export function WhatWeManage() {
  return (
    <section id="what-we-manage" className="scroll-mt-16 bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="What we manage"
          title="Furniture, fixtures, equipment and selected fitout items"
          subtitle="We review the full schedule where useful, then identify the items we can practically support, source, consolidate or value-manage — staying cautious with structural, fire-rated or compliance-critical products."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_MANAGE_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src={CATEGORY_IMAGES[category.title] ?? "/images/category-furniture.png"}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
                <IconBadge
                  icon={CATEGORY_ICONS[category.title] ?? Armchair}
                  tone={index % 2 === 0 ? "coral" : "navy"}
                  className="absolute bottom-3 left-3 border-2 border-white shadow-md"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  {category.title}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-coral-500"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
