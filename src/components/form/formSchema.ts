import { z } from "zod";
import type { FormAnswers } from "@/types/form";

const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg", "application/pdf"];
const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024;

export type ValidationResult = {
  success: boolean;
  errors: Record<string, string>;
};

function toValidationResult(result: {
  success: boolean;
  error?: z.ZodError;
}): ValidationResult {
  if (result.success) return { success: true, errors: {} };
  const errors: Record<string, string> = {};
  for (const issue of result.error?.issues ?? []) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return { success: false, errors };
}

const step0Schema = z.object({
  companyName: z.string().trim().min(1, "Enter your company name"),
  projectName: z.string().trim().min(1, "Enter your project name"),
  projectAddress: z.string().trim().min(1, "Enter your project address"),
});

const step1Schema = z
  .object({
    swapType: z.string().min(1, "Choose an option"),
    swapTypeOther: z.string().optional(),
  })
  .refine(
    (val) => val.swapType !== "Other" || Boolean(val.swapTypeOther?.trim()),
    { message: "Tell us what you'd like swapped", path: ["swapTypeOther"] },
  );

const step2Schema = z
  .object({
    projectType: z.string().min(1, "Choose an option"),
    projectTypeOther: z.string().optional(),
  })
  .refine(
    (val) =>
      val.projectType !== "Other" || Boolean(val.projectTypeOther?.trim()),
    { message: "Tell us your project type", path: ["projectTypeOther"] },
  );

const step3Schema = z
  .object({
    intent: z.string().min(1, "Choose an option"),
    intentOther: z.string().optional(),
  })
  .refine((val) => val.intent !== "Other" || Boolean(val.intentOther?.trim()), {
    message: "Tell us what you're looking for",
    path: ["intentOther"],
  });

const step4Schema = z.object({
  leadTime: z.string().min(1, "Choose a lead time"),
});

const step5Schema = z.object({
  budget: z.string().trim().min(1, "Enter your budget"),
});

const step6Schema = z.object({
  file: z
    .instanceof(File, { message: "Upload a file to continue" })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Accepted formats are PNG, JPEG or PDF",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE_BYTES, {
      message: "File must be under 20MB",
    }),
});

const step7Schema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name"),
  lastName: z.string().trim().min(1, "Enter your last name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().trim().min(1, "Enter your phone number"),
  termsAccepted: z.literal(true, {
    error: "You must agree to the terms and conditions",
  }),
});

export const stepSchemas: ((answers: FormAnswers) => ValidationResult)[] = [
  (answers) => toValidationResult(step0Schema.safeParse(answers)),
  (answers) => toValidationResult(step1Schema.safeParse(answers)),
  (answers) => toValidationResult(step2Schema.safeParse(answers)),
  (answers) => toValidationResult(step3Schema.safeParse(answers)),
  (answers) => toValidationResult(step4Schema.safeParse(answers)),
  (answers) => toValidationResult(step5Schema.safeParse(answers)),
  (answers) => toValidationResult(step6Schema.safeParse(answers)),
  (answers) => toValidationResult(step7Schema.safeParse(answers)),
];

export { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE_BYTES };
