import { Building2, Layers3, MapPin, MoveVertical, Trees, Waves } from "lucide-react";
import type { ReactNode } from "react";
import { stackFacts } from "../data/stackBands";
import StackLegend from "./StackLegend";

export default function StackSummaryPanel() {
  return (
    <aside className="stack-summary-panel stack-card">
      <h2>Stack Summary</h2>
      <div className="stack-project-card">
        <img src="/assets/renderings/amex-2wtc-hero.jpg" alt="2 World Trade Center exterior rendering" />
        <div>
          <strong>Address</strong>
          <span>{stackFacts.address[0]}<br />{stackFacts.address[1]}</span>
          <strong>Architect</strong>
          <span>{stackFacts.architect}</span>
          <strong>Owner</strong>
          <span>{stackFacts.owner}</span>
          <strong>Opening</strong>
          <span>{stackFacts.opening}</span>
        </div>
      </div>
      <div className="summary-stat-grid">
        <SummaryStat icon={<Building2 size={21} />} label="Size" value={stackFacts.size} />
        <SummaryStat icon={<MapPin size={21} />} label="Total Building Area" value={stackFacts.totalArea} />
        <SummaryStat icon={<Layers3 size={21} />} label="Floor Plate Sizes" value={stackFacts.floorPlates.join(" / ")} />
        <SummaryStat icon={<MoveVertical size={21} />} label="Elevators" value={stackFacts.elevators.join(" / ")} />
        <SummaryStat icon={<Trees size={21} />} label="Outdoor Space" value={`${stackFacts.outdoor}. ${stackFacts.outdoorDetail}`} />
      </div>
      <StackLegend />
      <p className="concept-note"><Waves size={14} /> Delivery overlays reflect JRM's RFI response; stack programming remains client-planning data.</p>
    </aside>
  );
}

function SummaryStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="summary-stat">
      {icon}
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}
