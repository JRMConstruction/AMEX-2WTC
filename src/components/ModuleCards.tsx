import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { modules } from "../data/dashboardMetrics";

type Module = (typeof modules)[number];

type ModuleCardsProps = {
  onSelect: (module: Module) => void;
};

export default function ModuleCards({ onSelect }: ModuleCardsProps) {
  return (
    <section className="module-row" aria-label="Interactive presentation modules">
      {modules.map((module, index) => {
        const Icon = module.icon;
        return (
          <motion.button
            className="module-card"
            key={module.id}
            onClick={() => onSelect(module)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ y: -4 }}
          >
            <div className="module-visual">
              <img src={module.image} alt="" />
              <Icon size={24} />
            </div>
            <strong>{module.title}</strong>
            <span>{module.text}</span>
            <ArrowRight size={17} />
          </motion.button>
        );
      })}
    </section>
  );
}
