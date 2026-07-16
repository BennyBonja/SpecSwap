export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "What we source", href: "/#what-we-source" },
  { label: "Who it's for", href: "/#who-its-for" },
  { label: "Pricing", href: "/#pricing-model" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const TURNAROUND_CLAIM = "48 hours";

export const CONTACT_PHONE_DISPLAY = "0493 869 040";
export const CONTACT_PHONE_TEL = "0493869040";
export const CONTACT_EMAIL = "hello@specswap.com.au";

export const HERO_ANNOUNCEMENT =
  "Direct from vetted factories in China — managed for Australian builders.";

export const HERO_PANELS: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaType: "link" | "upload";
  ctaHref?: string;
  image: string;
}[] = [
  {
    eyebrow: "Factory-direct pricing",
    title: "Save up to 60%+ vs local trade pricing",
    description:
      "Skip the local distributor markup — we connect you straight to vetted factories.",
    ctaLabel: "See how it works",
    ctaType: "link",
    ctaHref: "#how-it-works",
    image: "/images/hero-factory-pricing.webp",
  },
  {
    eyebrow: "$39.99 guide",
    title: "The Construction Offshore Bible",
    description:
      "The real how-to on sourcing construction products direct from China — categories, costs, mistakes to avoid.",
    ctaLabel: "Get the guide",
    ctaType: "link",
    ctaHref: "#offshore-bible",
    image: "/images/hero-offshore-bible.webp",
  },
  {
    eyebrow: "Free & no obligation",
    title: "Free discovery call, before any commitment",
    description:
      "Upload your project and we'll map out where the real savings are — before you spend a cent.",
    ctaLabel: "Start a project",
    ctaType: "upload",
    image: "/images/hero-project-review.webp",
  },
];

export const CATEGORY_BROWSE_ITEMS: { label: string; href: string; image: string }[] = [
  { label: "Cabinets & Wardrobes", href: "#what-we-source", image: "/images/category-cabinetry.webp" },
  { label: "Doors & Windows", href: "#what-we-source", image: "/images/category-windows-doors.webp" },
  { label: "Flooring & Stairs", href: "#what-we-source", image: "/images/category-flooring.webp" },
  { label: "Lighting", href: "#what-we-source", image: "/images/category-lighting.webp" },
  { label: "Stones", href: "#what-we-source", image: "/images/category-stone.webp" },
  { label: "Furnitures", href: "#what-we-source", image: "/images/category-furniture.webp" },
  { label: "Soft Furnishing", href: "#what-we-source", image: "/images/category-soft-furnishing.webp" },
  { label: "Tiles", href: "#what-we-source", image: "/images/category-tiles.webp" },
  { label: "Sanitary Ware", href: "#what-we-source", image: "/images/category-sanitary-ware.webp" },
  { label: "Electrical Appliances", href: "#what-we-source", image: "/images/category-electrical-appliances.webp" },
  { label: "Metal & Glass", href: "#what-we-source", image: "/images/category-metalwork.webp" },
  { label: "Wall Panel", href: "#what-we-source", image: "/images/category-wall-panel.webp" },
];

export const HOW_IT_WORKS_STEPS: { title: string; description: string }[] = [
  {
    title: "Upload your project",
    description:
      "Send your schedule, drawings, or even just a rough list of the categories you're chasing.",
  },
  {
    title: "We review, no cost",
    description:
      "We check your project before your call so it's never a cold pitch — usually within " +
      TURNAROUND_CLAIM +
      ".",
  },
  {
    title: "Discovery call",
    description:
      "A real conversation about your project — what's possible and whether it's worth pursuing. Pricing for next steps is covered on the call.",
  },
  {
    title: "We source & manage",
    description:
      "Factory vetting, negotiation, QC and freight — direct from China, delivered to site.",
  },
];

export const COST_CHAIN: {
  traditional: { label: string; steps: string[]; priceLabel: string; price: string };
  specswap: { label: string; steps: string[]; priceLabel: string; price: string };
} = {
  traditional: {
    label: "Traditional sourcing",
    steps: ["Factory", "Importer", "Local distributor", "You"],
    priceLabel: "Illustrative $100 spent locally",
    price: "$100",
  },
  specswap: {
    label: "SpecSwap",
    steps: ["Factory", "SpecSwap", "You"],
    priceLabel: "Illustrative China-direct equivalent",
    price: "$38",
  },
};

