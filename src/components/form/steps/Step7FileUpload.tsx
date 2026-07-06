"use client";

import { useRef, useState } from "react";
import { useUploadForm } from "@/components/form/UploadFormProvider";
import { ACCEPTED_FILE_TYPES } from "@/components/form/formSchema";

export function Step7FileUpload() {
  const { state, setAnswers } = useUploadForm();
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const file = state.answers.file;
  const error = state.errors.file;

  const handleFiles = (files: FileList | null) => {
    const selected = files?.[0];
    if (selected) setAnswers({ file: selected });
  };

  return (
    <div>
      <div
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          handleFiles(event.dataTransfer.files);
        }}
        className={`rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
          isDragging
            ? "border-coral-500 bg-coral-50"
            : "border-slate-300 bg-slate-50"
        }`}
      >
        <p className="font-medium text-navy-700">
          Drop your file here, or{" "}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="font-semibold text-coral-600 underline underline-offset-2"
          >
            browse files
          </button>
        </p>
        <p className="mt-1 text-xs text-slate-500">Accepts PNG, JPEG or PDF</p>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_FILE_TYPES.join(",")}
          onChange={(event) => handleFiles(event.target.files)}
          className="sr-only"
        />
        {file ? (
          <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm text-navy-900">
            {file.name}
          </p>
        ) : null}
      </div>
      {error ? <p className="mt-2 text-sm text-coral-700">{error}</p> : null}
    </div>
  );
}
