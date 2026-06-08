import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { TransferMatrixItem } from "../data/proofData";

export default function TransferMatrix({
  items,
  controls,
  isOpen = true,
}: {
  items: TransferMatrixItem[];
  controls?: ReactNode;
  isOpen?: boolean;
}) {
  return (
    <section className="transfer-matrix proof-panel">
      <div className="proof-section-head">
        <div>
          <span>270 Park Proven to 2 WTC Applied</span>
          <strong>Direct analogy matrix</strong>
        </div>
        {controls}
      </div>
      {isOpen && (
        <div>
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.035 }}
            >
              <p>{item.provenAt270Park}</p>
              <ArrowRight size={18} />
              <strong>{item.appliedTo2WTC}</strong>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
