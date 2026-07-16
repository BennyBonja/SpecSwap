export const STEP_META: { id: string; title: string }[] = [
  { id: "project-info", title: "About your project" },
  { id: "swap-type", title: "What are you sourcing?" },
  { id: "project-type", title: "What type of project?" },
  { id: "intent", title: "What are you looking for?" },
  { id: "lead-time", title: "What lead times fit your programme?" },
  { id: "budget", title: "Budget and notes" },
  { id: "file-upload", title: "Upload your documentation" },
  { id: "contact", title: "Where should we send your confirmation?" },
];

export const STEP_COUNT = STEP_META.length;

export const SWAP_TYPE_OPTIONS = [
  "Cabinets & Wardrobes",
  "Doors & Windows",
  "Flooring & Stairs",
  "Lighting",
  "Stones",
  "Furnitures",
  "Soft Furnishing",
  "Tiles",
  "Sanitary Ware",
  "Electrical Appliances",
  "Metal & Glass",
  "Wall Panel",
  "Other",
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
  "Just the Offshore Bible",
  "A free discovery call",
  "A paid Sourcing Strategy Session",
  "Ready for full sourcing & management",
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
