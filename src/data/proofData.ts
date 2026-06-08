export type ProofMetric = {
  id: string;
  value: string;
  label: string;
  description: string;
  sourceType: "source-backed" | "demo-placeholder";
};

export type ProofModule = {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon: "building" | "check" | "truck" | "sparkles" | "network";
  appliedTo2WTC: string;
};

export type PlaybookPillar = {
  id: string;
  title: string;
  bullets: string[];
  icon: "strategy" | "mockups" | "supply" | "execution" | "quality" | "data";
};

export type TransferMatrixItem = {
  id: string;
  provenAt270Park: string;
  appliedTo2WTC: string;
};

export type PlaybookAccordionItem = {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  icon: "scale" | "experience" | "speed" | "quality" | "safety" | "data";
};

export const proofMetrics: ProofMetric[] = [
  {
    id: "floors",
    value: "28",
    label: "Floors",
    description: "Interior buildout scope at 270 Park Avenue",
    sourceType: "source-backed",
  },
  {
    id: "area",
    value: "1.3M+ SF",
    label: "Headquarters Interiors",
    description: "Interior buildout area delivered",
    sourceType: "source-backed",
  },
  {
    id: "population",
    value: "10,000",
    label: "Employees Supported",
    description: "Workplace population supported",
    sourceType: "source-backed",
  },
  {
    id: "environment",
    value: "$500M+",
    label: "Interior GC Budget",
    description: "270 Park interior construction budget identified in the RFI response",
    sourceType: "source-backed",
  },
  {
    id: "program",
    value: "LEED / WELL / Fitwel",
    label: "Certification Pursuit",
    description: "Sustainability and wellness targets cited for the headquarters interiors",
    sourceType: "source-backed",
  },
];

export const proofModules: ProofModule[] = [
  {
    id: "workplace",
    title: "Complex Workplace Delivery",
    description: "Delivered 28 floors and 1.3M+ SF of headquarters interiors supporting 10,000 employees.",
    image: "/assets/renderings/amex-2wtc-fulton.jpg",
    icon: "building",
    appliedTo2WTC: "Translate repeatable workplace controls to AMEX floor communities, executive zones, and exchange-level adjacencies across levels 7-55.",
  },
  {
    id: "mockups",
    title: "1st Works + Mockup Quality",
    description: "Uses first-installation signoffs, mockups, checklists, and QAD pre-inspections before broad production.",
    image: "/assets/renderings/amex-2wtc-greenwich.jpg",
    icon: "check",
    appliedTo2WTC: "Use 1st works gates for hospitality, conference, wellness, executive, and workplace kit-of-parts standards.",
  },
  {
    id: "logistics",
    title: "Vertical Logistics Excellence",
    description: "Plans the tower as floor-block packages with elevator-bank logistics, staging, and protected completed areas.",
    image: "/assets/renderings/amex-2wtc-day-crown.jpg",
    icon: "truck",
    appliedTo2WTC: "Plan 4-6 floor work packages, two-floor production waves, and elevator-bank sequencing around AMEX levels 7-55.",
  },
  {
    id: "amenities",
    title: "Hospitality-Grade Amenities",
    description: "Delivered premium office, dining, conference, wellness, security, and client-facing environments.",
    image: "/assets/renderings/amex-2wtc-looking-up.jpg",
    icon: "sparkles",
    appliedTo2WTC: "Apply dining, wellness, terrace, security, and convening lessons to Central Exchange and destination floors.",
  },
  {
    id: "systems",
    title: "Technology + Systems Controls",
    description: "Uses Procore, P6, Autodesk Construction Cloud, Revit/Navisworks, Egnyte, and HammerTech reporting workflows.",
    image: "/assets/renderings/amex-2wtc-dusk-crown.jpg",
    icon: "network",
    appliedTo2WTC: "Connect AV, IT, access control, permitting, safety, turnover, and executive reporting into a shared delivery model.",
  },
];

