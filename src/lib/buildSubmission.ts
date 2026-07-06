import type { FormAnswers } from "@/types/form";

export type UploadedFile = {
  name: string;
  url: string;
  size: number;
};

function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.ceil(bytes / 1024)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export function buildSubmissionFormData(
  answers: FormAnswers,
  uploadedFiles: UploadedFile[] = [],
): FormData {
  const formData = new FormData();

  formData.set("botcheck", "");
  formData.set("company_name", answers.companyName);
  formData.set("project_name", answers.projectName);
  formData.set("project_address", answers.projectAddress);
  formData.set(
    "swap_type",
    answers.swapType === "Other" ? answers.swapTypeOther : answers.swapType,
  );
  formData.set(
    "project_type",
    answers.projectType === "Other"
      ? answers.projectTypeOther
      : answers.projectType,
  );
  formData.set(
    "intent",
    answers.intent === "Other" ? answers.intentOther : answers.intent,
  );
  formData.set("lead_time", answers.leadTime);
  formData.set("budget", answers.budget);
  formData.set("notes", answers.notes);
  formData.set("first_name", answers.firstName);
  formData.set("last_name", answers.lastName);
  formData.set("email", answers.email);
  formData.set("phone", answers.phone);
  formData.set("upload_authorised", String(answers.uploadAuthorised));
  formData.set(
    "supplier_sharing_acknowledged",
    String(answers.supplierSharingAcknowledged),
  );
  formData.set(
    "substitution_approval_acknowledged",
    String(answers.substitutionApprovalAcknowledged),
  );

  if (uploadedFiles.length > 0) {
    formData.set(
      "attachments",
      uploadedFiles
        .map((file) => `${file.name} (${formatBytes(file.size)}): ${file.url}`)
        .join("\n"),
    );
  }

  return formData;
}
