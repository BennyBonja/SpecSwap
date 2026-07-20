"use client";

import { useRef, useState } from "react";
import { useUploadForm } from "@/components/form/UploadFormProvider";
import {
  ACCEPTED_FILE_EXTENSIONS,
  MAX_FILE_COUNT,
  MAX_TOTAL_SIZE_BYTES,
} from "@/components/form/formSchema";

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.ceil(bytes / 1024)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export function Step4Files() {
  const { state, setAnswers } = useUploadForm();
  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const files = state.answers.files;
  const error = state.errors.files ?? localError;
  const totalBytes = files.reduce((total, file) => total + file.size, 0);

  const handleFiles = (fileList: FileList | null) => {
    const incoming = Array.from(fileList ?? []);
    if (incoming.length === 0) return;

    const combined = [...files, ...incoming];
    if (combined.length > MAX_FILE_COUNT) {
      setLocalError(`You can upload up to ${MAX_FILE_COUNT} files`);
      setAnswers({ files: combined.slice(0, MAX_FILE_COUNT) });
      return;
    }

    setLocalError(null);
    setAnswers({ files: combined });
  };

  const removeFile = (index: number) => {
    setLocalError(null);
    setAnswers({ files: files.filter((_, i) => i !== index) });
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
          Drop your files here, or{" "}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="font-semibold text-coral-600 underline underline-offset-2"
          >
            browse files
          </button>
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Drawings, schedules, BOQs, quotes, images and product links. Up to{" "}
          {MAX_FILE_COUNT} files, {formatBytes(MAX_TOTAL_SIZE_BYTES)} total.
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED_FILE_EXTENSIONS.join(",")}
          onChange={(event) => {
            handleFiles(event.target.files);
            event.target.value = "";
          }}
          className="sr-only"
        />
        {files.length > 0 ? (
          <div className="mt-4 space-y-2 text-left">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between gap-2 rounded-lg bg-white px-3 py-1.5 text-sm text-navy-900"
              >
                <span className="truncate">
                  {file.name}{" "}
                  <span className="text-slate-400">
                    ({formatBytes(file.size)})
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="shrink-0 text-slate-400 hover:text-coral-600"
                  aria-label={`Remove ${file.name}`}
                >
                  &times;
                </button>
              </div>
            ))}
            <p className="text-xs text-slate-500">
              {files.length} file{files.length === 1 ? "" : "s"},{" "}
              {formatBytes(totalBytes)} of {formatBytes(MAX_TOTAL_SIZE_BYTES)}
            </p>
          </div>
        ) : null}
      </div>
      {error ? <p className="mt-2 text-sm text-coral-700">{error}</p> : null}
      <p className="mt-3 text-xs text-slate-500">
        Your documents are treated as confidential project information and
        only shared where reasonably required to review, quote, source or
        manage your package.
      </p>
    </div>
  );
}
