import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LifeBuoy, Upload, MessageCircle, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconBadge } from "@/components/ui/IconBadge";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
  TURNAROUND_CLAIM,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — SpecSwap",
  description:
    "Get support, ask a general question, or start your project with SpecSwap.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div
          className="bg-blueprint-grid pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <Container className="relative max-w-2xl">
          <Badge>{TURNAROUND_CLAIM} response</Badge>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-navy-200">
            Got a question? You might find the answer in our{" "}
            <Link href="/#faq" className="font-medium text-coral-400 hover:underline">
              FAQ
            </Link>
            . Otherwise, here&apos;s the fastest way to reach us.
          </p>
        </Container>
      </section>

      <section id="enquiry-form" className="scroll-mt-16 bg-slate-50 py-16">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="General enquiry"
              title="Send us a message"
              subtitle="Real people read every message — no ticket queue, no chatbot."
            />
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
          <div className="relative hidden aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:block">
            <Image
              src="/images/contact-person.webp"
              alt="Friendly, real support — not a call centre"
              fill
              sizes="500px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="flex flex-col transition-transform duration-200 hover:-translate-y-1">
              <IconBadge icon={LifeBuoy} tone="coral" />
              <h2 className="mt-4 font-display text-lg font-bold text-navy-900">
                Existing customer?
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Already uploaded a project or have a question about your
                discovery call? Reach our support team directly.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  href={`tel:${CONTACT_PHONE_TEL}`}
                  className="flex items-center gap-2 font-medium text-navy-900 hover:text-coral-600"
                >
                  <Phone className="h-4 w-4 text-coral-500" aria-hidden="true" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 font-medium text-navy-900 hover:text-coral-600"
                >
                  <Mail className="h-4 w-4 text-coral-500" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </Card>

            <Card className="flex flex-col transition-transform duration-200 hover:-translate-y-1">
              <IconBadge icon={Upload} tone="navy" />
              <h2 className="mt-4 font-display text-lg font-bold text-navy-900">
                Want to get started?
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                No need to wait — upload your project now and we&apos;ll
                review it before your free discovery call.
              </p>
              <UploadCtaButton className="mt-4 w-full justify-center" />
            </Card>

            <Card className="flex flex-col transition-transform duration-200 hover:-translate-y-1">
              <IconBadge icon={MessageCircle} tone="coral" />
              <h2 className="mt-4 font-display text-lg font-bold text-navy-900">
                General enquiry
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Anything else on your mind? Send us a message and we&apos;ll
                get back to you.
              </p>
              <a
                href="#enquiry-form"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-navy-300 px-5 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50"
              >
                Send a message
              </a>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
