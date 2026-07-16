import { BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function InlineCta() {
  return (
    <div className="py-6">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-coral-500 px-6 py-5 sm:flex-row sm:rounded-full sm:px-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white sm:flex">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-base font-bold text-white">
                Not ready to commit?
              </p>
              <p className="text-sm text-coral-50">
                Start with the Offshore Bible — $39.99, no call required.
              </p>
            </div>
          </div>
          <Button
            href="#offshore-bible"
            variant="secondary"
            className="w-full shrink-0 justify-center border-white bg-white text-coral-600 hover:bg-coral-50 sm:w-auto"
          >
            Get the guide
          </Button>
        </div>
      </Container>
    </div>
  );
}
