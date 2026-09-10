"use client";

import { Briefcase, Download, GraduationCap, Languages } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Theme } from "../../page";
import GlassButton from "../GlassButton";
import { education, experience, languages, skills } from "./data";

type SkillsProps = {
  theme: Theme;
};

export default function Skills({ theme }: SkillsProps) {
  const dark = theme === "dark";

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Laura-Simion-CV.pdf";
    link.click();
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={
        "relative min-h-screen  px-6 py-32 " +
        (dark
          ? "text-white"
          : "text-[#0a0a0a]")
      }
    >
      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND GRID                                                     */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: dark
            ? `
              linear-gradient(
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              )
            `
            : `
              linear-gradient(
                rgba(0,0,0,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(0,0,0,0.5) 1px,
                transparent 1px
              )
            `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative vertical line */}
      <motion.div
        style={{
          scaleY: scrollYProgress,
        }}
        className={
          "absolute left-1/2 top-0 bottom-0 w-px origin-top pointer-events-none hidden lg:block " +
          (dark
            ? "bg-white/[0.04]"
            : "bg-black/[0.04]")
        }
      />

      <div className="relative w-full max-w-[1200px] mx-auto">

        {/* ---------------------------------------------------------------- */}
        {/* SECTION LABEL                                                     */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex items-center gap-4 mb-12"
        >
          <span
            className={
              "text-[10px] tracking-[0.3em] uppercase " +
              (dark
                ? "text-white/40"
                : "text-black/40")
            }
          >
            03 / Skills
          </span>

          <div
            className={
              "h-px w-16 " +
              (dark
                ? "bg-white/20"
                : "bg-black/20")
            }
          />
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* HERO HEADING                                                      */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [200, -400]),
          }}
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="uppercase font-black tracking-tighter leading-[0.84]"
            style={{
              fontFamily:
                "'Archivo', sans-serif",
              fontSize:
                "clamp(3.5rem, 8vw, 8rem)",
            }}
          >
            Building
            <br />

            <span
              className={
                dark
                  ? "text-white/20"
                  : "text-black/15"
              }
            >
              for the
            </span>

            <br />

            <span
              className={
                dark
                  ? "text-[#83f36e]"
                  : "text-[#3F8A22]"
              }
              style={{
                textShadow: dark
                  ? "0 0 30px rgba(131,243,110,0.3)"
                  : "none",
              }}
            >
              WEB
            </span>
          </motion.h2>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* INTRO + ACTIONS                                                   */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <p
            className={
              "max-w-[650px] text-base md:text-lg leading-relaxed " +
              (dark
                ? "text-white/50"
                : "text-black/55")
            }
          >
            Frontend Developer with 5+ years
            of experience designing, developing,
            and modernizing enterprise-scale web
            applications using React, TypeScript,
            and JavaScript.
          </p>

          <div className="flex flex-col gap-4 pr-35 shrink-0">
            <div>
              <p
                className={
                  "text-sm pl-2 " +
                  (dark
                    ? "text-white/45"
                    : "text-black/50")
                }
              >
                Want the complete picture?
              </p>
            </div>
            <GlassButton theme={theme} icon={Download} onClick={handleDownloadCV}>
              Download CV
            </GlassButton>
          </div>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* EXPERIENCE + SIDEBAR                                              */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-28 grid lg:grid-cols-[1.4fr_0.6fr] gap-16 lg:gap-24">

          {/* ================================================================ */}
          {/* EXPERIENCE                                                        */}
          {/* ================================================================ */}

          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [200, -400]),
            }}
          >
            <SectionLabel
              icon={Briefcase}
              label="Experience"
              theme={theme}
            />

            <div
              className={
                "relative border-t " +
                (dark
                  ? "border-white/10"
                  : "border-black/10")
              }
            >
              {experience.map(
                (item, index) => (
                  <motion.article
                    key={item.company}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={"relative py-10"}
                  >
                    {/* Timeline dot */}
                    <div
                      className={
                        "absolute -left-[5px] top-12 w-2 h-2 rounded-full " +
                        (dark
                          ? "bg-[#83f36e]"
                          : "bg-[#3F8A22]")
                      }
                      style={{
                        boxShadow: dark
                          ? "0 0 12px rgba(131,243,110,0.8)"
                          : "0 0 8px rgba(63,138,34,0.35)",
                      }}
                    />

                    <div className="grid md:grid-cols-[150px_1fr] gap-8 pl-5 md:pl-8">

                      {/* Period */}
                      <div>
                        <span
                          className={"text-[9px] tracking-[0.2em] " +
                            (dark
                              ? "text-white/30"
                              : "text-black/30")
                          }
                        >
                          {item.period}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3
                              className={
                                "text-xl font-semibold tracking-tight " +
                                (dark
                                  ? "text-white"
                                  : "text-black")
                              }
                            >
                              {item.role}
                            </h3>

                            <p
                              className={"mt-1 text-xs tracking-wide " +
                                (dark
                                  ? "text-[#83f36e]"
                                  : "text-[#3F8A22]")
                              }
                            >
                              {item.company}
                            </p>
                          </div>

                          <span
                            className={"hidden sm:block text-[9px] tracking-[0.2em] uppercase " +
                              (dark
                                ? "text-white/20"
                                : "text-black/25")
                            }
                          >
                            Enterprise
                          </span>
                        </div>

                        <p
                          className={"mt-6 text-sm md:text-base leading-relaxed " +
                            (dark
                              ? "text-white/45"
                              : "text-black/50")
                          }
                        >
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-7 space-y-3">
                          {item.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex gap-3"
                            >
                              <span
                                className={"mt-[7px] shrink-0 w-1 h-1 rounded-full " +
                                  (dark
                                    ? "bg-white/30"
                                    : "bg-black/30")
                                }
                              />

                              <span
                                className={"text-sm leading-relaxed " +
                                  (dark
                                    ? "text-white/40"
                                    : "text-black/45")
                                }
                              >
                                {highlight}
                              </span>
                            </div>
                          )
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-7">
                          {item.technologies.map((technology) => (
                            <span
                              key={technology}
                              className={"px-2.5 py-1.5 rounded-full text-[9px] tracking-wider uppercase border " +
                                (dark
                                  ? "border-white/10 text-white/35 bg-white/[0.02]"
                                  : "border-black/10 text-black/40 bg-black/[0.02]")
                              }
                            >
                              {technology}
                            </span>
                          )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              )}
            </div>
          </motion.div>

          {/* ================================================================ */}
          {/* SIDEBAR                                                           */}
          {/* ================================================================ */}

          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 1], [200, -400]),
            }}
            className="space-y-12"
          >
            {/* -------------------------------------------------------------- */}
            {/* TOOLKIT                                                         */}
            {/* -------------------------------------------------------------- */}

            <div>
              <SectionLabel
                label="Technical Toolkit"
                theme={theme}
              />

              <div
                className={"p-6 rounded-2xl border backdrop-blur-md " +
                  (dark
                    ? "border-white/10 bg-white/[0.02]"
                    : "border-black/10 bg-black/[0.02]")
                }
              >
                <div className="flex flex-wrap gap-2">
                  {skills.map(
                    (skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.035,
                        }}
                        whileHover={{ y: -2 }}
                        className={"px-3 py-2 rounded-full text-[10px] tracking-wide border transition-colors " +
                          (dark
                            ? "border-white/10 text-white/50 bg-white/[0.02] hover:border-[#83f36e]/30 hover:text-[#83f36e]"
                            : "border-black/10 text-black/50 bg-black/[0.02] hover:border-[#3F8A22]/30 hover:text-[#3F8A22]")
                        }
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* EDUCATION                                                       */}
            {/* -------------------------------------------------------------- */}

            <div>
              <SectionLabel
                icon={GraduationCap}
                label="Education"
                theme={theme}
              />

              <div
                className={"border-t " +
                  (dark
                    ? "border-white/10"
                    : "border-black/10")
                }
              >
                {education.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className={"py-5 border-b " +
                      (dark
                        ? "border-white/10"
                        : "border-black/10")
                    }
                  >
                    <p
                      className={"text-sm font-medium " +
                        (dark
                          ? "text-white/70"
                          : "text-black/70")
                      }
                    >
                      {item.title}
                    </p>

                    <p
                      className={"mt-1 text-xs leading-relaxed " +
                        (dark
                          ? "text-white/35"
                          : "text-black/40")
                      }
                    >
                      {item.subtitle}
                    </p>
                  </motion.div>
                )
                )}
              </div>
            </div>

            {/* -------------------------------------------------------------- */}
            {/* LANGUAGES                                                        */}
            {/* -------------------------------------------------------------- */}

            <div>
              <SectionLabel
                icon={Languages}
                label="Languages"
                theme={theme}
              />

              <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
                {languages.map(
                  (language) => (
                    <div
                      key={language.name}
                    >
                      <p
                        className={"text-sm font-medium " +
                          (dark
                            ? "text-white/70"
                            : "text-black/70")
                        }
                      >
                        {language.name}
                      </p>

                      <p
                        className={"mt-1 text-[9px] tracking-[0.15em] uppercase " +
                          (dark
                            ? "text-white/30"
                            : "text-black/35")
                        }
                      >
                        {language.level}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION LABEL */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  icon: Icon,
  label,
  theme,
}: {
  icon?: typeof Briefcase;
  label: string;
  theme: Theme;
}) {
  const dark = theme === "dark";

  return (
    <div
      className={"flex items-center gap-3 mb-7 text-[10px] tracking-[0.3em] uppercase " +
        (dark
          ? "text-white/30"
          : "text-black/30")
      }
    >
      {Icon && (
        <Icon
          size={13}
          className={
            dark
              ? "text-white/30"
              : "text-black/30"
          }
        />
      )}

      <span>{label}</span>
    </div>
  );
}