export const playbookPillars: PlaybookPillar[] = [
  { id: "strategy", title: "Strategic Planning & Alignment", icon: "strategy", bullets: ["Early partner alignment", "104 pricing exercises", "$34M VE ideas", "Executive governance"] },
  { id: "mockups", title: "Mockups & Validation", icon: "mockups", bullets: ["1st works program", "Stakeholder signoff", "Finish benchmarking", "Repeatable standards"] },
  { id: "supply", title: "Supply Chain Optimization", icon: "supply", bullets: ["Long-lead strategy", "Early release packages", "Tariff risk tracking", "Vendor partnerships"] },
  { id: "execution", title: "Execution Excellence", icon: "execution", bullets: ["4-6 floor packages", "Two-floor production waves", "Weekly lookaheads", "Field transparency"] },
  { id: "quality", title: "Quality & Commissioning", icon: "quality", bullets: ["QAD pre-inspections", "Procore QA/QC", "Systems testing", "TCO readiness"] },
  { id: "data", title: "Data & Visibility", icon: "data", bullets: ["Procore dashboards", "P6 schedule controls", "Risk register", "HammerTech safety"] },
];

export const transferMatrix: TransferMatrixItem[] = [
  { id: "scale", provenAt270Park: "28 floors / 1.3M+ SF high-rise interiors", appliedTo2WTC: "AMEX levels 7-55 with executive, exchange, workplace, and service zones" },
  { id: "population", provenAt270Park: "10,000-employee workplace scale", appliedTo2WTC: "Up to 10,000 AMEX colleagues" },
  { id: "amenities", provenAt270Park: "Premium corporate dining and amenities", appliedTo2WTC: "Exchange levels, food service, terraces, convening hubs" },
  { id: "executive", provenAt270Park: "Executive and client-facing environments", appliedTo2WTC: "Executive Committee workplace and convening levels" },
  { id: "systems", provenAt270Park: "Advanced security, technology, and MEP coordination", appliedTo2WTC: "Financial-services-grade access, AV, IT, MEP, and operational systems" },
  { id: "sustainability", provenAt270Park: "LEED Platinum, WELL, and Fitwel pursuit", appliedTo2WTC: "Wellness-forward AMEX headquarters with terraces, gardens, and green roofs" },
];

export const applyingPlaybook: PlaybookAccordionItem[] = [
  { id: "scale", title: "Complexity at Scale", subtitle: "28 floors, 1.3M+ SF, 10,000 employees", detail: "270 Park establishes a playbook for coordinating many program types across a high-rise headquarters without losing executive visibility.", icon: "scale" },
  { id: "experience", title: "Experience-Led Delivery", subtitle: "Premium dining, wellness, conference, and security", detail: "Hospitality, wellness, dining, security, and conference lessons become planning inputs for exchange levels and colleague destinations.", icon: "experience" },
  { id: "speed", title: "Schedule Discipline", subtitle: "P6, Asta, MS Project, and weekly lookaheads", detail: "Early package strategy, 4-6 floor work blocks, and elevator-bank sequencing turn complexity into controlled momentum.", icon: "speed" },
  { id: "quality", title: "Quality Without Compromise", subtitle: "1st works, mockups, Procore QA/QC, QAD walks", detail: "Repeatable standards protect design intent while allowing floors and amenity spaces to move through production predictably.", icon: "quality" },
  { id: "safety", title: "Safety as a Core Value", subtitle: "HammerTech reporting and no OSHA violations in five years", detail: "A headquarters program of this profile demands visible safety leadership, clear logistics, incident reporting, and daily field accountability.", icon: "safety" },
  { id: "data", title: "Data-Driven Decisions", subtitle: "Procore, P6, risk register, and executive cadence", detail: "Executive reporting converts field progress, risks, procurement, permitting, and readiness into timely decisions.", icon: "data" },
];

export const proofGallery = [
  { title: "Headquarters Arrival", image: "/assets/renderings/amex-2wtc-greenwich.jpg" },
  { title: "Amenity / Hospitality", image: "/assets/renderings/amex-2wtc-fulton.jpg" },
  { title: "Executive Workplace", image: "/assets/renderings/amex-2wtc-day-crown.jpg" },
  { title: "Construction Logistics", image: "/assets/renderings/amex-2wtc-hero.jpg" },
  { title: "Systems Coordination", image: "/assets/renderings/amex-2wtc-looking-up.jpg" },
];
