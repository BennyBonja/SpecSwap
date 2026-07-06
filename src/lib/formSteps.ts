export const STEP_META: { id: string; title: string }[] = [
  { id: "project-info", title: "About your project" },
  { id: "swap-type", title: "What do you want swapped?" },
  { id: "project-type", title: "What type of project?" },
  { id: "intent", title: "What are you looking for?" },
  { id: "lead-time", title: "What lead times fit your programme?" },
  { id: "budget", title: "Budget and notes" },
  { id: "file-upload", title: "Upload your documentation" },
  { id: "contact", title: "Where should we send your quote?" },
];

export const STEP_COUNT = STEP_META.length;

export const SWAP_TYPE_OPTIONS = [
  "FF&E schedule",
  "Commercial furniture schedule",
  "Lighting or appliances schedule",
  "Full fitout specifications",
  "Home furniture schedule",
];

export const PROJECT_TYPE_OPTIONS = [
  "Commercial office",
  "Hospitality",
  "Retail",
  "Apartment development",
  "Commercial development",
  "Residential",
];

export const INTENT_OPTIONS = [
  "Just a quote",
  "Delivery & installation",
  "Importing services",
];

export const LEAD_TIME_OPTIONS = [
  "ASAP",
  "1-2 weeks",
  "3-4 weeks",
  "4-6 weeks",
  "6-8 weeks",
  "8-12+ weeks",
  "Just curious",
];
