import { X } from "lucide-react";
import { motion } from "framer-motion";
import type { PlaybookPillar } from "../data/proofData";

type PlaybookModalProps = {
  pillars: PlaybookPillar[];
  onClose: () => void;
};

export default function PlaybookModal({ pillars, onClose }: PlaybookModalProps) {
  return (
    <motion.div className="playbook-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="playbook-modal" initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
        <button className="modal-close" aria-label="Close playbook framework" onClick={onClose}><X size={22} /></button>
        <span>Playbook Framework</span>
        <h2>Six controls that move 270 Park proof into 2 WTC delivery</h2>
        <p>Use these pillars as the executive decision framework for planning, validation, procurement, execution, quality, and visibility.</p>
        <div className="modal-pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.id}>
              <strong>{pillar.title}</strong>
              <ul>
                {pillar.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
