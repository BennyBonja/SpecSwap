"use client";

import { useState, type ReactNode } from "react";
import { UploadFormProvider, useUploadForm } from "@/components/form/UploadFormProvider";
import { UploadFormModal } from "@/components/form/UploadFormModal";
import { buildLeadSubmission, type UploadedFile } from "@/lib/buildSubmission";
import { submitToWeb3Forms } from "@/lib/submitToWeb3Forms";
import { uploadFiles } from "@/lib/uploadFiles";

function ModalWithSubmit() {
  const { state, submitStart, submitSuccess, submitError } = useUploadForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    submitStart();

    try {
      let uploadedFiles: UploadedFile[] = [];
      if (state.answers.files.length > 0) {
        setUploadProgress(0);
        uploadedFiles = await uploadFiles(state.answers.files, setUploadProgress);
        setUploadProgress(null);
      }

      const fields = buildLeadSubmission(state.answers, uploadedFiles);
      const result = await submitToWeb3Forms(fields, {
        subject: "New SpecSwap package submission",
        fromName: "SpecSwap website",
      });

      if (!result.success) {
        submitError(result.message);
      } else {
        submitSuccess();
      }
    } catch {
      submitError(
        "We couldn't reach the server. Check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
      setUploadProgress(null);
    }
  };

  const busyLabel =
    uploadProgress !== null ? `Uploading ${uploadProgress}%…` : "Submitting…";

  return (
    <UploadFormModal
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      busyLabel={busyLabel}
    />
  );
}

export function UploadFormRoot({ children }: { children: ReactNode }) {
  return (
    <UploadFormProvider>
      {children}
      <ModalWithSubmit />
    </UploadFormProvider>
  );
}
