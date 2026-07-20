export const NAV_LINKS: { label: string; href: string; accent?: boolean }[] = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "What we source", href: "/#what-we-source" },
  { label: "Pricing", href: "/#how-we-charge" },
  { label: "China Trip", href: "/china-trip", accent: true },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const TURNAROUND_CLAIM = "48 hours";

export const CONTACT_PHONE_DISPLAY = "0493 869 040";
export const CONTACT_PHONE_TEL = "0493869040";
export const CONTACT_EMAIL = "hello@specswap.com.au";

// --- China trip / August factory programme -------------------------------
// NOTE: placeholders per Context04 plan — confirm real dates with Ben before
// shipping, and update slot counts manually as nominations come in.
export const TRIP_DATES = "3–17 August";
export const TRIP_DATES_FULL = "3–17 August 2026";
export const TRIP_CITIES = "Guangdong & Shanghai";
export const TRIP_SLOTS_TOTAL = 10;
export const TRIP_SLOTS_REMAINING = 4;
export const TRIP_NOMINATIONS_CLOSE = "31 July";

// --- Hero -------------------------------------------------------------
export const HERO_BADGE = `In China ${TRIP_DATES} — ${TRIP_SLOTS_TOTAL} builder slots`;
export const HERO_HEADLINE =
  "Factory-direct pricing for commercial fitouts. Managed end-to-end.";
export const HERO_SUBLINE =
  "SpecSwap sources your fitout packages straight from Chinese manufacturers — sourcing, samples, QC and freight, one Australian point of contact. First package review is free.";
export const HERO_MICROTRUST = "No access fees. No memberships. We charge when we deliver.";

export const HERO_PACKAGE_REVIEW_CARD = {
  kicker: "PACKAGE REVIEW · Loose furniture, L3 fitout",
  localLabel: "Local trade quote",
  localPrice: "$184,000",
  factoryLabel: "Factory-direct estimate",
  factoryPrice: "$96,400",
  factoryNote: "incl. freight, duties, QC inspection",
  leadTime: "Lead time: 11 weeks",
  freight: "Freight: 1×40' FCL",
  status: "Suitable for China-direct",
  footnote: "Worked example — every package assessed on its own numbers.",
};

// --- Trust strip --------------------------------------------------------
export const TRUST_STRIP_ITEMS: string[] = [
  "Australian construction experience",
  "Factory comparison & negotiation",
  "Samples & approval tracking",
  "Independent pre-shipment inspection",
  "Freight coordinated to site",
];

// --- Cost chain -----------------------------------------------------------
export const COST_CHAIN_HEADING = "Pay for the product, not the supply chain.";
export const COST_CHAIN_SUBTITLE =
  "Many construction products pass through an importer, distributor and reseller before they reach your project — each with a margin. We connect your package to the factory and manage the rest.";

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

// --- Start with one package ----------------------------------------------
export const PACKAGE_CATEGORIES: { label: string; note?: string; href: string; image: string }[] = [
  { label: "Loose furniture & seating", note: "Task chairs, breakout, boardroom", href: "#what-we-source", image: "/images/category-furniture.webp" },
  { label: "Workstations & tables", note: "Repeat items, multi-floor rollouts", href: "#what-we-source", image: "/images/category-metalwork.webp" },
  { label: "Joinery & cabinetry", note: "Kitchenettes, reception desks, storage (select projects)", href: "#what-we-source", image: "/images/category-cabinetry.webp" },
  { label: "Tiles & flooring", note: "500m²+ packages", href: "#what-we-source", image: "/images/category-flooring.webp" },
  { label: "Decorative lighting", note: "Subject to AU electrical compliance", href: "#what-we-source", image: "/images/category-lighting.webp" },
  { label: "Acoustic & wall panels", note: "PET panels, feature walls", href: "#what-we-source", image: "/images/category-wall-panel.webp" },
];

// --- How it works (3 steps) -----------------------------------------------
export const HOW_IT_WORKS_STEPS: { title: string; description: string }[] = [
  {
    title: "Submit your package",
    description: "Drawings, schedules, BOQs, existing quotes, or a rough product list.",
  },
  {
    title: "Free review & call",
    description:
      "We assess quantities, spec, compliance exposure, freight profile and programme — then talk it through within " +
      TURNAROUND_CLAIM +
      ". Honest answer either way.",
  },
  {
    title: "We source, validate & deliver",
    description:
      "Factory quotations, samples, production oversight, independent pre-shipment inspection, freight to site. You approve at every gate.",
  },
];

