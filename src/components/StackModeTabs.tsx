import { stackModes } from "../data/stackBands";
import type { StackMode } from "../data/stackBands";

type StackModeTabsProps = {
  mode: StackMode;
  onModeChange: (mode: StackMode) => void;
};

export default function StackModeTabs({ mode, onModeChange }: StackModeTabsProps) {
  return (
    <div className="stack-mode-tabs" aria-label="Stack mode tabs">
      {stackModes.map((stackMode) => (
        <button className={mode === stackMode ? "active" : ""} key={stackMode} onClick={() => onModeChange(stackMode)}>
          {stackMode}
        </button>
      ))}
    </div>
  );
}
