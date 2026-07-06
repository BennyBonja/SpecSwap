import type { FormAnswers } from "@/types/form";

export function buildSubmissionFormData(answers: FormAnswers): FormData {
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

  if (answers.file) {
    formData.set("file", answers.file);
  }

  return formData;
}
