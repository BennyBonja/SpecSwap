import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const RESPONSIBILITIES = [
  "Supplier communication",
  "Order placement",
  "Delivery coordination",
  "Selected installation support",
  "Warranty tracking",
  "Handover documentation",
];

export function OnePointOfContact() {
  return (
    <section id="one-point-of-contact" className="scroll-mt-16 py-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="One point of contact"
            title="Stop chasing a dozen suppliers yourself"
            subtitle="FF&E procurement is usually fragmented across many suppliers, with no one person clearly responsible for the package. SpecSwap becomes that one company, one point of contact, one managed process."
          />
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/onepoint-contact.png"
            alt="Furniture staged and coordinated for delivery"
            fill
            sizes="(min-width: 1024px) 500px, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/80" />
          <div className="relative p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-navy-200">
              We manage
            </p>
            <ul className="mt-4 space-y-3">
              {RESPONSIBILITIES.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral-500 text-white"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
