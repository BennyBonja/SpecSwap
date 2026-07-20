import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { PACKAGE_CATEGORIES } from "@/lib/constants";

export function StartWithOnePackage() {
  return (
    <section id="start-with-one-package" className="scroll-mt-16 py-20">
      <Container>
        <SectionHeading
          eyebrow="Start here"
          title="Start with one package. See whether the numbers work."
          subtitle="You don't need to commit a project. Send one package you suspect is overpriced locally — we'll tell you honestly whether China-direct sourcing is worth pursuing, and when it isn't."
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {PACKAGE_CATEGORIES.map((category) => (
            <a
              key={category.label}
              href={category.href}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="relative block aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-transform group-hover:-translate-y-1">
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  sizes="(min-width: 1024px) 15vw, 33vw"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">{category.label}</span>
                {category.note ? (
                  <span className="mt-0.5 block text-xs text-slate-500">{category.note}</span>
                ) : null}
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <UploadCtaButton>Submit a package</UploadCtaButton>
        </div>
      </Container>
    </section>
  );
}
