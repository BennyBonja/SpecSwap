"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useUploadForm } from "@/components/form/UploadFormProvider";
import { STEP_COUNT, STEP_META } from "@/lib/formSteps";

export function StepShell({
  children,
  onSubmit,
  submitLabel = "Submit",
  isSubmitting = false,
}: {
  children: ReactNode;
  onSubmit?: () => void;
  submitLabel?: string;
  isSubmitting?: boolean;
}) {
  const { state, next, prev, validateCurrentStep } = useUploadForm();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const step = STEP_META[state.stepIndex];
  const isFirstStep = state.stepIndex === 0;
  const isLastStep = state.stepIndex === STEP_COUNT - 1;

  useEffect(() => {
    headingRef.current?.focus();
  }, [state.stepIndex]);

  const handleContinue = () => {
    if (!validateCurrentStep()) return;
    if (isLastStep) {
      onSubmit?.();
    } else {
      next();
    }
  };

  const progressPercent = ((state.stepIndex + 1) / STEP_COUNT) * 100;

  return (
    <div>
      <div
        role="progressbar"
        aria-valuenow={state.stepIndex + 1}
        aria-valuemin={1}
        aria-valuemax={STEP_COUNT}
        className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200"
      >
        <div
          className="h-full rounded-full bg-coral-500 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p aria-live="polite" className="mt-3 text-xs font-medium text-slate-500">
        Step {state.stepIndex + 1} of {STEP_COUNT}
      </p>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-2 font-display text-2xl font-bold text-navy-900 outline-none"
      >
        {step?.title}
      </h2>
      <div
        className="mt-6"
        onKeyDown={(event) => {
          const target = event.target as HTMLElement;
          if (
            event.key === "Enter" &&
            target.tagName !== "TEXTAREA" &&
            target.tagName !== "BUTTON"
          ) {
            event.preventDefault();
            handleContinue();
          }
        }}
      >
        {children}
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={isFirstStep}
          className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:invisible"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleContinue}
          disabled={isSubmitting}
          className="rounded-lg bg-coral-500 px-5 py-3 text-sm font-medium text-white hover:bg-coral-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLastStep ? (isSubmitting ? "Submitting…" : submitLabel) : "Continue"}
        </button>
      </div>
    </div>
  );
}
