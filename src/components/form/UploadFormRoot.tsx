"use client";

import { useState, type ReactNode } from "react";
import { upload } from "@vercel/blob/client";
import { UploadFormProvider, useUploadForm } from "@/components/form/UploadFormProvider";
import { UploadFormModal } from "@/components/form/UploadFormModal";
import { buildSubmissionFormData, type UploadedFile } from "@/lib/buildSubmission";

const UPLOAD_CONCURRENCY = 3;
const MULTIPART_THRESHOLD_BYTES = 100 * 1024 * 1024;

async function uploadFiles(
  files: File[],
  onProgress: (percentage: number) => void,
): Promise<UploadedFile[]> {
  const results: UploadedFile[] = new Array(files.length);
  const loadedByIndex = new Array(files.length).fill(0);
  const totalByIndex = files.map((file) => file.size);
  const reportProgress = () => {
    const loaded = loadedByIndex.reduce((sum, value) => sum + value, 0);
    const total = totalByIndex.reduce((sum, value) => sum + value, 0);
    onProgress(total === 0 ? 100 : Math.round((loaded / total) * 100));
  };

  let nextIndex = 0;
  async function worker() {
    while (nextIndex < files.length) {
      const index = nextIndex++;
      const file = files[index];
      if (!file) continue;
      const blob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload",
        contentType: file.type,
        multipart: file.size > MULTIPART_THRESHOLD_BYTES,
        onUploadProgress: ({ loaded }) => {
          loadedByIndex[index] = loaded;
          reportProgress();
        },
      });
      results[index] = { name: file.name, url: blob.url, size: file.size };
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(UPLOAD_CONCURRENCY, files.length) }, worker),
  );
  return results;
}

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

      const formData = buildSubmissionFormData(state.answers, uploadedFiles);
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