export const CASE_STUDY_EXAMPLES: {
  category: string;
  title: string;
  description: string;
  localPrice: number;
  chinaPrice: number;
  saving: number;
}[] = [
  {
    category: "Joinery & cabinetry",
    title: "Commercial Office Joinery Package",
    description:
      "3 kitchenettes, a reception desk, 4 storage cupboards and 3 floating shelves for a commercial office fitout.",
    localPrice: 500000,
    chinaPrice: 220000,
    saving: 56,
  },
  {
    category: "Loose furniture",
    title: "Corporate Fitout Furniture Package",
    description:
      "50 task chairs, 12 boardroom tables and a full breakout lounge setting for a corporate office fitout.",
    localPrice: 180000,
    chinaPrice: 74000,
    saving: 59,
  },
  {
    category: "Tiling & flooring",
    title: "Tiling & Flooring Package",
    description:
      "1,200m² of commercial-grade porcelain tiling and engineered timber flooring across a multi-level fitout.",
    localPrice: 320000,
    chinaPrice: 135000,
    saving: 58,
  },
];

export const WHAT_WE_SOURCE_GROUPS: {
  tier: string;
  riskLabel: string;
  description: string;
  items: string[];
}[] = [
  {
    tier: "Lighting, furniture & finishes",
    riskLabel: "Low risk, great savings",
    description:
      "Our safest categories — low compliance risk, strong savings, ready to source today.",
    items: [
      "Lighting",
      "Furnitures",
      "Soft Furnishing",
      "Tiles",
      "Wall Panel",
      "Electrical Appliances",
    ],
  },
  {
    tier: "Cabinets, doors & stone",
    riskLabel: "Medium risk, huge savings",
    description:
      "More coordination required, but this is where the biggest packages save the most.",
    items: ["Cabinets & Wardrobes", "Doors & Windows", "Flooring & Stairs", "Stones", "Sanitary Ware"],
  },
  {
    tier: "Structural & certified items",
    riskLabel: "Case by case",
    description:
      "Risks identified and managed individually — never blanket-offered.",
    items: ["Metal & Glass (balustrades, structural glazing)", "Fire-rated products", "Certification-heavy items"],
  },
];

export const DIY_VS_SPECSWAP: {
  diy: { title: string; points: string[] };
  specswap: { title: string; points: string[] };
} = {
  diy: {
    title: "Doing it yourself",
    points: [
      "Navigating 1688/Alibaba listings with no way to verify quality",
      "Setting up Alipay and negotiating in a second language",
      "No one on the ground if a factory doesn't deliver",
      "Every mistake is a mistake you pay for",
    ],
  },
  specswap: {
    title: "Working with SpecSwap",
    points: [
      "Vetted factories we've already assessed for quality and reliability",
      "Negotiation and QC handled by someone who's done this before",
      "One point of contact coordinating every category — so finishes and delivery stay consistent across the whole project",
      "You keep control — we just remove the risk",
    ],
  },
};

export const TRUST_POINTS: { title: string; description: string }[] = [
  {
    title: "Factory vetting & QC",
    description:
      "Every supplier is assessed for quality, reliability and communication before we recommend them — and every order gets an independent pre-shipment inspection on our side, not just a sign-off from the people who made it.",
  },
  {
    title: "Payment & fund security",
    description:
      "We stage payments against production and pre-shipment QC milestones — you're never asked to pay a factory in full, upfront, before goods are inspected.",
  },
  {
    title: "Compliance discipline",
    description:
      "We stick to low-compliance categories first — lighting, hardware, acoustic panels, furniture — and review structural or fire-rated items case by case, not blanket.",
  },
  {
    title: "Warranties & after-sales",
    description:
      "Clear warranty terms agreed before you commit, handover documentation your installer can actually use, and a single point of contact if anything needs following up after delivery.",
  },
];

export const CREDIBILITY_BLURB =
  "Construction costs in Australia have priced too many people out of building altogether. SpecSwap's mission is to identify the best, most efficient construction suppliers in the world and connect them directly to Australian builders — so local trades keep winning work, and clients aren't priced out of their own project. We're not offshoring jobs; we're offshoring the one input builders can't control locally — product cost — so the industry can make building affordable again.";

