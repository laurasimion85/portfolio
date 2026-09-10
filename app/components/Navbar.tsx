import { House } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";
import { Theme } from "../page";
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
  onContactClick: () => void;
  colors: {
    lime: string;
  };
};

const navItems = [
  {
    label: "Home",
    id: "home",
    icon: House,
  },
  {
    label: "About me",
    id: "about",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Projects",
    id: "projects",
  }
];

export const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/laurasimion85/laura-simion-portfolio",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/lauraadrianasimion/",
    label: "LinkedIn",
  },
  {
    icon: FaCodepen,
    href: "https://codepen.io/laurasimion85/pens/public",
    label: "Codepen",
  },
];

export default function Navbar({
  theme,
  onToggleTheme,
  onContactClick,
  colors,
}: NavbarProps) {
  const dark = theme === "dark";

  const [activeSection, setActiveSection] =
    useState("home");

  const { scrollY } = useScroll();

  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      if (latest < 150) {
        setActiveSection("home");
        return;
      }

      const sections = navItems
        .filter((item) => item.id !== "home")
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = latest + 120;

      let currentSection = "home";

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop <=
          scrollPosition
        ) currentSection = section.id;

      });

      setActiveSection(currentSection);
    }
  );

  return (
    <>
      <header
        className={
          "fixed top-0 left-0 right-0 z-50 " +
          "flex items-center justify-between px-8 py-6 " +
          "backdrop-blur-md border-b " +
          (dark
            ? "bg-[#050505]/60 border-white/5"
            : "bg-[#F7F6F3]/70 border-black/5")
        }
      >

        {/* Navigation */}
        <nav
          className={
            "hidden md:flex items-center gap-10 text-[13px] tracking-[0.15em] uppercase " +
            (dark
              ? "text-white/60"
              : "text-black/60")
          }
        >
          {navItems.map((item) => {
            const active = activeSection === item.id;

            if (item.id === "home") {
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-label="Home"
                  className={
                    "relative flex items-center justify-center " +
                    "transition-colors duration-300 " +
                    (
                      active
                        ? dark
                          ? "text-[#83f36e]"
                          : "text-[#3F8A22]"
                        : dark
                          ? "text-white/40 hover:text-white"
                          : "text-black/40 hover:text-black"
                    )
                  }
                >
                  <House
                    size={17}
                    strokeWidth={
                      active ? 2.2 : 1.8
                    }
                  />
                </a>
              );
            }

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  "relative transition-colors duration-300 " +
                  (
                    active
                      ? dark
                        ? "text-white"
                        : "text-black"
                      : dark
                        ? "text-white/40 hover:text-white"
                        : "text-black/40 hover:text-black"
                  )
                }
              >
                {item.label}

                {/* Active indicator */}
                <span
                  className={
                    "absolute -bottom-2 left-0 h-px transition-all duration-300 " +
                    (
                      active
                        ? dark
                          ? "w-full bg-[#83f36e]"
                          : "w-full bg-[#3F8A22]"
                        : "w-0"
                    )
                  }
                />
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
          />

          <button
            className={
              "px-5 py-2.5 rounded-full text-xs tracking-wider uppercase border backdrop-blur-md transition-colors " +
              (dark
                ? "text-white border-white/20 bg-white/[0.03] hover:bg-white/[0.08]"
                : "text-[#0a0a0a] border-black/15 bg-black/[0.03] hover:bg-black/[0.08]")
            }
            onClick={onContactClick}
          >
            Get in Touch
          </button>
        </div>
      </header>
      <aside className="fixed right-5 top-1/4 z-20 -translate-y-1/2 flex flex-col items-center gap-3 pointer-events-auto">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={
              "w-11 h-11 flex items-center justify-center rounded-full border backdrop-blur-md transition-all duration-200 shadow-[0_0_20px_rgba(0,0,0,0.12)] " +
              (dark
                ? "border-white/10 bg-[#0d0d0d]/80 text-white/70 hover:border-[#83f36e]/50 hover:bg-[#111]/90"
                : "border-black/10 bg-[#f6f6f4]/85 text-black/60 hover:border-[#3F8A22]/50 hover:bg-white")
            }
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.lime)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "")
            }
          >
            <Icon size={16} />
          </a>
        ))}
      </aside>
    </>
  );
}