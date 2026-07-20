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
    source: "package-form",
    first_name: answers.firstName,
    last_name: answers.lastName,
    company_name: answers.companyName,
    role: answers.role,
    email: answers.email,
    phone: answers.phone,
    project_name: answers.projectName,
    project_location: answers.projectLocation,
    project_type:
      answers.projectType === "Other" ? answers.projectTypeOther : answers.projectType,
    project_value_band: answers.projectValueBand,
    required_on_site_date: answers.requiredOnSiteDate,
    package_description: answers.packageDescription,
    package_quantity: answers.packageQuantity,
    current_local_quote: answers.currentLocalQuote,
    spec_fixed: answers.specFixed,
    priorities: answers.priorities.join(", "),
    factory_discussion_consent: String(answers.factoryDiscussionConsent),
    clarification_contact_consent: String(answers.clarificationContactConsent),
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
