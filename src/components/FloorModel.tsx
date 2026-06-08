import { Coffee, LockKeyhole, MonitorCog, Presentation, Trees, UsersRound } from "lucide-react";
import { useState } from "react";
import type { ViewMode } from "../App";
import type { FloorBand } from "../data/floorBands";

const pins = [
  { label: "Colleague hub", x: 26, y: 45, icon: UsersRound, text: "Workplace communities connect to focus, meeting, and exchange zones." },
  { label: "Hospitality", x: 68, y: 34, icon: Coffee, text: "Pantry and cafe support a hospitality-driven workplace experience." },
  { label: "Meeting AV", x: 48, y: 24, icon: Presentation, text: "AV-ready rooms support convening, town halls, and client moments." },
  { label: "MEP systems", x: 38, y: 70, icon: MonitorCog, text: "MEP and ceiling coordination are tracked as delivery intelligence." },
  { label: "Security", x: 78, y: 62, icon: LockKeyhole, text: "Financial services-grade access and security integration." },
  { label: "Terrace", x: 19, y: 73, icon: Trees, text: "Outdoor space and facade interfaces require early alignment." },
];

type FloorModelProps = {
  floor: FloorBand;
  viewMode: ViewMode;
};

export default function FloorModel({ floor, viewMode }: FloorModelProps) {
  const [activePin, setActivePin] = useState(pins[0]);
  const rooms = floor.category === "executive" ? 12 : floor.category === "food" ? 10 : floor.category === "auditorium" ? 8 : 16;

  return (
    <div className={`floor-model ${viewMode === "3D View" ? "isometric" : "plan"}`}>
      <div className="city-ghost" />
      <div className="floor-plate">
        {Array.from({ length: rooms }).map((_, index) => (
          <span className={`room room-${index % 5}`} key={index} />
        ))}
        <div className="core" />
        <div className="terrace-strip" />
        {pins.map((pin) => {
          const Icon = pin.icon;
          return (
            <button
              className="floor-pin"
              key={pin.label}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              onClick={() => setActivePin(pin)}
              onMouseEnter={() => setActivePin(pin)}
              aria-label={pin.label}
            >
              <Icon size={15} />
            </button>
          );
        })}
      </div>
      <div className="pin-card">
        <strong>{activePin.label}</strong>
        <span>{activePin.text}</span>
      </div>
    </div>
  );
}
