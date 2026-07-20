"use client";

import { useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import { Check, Upload } from "lucide-react";
import { TextField, TextAreaField } from "@/components/form/fields/TextField";
import { submitToWeb3Forms } from "@/lib/submitToWeb3Forms";
import { uploadFiles } from "@/lib/uploadFiles";
import { ACCEPTED_FILE_EXTENSIONS } from "@/components/form/formSchema";

const tripSchema = z.object({
  name: z.string().trim().min(1, "Enter your name"),
  company: z.string().optional(),
  email: z.email("Enter a valid email address"),
  requirement: z.string().trim().min(1, "Tell us what to look at for you"),
});

type TripFields = z.infer<typeof tripSchema>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FIELDS: TripFields = { name: "", company: "", email: "", requirement: "" };

export function ChinaTripForm() {
  const [fields, setFields] = useState<TripFields>(INITIAL_FIELDS);
  const [files, setFiles] = useState<File[]>([]);
  const [factoryDiscussionConsent, setFactoryDiscussionConsent] = useState(false);
  const [clarificationContactConsent, setClarificationContactConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const setField = (key: keyof TripFields, value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = tripSchema.safeParse(fields);
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    const botcheck = new FormData(event.currentTarget).get("botcheck");
    if (botcheck) {
      setStatus("success");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      let attachments = "";
      if (files.length > 0) {
        setUploadProgress(0);
        const uploaded = await uploadFiles(files, setUploadProgress);
        setUploadProgress(null);
        attachments = uploaded.map((file) => `${file.name}: ${file.url}`).join("\n");
      }

      const submission = await submitToWeb3Forms(
        {
          source: "china-trip",
          name: fields.name,
          company: fields.company ?? "",
          email: fields.email,
          requirement: fields.requirement,
          factory_discussion_consent: String(factoryDiscussionConsent),
          clarification_contact_consent: String(clarificationContactConsent),
          ...(attachments ? { attachments } : {}),
        },
        { subject: "New SpecSwap China trip nomination", fromName: "SpecSwap website" },
      );

      if (!submission.success) {
        setSubmitError(submission.message);
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setSubmitError("We couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    } finally {
      setUploadProgress(null);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral-50 text-coral-600">
          <Check className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
          Nomination received
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          We&apos;ll be in touch before we head to the factory floor.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <TextField label="Name" name="name" value={fields.name} onChange={(v) => setField("name", v)} error={errors.name} autoFocus />
      <TextField label="Company" name="company" value={fields.company ?? ""} onChange={(v) => setField("company", v)} error={errors.company} />
      <TextField label="Email address" name="email" type="email" value={fields.email} onChange={(v) => setField("email", v)} error={errors.email} />
      <TextAreaField
        label="What should we look at for you?"
        name="requirement"
        value={fields.requirement}
        onChange={(v) => setField("requirement", v)}
        error={errors.requirement}
        placeholder="e.g. 60 task chairs + workstations for a Melbourne fitout — local quote feels heavy"
      />

      <div>
        <label className="block text-sm font-medium text-navy-700">Files (optional)</label>
        <div className="mt-1.5 flex items-center gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-navy-700 hover:bg-slate-50"
          >
            <Upload className="h-4 w-4" aria-hidden="true" />
            Add files
          </button>
          {files.length > 0 ? (
            <span className="text-sm text-slate-500">{files.length} file{files.length === 1 ? "" : "s"} attached</span>
          ) : null}
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED_FILE_EXTENSIONS.join(",")}
          onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
          className="sr-only"
        />
      </div>

      <div className="space-y-3">
        <label className="flex items-start gap-2 text-sm text-navy-700">
          <input
            type="checkbox"
            checked={factoryDiscussionConsent}
            onChange={(event) => setFactoryDiscussionConsent(event.target.checked)}
            className="mt-0.5 rounded border-slate-400 text-coral-500 focus:ring-navy-500"
          />
          You may discuss this anonymised requirement with factories during the August programme.
        </label>
        <label className="flex items-start gap-2 text-sm text-navy-700">
          <input
            type="checkbox"
            checked={clarificationContactConsent}
            onChange={(event) => setClarificationContactConsent(event.target.checked)}
            className="mt-0.5 rounded border-slate-400 text-coral-500 focus:ring-navy-500"
          />
          You may contact me to clarify scope.
        </label>
      </div>

      {status === "error" && submitError ? <p className="text-sm text-coral-700">{submitError}</p> : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-coral-500 px-5 py-3 text-sm font-medium text-white hover:bg-coral-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? uploadProgress !== null
            ? `Uploading ${uploadProgress}%…`
            : "Submitting…"
          : "Nominate a package"}
      </button>
    </form>
  );
}
