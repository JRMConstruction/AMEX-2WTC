import { AnimatePresence, motion } from "framer-motion";
import { Building2, Layers3, Ruler, SquareStack } from "lucide-react";
import type { FloorBand } from "../data/floorBands";
import { modeContent } from "../data/dashboardMetrics";
import type { NavMode } from "../data/dashboardMetrics";
import MetricCard from "./MetricCard";

type DeliveryIntelligencePanelProps = {
  mode: NavMode;
  floor: FloorBand;
};

export default function DeliveryIntelligencePanel({ mode, floor }: DeliveryIntelligencePanelProps) {
  const content = modeContent[mode];

  return (
    <aside className="intelligence-panel">
      <AnimatePresence mode="wait">
        <motion.div key={mode + floor.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
          <div className="panel-heading">
            <span className="eyebrow">Delivery Intelligence</span>
            <h2>{mode === "DELIVERY" ? "Summary" : content.title}</h2>
          </div>
          <div className="intel-tabs">
            <button className="active">Summary</button>
            <button>Details</button>
          </div>
          <div className="facts-list">
            <h3>Building Facts</h3>
            <Fact label="Floors in Scope" value="7-55" />
            <Fact label="Total Floors / Height" value="55 / 1,226 FT" />
            <Fact label="Total Area" value="1.96M SF" />
            <Fact label="Outdoor Space" value="52,090 SF" note="3 terraces / 6 corner gardens / 3 sedum roofs" />
          </div>
          <div className="elevator-facts fact-section">
            <Building2 size={40} />
            <div><strong>43</strong><span>Passenger</span></div>
            <div><strong>7</strong><span>Service</span></div>
            <div><strong>1</strong><span>Lobby</span></div>
          </div>
          <div className="floor-plates fact-section">
            <Layers3 size={42} />
            <div><strong>52,500</strong><span>RSF</span></div>
            <div><strong>42,600</strong><span>RSF</span></div>
            <div><strong>31,800</strong><span>RSF</span></div>
          </div>
          <div className="height-facts fact-section">
            <Ruler size={42} />
            <div><strong>15'</strong><span>Low- & Mid-Rise</span></div>
            <div><strong>16'</strong><span>High-Rise</span></div>
            <div><strong>18'</strong><span>Special Floor</span></div>
          </div>
          <div className="active-floor-note">
            <SquareStack size={16} />
            <span>{floor.label} / {floor.title}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </aside>
  );
}

function Fact({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="fact-row">
      <span>{label}</span>
      <strong>{value}</strong>
      {note && <small>{note}</small>}
    </div>
  );
}
