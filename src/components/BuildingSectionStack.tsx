import { AnimatePresence, motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { StackBand, StackMode } from "../data/stackBands";
import { stackBands } from "../data/stackBands";

type BuildingSectionStackProps = {
  activeBand: StackBand;
  mode: StackMode;
  view: "2D" | "3D";
  onBandSelect: (band: StackBand) => void;
  onViewChange: (view: "2D" | "3D") => void;
};

const FLOOR_HEIGHT = 13;
const TOTAL_FLOORS = 56;
const CROWN_FLOORS = 5;
const CROWN_HEIGHT = CROWN_FLOORS * FLOOR_HEIGHT;
const TOP_PAD = 10;
const TOTAL_HEIGHT = TOP_PAD + CROWN_HEIGHT + TOTAL_FLOORS * FLOOR_HEIGHT + 14;

const floorY = (floor: number) => TOP_PAD + CROWN_HEIGHT + (TOTAL_FLOORS - 1 - floor) * FLOOR_HEIGHT;

const towerWidth = (floor: number) => {
  if (floor <= 6) return 210;
  if (floor <= 27) return 178;
  if (floor <= 43) return 148;
  if (floor <= 54) return 118;
  return 90;
};

const bandFloorMap: Record<string, { floors: number[]; labelFloor: number; calloutLabel?: string; calloutSub?: string }> = {
  "colleague-center-2": { floors: [0, 1, 2], labelFloor: 1, calloutLabel: "Lobby & Arrival", calloutSub: "P1-Lobby" },
  "auditorium-7-8": { floors: [7, 8], labelFloor: 8 },
  "lowrise-9-22": { floors: [9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22], labelFloor: 12 },
  "wellness-16": { floors: [16], labelFloor: 16 },
  "food-convening-23-26": { floors: [23, 24, 25, 26], labelFloor: 24 },
  "workplace-28-34": { floors: [28, 29, 30, 31, 32, 33, 34], labelFloor: 31 },
  "central-exchange-35": { floors: [35], labelFloor: 35 },
  "midrise-37-42": { floors: [37, 38, 39, 40, 41, 42], labelFloor: 40 },
  "convening-44": { floors: [44], labelFloor: 44 },
  "food-46": { floors: [46], labelFloor: 46 },
  "highrise-47-52": { floors: [47, 48, 49, 50, 51, 52], labelFloor: 49 },
  "exec-workplace-53-54": { floors: [53, 54], labelFloor: 53, calloutLabel: "Executive Committee / Leadership Workplace", calloutSub: "53-54" },
  "exec-convening-55": { floors: [55], labelFloor: 55, calloutLabel: "Executive Committee Convening", calloutSub: "55" },
};

const floorToBand = new Map<number, StackBand>();
stackBands.forEach((band) => {
  bandFloorMap[band.id]?.floors.forEach((floor) => floorToBand.set(floor, band));
});

const bankRanges = [
  { bank: "F", top: 55, bottom: 53 },
  { bank: "E", top: 51, bottom: 47 },
  { bank: "E,F", top: 46, bottom: 46 },
  { bank: "D", top: 46, bottom: 37 },
  { bank: "A,B,C,D,E", top: 35, bottom: 23 },
  { bank: "A,B,C,D,E", top: 24, bottom: 15 },
  { bank: "B", top: 15, bottom: 16 },
  { bank: "A,B,C,D,E,F", top: 7, bottom: 4 },
];

const floorLabels = new Set([0, 2, 7, 8, 15, 16, 22, 23, 24, 26, 28, 34, 35, 37, 42, 44, 46, 47, 52, 53, 54, 55]);
const terraceFloors = [7, 28, 44];
const loggiaFloors = [22, 29, 36, 43, 49, 54];

const outlinePoints = [
  `0,${TOP_PAD}`,
  `${towerWidth(55)},${TOP_PAD}`,
  `${towerWidth(55)},${floorY(43) + FLOOR_HEIGHT}`,
  `${towerWidth(44)},${floorY(43) + FLOOR_HEIGHT}`,
  `${towerWidth(44)},${floorY(27) + FLOOR_HEIGHT}`,
  `${towerWidth(28)},${floorY(27) + FLOOR_HEIGHT}`,
  `${towerWidth(28)},${floorY(6) + FLOOR_HEIGHT}`,
  `${towerWidth(0)},${floorY(6) + FLOOR_HEIGHT}`,
  `${towerWidth(0)},${floorY(0) + FLOOR_HEIGHT}`,
  `0,${floorY(0) + FLOOR_HEIGHT}`,
].join(" ");

export default function BuildingSectionStack({ activeBand, mode, view, onBandSelect, onViewChange }: BuildingSectionStackProps) {
  const calloutBands = stackBands.filter((band) => band.id !== "exec-convening-55");

  return (
    <section className="section-stack-panel stack-card">
      <div className="section-canvas section-reference-canvas">
        <div className="ref-elevator-banks" style={{ height: TOTAL_HEIGHT }}>
          <strong>Elevator<br />Banks</strong>
          {bankRanges.map((range) => {
            const top = floorY(range.top);
            const bottom = floorY(range.bottom) + FLOOR_HEIGHT;
            return (
              <div className="ref-bank-range" key={`${range.bank}-${range.top}-${range.bottom}`} style={{ top, height: Math.max(18, bottom - top) }}>
                <b>{range.bank}</b>
                <i><span>{range.top}</span><span>{range.bottom}</span></i>
              </div>
            );
          })}
        </div>

        <div className={`ref-building ${view === "3D" ? "dimensional" : ""}`} style={{ height: TOTAL_HEIGHT }}>
          <svg className="ref-building-outline" viewBox={`0 0 230 ${TOTAL_HEIGHT}`} aria-hidden="true">
            <rect x="0" y={TOP_PAD} width={towerWidth(55)} height={CROWN_HEIGHT} className="ref-crown" />
            <polygon points={outlinePoints} className="ref-outline" />
            {terraceFloors.map((floor) => {
              const y = floorY(floor - 1) + FLOOR_HEIGHT;
              const x = towerWidth(floor);
              const width = towerWidth(floor - 1) - towerWidth(floor);
              return <rect key={floor} x={x} y={y - 5} width={width} height="5" className="ref-terrace" />;
            })}
            {loggiaFloors.map((floor) => (
              <rect key={floor} x="-7" y={floorY(floor) + 1} width="7" height={FLOOR_HEIGHT - 2} className="ref-loggia" />
            ))}
          </svg>

          <div className="ref-elevator-core" />

          {Array.from({ length: 56 }, (_, floor) => {
            const band = floorToBand.get(floor);
            const isActive = band?.id === activeBand.id;
            const className = band
              ? `ref-floor ${band.category} ${isActive ? "active" : ""} mode-${mode.toLowerCase().replace(" ", "-")}`
              : "ref-floor mechanical";
            const style = { top: floorY(floor), width: towerWidth(floor), height: FLOOR_HEIGHT };

            if (!band) {
              return <div className={className} key={floor} style={style} />;
            }

            return (
              <motion.button
                className={className}
                key={floor}
                onClick={() => onBandSelect(band)}
                title={`${band.floors} | ${band.title} | ${band.deliveryComplexity} delivery complexity`}
                style={style}
                whileHover={{ filter: "brightness(1.12)" }}
              />
            );
          })}

          {Array.from(floorLabels).map((floor) => (
            <span className="ref-floor-label" key={floor} style={{ top: floorY(floor) + FLOOR_HEIGHT / 2 - 4 }}>
              {floor === 0 ? "G" : String(floor).padStart(2, "0")}
            </span>
          ))}

          {stackBands.map((band) => {
            const geometry = bandFloorMap[band.id];
            if (!geometry) return null;
            const dotY = floorY(geometry.labelFloor) + FLOOR_HEIGHT / 2;
            return (
              <button
                className={`ref-band-dot ${activeBand.id === band.id ? "active" : ""}`}
                key={band.id}
                onClick={() => onBandSelect(band)}
                style={{ left: 34 + towerWidth(geometry.labelFloor) - 5, top: dotY - 5 }}
                aria-label={`Select ${band.title}`}
              />
            );
          })}
        </div>

        <div className="ref-program-callouts" style={{ height: TOTAL_HEIGHT }}>
          <AnimatePresence mode="popLayout">
            {calloutBands.map((band) => {
              const geometry = bandFloorMap[band.id];
              const dotY = geometry ? floorY(geometry.labelFloor) + FLOOR_HEIGHT / 2 : 0;
              return (
                <motion.button
                  className={`ref-callout ${activeBand.id === band.id ? "active" : ""}`}
                  key={band.id}
                  onClick={() => onBandSelect(band)}
                  style={{ top: dotY - 12 }}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span />
                  <strong>{geometry?.calloutSub ?? band.label}</strong>
                  <em>{geometry?.calloutLabel ?? band.title}</em>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <div className="stack-view-controls">
        <button className={view === "3D" ? "active" : ""} onClick={() => onViewChange("3D")}>3D</button>
        <button className={view === "2D" ? "active" : ""} onClick={() => onViewChange("2D")}>2D</button>
        <button aria-label="Fullscreen section"><Maximize2 size={18} /></button>
      </div>
    </section>
  );
}
