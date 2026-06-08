import { BarChart3, ClipboardCheck, FileStack, HardHat, ListChecks, Truck } from "lucide-react";
import type { ReactNode } from "react";
import type { PlaybookPillar } from "../data/proofData";

const icons = {
  strategy: FileStack,
  mockups: ClipboardCheck,
  supply: Truck,
  execution: HardHat,
  quality: ListChecks,
  data: BarChart3,
};

export default function PlaybookPillars({
  pillars,
  onOpen,
  controls,
  isOpen = true,
}: {
  pillars: PlaybookPillar[];
  onOpen: () => void;
  controls?: ReactNode;
  isOpen?: boolean;
}) {
  return (
    <section className="proof-pillars proof-panel">
      <div className="proof-section-head">
        <div>
          <span>Playbook Pillars Applied to 2 WTC</span>
          <strong>RFI-backed controls and transfer logic</strong>
        </div>
        <div className="proof-section-actions">
          <button onClick={onOpen}>Explore Playbook Framework</button>
          {controls}
        </div>
      </div>
      {isOpen && (
        <div className="proof-pillar-grid">
          {pillars.map((pillar) => {
            const Icon = icons[pillar.icon];
            return (
              <article key={pillar.id}>
                <Icon size={30} />
                <h3>{pillar.title}</h3>
                <ul>
                  {pillar.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
