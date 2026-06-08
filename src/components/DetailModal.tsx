import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { FloorBand } from "../data/floorBands";

type DetailModalProps = {
  floor: FloorBand;
  open: boolean;
  onClose: () => void;
};

export default function DetailModal({ floor, open, onClose }: DetailModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="detail-modal" initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 20 }}>
            <button className="icon-command close" onClick={onClose} aria-label="Close modal"><X size={18} /></button>
            <span className="eyebrow">{floor.floors === "35" ? "Level 35" : floor.label}</span>
            <h2>{floor.title}</h2>
            <section>
              <h3>Experience Intent</h3>
              <p>{floor.description}</p>
            </section>
            <section>
              <h3>JRM Delivery Focus</h3>
              <ul>{floor.jrmFocus.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section>
              <h3>Key Risks</h3>
              <ul>{floor.riskItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section>
              <h3>270 Park Transfer</h3>
              <p>{floor.proofPoint}</p>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