export const PRICING_TIERS: {
  title: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  recommended?: boolean;
}[] = [
  {
    title: "Construction Offshore Bible",
    price: "$39.99",
    tagline: "Start here",
    description:
      "The how-to guide for sourcing construction products direct from China — for the curious and the DIY researcher.",
    features: [
      "Categories worth sourcing overseas",
      "Real process walkthrough, factory to site",
      "Common mistakes and how to avoid them",
      "Freight & customs basics",
    ],
  },
  {
    title: "Free Discovery Call",
    price: "Free",
    tagline: "No cost, no obligation",
    description:
      "Upload your project and we'll map out where the real savings are — before you spend a cent.",
    features: [
      "Your project reviewed by our team",
      "Biggest savings categories identified",
      "Honest read on whether this fits your project",
      "No obligation to continue",
    ],
  },
  {
    title: "Sourcing Strategy Session",
    price: "$499",
    tagline: "Most common next step",
    description:
      "We plan your entire DIY China-sourcing journey — the suppliers, the paperwork, the shipping — so you know exactly what it takes. Most clients realize it's easier to just have us run it.",
    features: [
      "A full sourcing plan for your project",
      "The suppliers and factories to approach",
      "A 3D visual of your products before you commit to anything",
      "Package structuring and next steps",
      "Credited in full toward your brokerage fee if you proceed",
    ],
    recommended: true,
  },
  {
    title: "Full-Cycle Sourcing & Management",
    price: "5% of landed cost",
    tagline: "Once you're ready",
    description:
      "We source, negotiate, QC and manage delivery — direct from factory to your site.",
    features: [
      "Factory sourcing & negotiation",
      "Independent quality control & pre-shipment inspection",
      "Freight coordination & order tracking",
      "Delivery to site, storage, or a preferred facility",
      "Preferred Australian installers, or self-install",
    ],
  },
];

export const STRATEGY_SESSION_INCLUDES: string[] = [
  "Your project and timeline",
  "The suppliers and factories to approach",
  "A 3D visual of your products before you commit to anything",
  "Package structuring — what to bundle, what to keep separate",
  "Paperwork and process you'd need to DIY",
  "Realistic savings ranges for your items",
  "Your next step — DIY it, or hand it to us",
];

export const OFFSHORE_BIBLE: {
  title: string;
  price: string;
  whatsInside: string[];
  whoItsFor: string;
  ctaLabel: string;
} = {
  title: "The Construction Offshore Bible",
  price: "$39.99",
  whatsInside: [
    "How the factory-to-site process actually works",
    "Real cost breakdowns by category",
    "How to vet a factory before you commit to anything",
    "Freight, customs and biosecurity basics",
    "The mistakes that cost first-timers the most",
    "Glossary and tools to keep on hand",
  ],
  whoItsFor:
    "Builders, designers and owner-builders who want to understand the process before they spend a cent on a call.",
  ctaLabel: "Get the Offshore Bible",
};

export const AUDIENCE_SEGMENTS: {
  audience: string;
  headline: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
}[] = [
  {
    audience: "Developers",
    headline: "Repeatable savings across every site",
    description:
      "Multi-site or repeat projects are where factory-direct sourcing compounds — the same categories, sourced once, delivered everywhere.",
    bullets: [
      "Consistent quality across sites",
      "Factory relationships that scale with volume",
      "Consistent specs, finishes and delivery batches across every site",
    ],
    ctaLabel: "Talk to us about your portfolio",
  },
  {
    audience: "Designers",
    headline: "Protect design intent, hit the budget",
    description:
      "Source the finish you specified, not a compromise — direct from the factory that can actually make it.",
    bullets: [
      "Protect design intent",
      "Access to categories local suppliers can't match on price",
      "Happy clients, on budget",
    ],
    ctaLabel: "Review a design schedule",
  },
  {
    audience: "Builders",
    headline: "One broker, not a dozen suppliers",
    description:
      "Stop chasing quotes from suppliers who won't give a small operator their best price.",
    bullets: [
      "Stronger client proposals",
      "Factory pricing without the import risk",
      "Protect your margins",
    ],
    ctaLabel: "Upload a builder spec",
  },
  {
    audience: "Homeowners",
    headline: "The same access the trade uses",
    description:
      "Factory-direct sourcing for owner-builders and larger renovations, simplified.",
    bullets: [
      "Better-value alternatives",
      "Vetted supplier matches",
      "Delivered to site",
    ],
    ctaLabel: "Upload your project",
  },
];

export const FAQ_CATEGORIES = [
  "General",
  "The Process",
  "Pricing & Fees",
  "Quality & Trust",
  "Shipping & Delivery",
] as const;

