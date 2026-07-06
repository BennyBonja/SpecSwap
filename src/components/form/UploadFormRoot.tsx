"use client";

import { useState, type ReactNode } from "react";
import { UploadFormProvider, useUploadForm } from "@/components/form/UploadFormProvider";
import { UploadFormModal } from "@/components/form/UploadFormModal";
import { buildSubmissionFormData } from "@/lib/buildSubmission";

function ModalWithSubmit() {
  const { state, submitStart, submitSuccess, submitError } = useUploadForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    submitStart();

    try {
      const formData = buildSubmissionFormData(state.answers);
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        submitError(
          result.message ?? "We couldn't send that. Please try again.",
        );
      } else {
        submitSuccess();
      }
    } catch {
      submitError(
        "We couldn't reach the server. Check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return <UploadFormModal onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
}

export function UploadFormRoot({ children }: { children: ReactNode }) {
  return (
    <UploadFormProvider>
      {children}
      <ModalWithSubmit />
    </UploadFormProvider>
  );
}
