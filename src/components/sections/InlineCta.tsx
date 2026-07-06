import { CloudUpload } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { UploadCtaButton } from "@/components/ui/UploadCtaButton";
import { TURNAROUND_CLAIM } from "@/lib/constants";

export function InlineCta() {
  return (
    <div className="py-6">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-navy-900 px-6 py-5 sm:flex-row sm:px-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:flex">
              <CloudUpload className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-base font-bold text-white">
                Ready to save on your next project?
              </p>
              <p className="text-sm text-navy-200">
                Upload your FF&E schedule and get smarter swaps within{" "}
                {TURNAROUND_CLAIM}.
              </p>
            </div>
          </div>
          <UploadCtaButton className="w-full shrink-0 justify-center sm:w-auto" />
        </div>
      </Container>
    </div>
  );
}
