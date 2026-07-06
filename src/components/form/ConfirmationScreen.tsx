"use client";

import { Check } from "lucide-react";
import { useUploadForm } from "@/components/form/UploadFormProvider";
import { TURNAROUND_CLAIM } from "@/lib/constants";

export function ConfirmationScreen({ onRetry }: { onRetry: () => void }) {
  const { state, close, reset } = useUploadForm();

  const handleDone = () => {
    close();
    reset();
  };

  if (state.submitStatus === "error") {
    return (
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold text-navy-900">
          We couldn&apos;t send that
        </h2>
        <p className="mt-3 text-slate-600">
          {state.submitError ??
            "Something went wrong submitting your details. Your answers are still here — you can try again."}
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 rounded-lg bg-coral-500 px-5 py-3 text-sm font-medium text-white hover:bg-coral-600"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <span
        aria-hidden="true"
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral-50 text-coral-600"
      >
        <Check className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">
        We&apos;ve received your documents
      </h2>
      <p className="mt-3 text-slate-600">
        Our team is reviewing now — you&apos;ll get your comparison quote
        within {TURNAROUND_CLAIM}.
      </p>
      <button
        type="button"
        onClick={handleDone}
        className="mt-6 rounded-lg bg-navy-900 px-5 py-3 text-sm font-medium text-white hover:bg-navy-800"
      >
        Done
      </button>
    </div>
  );
}