// --- China programme (conversion centrepiece) -----------------------------
export const CHINA_PROGRAMME = {
  kicker: "August factory programme",
  title: "Give us something real to investigate.",
  body: `We'll be meeting manufacturers across ${TRIP_CITIES} from ${TRIP_DATES}. Rather than walk factory floors with a generic shopping list, we're inviting Australian builders to nominate real packages for us to investigate — your items, your quantities, your target pricing. We'll come back with factory pricing, photos and video from the floor, and an honest read on whether it stacks up. Free for the first ${TRIP_SLOTS_TOTAL} builders. No obligation to proceed.`,
  prompts: [
    "A package you're currently pricing",
    "A product that's become prohibitively expensive",
    "A repeated item you buy across multiple projects",
    "An existing quote you want tested",
  ],
  footnote: "Commercial information treated confidentially. Anonymised before any factory discussion.",
};

// --- What we source (risk tiers) ------------------------------------------
export const WHAT_WE_SOURCE_GROUPS: {
  tier: string;
  riskLabel: string;
  description: string;
  items: string[];
}[] = [
  {
    tier: "Ready now — low compliance, strong value",
    riskLabel: "Low risk",
    description:
      "Our safest categories — low compliance risk, strong value, ready to source today.",
    items: ["Furniture", "Lighting", "Soft furnishings", "Tiles", "Wall & acoustic panels", "Mirrors, signage & hardware"],
  },
  {
    tier: "Select projects — reviewed before we commit",
    riskLabel: "Medium risk",
    description: "More coordination required, and reviewed on a per-project basis before we commit.",
    items: ["Joinery & cabinetry", "Stone", "Vanities & sanitaryware", "Flooring & stairs", "Windows & doors"],
  },
  {
    tier: "Not actively sold",
    riskLabel: "Case by case",
    description:
      "Only considered where an Australian design, certification and approval pathway is already established.",
    items: ["Fire-rated products", "Structural glazing & balustrades", "Life-safety systems", "Certification-heavy items"],
  },
];

export const WHAT_WE_SOURCE_CLOSING_LINE = "We'll tell you when a package should stay local.";

// --- Why not just go yourself ---------------------------------------------
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
      "Factories shortlisted and assessed before any recommendation — and from August, personally visited",
      "Negotiation and QC handled by someone who's done this before",
      "One point of contact coordinating every category — so finishes and delivery stay consistent across the whole project",
      "You keep control — we just remove the risk",
    ],
  },
};

