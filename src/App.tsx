import TopNav from "./components/TopNav";
import ThemeToggle from "./components/ThemeToggle";
import StackPage from "./components/StackPage";
import NavInterfacePage from "./components/NavInterfacePage";
import { ProjectFlowStrip } from "./components/ProjectFlowMap";
import { useState } from "react";
import type { NavMode } from "./data/dashboardMetrics";

export type ThemeMode = "light" | "dark";
export type ViewMode = "2D Plan" | "3D View";

function App() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [activeMode, setActiveMode] = useState<NavMode>("VISION");

  return (
    <div className={`app-shell stack-app ${theme}`}>
      <TopNav activeMode={activeMode} onModeChange={setActiveMode}>
        <ThemeToggle theme={theme} onToggle={() => setTheme(theme === "light" ? "dark" : "light")} />
      </TopNav>
      <ProjectFlowStrip activeMode={activeMode} onModeChange={setActiveMode} />
      {activeMode === "STACK" ? <StackPage /> : <NavInterfacePage mode={activeMode} onModeChange={setActiveMode} />}
    </div>
  );
}

export default App;
