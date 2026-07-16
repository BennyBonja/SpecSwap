import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  NAV_LINKS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-900 py-12 text-navy-200">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-bold text-white">
            Spec<span className="text-coral-500">Swap</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed">
            A China-first construction procurement broker — we connect
            Australian builders direct to vetted factories, then manage
            sourcing, QC and freight from factory to site.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4 text-coral-400" aria-hidden="true" />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4 text-coral-400" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>© {new Date().getFullYear()} SpecSwap. All rights reserved.</p>
          <p>
            SpecSwap is a service owned and operated by Bonja Group, ABN 64
            814 797 294.
          </p>
        </div>
        <nav aria-label="Legal" className="flex gap-x-4">
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms of Service
          </a>
        </nav>
      </Container>
    </footer>
  );
}
