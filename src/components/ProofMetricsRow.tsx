import { Building2, ShieldCheck, Sparkles, SquareStack, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import type { ProofMetric } from "../data/proofData";

const icons = [SquareStack, Building2, UsersRound, ShieldCheck, Sparkles];

export default function ProofMetricsRow({ metrics }: { metrics: ProofMetric[] }) {
  return (
    <section className="proof-metrics proof-panel">
      {metrics.map((metric, index) => {
        const Icon = icons[index] ?? Building2;
        return (
          <motion.div
            className="proof-metric-card"
            key={metric.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
          >
            <Icon size={34} />
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.description}</p>
            <small>{metric.sourceType === "source-backed" ? "Source-backed fact" : "Demo KPI / Placeholder"}</small>
          </motion.div>
        );
      })}
    </section>
  );
}
