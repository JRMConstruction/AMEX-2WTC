import { ArrowRight, Building2, CheckCircle2, Network, Sparkles, Truck } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { ProofModule } from "../data/proofData";

const icons = {
  building: Building2,
  check: CheckCircle2,
  truck: Truck,
  sparkles: Sparkles,
  network: Network,
};

type ProofModuleCardsProps = {
  modules: ProofModule[];
  activeId: string;
  onSelect: (module: ProofModule) => void;
  controls?: ReactNode;
  isOpen?: boolean;
};

export default function ProofModuleCards({ modules, activeId, onSelect, controls, isOpen = true }: ProofModuleCardsProps) {
  return (
    <section className="proof-modules proof-panel">
      <div className="proof-section-head">
        <div>
          <span>What JRM Proved at 270 Park</span>
          <strong>Click any module to see the 2 WTC application</strong>
        </div>
        {controls}
      </div>
      {isOpen && (
        <div className="proof-module-grid">
          {modules.map((module, index) => {
            const Icon = icons[module.icon];
            return (
              <motion.button
                className={module.id === activeId ? "active" : ""}
                key={module.id}
                onClick={() => onSelect(module)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.04 }}
              >
                <img src={module.image} alt="" />
                <div>
                  <Icon size={22} />
                  <strong>{module.title}</strong>
                  <p>{module.description}</p>
                </div>
                <span>Apply to 2 WTC <ArrowRight size={16} /></span>
              </motion.button>
            );
          })}
        </div>
      )}
    </section>
  );
}
