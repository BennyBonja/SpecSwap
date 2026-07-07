export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "What we manage", href: "/#what-we-manage" },
  { label: "Who it's for", href: "/#who-its-for" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const TURNAROUND_CLAIM = "24–48 hours";

export const CONTACT_PHONE_DISPLAY = "0493 869 040";
export const CONTACT_PHONE_TEL = "0493869040";
export const CONTACT_EMAIL = "hello@specswap.com.au";

export const TAGLINE_STEPS: { label: string; description: string }[] = [
  { label: "We review", description: "Every line of your schedule" },
  { label: "We compare", description: "Specified, swapped and imported" },
  { label: "You save", description: "18–42% typical, delivered to site" },
];

export const COMPARISON_EXAMPLES: {
  item: string;
  originalPrice: number;
  swapPrice: number;
  saving: number;
  leadTime: string;
}[] = [
  {
    item: "Task chair",
    originalPrice: 620,
    swapPrice: 410,
    saving: 34,
    leadTime: "3–4 weeks",
  },
  {
    item: "Boardroom table",
    originalPrice: 3899,
    swapPrice: 1999,
    saving: 49,
    leadTime: "2–3 weeks",
  },
  {
    item: "Monitor arm",
    originalPrice: 220,
    swapPrice: 145,
    saving: 34,
    leadTime: "1 week",
  },
];

export const TEAM_CREDIBILITY_POINTS: {
  title: string;
  description: string;
}[] = [
  {
    title: "Project coordination",
    description: "Keeping schedules, suppliers and stakeholders in sync.",
  },
  {
    title: "Supplier management",
    description: "Chasing quotes, lead times and order confirmations.",
  },
  {
    title: "Schedules & handover",
    description: "Tracking FF&E line items through to handover documentation.",
  },
  {
    title: "Construction admin",
    description: "Comfortable with the process a live build actually runs on.",
  },
];

export const QUOTE_INCLUDES_ITEMS: string[] = [
  "The original specified item",
  "Our proposed alternative",
  "Visual and design match notes",
  "Price comparison",
  "Lead-time comparison",
  "Supplier and source details",
  "Warranty notes",
  "Suitability notes",
  "Risk and compliance notes",
];

export const HOW_IT_WORKS_STEPS: { title: string; description: string }[] = [
  {
    title: "Upload your spec",
    description:
      "Send your FF&E schedule, drawings, or even just a rough list of what you need to source.",
  },
  {
    title: "We review & match",
    description:
      "Our team checks design intent, quality, lead times and budget, then sources smarter alternatives.",
  },
  {
    title: "Get your SpecSwap quote",
    description:
      "Compare specified, swapped and imported options side by side within " +
      TURNAROUND_CLAIM +
      ".",
  },
  {
    title: "Approve & we handle it",
    description:
      "We manage ordering, supplier coordination, delivery and handover documentation.",
  },
];

export const WHAT_WE_MANAGE_CATEGORIES: {
  title: string;
  items: string[];
}[] = [
  {
    title: "Furniture",
    items: [
      "Loose furniture & workstations",
      "Task chairs",
      "Boardroom tables",
      "Hot-desk setups",
    ],
  },
  {
    title: "Lighting",
    items: [
      "Decorative lighting",
      "Pendants",
      "Architectural fixtures",
      "Mirrors",
    ],
  },
  {
    title: "Appliances & whitegoods",
    items: [
      "Kitchen appliances",
      "Laundry appliances",
      "Commercial fitouts",
      "Residential fitouts",
    ],
  },
  {
    title: "IT & AV",
    items: [
      "Monitors & screens",
      "Meeting room technology",
      "Hot-desking tech",
    ],
  },
  {
    title: "Hardware & accessories",
    items: [
      "Handles & fittings",
      "Bathroom accessories",
      "Small fitout hardware",
    ],
  },
  {
    title: "Selected fitout items",
    items: ["Acoustic wall panels", "Ceiling baffles", "Rugs", "Blinds"],
  },
];

export const SOURCING_MODELS: {
  title: string;
  description: string;
  savings: string;
  leadTime: string;
  bestFor: string;
  priceLabel: string;
  designFidelity: number;
  fidelityLabel: string;
}[] = [
  {
    title: "Specified",
    description:
      "We source the exact product your architect or designer specified — checking availability, seeking better pricing, and confirming lead times.",
    savings: "Best price on the original spec",
    leadTime: "Typical manufacturer lead time",
    bestFor: "Unique or hero pieces where design intent is fixed",
    priceLabel: "Highest (exact spec pricing)",
    designFidelity: 5,
    fidelityLabel: "Exact match",
  },
  {
    title: "Swapped",
    description:
      "Better-value or faster-available alternatives that protect design intent — matched on look, finish, quality, dimensions and warranty.",
    savings: "Save 18–42% vs specified",
    leadTime: "Comparable or faster than specified",
    bestFor: "The majority of furniture, lighting and equipment items",
    priceLabel: "Better value",
    designFidelity: 4,
    fidelityLabel: "High match",
  },
  {
    title: "Imported",
    description:
      "Direct-from-factory options for larger quantities or longer-lead projects — more coordination, bigger potential savings.",
    savings: "Save 20–60%+ vs specified",
    leadTime: "6–12+ weeks",
    bestFor: "Bulk orders and projects with programme flexibility",
    priceLabel: "Biggest potential saving",
    designFidelity: 3,
    fidelityLabel: "Variable",
  },
];

export const SERVICE_TIERS: {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  recommended?: boolean;
}[] = [
  {
    title: "Full FF&E procurement",
    tagline: "Recommended",
    description:
      "We manage the whole process end to end — the primary way project teams work with SpecSwap.",
    features: [
      "Schedule and specification review",
      "Sourcing, quoting and supplier consolidation",
      "Order placement and supplier communication",
      "Delivery coordination and selected installation support",
      "Branded handover documentation",
    ],
    recommended: true,
  },
  {
    title: "Report & supply list",
    tagline: "Report-only",
    description:
      "A comparison report so your team can make informed decisions and manage procurement in-house.",
    features: [
      "Original vs. alternative product comparison",
      "Estimated savings and lead-time comparison",
      "Supplier details and suitability notes",
      "Recommended next steps",
    ],
  },
  {
    title: "Order-on-behalf",
    tagline: "Procurement administration",
    description:
      "Keep commercial control while we handle the supplier chasing and coordination for a management fee.",
    features: [
      "You approve, we place the orders",
      "Supplier coordination and follow-up",
      "Delivery tracking",
      "Progress updates through to completion",
    ],
  },
];

export const AUDIENCE_SEGMENTS: {
  audience: string;
  headline: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
}[] = [
  {
    audience: "Builders",
    headline: "Win trust, protect margin",
    description:
      "Stop chasing a dozen suppliers for one schedule.",
    bullets: [
      "Stronger client proposals",
      "Faster supplier comparisons",
      "Protect your margins",
    ],
    ctaLabel: "Upload a builder spec",
  },
  {
    audience: "Designers",
    headline: "Preserve intent, hit budget",
    description:
      "Keep the look you designed, even when budgets get tight.",
    bullets: [
      "Protect design intent",
      "Smarter alternatives fast",
      "Happy clients, on budget",
    ],
    ctaLabel: "Review a design schedule",
  },
  {
    audience: "Developers",
    headline: "Scale savings across every project",
    description:
      "Repeatable FF&E procurement across multiple sites.",
    bullets: [
      "Consistent quality",
      "Better pricing across volume",
      "Streamlined decision making",
    ],
    ctaLabel: "Talk to us about your portfolio",
  },
  {
    audience: "Homeowners",
    headline: "Furnish smarter, spend better",
    description:
      "The same procurement support the trade uses, made simple.",
    bullets: [
      "Better-value alternatives",
      "Trusted supplier matches",
      "Delivered to your door",
    ],
    ctaLabel: "Upload your furniture list",
  },
];

export const FAQ_CATEGORIES = [
  "General",
  "Services",
  "Uploading",
  "Process",
  "Delivery & installation",
  "Handover",
  "Pricing",
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

export const FAQ_ITEMS: {
  category: FaqCategory;
  question: string;
  answer: string;
}[] = [
  {
    category: "General",
    question: "What exactly does SpecSwap do?",
    answer:
      "SpecSwap is an outsourced FF&E procurement partner. We review your furniture, fixtures and equipment schedule, find smarter sourcing options, and can manage the entire procurement process — ordering, supplier coordination, delivery and handover — so it's not sitting on your plate.",
  },
  {
    category: "General",
    question: "Is this just about finding cheaper products?",
    answer:
      "No. Savings are part of it, but the main value is consolidating a fragmented, time-consuming process into one managed relationship. We're as focused on lead times, reliability and reducing your admin as we are on price.",
  },
  {
    category: "General",
    question: "Who is SpecSwap built for?",
    answer:
      "Builders, fitout contractors, developers, project managers, interior designers, architects, and homeowners undertaking larger renovations or fitouts.",
  },
  {
    category: "Services",
    question: "Do you only provide a comparison report?",
    answer:
      "That's one option, but our primary service is full procurement management — we can take the schedule off your hands entirely, from sourcing through to handover.",
  },
  {
    category: "Services",
    question: "Can you handle installation too?",
    answer:
      "We coordinate delivery and can support selected installation items. For anything structural, fire-rated or highly compliance-critical, we review case by case rather than promising blanket coverage.",
  },
  {
    category: "Services",
    question: "What if I only want to keep the original specified products?",
    answer:
      "That's the 'Specified' option — we'll still check availability, chase better pricing, and confirm lead times, without swapping anything.",
  },
  {
    category: "Uploading",
    question: "What can I upload?",
    answer:
      "An FF&E schedule, a commercial furniture or lighting/appliance schedule, full fitout specifications, or even a rough home furniture list. Documents, spreadsheets, drawings, CAD/BIM files, images and archives are all fine — up to 20 files per submission.",
  },
  {
    category: "Uploading",
    question: "What if I don't have a complete schedule yet?",
    answer:
      "We can help build one — furniture and workstation plans, boardroom AV, appliance schedules, or equipment selections by room or zone.",
  },
  {
    category: "Process",
    question: "How does the review process work?",
    answer:
      "Every project is reviewed case by case by people with interior design, procurement and construction knowledge — checking design intent, quality, dimensions, materials, function, durability, warranty and lead time before anything is recommended.",
  },
  {
    category: "Process",
    question: "How long until I get a quote?",
    answer: `Most initial reviews are returned within ${TURNAROUND_CLAIM} of uploading your documents, depending on schedule size and complexity.`,
  },
  {
    category: "Process",
    question: "Will the alternatives look cheap or inconsistent with the design?",
    answer:
      "No — every swap is assessed for look, finish, quality, dimensions and function against the original design intent. We can also provide visualised renders so you can see how a product will sit in the finished space before committing.",
  },
  {
    category: "Delivery & installation",
    question: "Do you coordinate delivery to site?",
    answer:
      "Yes, delivery coordination is part of the full procurement service, timed against your programme.",
  },
  {
    category: "Delivery & installation",
    question: "Can you manage imported/offshore items?",
    answer:
      "Yes, for selected categories or larger quantities — this involves more coordination around samples, freight, quality control and timing, which we manage on your behalf.",
  },
  {
    category: "Handover",
    question: "What do we get at completion?",
    answer:
      "A structured handover pack — final product schedules, supplier details, warranties, manuals, care instructions and maintenance notes — as a clean digital document, or a bound physical pack on request.",
  },
  {
    category: "Handover",
    question: "Can the handover pack be branded for our company?",
    answer: "Yes, we can brand it with your, your client's, or the project's branding on request.",
  },
  {
    category: "Pricing",
    question: "How is SpecSwap's service priced?",
    answer:
      "It depends on the tier: report-only has a flat reporting fee, order-on-behalf is a procurement administration fee, and full procurement is typically priced against the value and scope of the package — you'll see this clearly in your quote.",
  },
  {
    category: "Pricing",
    question: "Do you take a margin on the products themselves?",
    answer:
      "Our pricing is disclosed clearly in your quote. Depending on the engagement, SpecSwap may charge a procurement fee, management fee, supply margin, or a combination of these. We aim to make the commercial model clear before you proceed.",
  },
];
