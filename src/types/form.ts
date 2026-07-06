export type FormAnswers = {
  companyName: string;
  projectName: string;
  projectAddress: string;
  swapType: string;
  swapTypeOther: string;
  projectType: string;
  projectTypeOther: string;
  intent: string;
  intentOther: string;
  leadTime: string;
  budget: string;
  notes: string;
  files: File[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
  uploadAuthorised: boolean;
  supplierSharingAcknowledged: boolean;
  substitutionApprovalAcknowledged: boolean;
};

export const INITIAL_ANSWERS: FormAnswers = {
  companyName: "",
  projectName: "",
  projectAddress: "",
  swapType: "",
  swapTypeOther: "",
  projectType: "",
  projectTypeOther: "",
  intent: "",
  intentOther: "",
  leadTime: "",
  budget: "",
  notes: "",
  files: [],
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  termsAccepted: false,
  uploadAuthorised: false,
  supplierSharingAcknowledged: false,
  substitutionApprovalAcknowledged: false,
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
