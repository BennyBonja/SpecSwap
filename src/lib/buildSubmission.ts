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

export function buildLeadSubmission(
  answers: FormAnswers,
  uploadedFiles: UploadedFile[] = [],
): Record<string, string> {
  const payload: Record<string, string> = {
    company_name: answers.companyName,
    project_name: answers.projectName,
    project_address: answers.projectAddress,
    swap_type: answers.swapType === "Other" ? answers.swapTypeOther : answers.swapType,
    project_type:
      answers.projectType === "Other" ? answers.projectTypeOther : answers.projectType,
    intent: answers.intent === "Other" ? answers.intentOther : answers.intent,
    lead_time: answers.leadTime,
    budget: answers.budget,
    notes: answers.notes,
    first_name: answers.firstName,
    last_name: answers.lastName,
    email: answers.email,
    phone: answers.phone,
    upload_authorised: String(answers.uploadAuthorised),
    supplier_sharing_acknowledged: String(answers.supplierSharingAcknowledged),
    substitution_approval_acknowledged: String(
      answers.substitutionApprovalAcknowledged,
    ),
  };

  if (uploadedFiles.length > 0) {
    payload.attachments = uploadedFiles
      .map((file) => `${file.name} (${formatBytes(file.size)}): ${file.url}`)
      .join("\n");
  }

  return payload;
}