export type FaqCategory = (typeof FAQ_CATEGORIES)[number];

export const FAQ_ITEMS: {
  category: FaqCategory;
  question: string;
  answer: string;
}[] = [
  {
    category: "General",
    question: "What does SpecSwap do?",
    answer:
      "SpecSwap is a China-first construction procurement broker. We find, vet and negotiate direct with factories on your behalf, then manage sourcing, quality control and freight — so you get factory pricing without carrying the import risk yourself.",
  },
  {
    category: "General",
    question: "Is this just about finding cheaper products?",
    answer:
      "No. The biggest barrier for a small operator isn't finding a cheaper factory — it's trusting one you've never dealt with, and having someone actually manage the process. That's the real value: we do the vetting, negotiation and QC so you don't have to run it blind.",
  },
  {
    category: "General",
    question: "Who is SpecSwap built for?",
    answer:
      "Builders, fitout contractors, developers, designers and architects, and owner-builders taking on a larger renovation.",
  },
  {
    category: "The Process",
    question: "How does the free discovery call work?",
    answer:
      "Upload your project and we'll review it before the call — no cost, no obligation. We'll walk you through where the real savings are and whether China-direct sourcing is worth pursuing for your project.",
  },
  {
    category: "The Process",
    question: "What's a Sourcing Strategy Session?",
    answer:
      "A paid, deeper session where we plan your entire DIY sourcing journey — the suppliers to approach, how to structure your packages, what paperwork you'll need. It's $499, credited in full toward your brokerage fee if you engage us for full sourcing afterwards. Most clients realize it's easier to just have us run it.",
  },
  {
    category: "The Process",
    question: "What happens after the strategy session?",
    answer:
      "If it's a good fit, we start full-cycle sourcing — negotiating with factories, managing QC and freight, and keeping you updated until it lands on site.",
  },
  {
    category: "The Process",
    question: "Do I need to travel to China myself?",
    answer:
      "No. We're the ones on the ground — that's the point of working with a broker instead of going direct yourself.",
  },
  {
    category: "Quality & Trust",
    question: "How do you vet a factory?",
    answer:
      "We assess quality, reliability and communication before recommending any supplier, and arrange pre-shipment inspection before goods leave the factory.",
  },
  {
    category: "Quality & Trust",
    question: "How is my payment protected?",
    answer:
      "We stage payments against production and pre-shipment QC milestones — you're never asked to pay a factory in full, upfront, before goods are inspected.",
  },
  {
    category: "Quality & Trust",
    question: "Does sourcing from China take Australian jobs?",
    answer:
      "We work with factories that already export to established markets — we're giving Australian builders access to global pricing on categories where local trade pricing doesn't work for a small operator, not displacing locally competitive manufacturing.",
  },
  {
    category: "Quality & Trust",
    question: "Is sourcing from China right for every project?",
    answer:
      "No. Every build is different, and sourcing overseas doesn't make sense for every budget, timeline or category. We review each project honestly — sometimes the right answer is that a local supplier is still your best option.",
  },
  {
    category: "Pricing & Fees",
    question: "Is the discovery call really free?",
    answer:
      "Yes — uploading your project and having it reviewed costs nothing. You only pay if you choose to book a Sourcing Strategy Session or engage us for full sourcing.",
  },
  {
    category: "Pricing & Fees",
    question: "What does the Sourcing Strategy Session cost?",
    answer:
      "$499, credited in full toward your brokerage fee if you proceed with full-cycle sourcing.",
  },
  {
    category: "Pricing & Fees",
    question: "What's the 5% brokerage fee based on?",
    answer:
      "5% of the landed cost of your order — not a percentage of savings, so there's no dispute over what counts as a 'saving'. You'll know exactly what it's based on before you commit.",
  },
  {
    category: "Pricing & Fees",
    question: "What's in the Offshore Bible?",
    answer:
      "A real process walkthrough from factory to site, cost breakdowns by category, how to vet a factory, freight and customs basics, and the mistakes that cost first-timers the most.",
  },
  {
    category: "Shipping & Delivery",
    question: "How long does shipping take?",
    answer:
      "Typically 6–12+ weeks depending on category and production schedule — we'll give you a realistic estimate for your specific items during your call.",
  },
  {
    category: "Shipping & Delivery",
    question: "What happens between landing and delivery to site?",
    answer:
      "We coordinate storage if your site isn't ready and manage delivery timing against your programme.",
  },
];
