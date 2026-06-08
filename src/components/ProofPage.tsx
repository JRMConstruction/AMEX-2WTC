import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, ChevronDown, Pin } from "lucide-react";
import type { NavMode } from "../data/dashboardMetrics";
import {
  applyingPlaybook,
  playbookPillars,
  proofGallery,
  proofMetrics,
  proofModules,
  transferMatrix,
} from "../data/proofData";
import ProofSourcePanel from "./ProofSourcePanel";
import ProofMetricsRow from "./ProofMetricsRow";
import ProofModuleCards from "./ProofModuleCards";
import PlaybookPillars from "./PlaybookPillars";
import TransferMatrix from "./TransferMatrix";
import ApplyingPlaybookPanel from "./ApplyingPlaybookPanel";
import ProofGallery from "./ProofGallery";
import PlaybookModal from "./PlaybookModal";

type CollapsibleSectionId = "modules" | "transfer" | "pillars" | "playbook";

export default function ProofPage({ onModeChange }: { onModeChange: (mode: NavMode) => void }) {
  const [activeModule, setActiveModule] = useState(proofModules[0]);
  const [activeAccordionId, setActiveAccordionId] = useState(applyingPlaybook[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [openSections, setOpenSections] = useState<CollapsibleSectionId[]>(["modules", "playbook"]);
  const [pinnedSections, setPinnedSections] = useState<CollapsibleSectionId[]>(["playbook"]);

  const isOpen = (id: CollapsibleSectionId) => openSections.includes(id);
  const isPinned = (id: CollapsibleSectionId) => pinnedSections.includes(id);

  const toggleSection = (id: CollapsibleSectionId) => {
    setOpenSections((current) => {
      const nextIsOpen = !current.includes(id);
      if (!nextIsOpen && isPinned(id)) return current;
      if (!nextIsOpen) return current.filter((sectionId) => sectionId !== id);
      return Array.from(new Set([...current.filter((sectionId) => isPinned(sectionId)), id]));
    });
  };

  const togglePinned = (id: CollapsibleSectionId) => {
    setPinnedSections((current) => {
      const wasPinned = current.includes(id);
      const nextPinned = wasPinned ? current.filter((sectionId) => sectionId !== id) : [...current, id];
      if (!wasPinned) {
        setOpenSections((open) => Array.from(new Set([...open, id])));
      }
      return nextPinned;
    });
  };

  const sectionControls = (id: CollapsibleSectionId) => (
    <div className="proof-section-actions">
      <button
        className={isPinned(id) ? "section-pin active" : "section-pin"}
        onClick={(event) => {
          event.stopPropagation();
          togglePinned(id);
        }}
        aria-pressed={isPinned(id)}
        aria-label={isPinned(id) ? "Unpin section" : "Pin section open"}
        title={isPinned(id) ? "Unpin section" : "Pin section open"}
      >
        <Pin size={15} />
        {isPinned(id) ? "Pinned" : "Pin"}
      </button>
      <button className={isOpen(id) ? "section-toggle open" : "section-toggle"} onClick={() => toggleSection(id)} aria-expanded={isOpen(id)}>
        <ChevronDown size={17} />
        {isOpen(id) ? "Collapse" : "Open"}
      </button>
    </div>
  );

  const viewStack = () => {
    window.history.pushState(null, "", "/stack");
    onModeChange("STACK");
  };

  return (
    <main className="proof-page">
      <ProofSourcePanel />

      <section className="proof-main">
        <motion.section className="proof-hero" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <span>Proof of Performance</span>
          <h1>270 Park Playbook to 2 WTC</h1>
          <p>
            JRM's work at 270 Park Avenue demonstrates a repeatable delivery platform for a 28-floor, 1.3M+ SF headquarters interior supporting
            10,000 employees. The same planning discipline, 1st works program, procurement controls, logistics coordination, PANYNJ/QAD readiness,
            and executive reporting model can be adapted for American Express at 2 World Trade Center.
          </p>
        </motion.section>

        <ProofMetricsRow metrics={proofMetrics} />
        <ProofModuleCards
          modules={proofModules}
          activeId={activeModule.id}
          onSelect={(module) => {
            setActiveModule(module);
            setOpenSections((current) => Array.from(new Set([...current.filter((id) => isPinned(id)), "modules"])));
          }}
          controls={sectionControls("modules")}
          isOpen={isOpen("modules")}
        />

        <motion.section className="applied-drawer proof-panel" key={activeModule.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <Building2 size={24} />
          <div>
            <span>Applied to 2 WTC</span>
            <strong>{activeModule.title}</strong>
            <p>{activeModule.appliedTo2WTC}</p>
          </div>
          <button onClick={() => setModalOpen(true)}>Explore Playbook Framework <ArrowRight size={16} /></button>
        </motion.section>

        <TransferMatrix items={transferMatrix} controls={sectionControls("transfer")} isOpen={isOpen("transfer")} />
        <PlaybookPillars pillars={playbookPillars} onOpen={() => setModalOpen(true)} controls={sectionControls("pillars")} isOpen={isOpen("pillars")} />
      </section>

      <ApplyingPlaybookPanel
        items={applyingPlaybook}
        activeId={activeAccordionId}
        onToggle={(id) => setActiveAccordionId(id)}
        onViewStack={viewStack}
        controls={sectionControls("playbook")}
        isOpen={isOpen("playbook")}
      />

      <ProofGallery items={proofGallery} />

      <AnimatePresence>
        {modalOpen && <PlaybookModal pillars={playbookPillars} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}