// --- Trust & process --------------------------------------------------------
export const TRUST_POINTS: { title: string; description: string }[] = [
  {
    title: "Factory assessment & QC",
    description:
      "Every supplier is assessed for quality, reliability and communication before we recommend them — and every order gets an independent pre-shipment inspection on our side, not just a sign-off from the people who made it.",
  },
  {
    title: "Staged-payment protection",
    description:
      "Your product funds move against milestones, never in advance: deposit on order confirmation → production checkpoint payments → final balance only after independent pre-shipment inspection passes. Our service fee is invoiced separately — we never hold your product money.",
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

// --- Founder ----------------------------------------------------------------
export const FOUNDER = {
  name: "Ben Woodward",
  initials: "BW",
  // TODO: swap for a real photo (src/components/sections/Founder.tsx) once
  // taken — see Context04 plan §8.3, open item #4.
  heading: "Built from the builder's side of the table.",
  body: "SpecSwap was founded by Ben Woodward, an Australian construction and procurement professional. After repeatedly seeing the gap between manufacturing cost and local supply pricing, he built SpecSwap to close it — without creating a coordination problem for your project team. In August he's on factory floors in China doing exactly that. We're not offshoring trades — local contractors still coordinate, install and deliver. We're offshoring the one input builders can't control locally: product cost.",
  linkLabel: "What should he look at for you? →",
};

// --- How we charge (pricing) -----------------------------------------------
export const HOW_WE_CHARGE_TIERS: {
  step: string;
  title: string;
  price: string;
  description: string;
}[] = [
  {
    step: "1",
    title: "Opportunity Review",
    price: "Free",
    description:
      "Send a package. We identify what's worth investigating, what should stay local, indicative landed range, programme requirements and key risks. Yours either way.",
  },
  {
    step: "2",
    title: "Package Validation",
    price: "Fixed fee, from $750+GST",
    description:
      "Factory quotations, like-for-like comparisons, sample coordination and a landed-cost recommendation you can take to your client. Scoped and priced before we start — credited in full if you proceed to managed procurement.",
  },
  {
    step: "3",
    title: "Managed Procurement",
    price: "5% of landed cost",
    description:
      "Sourcing, negotiation, production oversight, independent inspection, freight and delivery to site. Minimum project fee $4,500+GST — best suited to packages from ~$50k landed value. Factory costs, freight, duties and inspections itemised separately, so you see where every dollar goes.",
  },
];

export const HOW_WE_CHARGE_FOOTNOTE_TITLE = "No access fees. No memberships. No % of \"savings\" games.";
export const HOW_WE_CHARGE_FOOTNOTE_FAQ =
  'Why % of landed cost and not % of "savings"? Because "savings" invites arguments about the baseline. Landed cost is a number we can both see.';

// --- Residential strip -------------------------------------------------------
export const RESIDENTIAL_STRIP = {
  heading: "Owner-building, renovating, or developing residential?",
  body: "The same factory-direct process works for custom homes, major renovations and multi-dwelling projects with meaningful package volumes. We don't do small one-off orders.",
  linkLabel: "Explore residential sourcing →",
};

// --- FAQ ---------------------------------------------------------------------
export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "What does SpecSwap do?",
    answer:
      "SpecSwap is a China-first construction procurement broker. We assess and shortlist factories, negotiate on your behalf, then manage sourcing, quality control and freight — so you get factory pricing without carrying the import risk yourself.",
  },
  {
    question: "What's the 5% based on?",
    answer:
      "5% of the landed cost of your order — not a percentage of savings, so there's no dispute over what counts as a \"saving\". There's a minimum project fee of $4,500+GST, and it's best suited to packages from around $50k landed value.",
  },
  {
    question: "How is my payment protected?",
    answer:
      "You pay the factory, supplier or freight provider directly, in stages against production and pre-shipment QC milestones — you're never asked to pay in full, upfront, before goods are inspected. SpecSwap never collects or holds your product funds; our own fee is invoiced separately.",
  },
  {
    question: "How do you assess a factory?",
    answer:
      "We assess quality, reliability and communication before recommending any supplier, and arrange independent pre-shipment inspection before goods leave the factory. From our August programme onward, factories we recommend in verified categories will carry a \"factory visited\" badge.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Typically 6–12+ weeks depending on category and production schedule — we'll give you a realistic estimate for your specific items during your review.",
  },
  {
    question: "Is sourcing from China right for every project?",
    answer:
      "No. Every build is different, and sourcing overseas doesn't make sense for every budget, timeline or category. We review each project honestly — sometimes the right answer is that a local supplier is still your best option.",
  },
  {
    question: "Who's responsible for Australian compliance?",
    answer:
      "You and your project's certifiers remain responsible for meeting Australian standards and approvals — that doesn't change because a product is factory-direct. We only bring forward categories with a low compliance burden, flag anything certification-heavy for case-by-case review, and provide the documentation your certifier needs to sign off. If a category needs an approval pathway that isn't already established, we'll tell you before you commit rather than after.",
  },
  {
    question: "Can you guarantee a saving?",
    answer:
      "No — and we think that's the honest answer. Savings depend on your category, quantities, specification and timing, and we won't quote a headline percentage we can't stand behind. What we will do is give you a real, itemised landed-cost estimate for your actual package, so you can judge for yourself whether it stacks up.",
  },
];

// --- Final CTA ---------------------------------------------------------------
export const FINAL_CTA = {
  heading: "What should we look at while we're in China?",
  body: "Send a package, a quote you want tested, or even a one-line product request. We'll review it within 48 hours and tell you whether it deserves further investigation.",
};

// --- Builder's Guide / Factory Report capture ---------------------------------
export const BUILDERS_GUIDE_TITLE = "Builder's Guide to China-Direct Procurement (free)";
export const FACTORY_REPORT_CAPTURE = {
  title: "Get the August Factory Report",
  body: "Real factories, real pricing, unfiltered — sent when we're back.",
};

// --- Footer --------------------------------------------------------------------
export const FOOTER_DESCRIPTION =
  "SpecSwap is a China-direct procurement brokerage for Australian builders — we source, validate and manage selected construction packages from factory to site.";
