import { motion } from "framer-motion";

type ProgressBarProps = {
  value: number;
  tone?: "blue" | "green" | "gold" | "red";
};

export default function ProgressBar({ value, tone = "blue" }: ProgressBarProps) {
  return (
    <div className={`progress-track ${tone}`}>
      <motion.span initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 0.9, ease: "easeOut" }} />
    </div>
  );
}
