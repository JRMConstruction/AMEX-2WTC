import { Building2, ClipboardList, Globe2, UsersRound } from "lucide-react";
import type { ReactNode } from "react";
import type { StackBand } from "../data/stackBands";
import { stackFacts } from "../data/stackBands";
import VerticalAccessDiagram from "./VerticalAccessDiagram";

type ActiveZonePanelProps = {
  band: StackBand;
};

export default function ActiveZonePanel({ band }: ActiveZonePanelProps) {
  return (
    <aside className="active-zone-panel stack-card">
      <h2>Active Zone</h2>
      <div className="active-zone-hero">
        <span>{band.floors}</span>
        <h3>{band.title}</h3>
      </div>
      <div className="active-zone-grid">
        <InfoBlock icon={<ClipboardList size={18} />} title="Experience Intent">
          <p>{band.experienceIntent}</p>
        </InfoBlock>
        <InfoBlock icon={<Building2 size={18} />} title="Building Facts">
          <dl>
            <dt>Total Floors</dt><dd>55</dd>
            <dt>Height</dt><dd>1,226 ft</dd>
            <dt>Total Area</dt><dd>{stackFacts.totalArea}</dd>
            <dt>Typical Floor Plate</dt><dd>{stackFacts.floorPlates.join(" / ")}</dd>
            <dt>Total Outdoor Space</dt><dd>{stackFacts.outdoor}</dd>
          </dl>
        </InfoBlock>
        <InfoBlock icon={<UsersRound size={18} />} title="Primary Users">
          <p>{band.primaryUsers.join(", ")}</p>
        </InfoBlock>
        <InfoBlock icon={<Globe2 size={18} />} title="Vertical Access">
          <VerticalAccessDiagram band={band} />
        </InfoBlock>
        <InfoBlock title="Amenity Focus">
          <ul>{band.programFocus.map((item) => <li key={item}>{item}</li>)}</ul>
        </InfoBlock>
        <InfoBlock title="JRM Delivery Focus">
          <ul>{band.jrmDeliveryFocus.map((item) => <li key={item}>{item}</li>)}</ul>
        </InfoBlock>
        <InfoBlock title="Risk Items">
          <ul>{band.riskItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </InfoBlock>
      </div>
      <p className="proof-point">{band.proofPoint}</p>
      <div className="access-actions">
        <button>Access Diagram</button>
        <button>Elevator Matrix</button>
      </div>
    </aside>
  );
}

function InfoBlock({ icon, title, children }: { icon?: ReactNode; title: string; children: ReactNode }) {
  return (
    <section className="info-block">
      <h4>{icon}{title}</h4>
      {children}
    </section>
  );
}
