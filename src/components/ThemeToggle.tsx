import { Moon, Sun } from "lucide-react";
import type { ThemeMode } from "../App";

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
      {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
