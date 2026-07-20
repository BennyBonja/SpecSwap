export const STEP_META: { id: string; title: string }[] = [
  { id: "contact", title: "Your contact details" },
  { id: "project", title: "About your project" },
  { id: "package", title: "The package" },
  { id: "files", title: "Upload your documentation" },
  { id: "permissions", title: "A couple of permissions" },
];

export const STEP_COUNT = STEP_META.length;

export const PROJECT_TYPE_OPTIONS = [
  "Commercial fitout",
  "Commercial new build",
  "Hospitality & accommodation",
  "Multi-residential",
  "Custom residential",
];

export const PROJECT_VALUE_BAND_OPTIONS = [
  "Under $50k",
  "$50k–$150k",
  "$150k–$500k",
  "$500k+",
  "Not sure yet",
];

export const SPEC_FIXED_OPTIONS = ["Spec is fixed", "Open to alternatives"];

export const PRIORITY_OPTIONS = ["Price", "Lead time", "Design fidelity", "Repeatability"];
