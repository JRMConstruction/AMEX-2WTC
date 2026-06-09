import TopNav from "./components/TopNav";
import ThemeToggle from "./components/ThemeToggle";
import StackPage from "./components/StackPage";
import NavInterfacePage from "./components/NavInterfacePage";
import { ProjectFlowStrip } from "./components/ProjectFlowMap";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { NavMode } from "./data/dashboardMetrics";

export type ThemeMode = "light" | "dark";
export type ViewMode = "2D Plan" | "3D View";

const PRESENTATION_PASSWORD = "AMEX2WTC!2026";
const PASSWORD_SESSION_KEY = "amex-2wtc-unlocked";
const INACTIVITY_TIMEOUT_MS = 15 * 60 * 1000;

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

function clearPasswordSession() {
  try {
    window.sessionStorage?.removeItem(PASSWORD_SESSION_KEY);
  } catch {
    // Storage may be unavailable in some preview contexts.
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

  const lockPresentation = () => {
    clearPasswordSession();
    setUnlocked(false);
    setActiveMode("VISION");
  };

  useEffect(() => {
    if (!unlocked) {
      return undefined;
    }

    let inactivityTimer = window.setTimeout(lockPresentation, INACTIVITY_TIMEOUT_MS);
    const resetInactivityTimer = () => {
      window.clearTimeout(inactivityTimer);
      inactivityTimer = window.setTimeout(lockPresentation, INACTIVITY_TIMEOUT_MS);
    };
    const activityEvents = ["click", "keydown", "mousemove", "pointerdown", "scroll", "touchstart"];

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, resetInactivityTimer, { passive: true });
    });

    return () => {
      window.clearTimeout(inactivityTimer);
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, resetInactivityTimer);
      });
    };
  }, [unlocked]);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className={`app-shell stack-app ${theme}`}>
      <TopNav activeMode={activeMode} onModeChange={setActiveMode}>
        <ThemeToggle theme={theme} onToggle={() => setTheme(theme === "light" ? "dark" : "light")} />
        <button className="logout-button" type="button" onClick={lockPresentation} aria-label="Log out of presentation" title="Log out">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </TopNav>
      <ProjectFlowStrip activeMode={activeMode} onModeChange={setActiveMode} />
      {activeMode === "STACK" ? <StackPage /> : <NavInterfacePage mode={activeMode} onModeChange={setActiveMode} />}
    </div>
  );
}

export default App;
