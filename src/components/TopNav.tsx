import { BarChart3, Building2, Layers3, ShieldAlert, Sparkles, SquareStack, Trophy } from "lucide-react";
import type { ReactNode } from "react";
import { navModes } from "../data/dashboardMetrics";
import type { NavMode } from "../data/dashboardMetrics";

const icons = {
  VISION: Sparkles,
  STACK: SquareStack,
  EXPERIENCE: Layers3,
  DELIVERY: Building2,
  PROOF: Trophy,
  RISK: ShieldAlert,
  REPORTING: BarChart3,
};

type TopNavProps = {
  activeMode: NavMode;
  onModeChange: (mode: NavMode) => void;
  children: ReactNode;
};

export default function TopNav({ activeMode, onModeChange, children }: TopNavProps) {
  return (
    <header className="top-nav">
      <div className="brand-lockup">
        <svg className="amex-wordmark" viewBox="0 0 420 132" role="img" aria-label="American Express">
          <g fill="currentColor">
            <text x="0" y="54" fontFamily="Arial Black, Arial, Helvetica, sans-serif" fontSize="54" fontWeight="900" letterSpacing="-3">
              AMERICAN
            </text>
            <text x="68" y="118" fontFamily="Arial Black, Arial, Helvetica, sans-serif" fontSize="54" fontWeight="900" letterSpacing="-3">
              EXPRESS
            </text>
          </g>
        </svg>
        <div className="title-lockup">
          <strong>2 World Trade Center</strong>
          <span>Interior Buildout Presentation</span>
        </div>
      </div>
      <nav>
        {navModes.map((mode) => {
          const Icon = icons[mode];
          return (
            <button
              key={mode}
              className={activeMode === mode ? "active" : ""}
              data-mode={mode}
              aria-label={`Open ${mode.toLowerCase()} interface`}
              onClick={() => onModeChange(mode)}
            >
              <Icon size={18} />
              {mode}
            </button>
          );
        })}
      </nav>
      <div className="right-lockup">
        <div className="active-status">
          <span>Digital Twin</span>
          <strong>Active</strong>
        </div>
        {children}
        <div className="jrm-wordmark">JRM <span>Construction<br />Management</span></div>
      </div>
    </header>
  );
}
