import { useState } from "react";
import type { StackBand, StackMode } from "../data/stackBands";
import { stackBands } from "../data/stackBands";
import ActiveZonePanel from "./ActiveZonePanel";
import BuildingSectionStack from "./BuildingSectionStack";
import StackBottomCards from "./StackBottomCards";
import StackModeTabs from "./StackModeTabs";
import StackSummaryPanel from "./StackSummaryPanel";
import StackTimeline from "./StackTimeline";

export default function StackPage() {
  const [mode, setMode] = useState<StackMode>("EXPERIENCE");
  const [view, setView] = useState<"2D" | "3D">("3D");
  const [activeBand, setActiveBand] = useState<StackBand>(() => stackBands.find((band) => band.id === "central-exchange-35") ?? stackBands[0]);
  const [activePhase, setActivePhase] = useState("design");

  return (
    <main className="stack-page">
      <StackModeTabs mode={mode} onModeChange={setMode} />
      <div className="stack-layout">
        <StackSummaryPanel />
        <BuildingSectionStack activeBand={activeBand} mode={mode} view={view} onBandSelect={setActiveBand} onViewChange={setView} />
        <ActiveZonePanel band={activeBand} />
      </div>
      <StackTimeline activePhase={activePhase} onPhaseChange={setActivePhase} />
      <StackBottomCards />
    </main>
  );
}
