import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TRUST_STRIP_ITEMS } from "@/lib/constants";

export function TrustStrip() {
  return (
    <div className="border-b border-slate-200 bg-white py-5">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TRUST_STRIP_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Check className="h-4 w-4 shrink-0 text-coral-500" strokeWidth={2.5} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
