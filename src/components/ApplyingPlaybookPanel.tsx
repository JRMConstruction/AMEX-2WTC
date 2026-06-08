import { ArrowRight, BarChart3, Gauge, HardHat, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import type { ReactNode } from "react";
import type { PlaybookAccordionItem } from "../data/proofData";
import MiniStackContext from "./MiniStackContext";

const icons = {
  scale: HardHat,
  experience: UsersRound,
  speed: Gauge,
  quality: ShieldCheck,
  safety: Sparkles,
  data: BarChart3,
};

type ApplyingPlaybookPanelProps = {
  items: PlaybookAccordionItem[];
  activeId: string;
  onToggle: (id: string) => void;
  onViewStack: () => void;
  controls?: ReactNode;
  isOpen?: boolean;
};

export default function ApplyingPlaybookPanel({ items, activeId, onToggle, onViewStack, controls, isOpen = true }: ApplyingPlaybookPanelProps) {
  return (
    <aside className="applying-playbook proof-panel">
      <div className="proof-section-head">
        <div>
          <span>Applying the Playbook to 2WTC</span>
          <strong>Pin this open for side-by-side reference</strong>
        </div>
        {controls}
      </div>
      {isOpen && (
        <>
          <div className="playbook-accordion">
            {items.map((item) => {
              const Icon = icons[item.icon];
              const isActive = item.id === activeId;
              return (
                <button className={isActive ? "active" : ""} key={item.id} onClick={() => onToggle(item.id)}>
                  <Icon size={24} />
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.subtitle}</small>
                    {isActive && <p>{item.detail}</p>}
                  </span>
                  <ArrowRight size={18} />
                </button>
              );
            })}
          </div>
          <MiniStackContext onViewStack={onViewStack} />
        </>
      )}
    </aside>
  );
}
