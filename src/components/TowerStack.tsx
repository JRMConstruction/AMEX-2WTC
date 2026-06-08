import { floorBands } from "../data/floorBands";
import type { FloorBand } from "../data/floorBands";

type TowerStackProps = {
  activeFloor: FloorBand;
  onSelect: (band: FloorBand) => void;
};

export default function TowerStack({ activeFloor, onSelect }: TowerStackProps) {
  const callouts = floorBands.filter((band) => ["executive-53-55", "highrise-47-52", "midrise-37-42", "level-35", "lowrise-7-15", "lobby"].includes(band.id));

  return (
    <section className="tower-panel">
      <div className="panel-heading">
        <span className="eyebrow">Campus Stack</span>
        <h2>2 World Trade Center</h2>
      </div>
      <div className="tower-wrap">
        <img className="tower-rendering" src="assets/renderings/amex-2wtc-looking-up.jpg" alt="2 World Trade Center tower stack rendering" />
        <div className="tower-fade" />
        <button className="active-stack-marker" onClick={() => onSelect(floorBands.find((band) => band.id === "level-35") ?? activeFloor)}>
          <span>Active View</span>
          <strong>Level 35</strong>
          <small>Exchange / Convening + Workplace</small>
        </button>
        <div className="stack-callouts">
          {callouts.map((band) => (
            <button className={activeFloor.id === band.id ? "active" : ""} key={band.id} onClick={() => onSelect(band)}>
              <span>{band.label}</span>
              <strong>{band.title}</strong>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
