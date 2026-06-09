import TopNav from "./components/TopNav";
import ThemeToggle from "./components/ThemeToggle";
import StackPage from "./components/StackPage";
import NavInterfacePage from "./components/NavInterfacePage";
import { ProjectFlowStrip } from "./components/ProjectFlowMap";
import { useState } from "react";
import type { FormEvent } from "react";
import type { NavMode } from "./data/dashboardMetrics";

export type ThemeMode = "light" | "dark";
export type ViewMode = "2D Plan" | "3D View";

const PRESENTATION_PASSWORD = "AMEX2WTC!2026";
const PASSWORD_SESSION_KEY = "amex-2wtc-unlocked";

function readPasswordSession() {
  try {
    return window.sessionStorage?.getItem(PASSWORD_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function writePasswordSession() {
  try {
    window.sessionStorage?.setItem(PASSWORD_SESSION_KEY, "true");
  } catch {
    // Unlock this page even when browser storage is unavailable.
  }
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === PRESENTATION_PASSWORD) {
      writePasswordSession();
      onUnlock();
      return;
    }
    setError("Incorrect password. Please try again.");
    setPassword("");
  };

  return (
    <main className="password-screen">
      <section className="password-card" aria-label="Presentation password">
        <div className="password-brand-row">
          <svg className="password-amex" viewBox="0 0 420 132" role="img" aria-label="American Express">
            <g fill="currentColor">
              <text x="0" y="54" fontFamily="Arial Black, Arial, Helvetica, sans-serif" fontSize="54" fontWeight="900" letterSpacing="-3">
                AMERICAN
              </text>
              <text x="68" y="118" fontFamily="Arial Black, Arial, Helvetica, sans-serif" fontSize="54" fontWeight="900" letterSpacing="-3">
                EXPRESS
              </text>
            </g>
          </svg>
          <div className="password-jrm">JRM <span>Construction<br />Management</span></div>
        </div>
        <div className="password-copy">
          <span>Secure Preview</span>
          <h1>2 World Trade Center</h1>
          <p>Interior buildout presentation access</p>
        </div>
        <form className="password-form" onSubmit={submitPassword}>
          <label htmlFor="presentation-password">Password</label>
          <div className="password-input-row">
            <input
              id="presentation-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError("");
              }}
              autoComplete="current-password"
              autoFocus
            />
            <button type="submit">Enter</button>
          </div>
          {error ? <p className="password-error" role="alert">{error}</p> : <p className="password-hint">Authorized project team access only.</p>}
        </form>
      </section>
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [activeMode, setActiveMode] = useState<NavMode>("VISION");
  const [unlocked, setUnlocked] = useState(readPasswordSession);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

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
