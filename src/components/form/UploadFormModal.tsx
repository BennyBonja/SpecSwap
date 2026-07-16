"use client";

import { useEffect, useRef } from "react";
import { useUploadForm } from "@/components/form/UploadFormProvider";
import { StepShell } from "@/components/form/StepShell";
import { ConfirmationScreen } from "@/components/form/ConfirmationScreen";
import { Step1ProjectInfo } from "@/components/form/steps/Step1ProjectInfo";
import { Step2SwapType } from "@/components/form/steps/Step2SwapType";
import { Step3ProjectType } from "@/components/form/steps/Step3ProjectType";
import { Step4Intent } from "@/components/form/steps/Step4Intent";
import { Step5LeadTime } from "@/components/form/steps/Step5LeadTime";
import { Step6BudgetNotes } from "@/components/form/steps/Step6BudgetNotes";
import { Step7FileUpload } from "@/components/form/steps/Step7FileUpload";
import { Step8Contact } from "@/components/form/steps/Step8Contact";

const STEP_COMPONENTS = [
  Step1ProjectInfo,
  Step2SwapType,
  Step3ProjectType,
  Step4Intent,
  Step5LeadTime,
  Step6BudgetNotes,
  Step7FileUpload,
  Step8Contact,
];

function hasAnyAnswer(answers: Record<string, unknown>): boolean {
  return Object.values(answers).some((value) => {
    if (typeof value === "string") return value.trim().length > 0;
    if (typeof value === "boolean") return value;
    if (Array.isArray(value)) return value.length > 0;
    return false;
  });
}

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => el.offsetParent !== null);
}

export function UploadFormModal({
  onSubmit,
  isSubmitting,
  busyLabel,
}: {
  onSubmit: () => void;
  isSubmitting: boolean;
  busyLabel?: string;
}) {
  const { state, close, reset } = useUploadForm();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  // state.stepIndex is always clamped to [0, STEP_COUNT - 1] by the reducer.
  const StepComponent = STEP_COMPONENTS[state.stepIndex]!;

  useEffect(() => {
    if (!state.isOpen) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    // Initial focus lands on the step heading (see StepShell) so screen
    // reader users hear the dialog's context before tabbing into fields.

    return () => {
      previouslyFocused.current?.focus();
    };
  }, [state.isOpen]);

  const isDone = state.submitStatus === "success" || state.submitStatus === "error";

  const handleClose = () => {
    if (!isDone && hasAnyAnswer(state.answers)) {
      const confirmed = window.confirm(
        "Discard this form? Your answers won't be saved.",
      );
      if (!confirmed) return;
    }
    close();
    reset();
  };

  useEffect(() => {
    if (!state.isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = getFocusable(dialogRef.current);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isOpen, state.answers, state.submitStatus]);

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-navy-900/60 p-4 py-10 sm:items-center">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Start a project"
        className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-lg sm:p-8"
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close form"
            className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 hover:text-navy-700"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {isDone ? (
          <ConfirmationScreen onRetry={onSubmit} />
        ) : (
          <StepShell
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            submitLabel="Submit"
            busyLabel={busyLabel}
          >
            <StepComponent />
          </StepShell>
        )}
      </div>
    </div>
  );
}
