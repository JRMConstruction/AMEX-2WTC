import type { LucideIcon } from "lucide-react";
import { BadgeCheck, BarChart3, BriefcaseBusiness, Building2, CalendarCheck, CircleAlert, Clock3, ShieldCheck, TrendingUp, UsersRound } from "lucide-react";

export type NavMode = "VISION" | "STACK" | "EXPERIENCE" | "DELIVERY" | "PROOF" | "RISK" | "REPORTING";

export type Metric = {
  label: string;
  value: string;
  detail: string;
  progress?: number;
  tone?: "blue" | "green" | "gold" | "red";
};

export type ModeContent = {
  eyebrow: string;
  title: string;
  summary: string;
  metrics: Metric[];
  bullets: string[];
};

export const navModes: NavMode[] = ["VISION", "STACK", "EXPERIENCE", "DELIVERY", "PROOF", "RISK", "REPORTING"];

export const modeContent: Record<NavMode, ModeContent> = {
  VISION: {
    eyebrow: "A Connected Ecosystem",
    title: "Headquarters Vision",
    summary: "A vertical campus designed for connection, hospitality, and future-forward workplace communities.",
    metrics: [
      { label: "Vertical Campus", value: "49", detail: "floors in scope", progress: 49, tone: "blue" },
      { label: "Exchange Levels", value: "7+", detail: "amenity anchors", progress: 64, tone: "green" },
      { label: "Target Occupancy", value: "2031", detail: "path to occupancy", progress: 23, tone: "gold" },
    ],
    bullets: ["Vertical campus", "Connected colleague experience", "Hospitality-driven exchange levels", "World-class client and executive environments", "Future-forward workplace"],
  },
  STACK: {
    eyebrow: "Vertical Campus",
    title: "Stack Intelligence",
    summary: "Clickable floor bands translate the tower program into delivery focus, risk, and proof points.",
    metrics: [
      { label: "Floors in Scope", value: "7-55", detail: "workplace through executive", progress: 88, tone: "blue" },
      { label: "Typical Plates", value: "31.8K-52.5K", detail: "conceptual RSF", progress: 72, tone: "green" },
      { label: "Outdoor Space", value: "52,090 SF", detail: "3 terraces / 6 gardens", progress: 56, tone: "gold" },
    ],
    bullets: ["Selected zone details", "JRM delivery focus", "Risk items by band", "270 Park transfer points"],
  },
  EXPERIENCE: {
    eyebrow: "Workplace Communities",
    title: "Journey Selector",
    summary: "Explore how colleagues, clients, executives, and operators move through the vertical campus.",
    metrics: [
      { label: "Colleague Journey", value: "Daily", detail: "arrival to focus to exchange", progress: 67, tone: "blue" },
      { label: "Client Journey", value: "Premium", detail: "hosted and secure", progress: 82, tone: "green" },
      { label: "Operations Journey", value: "Live", detail: "service and support flow", progress: 58, tone: "gold" },
    ],
    bullets: ["Colleague Journey", "Client Journey", "Executive Journey", "Operations Journey"],
  },
  DELIVERY: {
    eyebrow: "Delivery Intelligence",
    title: "Path to Occupancy",
    summary: "RFI-backed delivery methods for schedule control, procurement, long-lead planning, floor packaging, and turnover readiness.",
    metrics: [
      { label: "Schedule Platform", value: "P6 + Asta", detail: "MS Project / Procore export", progress: 78, tone: "blue" },
      { label: "Floor Packages", value: "4-6", detail: "floors per block", progress: 68, tone: "green" },
      { label: "Production Waves", value: "2 floors", detail: "concurrent sequencing", progress: 62, tone: "gold" },
      { label: "Lookahead", value: "3 / 6 wk", detail: "weekly updates", progress: 75, tone: "blue" },
      { label: "Long Leads", value: "Early", detail: "pre-purchase strategy", progress: 66, tone: "green" },
      { label: "TCO Strategy", value: "Phased", detail: "REO / QAD pre-walks", progress: 58, tone: "gold" },
    ],
    bullets: ["Primavera P6 / Asta / MS Project controls", "Long-lead items released through pre-purchase packages", "Each floor block treated as its own project", "4-6 floor packages with two-floor production waves", "REO / QAD pre-walks before final inspections", "TCO strategy tied to C&S and life-safety readiness"],
  },
  PROOF: {
    eyebrow: "From 270 Park to 2 World Trade Center",
    title: "270 Park Playbook",
    summary: "JRM's recent headquarters experience informs the delivery model for scale, quality, security, and amenities.",
    metrics: [
      { label: "Delivered Scale", value: "1.3M+ SF", detail: "headquarters experience", progress: 92, tone: "blue" },
      { label: "Workplace Scale", value: "10,000", detail: "employee environment", progress: 85, tone: "green" },
      { label: "Security Grade", value: "FS", detail: "financial services", progress: 78, tone: "gold" },
    ],
    bullets: ["1.3M+ SF delivered", "10,000 employee workplace scale", "Premium amenity environments", "Financial services-grade security", "High-end executive interiors", "Food, wellness, conference, and AV complexity"],
  },
  RISK: {
    eyebrow: "Turnover Readiness",
    title: "Risk Map",
    summary: "A live risk register by floor block and criticality keeps systems, regulatory, procurement, and turnover constraints visible.",
    metrics: [
      { label: "Risk Register", value: "Live", detail: "floor blocks + criticality", progress: 74, tone: "red" },
      { label: "PANYNJ / QAD", value: "TCAP", detail: "review and inspection path", progress: 52, tone: "gold" },
      { label: "Safety Record", value: "0 OSHA", detail: "past five years reported", progress: 90, tone: "green" },
    ],
    bullets: ["Base building handover delays", "PANYNJ / QAD review and inspection risk", "Long-lead material failures", "Subcontractor default", "Owner-directed changes", "Regulatory inspection failure", "Tariff escalation"],
  },
  REPORTING: {
    eyebrow: "Executive Reporting",
    title: "Real-Time Insights",
    summary: "Leadership receives the RFI-defined reporting cadence for progress, schedule, cost, risk, safety, quality, and turnover decisions.",
    metrics: [
      { label: "Executive Dashboard", value: "Weekly", detail: "digital leadership view", progress: 90, tone: "blue" },
      { label: "Progress Report", value: "Monthly", detail: "PDF + data package", progress: 72, tone: "green" },
      { label: "Change Order Log", value: "Biweekly", detail: "live dashboard / OAC", progress: 64, tone: "green" },
      { label: "Risk Register", value: "Monthly", detail: "PDF update", progress: 58, tone: "gold" },
      { label: "Safety Log", value: "Weekly", detail: "HammerTech + PDF", progress: 76, tone: "blue" },
    ],
    bullets: ["Weekly executive dashboard", "Monthly detailed progress report", "Weekly schedule status and four-week lookahead", "Monthly cost report and budget variance", "Biweekly change order log", "Weekly RFI and submittal log", "Weekly HammerTech safety log", "Monthly risk register update"],
  },
};

