"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Check } from "lucide-react";
import { TextField, TextAreaField } from "@/components/form/fields/TextField";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Enter your name"),
  email: z.email("Enter a valid email address"),
  message: z.string().trim().min(1, "Enter a message"),
});

type EnquiryFields = z.infer<typeof enquirySchema>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_FIELDS: EnquiryFields = { name: "", email: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<EnquiryFields>(INITIAL_FIELDS);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField = (key: keyof EnquiryFields, value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = enquirySchema.safeParse(fields);
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.set("botcheck", "");
      formData.set("name", fields.name);
      formData.set("email", fields.email);
      formData.set("message", fields.message);

      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setSubmitError(data.message ?? "We couldn't send that. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setSubmitError("We couldn't send that. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-coral-50 text-coral-600">
          <Check className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <TextField
        label="Name"
        name="name"
        value={fields.name}
        onChange={(value) => setField("name", value)}
        error={errors.name}
      />
      <TextField
        label="Email address"
        name="email"
        type="email"
        value={fields.email}
        onChange={(value) => setField("email", value)}
        error={errors.email}
      />
      <TextAreaField
        label="Message"
        name="message"
        value={fields.message}
        onChange={(value) => setField("message", value)}
        error={errors.message}
      />
      {status === "error" && submitError ? (
        <p className="text-sm text-coral-700">{submitError}</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-coral-500 px-5 py-3 text-sm font-medium text-white hover:bg-coral-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
