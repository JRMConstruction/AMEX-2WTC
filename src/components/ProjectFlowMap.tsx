import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import type { NavMode } from "../data/dashboardMetrics";
import { projectFlowConnections, projectFlowNodes } from "../data/projectFlow";

type ProjectFlowMapProps = {
  activeMode: NavMode;
  onModeChange: (mode: NavMode) => void;
  compact?: boolean;
};

const nodeById = Object.fromEntries(projectFlowNodes.map((node) => [node.id, node]));

function connectionPath(fromId: string, toId: string, curve = 0) {
  const from = nodeById[fromId];
  const to = nodeById[toId];
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 + curve;

  return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
}

export function ProjectFlowStrip({ activeMode, onModeChange }: ProjectFlowMapProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const stripNodes = projectFlowNodes.filter((node) =>
    ["schedule", "precon", "coordination", "construction", "quality", "signoffs", "occupancy"].includes(node.id),
  );
  const activeNode = stripNodes.find((node) => node.mode === activeMode) ?? stripNodes[0];
  const ActiveIcon = activeNode.icon;
  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setIsOpen(true);
  };
  const closeMenu = () => {
    closeTimer.current = window.setTimeout(() => setIsOpen(false), 160);
  };

  return (
    <section
      className={`presentation-flow-strip ${isOpen ? "open" : ""}`}
      aria-label="Interconnected project flow shortcuts"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
    >
      <button className="flow-dropdown-trigger" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen}>
        <span>Project Flow</span>
        <strong>
          <ActiveIcon size={15} />
          {activeNode.title}
        </strong>
        <ChevronDown size={16} />
      </button>
      {isOpen && (
        <div className="flow-dropdown-menu">
        {stripNodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = activeMode === node.mode;
          return (
            <button
              className={isActive ? "active" : ""}
              key={node.id}
              onClick={() => {
                onModeChange(node.mode);
                setIsOpen(false);
              }}
            >
              <Icon size={15} />
              <span>
                <strong>{node.title}</strong>
                <em>{node.subtitle}</em>
              </span>
              {index < stripNodes.length - 1 && <i />}
            </button>
          );
        })}
        </div>
      )}
    </section>
  );
}

export default function ProjectFlowMap({ activeMode, onModeChange, compact = false }: ProjectFlowMapProps) {
  return (
    <section className={`project-flow-map ${compact ? "compact" : ""}`} aria-label="Interconnected project flow">
      <div className="flow-heading">
        <span>Interconnected Project Flow</span>
        <h2>Conceptual stakeholder workflow</h2>
      </div>

      <div className="flow-stage">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="flowArrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" />
            </marker>
          </defs>
          <ellipse className="flow-orbit" cx="50" cy="52" rx="42" ry="42" />
          {projectFlowConnections.map((connection, index) => (
            <motion.path
              className={connection.dashed ? "flow-link dashed" : "flow-link"}
              d={connectionPath(connection.from, connection.to, connection.curve)}
              key={`${connection.from}-${connection.to}-${index}`}
              markerEnd="url(#flowArrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: index * 0.018, duration: 0.42 }}
            />
          ))}
        </svg>

        {projectFlowNodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = activeMode === node.mode;
          return (
            <motion.button
              className={`flow-node ${node.size} ${node.tone} ${isActive ? "active" : ""}`}
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => onModeChange(node.mode)}
              title={`${node.title}: ${node.subtitle}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.06 + index * 0.025 }}
            >
              <span>
                <Icon size={node.size === "large" ? 34 : node.size === "medium" ? 27 : 18} />
              </span>
              <strong>{node.title}</strong>
              <em>{node.subtitle}</em>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