export const projectStats = [
  { icon: Building2, label: "Floors in Scope", value: "7-55", detail: "49 Floors" },
  { icon: BarChart3, label: "Total Area", value: "~1.96M SF", detail: "Interior Environment" },
  { icon: UsersRound, label: "Colleague Capacity", value: "Up to 10,000", detail: "Workplace Scale" },
  { icon: BriefcaseBusiness, label: "Exchange Levels", value: "7+", detail: "Amenity Anchors" },
  { icon: CalendarCheck, label: "Target Occupancy", value: "2031", detail: "Planning Horizon" },
  { icon: BadgeCheck, label: "RFI Response", value: "May 29, 2026", detail: "Client Submission" },
] satisfies { icon: LucideIcon; label: string; value: string; detail: string }[];

export const modules = [
  { id: "occupancy", title: "Path to Occupancy", text: "Milestones, activities, and readiness leading to 2031 opening.", mode: "DELIVERY" as NavMode, icon: CalendarCheck, image: "assets/renderings/amex-2wtc-greenwich.jpg" },
  { id: "journey", title: "Colleague Journey", text: "Explore the day in the life across 2 World Trade Center.", mode: "EXPERIENCE" as NavMode, icon: UsersRound, image: "assets/renderings/amex-2wtc-fulton.jpg" },
  { id: "context", title: "Project Context", text: "2 WTC at the heart of the World Trade Center campus.", mode: "VISION" as NavMode, icon: Building2, image: "assets/renderings/amex-2wtc-hero.jpg" },
  { id: "interior", title: "Interior Experience", text: "Design intent, experience standards, and workplace strategies.", mode: "EXPERIENCE" as NavMode, icon: BriefcaseBusiness, image: "assets/renderings/amex-2wtc-looking-up.jpg" },
  { id: "sequencing", title: "Construction Sequencing", text: "Phased delivery, logistics, and vertical coordination.", mode: "DELIVERY" as NavMode, icon: Clock3, image: "assets/renderings/amex-2wtc-day-crown.jpg" },
  { id: "systems", title: "MEP & Coordination", text: "Integrated systems planning and model coordination.", mode: "STACK" as NavMode, icon: ShieldCheck, image: "assets/renderings/amex-2wtc-dusk-crown.jpg" },
  { id: "insights", title: "Executive Reporting", text: "Real-time insights and KPIs for executive decision-making.", mode: "REPORTING" as NavMode, icon: CircleAlert, image: "assets/renderings/amex-2wtc-hero.jpg" },
];
