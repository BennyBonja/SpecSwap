import { z } from "zod";
import type { FormAnswers } from "@/types/form";

const ACCEPTED_FILE_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".rtf",
  ".txt",
  ".xlsx",
  ".xls",
  ".csv",
  ".ppt",
  ".pptx",
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".heic",
  ".heif",
  ".tif",
  ".tiff",
  ".dwg",
  ".dxf",
  ".rvt",
  ".skp",
  ".ifc",
  ".zip",
  ".7z",
];
const MAX_FILE_SIZE_BYTES = 200 * 1024 * 1024;
const MAX_TOTAL_SIZE_BYTES = 500 * 1024 * 1024;
const MAX_FILE_COUNT = 20;

function getExtension(fileName: string): string {
  const dotIndex = fileName.lastIndexOf(".");
  return dotIndex === -1 ? "" : fileName.slice(dotIndex).toLowerCase();
}

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

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name"),
  lastName: z.string().trim().min(1, "Enter your last name"),
  companyName: z.string().trim().min(1, "Enter your company name"),
  role: z.string().optional(),
  email: z.email("Enter a valid email address"),
  phone: z.string().trim().min(1, "Enter your phone number"),
});

const projectSchema = z
  .object({
    projectName: z.string().trim().min(1, "Enter your project name"),
    projectLocation: z.string().trim().min(1, "Enter your project location"),
    projectType: z.string().min(1, "Choose a project type"),
    projectTypeOther: z.string().optional(),
    projectValueBand: z.string().min(1, "Choose an approximate project value"),
    requiredOnSiteDate: z.string().trim().min(1, "Enter a required-on-site date"),
  })
  .refine(
    (val) => val.projectType !== "Other" || Boolean(val.projectTypeOther?.trim()),
    { message: "Tell us your project type", path: ["projectTypeOther"] },
  );

const packageSchema = z.object({
  packageDescription: z.string().trim().min(1, "Tell us what product or package this is"),
  packageQuantity: z.string().trim().min(1, "Enter an approximate quantity"),
  currentLocalQuote: z.string().optional(),
  specFixed: z.string().min(1, "Choose an option"),
  priorities: z.array(z.string()),
});

const filesSchema = z.object({
  files: z
    .array(z.instanceof(File))
    .min(1, "Upload at least one file to continue")
    .max(MAX_FILE_COUNT, `You can upload up to ${MAX_FILE_COUNT} files`)
    .refine(
      (files) =>
        files.every((file) =>
          ACCEPTED_FILE_EXTENSIONS.includes(getExtension(file.name)),
        ),
      { message: "One or more files are an unsupported format" },
    )
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE_BYTES), {
      message: "Each file must be under 200MB",
    })
    .refine(
      (files) =>
        files.reduce((total, file) => total + file.size, 0) <=
        MAX_TOTAL_SIZE_BYTES,
      { message: "Total upload size must be under 500MB" },
    ),
});

const permissionsSchema = z.object({
  termsAccepted: z.literal(true, {
    error: "You must agree to the terms and conditions",
  }),
  uploadAuthorised: z.literal(true, {
    error: "Please confirm you're authorised to share these documents",
  }),
  supplierSharingAcknowledged: z.literal(true, {
    error: "Please acknowledge how we share project information",
  }),
  substitutionApprovalAcknowledged: z.literal(true, {
    error: "Please acknowledge that substitutions need stakeholder approval",
  }),
  factoryDiscussionConsent: z.boolean(),
  clarificationContactConsent: z.boolean(),
});

export const stepSchemas: ((answers: FormAnswers) => ValidationResult)[] = [
  (answers) => toValidationResult(contactSchema.safeParse(answers)),
  (answers) => toValidationResult(projectSchema.safeParse(answers)),
  (answers) => toValidationResult(packageSchema.safeParse(answers)),
  (answers) => toValidationResult(filesSchema.safeParse(answers)),
  (answers) => toValidationResult(permissionsSchema.safeParse(answers)),
];

export {
  ACCEPTED_FILE_EXTENSIONS,
  MAX_FILE_SIZE_BYTES,
  MAX_TOTAL_SIZE_BYTES,
  MAX_FILE_COUNT,
  getExtension,
};
