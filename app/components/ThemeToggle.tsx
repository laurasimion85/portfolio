'use client'

import { Moon, Sun } from "lucide-react";
import { Theme } from "../page";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export default function ThemeToggle({
  theme,
  onToggle,
}: ThemeToggleProps) {
  const dark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className={
        "w-10 h-10 flex items-center justify-center rounded-full border backdrop-blur-md transition-colors " +
        (
          dark
            ? "border-white/20 bg-white/[0.03] text-white hover:bg-white/[0.08]"
            : "border-black/15 bg-black/[0.03] text-[#0a0a0a] hover:bg-black/[0.08]"
        )
      }
    >
      {dark ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}