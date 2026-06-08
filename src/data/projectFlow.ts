import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Calculator,
  CalendarDays,
  ClipboardCheck,
  Compass,
  KeyRound,
  Settings,
  ShieldCheck,
  TrendingUp,
  Truck,
  UsersRound,
} from "lucide-react";
import type { NavMode } from "./dashboardMetrics";

export type ProjectFlowNode = {
  id: string;
  title: string;
  subtitle: string;
  mode: NavMode;
  icon: LucideIcon;
  x: number;
  y: number;
  size: "small" | "medium" | "large";
  tone: "blue" | "navy" | "teal" | "green" | "gray";
};

export type ProjectFlowConnection = {
  from: string;
  to: string;
  curve?: number;
  dashed?: boolean;
};

export const projectFlowNodes: ProjectFlowNode[] = [
  { id: "schedule", title: "Schedule", subtitle: "P6 / Asta / lookahead control", mode: "DELIVERY", icon: CalendarDays, x: 10, y: 29, size: "small", tone: "blue" },
  { id: "logistics", title: "Logistics", subtitle: "Vertical movement + floor packaging", mode: "DELIVERY", icon: Truck, x: 50, y: 12, size: "small", tone: "blue" },
  { id: "design", title: "Design", subtitle: "Experience standards + mockups", mode: "EXPERIENCE", icon: Compass, x: 76, y: 18, size: "small", tone: "blue" },
  { id: "estimates", title: "Estimates", subtitle: "Budget, scope, alternates", mode: "PROOF", icon: Calculator, x: 84, y: 32, size: "small", tone: "teal" },
  { id: "value", title: "Value Engineering", subtitle: "Options, decisions, tradeoffs", mode: "RISK", icon: TrendingUp, x: 88, y: 45, size: "small", tone: "teal" },
  { id: "precon", title: "Pre-Con", subtitle: "Strategy before mobilization", mode: "PROOF", icon: UsersRound, x: 50, y: 30, size: "medium", tone: "blue" },
  { id: "coordination", title: "Coordination", subtitle: "MEP, AV, security, model control", mode: "STACK", icon: Settings, x: 33, y: 42, size: "medium", tone: "blue" },
  { id: "construction", title: "Construction", subtitle: "Field execution and production waves", mode: "DELIVERY", icon: Building2, x: 66, y: 42, size: "medium", tone: "navy" },
  { id: "management", title: "Management & Operations", subtitle: "Stakeholder decisions and daily controls", mode: "VISION", icon: UsersRound, x: 50, y: 58, size: "large", tone: "navy" },
  { id: "core", title: "Core & Shell", subtitle: "Base-building interface and turnover", mode: "STACK", icon: Building2, x: 29, y: 66, size: "medium", tone: "gray" },
  { id: "quality", title: "Quality", subtitle: "1st works, QA/QC, punch, signoffs", mode: "RISK", icon: ShieldCheck, x: 69, y: 66, size: "medium", tone: "teal" },
  { id: "signoffs", title: "Signoffs", subtitle: "Approvals, gates, closeout", mode: "REPORTING", icon: ClipboardCheck, x: 81, y: 79, size: "small", tone: "green" },
  { id: "occupancy", title: "Occupancy", subtitle: "Move-in activation and readiness", mode: "DELIVERY", icon: KeyRound, x: 50, y: 83, size: "medium", tone: "green" },
];

export const projectFlowConnections: ProjectFlowConnection[] = [
  { from: "schedule", to: "precon" },
  { from: "schedule", to: "coordination", curve: 16 },
  { from: "logistics", to: "precon" },
  { from: "design", to: "precon", curve: -14 },
  { from: "design", to: "estimates" },
  { from: "estimates", to: "value" },
  { from: "value", to: "construction", curve: 14 },
  { from: "precon", to: "coordination" },
  { from: "precon", to: "construction" },
  { from: "precon", to: "management" },
  { from: "coordination", to: "management" },
  { from: "construction", to: "management" },
  { from: "coordination", to: "core" },
  { from: "core", to: "management" },
  { from: "construction", to: "quality" },
  { from: "quality", to: "management" },
  { from: "quality", to: "signoffs" },
  { from: "signoffs", to: "occupancy", curve: 16 },
  { from: "core", to: "occupancy", curve: -10 },
  { from: "quality", to: "occupancy", curve: 10 },
  { from: "management", to: "occupancy" },
  { from: "schedule", to: "logistics", curve: -28, dashed: true },
  { from: "value", to: "signoffs", curve: 28, dashed: true },
  { from: "occupancy", to: "schedule", curve: 52, dashed: true },
];
