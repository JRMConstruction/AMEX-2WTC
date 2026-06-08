import type { StackBand } from "../data/stackBands";

type VerticalAccessDiagramProps = {
  band: StackBand;
};

const banks = ["High-Rise Elevators", "Mid-Rise Elevators", "Low-Rise Elevators", "Service Elevators", "Lobby Elevators"];

export default function VerticalAccessDiagram({ band }: VerticalAccessDiagramProps) {
  return (
    <div className="vertical-access">
      <div className="mini-section">
        {Array.from({ length: 5 }).map((_, index) => <span className={`access-line line-${index}`} key={index} />)}
        <div className="level-marker">Level {band.label.split(" ")[0]}</div>
      </div>
      <div className="access-legend">
        {banks.map((bank, index) => (
          <span key={bank}><i className={`bank-dot bank-${index}`} />{bank}</span>
        ))}
      </div>
    </div>
  );
}
