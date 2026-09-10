'use client'

import { useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import LuminousTubeCanvas from "./components/LuminousTubeCanvas";
import Navbar from "./components/Navbar";
import About from "./components/portfolio/About";
import Hero from "./components/portfolio/Hero";
import Projects from "./components/portfolio/Projects";
import Skills from "./components/portfolio/Skills";

export const THEME = {
  dark: {
    lime: "#83f36e",
    magenta: "#f967fb",
    cyan: "#60aed5",
    glow:
      "0 0 10px rgba(131,243,110,0.8), 0 0 15px rgba(131,243,110,0.6), 0 0 60px rgba(131,243,110,0.5), 0 0 100px rgba(131,243,110,0.3)",
    headingGlow: "0 0 20px rgba(255,255,255,0.3)",
  },

  light: {
    lime: "#3F8A22",
    magenta: "#B4189A",
    cyan: "#1C7396",
    glow:
      "0 0 8px rgba(63,138,34,0.35), 0 0 20px rgba(63,138,34,0.25)",
    headingGlow: "0 0 12px rgba(0,0,0,0.08)",
  },
};

export type Theme = "dark" | "light";

export default function LuminaPortfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const dark = theme === "dark";
  const t = THEME[theme];

  const { scrollY } = useScroll();

  const tubesOpacity = useTransform(
    scrollY,
    [0, 150, 500, 800],
    [1, 1, 0.4, 0]
  );

  const tubesY = useTransform(
    scrollY,
    [0, 800],
    [0, -180]
  );

  const tubesScale = useTransform(
    scrollY,
    [0, 800],
    [1, 1.08]
  );

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div
      className={"relative min-h-screen font-sans transition-colors duration-500 " +
        (dark
          ? "bg-[#050505]"
          : "bg-[#F7F6F3]"
        )
      }
    >
      <LuminousTubeCanvas
        theme={theme}
        opacity={tubesOpacity}
        y={tubesY}
        scale={tubesScale}
      />

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onContactClick={() => setIsContactOpen(true)}
        colors={t}
      />

      <Hero
        theme={theme}
        colors={t}
        onClick={() => setIsContactOpen(true)}
      />

      <About
        theme={theme}
      />

      <Skills
        theme={theme}
      />

      <Projects
        theme={theme}
        colors={t}
      />

      <Footer
        theme={theme}
        colors={t}
      />

      <ContactModal
        theme={theme}
        colors={t}
        isOpen={isContactOpen}
        onClose={() =>
          setIsContactOpen(false)
        }
      />
    </div>
  );
}