export type FormAnswers = {
  // Step 1 — Contact
  firstName: string;
  lastName: string;
  companyName: string;
  role: string;
  email: string;
  phone: string;
  // Step 2 — Project
  projectName: string;
  projectLocation: string;
  projectType: string;
  projectTypeOther: string;
  projectValueBand: string;
  requiredOnSiteDate: string;
  // Step 3 — Package
  packageDescription: string;
  packageQuantity: string;
  currentLocalQuote: string;
  specFixed: string;
  priorities: string[];
  // Step 4 — Files
  files: File[];
  // Step 5 — Permissions
  factoryDiscussionConsent: boolean;
  clarificationContactConsent: boolean;
  uploadAuthorised: boolean;
  supplierSharingAcknowledged: boolean;
  substitutionApprovalAcknowledged: boolean;
  termsAccepted: boolean;
};

export const INITIAL_ANSWERS: FormAnswers = {
  firstName: "",
  lastName: "",
  companyName: "",
  role: "",
  email: "",
  phone: "",
  projectName: "",
  projectLocation: "",
  projectType: "",
  projectTypeOther: "",
  projectValueBand: "",
  requiredOnSiteDate: "",
  packageDescription: "",
  packageQuantity: "",
  currentLocalQuote: "",
  specFixed: "",
  priorities: [],
  files: [],
  factoryDiscussionConsent: false,
  clarificationContactConsent: false,
  uploadAuthorised: false,
  supplierSharingAcknowledged: false,
  substitutionApprovalAcknowledged: false,
  termsAccepted: false,
};

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export type UploadFormState = {
  isOpen: boolean;
  stepIndex: number;
  answers: FormAnswers;
  errors: Record<string, string>;
  submitStatus: SubmitStatus;
  submitError: string | null;
};

export type UploadFormAction =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "SET_ANSWERS"; payload: Partial<FormAnswers> }
  | { type: "SET_ERRORS"; errors: Record<string, string> }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR"; error: string }
  | { type: "RESET" };
