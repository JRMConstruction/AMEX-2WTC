import type { NavMode } from "./dashboardMetrics";

export type InterfaceMetric = {
  label: string;
  value: string;
  detail: string;
  tone?: "blue" | "teal" | "gold" | "red" | "green";
};

export type InterfaceCard = {
  title: string;
  text: string;
  image?: string;
};

export type NavInterface = {
  mode: Exclude<NavMode, "STACK">;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  metrics: InterfaceMetric[];
  leftTitle: string;
  leftItems: string[];
  centerTitle: string;
  centerItems: string[];
  rightTitle: string;
  rightItems: string[];
  cards: InterfaceCard[];
};

export const navInterfaces: Record<Exclude<NavMode, "STACK">, NavInterface> = {
  VISION: {
    mode: "VISION",
    eyebrow: "A Connected Ecosystem",
    title: "Headquarters Vision",
    subtitle: "A vertical campus for American Express that connects workplace communities, hospitality, leadership, and outdoor space.",
    image: "/assets/renderings/amex-2wtc-dusk-crown.jpg",
    metrics: [
      { label: "Vertical Campus", value: "7-55", detail: "Floors in scope", tone: "blue" },
      { label: "Exchange Levels", value: "7+", detail: "Amenity anchors", tone: "teal" },
      { label: "Opening", value: "2031", detail: "Target occupancy", tone: "gold" },
      { label: "Outdoor Space", value: "52,090 SF", detail: "Terraces, gardens, sedum roofs", tone: "green" },
    ],
    leftTitle: "Experience Principles",
    leftItems: ["Connected colleague ecosystem", "Hospitality-driven exchange", "Client-ready executive environments", "Future-forward workplace communities"],
    centerTitle: "Vertical Campus Story",
    centerItems: ["Arrival and colleague center establish the campus experience", "Exchange levels become shared destinations", "Workplace communities stack around amenity anchors", "Leadership workplace crowns the campus"],
    rightTitle: "JRM Pursuit Message",
    rightItems: ["From 270 Park to 2 World Trade Center", "Building Certainty. Delivering Excellence.", "A Trusted Partner for American Express"],
    cards: [
      { title: "Campus Arrival", text: "A clear, secure arrival experience sets the tone for the headquarters.", image: "/assets/renderings/amex-2wtc-greenwich.jpg" },
      { title: "Exchange Levels", text: "Amenity anchors create natural convening moments across the tower.", image: "/assets/renderings/amex-2wtc-looking-up.jpg" },
      { title: "Leadership Workplace", text: "Executive environments balance hospitality, security, and performance.", image: "/assets/renderings/amex-2wtc-day-crown.jpg" },
    ],
  },
  EXPERIENCE: {
    mode: "EXPERIENCE",
    eyebrow: "Workplace Communities",
    title: "Colleague Experience",
    subtitle: "Journey-led views show how colleagues, guests, executives, and operators move through the vertical campus.",
    image: "/assets/renderings/amex-2wtc-fulton.jpg",
    metrics: [
      { label: "Colleague Journey", value: "Daily", detail: "Arrival to exchange", tone: "blue" },
      { label: "Client Journey", value: "Hosted", detail: "Secure and premium", tone: "teal" },
      { label: "Operations Journey", value: "Live", detail: "Service flow", tone: "green" },
      { label: "Experience Standards", value: "1st Works", detail: "Mockups and signoff gates", tone: "gold" },
    ],
    leftTitle: "Journey Selector",
    leftItems: ["Colleague Journey", "Client Journey", "Executive Journey", "Operations Journey"],
    centerTitle: "Day in the Life",
    centerItems: ["Arrive through secure colleague center", "Move vertically to workplace community", "Meet at Central Exchange on Level 35", "Recharge through wellness, food, and outdoor space"],
    rightTitle: "Experience Intelligence",
    rightItems: ["Hospitality adjacency", "Room-type standards", "AV-enabled collaboration", "Interior-to-exterior continuity"],
    cards: [
      { title: "Colleague Day", text: "Map daily patterns from arrival to workplace to exchange.", image: "/assets/renderings/amex-2wtc-hero.jpg" },
      { title: "Client Hosted Path", text: "Separate secure, premium moments for visitors and partners.", image: "/assets/renderings/amex-2wtc-greenwich.jpg" },
      { title: "Operations Flow", text: "Coordinate back-of-house movement without interrupting experience.", image: "/assets/renderings/amex-2wtc-fulton.jpg" },
    ],
  },
  DELIVERY: {
    mode: "DELIVERY",
    eyebrow: "Delivery Intelligence",
    title: "Path to Occupancy",
    subtitle: "RFI-backed controls dashboard for procurement, floor packaging, logistics, inspections, and turnover sequencing.",
    image: "/assets/renderings/amex-2wtc-day-crown.jpg",
    metrics: [
      { label: "Schedule Platform", value: "P6 + Asta", detail: "MS Project / Procore export", tone: "blue" },
      { label: "Floor Packages", value: "4-6", detail: "Floors per production block", tone: "teal" },
      { label: "Lookahead", value: "3 / 6 wk", detail: "Weekly updates", tone: "green" },
      { label: "Long Leads", value: "Early", detail: "Pre-purchase release strategy", tone: "gold" },
    ],
    leftTitle: "Delivery Workstreams",
    leftItems: ["Design Alignment", "Procurement Strategy", "Mockups", "Floor Turnover", "Commissioning"],
    centerTitle: "Sequencing Logic",
    centerItems: ["Release high-risk amenity packages early", "Stack trades by elevator bank and floor zone", "Protect 1st works-to-production workflows", "Tie turnover readiness to executive reporting"],
    rightTitle: "Watchlist",
    rightItems: ["Food service equipment", "AV / broadcast backbone", "Terrace interfaces", "Security integration", "Specialty ceilings"],
    cards: [
      { title: "Construction Sequencing", text: "Phased delivery, logistics, and vertical coordination.", image: "/assets/renderings/amex-2wtc-dusk-crown.jpg" },
      { title: "Turnover Readiness", text: "Readiness by floor, system, and stakeholder milestone.", image: "/assets/renderings/amex-2wtc-looking-up.jpg" },
      { title: "Procurement Control", text: "Long-lead packages and partner visibility.", image: "/assets/renderings/amex-2wtc-greenwich.jpg" },
    ],
  },
  PROOF: {
    mode: "PROOF",
    eyebrow: "From 270 Park to 2 World Trade Center",
    title: "270 Park Playbook",
    subtitle: "JRM's headquarters experience transfers into scale, quality, logistics, security, executive reporting, and amenity delivery.",
    image: "/assets/renderings/amex-2wtc-greenwich.jpg",
    metrics: [
      { label: "Delivered Scale", value: "1.3M+ SF", detail: "Headquarters experience", tone: "blue" },
      { label: "Workplace Scale", value: "10,000", detail: "Employee environment", tone: "teal" },
      { label: "Security Grade", value: "FS", detail: "Financial services", tone: "gold" },
      { label: "Amenity Complexity", value: "High", detail: "Food, wellness, AV", tone: "green" },
    ],
    leftTitle: "Proof Matrix",
    leftItems: ["Premium amenity environments", "High-end executive interiors", "Food, wellness, conference, and AV complexity", "Financial services-grade security"],
    centerTitle: "Transfer Strategy",
    centerItems: ["Use proven stakeholder reporting rhythm", "Bring mockup rigor into specialty spaces", "Apply logistics planning at height", "Leverage lessons from major headquarters delivery"],
    rightTitle: "Client Confidence",
    rightItems: ["Quality certainty", "Decision visibility", "Partner alignment", "Executive communication"],
    cards: [
      { title: "Executive Interiors", text: "High-touch finishes and leadership environments.", image: "/assets/renderings/amex-2wtc-day-crown.jpg" },
      { title: "Amenity Complexity", text: "Food, wellness, convening, and AV integration.", image: "/assets/renderings/amex-2wtc-fulton.jpg" },
      { title: "Reporting Cadence", text: "Decision support for leadership and stakeholders.", image: "/assets/renderings/amex-2wtc-dusk-crown.jpg" },
    ],
  },
  RISK: {
    mode: "RISK",
    eyebrow: "Turnover Readiness",
    title: "Risk Intelligence",
    subtitle: "A conceptual risk map for systems, procurement, specialty trades, terrace interfaces, and security-sensitive areas.",
    image: "/assets/renderings/amex-2wtc-looking-up.jpg",
    metrics: [
      { label: "Risk Register", value: "Live", detail: "By floor block and criticality", tone: "red" },
      { label: "PANYNJ / QAD", value: "TCAP", detail: "Submission and inspection path", tone: "gold" },
      { label: "Safety Record", value: "0 OSHA", detail: "Past five years reported", tone: "green" },
      { label: "Final CO", value: "3mo-1yr", detail: "Closeout timeline range", tone: "blue" },
    ],
    leftTitle: "Risk Categories",
    leftItems: ["AV / Broadcast", "Security", "Food Service", "Terrace Waterproofing", "Specialty Ceilings"],
    centerTitle: "Risk Map",
    centerItems: ["High-risk zones: food service, large convening, executive levels", "Moderate zones: millwork, lighting, specialty ceilings", "Low-risk zones: repeatable workplace kit of parts"],
    rightTitle: "Mitigation Moves",
    rightItems: ["Early procurement release", "Integrated MEP coordination", "Trade partner workshops", "Mockup gates", "Executive escalation cadence"],
    cards: [
      { title: "High-Risk Interfaces", text: "Track terrace, AV, security, and food-service dependencies.", image: "/assets/renderings/amex-2wtc-looking-up.jpg" },
      { title: "Mitigation Board", text: "Ownership, decisions, and status in one view.", image: "/assets/renderings/amex-2wtc-hero.jpg" },
      { title: "Risk Heatmap", text: "Floor-block risk register for coordination hotspots." },
    ],
  },
  REPORTING: {
    mode: "REPORTING",
    eyebrow: "Executive Reporting",
    title: "Real-Time Insights",
    subtitle: "Executive dashboard views for progress, schedule health, budget status, turnover readiness, safety, risk, and decision support.",
    image: "/assets/renderings/amex-2wtc-dusk-crown.jpg",
    metrics: [
      { label: "Executive Dashboard", value: "Weekly", detail: "Digital leadership view", tone: "blue" },
      { label: "Progress Report", value: "Monthly", detail: "PDF + data package", tone: "green" },
      { label: "CO Log", value: "Biweekly", detail: "Live dashboard / OAC", tone: "teal" },
      { label: "Safety Log", value: "Weekly", detail: "HammerTech + PDF", tone: "gold" },
    ],
    leftTitle: "Executive Views",
    leftItems: ["Overall Progress", "Schedule Health", "Budget Status", "Risk Level", "Turnover Readiness"],
    centerTitle: "Reporting Cadence",
    centerItems: ["Weekly executive dashboard", "Monthly progress and cost report", "Biweekly change order log", "Risk register and procurement watchlist"],
    rightTitle: "Decision Support",
    rightItems: ["Milestones", "Approvals", "Escalations", "Forecasts", "Readiness gates"],
    cards: [
      { title: "Leadership Snapshot", text: "One-page status for executive decisions.", image: "/assets/renderings/amex-2wtc-day-crown.jpg" },
      { title: "KPI Dashboard", text: "Progress, risk, procurement, and turnover readiness.", image: "/assets/renderings/amex-2wtc-dusk-crown.jpg" },
      { title: "Kiosk Mode", text: "Presentation-ready reporting for pursuit and client reviews.", image: "/assets/renderings/amex-2wtc-hero.jpg" },
    ],
  },
};
