"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { Theme } from "../../page";
import { ReactNode, useRef } from "react";
import { Building2, Code2, Rocket } from "lucide-react";

type AboutProps = {
  theme: Theme;
};

const principles = [
  {
    number: "01",
    title: "CLARITY",
    text: "Complex systems should feel simple to use.",
  },
  {
    number: "02",
    title: "CRAFT",
    text: "The details matter — especially the ones nobody sees.",
  },
  {
    number: "03",
    title: "CURIOSITY",
    text: "Always experimenting. Always learning. Always breaking things to understand them.",
  },
];

export default function About({ theme }: AboutProps) {
  const dark = theme === "dark";

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.85, 1],
    [0.65, 1, 1, 0.8]
  );

  const sectionScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.97, 1, 1, 0.985]
  );

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    [180, -180]
  );

  const glowX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-80, 40, 80]
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.9, 1],
    [0, 0.5, 0.7, 0.45, 0]
  );

  const visualRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-4, 0, 4]
  );

  const visualScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.82, 1, 1, 0.9]
  );

  const gridOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.9, 1],
    [0, 0.5, 1, 0.7, 0]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      style={{
        opacity: sectionOpacity,
        scale: sectionScale,
      }}
      className={
        "relative min-h-screen flex items-center overflow-hidden px-6 py-32 " +
        (dark
          ? "text-white"
          : "text-[#0a0a0a]")
      }
    >
      {/* ---------------------------------------------------------------- */}
      {/* AMBIENT BACKGROUND                                              */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        style={{
          x: glowX,
          y: glowY,
          opacity: glowOpacity,
        }}
        className="absolute pointer-events-none"
      >
        <div
          className="w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background: dark
              ? "radial-gradient(circle, rgba(131,243,110,0.10) 0%, rgba(105,88,213,0.04) 35%, transparent 70%)"
              : "radial-gradient(circle, rgba(63,138,34,0.07) 0%, rgba(28,115,150,0.025) 35%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* GRID                                                             */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        style={{
          opacity: gridOpacity,
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
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
            opacity: 0.035,
          }}
        />
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* TOP TRANSITION LINE                                             */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] origin-center"
      >
        <div
          className={
            "h-px " +
            (dark
              ? "bg-white/10"
              : "bg-black/10")
          }
        />
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* CONTENT                                                          */}
      {/* ---------------------------------------------------------------- */}

      <div className="relative w-full max-w-[1200px] mx-auto">

        {/* ---------------------------------------------------------------- */}
        {/* SECTION LABEL                                                   */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
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
            01 / About
          </span>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 64,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className={
              "h-px " +
              (dark
                ? "bg-white/20"
                : "bg-black/20")
            }
          />
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* MAIN CONTENT                                                    */}
        {/* ---------------------------------------------------------------- */}

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">

          {/* ============================================================ */}
          {/* LEFT                                                          */}
          {/* ============================================================ */}

          <div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }} whileInView={{
                opacity: 1,
                y: 0,
              }} viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9, ease: [0.16, 1, 0.3, 1],
              }}
              className="uppercase font-black tracking-tighter leading-[0.88]"
              style={{
                fontFamily:
                  "'Archivo', sans-serif",
                fontSize:
                  "clamp(3.2rem, 7vw, 7rem)",
                y: useTransform(scrollYProgress, [0, 1], [200, -400]),
              }}
            >
              I turn
              <br />

              <span className={dark ? "text-white/20" : "text-black/15"}> complexity</span>

              <br />

              into{" "}
              <span
                className={
                  dark
                    ? "text-[#83f36e]"
                    : "text-[#3F8A22]"
                }
                style={{
                  textShadow: dark
                    ? "0 0 30px rgba(131,243,110,0.35)"
                    : "none",
                }}
              >
                clarity
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(6px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className={
                "mt-10 max-w-[600px] text-base md:text-lg leading-relaxed " +
                (dark
                  ? "text-white/50"
                  : "text-black/55")
              }
            >
              I'm a frontend developer who enjoys
              the space between design and
              engineering — turning complex
              requirements into interfaces that
              feel natural to use.

              <br />
              <br />

              I care about the details users don't
              notice: thoughtful interactions,
              responsive layouts, accessible
              components, and code that's still
              pleasant to work with six months
              later.
            </motion.p>

            {/* Stats */}
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
                delay: 0.35,
              }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              <Stat
                value="5+"
                label="Years"
                theme={theme}
              />

              <Stat
                value={<Code2 />}
                label="React/TypeScript"
                theme={theme}
              />

              <Stat
                value={<Building2 />}
                label="Enterprise Application"
                theme={theme}
              />

              <Stat
                value={<Rocket />}
                label="Production Experience"
                theme={theme}
              />
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT — VISUAL                                                */}
          {/* ============================================================ */}

          <motion.div
            style={{

              y: useTransform(scrollYProgress, [0, 1], [200, -400]),

              rotate: visualRotate,
              scale: visualScale,
            }}
            className="relative flex items-center justify-center min-h-[420px]"
          >
            <AboutVisual
              theme={theme}
            />
          </motion.div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* PRINCIPLES                                                       */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-32">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.7,
            }}
            className={
              "mb-8 text-[10px] tracking-[0.3em] uppercase " +
              (dark
                ? "text-white/30"
                : "text-black/30")
            }
          >
            How I work
          </motion.div>

          <div
            className={
              "border-t " +
              (dark
                ? "border-white/10"
                : "border-black/10")
            }
          >
            {principles.map(
              (
                principle,
                index
              ) => (
                <motion.div
                  key={
                    principle.number
                  }
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    duration: 0.7,
                    delay:
                      index * 0.12,
                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className={
                    "group grid grid-cols-[50px_1fr] md:grid-cols-[80px_180px_1fr] gap-4 md:gap-8 py-7 border-b transition-colors " +
                    (dark
                      ? "border-white/10"
                      : "border-black/10")
                  }
                >
                  {/* Number */}
                  <span
                    className={
                      "text-[10px] tracking-[0.2em] " +
                      (dark
                        ? "text-white/25"
                        : "text-black/25")
                    }
                  >
                    {
                      principle.number
                    }
                  </span>

                  {/* Title */}
                  <span
                    className={
                      "text-xs tracking-[0.2em] font-medium transition-colors " +
                      (dark
                        ? "text-white/60 group-hover:text-[#83f36e]"
                        : "text-black/60 group-hover:text-[#3F8A22]")
                    }
                  >
                    {
                      principle.title
                    }
                  </span>

                  {/* Description */}
                  <span
                    className={
                      "text-sm md:text-base leading-relaxed " +
                      (dark
                        ? "text-white/45"
                        : "text-black/50")
                    }
                  >
                    {
                      principle.text
                    }
                  </span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ========================================================================= */
/* STAT                                                                      */
/* ========================================================================= */

function Stat({
  value,
  label,
  theme,
}: {
  value: string | ReactNode;
  label: string;
  theme: Theme;
}) {
  const dark = theme === "dark";

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <div
        className={
          "text-lg md:text-xl font-bold tracking-tight " +
          (dark
            ? "text-white"
            : "text-black")
        }
      >
        {value}
      </div>

      <div
        className={
          "mt-1 text-[9px] tracking-[0.2em] uppercase " +
          (dark
            ? "text-white/30"
            : "text-black/35")
        }
      >
        {label}
      </div>
    </motion.div>
  );
}

/* ========================================================================= */
/* ABOUT VISUAL                                                              */
/* ========================================================================= */

function AboutVisual({
  theme,
}: {
  theme: Theme;
}) {
  const dark = theme === "dark";

  const accent = dark
    ? "#83f36e"
    : "#3F8A22";

  return (
    <div className="relative w-[360px] h-[360px]">

      {/* ----------------------------------------------------------------- */}
      {/* Ambient glow                                                      */}
      {/* ----------------------------------------------------------------- */}

      <motion.div
        animate={{
          scale: [
            0.9,
            1.05,
            0.9,
          ],
          opacity: [
            0.3,
            0.55,
            0.3,
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-[90px] rounded-full blur-3xl"
        style={{
          background: dark
            ? "rgba(131,243,110,0.10)"
            : "rgba(63,138,34,0.05)",
        }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* Outer ring                                                        */}
      {/* ----------------------------------------------------------------- */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className={
          "absolute inset-8 rounded-full border " +
          (dark
            ? "border-white/10"
            : "border-black/10")
        }
      />

      {/* ----------------------------------------------------------------- */}
      {/* Middle ring                                                       */}
      {/* ----------------------------------------------------------------- */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className={
          "absolute inset-20 rounded-full border border-dashed " +
          (dark
            ? "border-white/10"
            : "border-black/10")
        }
      />

      {/* ----------------------------------------------------------------- */}
      {/* Inner orbit                                                       */}
      {/* ----------------------------------------------------------------- */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-28 rounded-full border"
        style={{
          borderColor: dark
            ? "rgba(131,243,110,0.25)"
            : "rgba(63,138,34,0.25)",
        }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* Orbit marker                                                      */}
      {/* ----------------------------------------------------------------- */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-28"
      >
        <div
          className="absolute -top-1 left-1/2 w-2 h-2 rounded-full -translate-x-1/2"
          style={{
            backgroundColor: accent,
            boxShadow: dark
              ? "0 0 14px rgba(131,243,110,0.9)"
              : "0 0 8px rgba(63,138,34,0.5)",
          }}
        />
      </motion.div>

      {/* ----------------------------------------------------------------- */}
      {/* Center                                                            */}
      {/* ----------------------------------------------------------------- */}

      <div className="absolute inset-0 flex items-center justify-center">

        <motion.div
          animate={{
            scale: [
              1,
              1.05,
              1,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: dark
              ? "rgba(131,243,110,0.06)"
              : "rgba(63,138,34,0.06)",

            border: dark
              ? "1px solid rgba(131,243,110,0.3)"
              : "1px solid rgba(63,138,34,0.25)",

            boxShadow: dark
              ? "0 0 40px rgba(131,243,110,0.15)"
              : "0 0 30px rgba(63,138,34,0.08)",
          }}
        >
          {/* Pulsing core */}
          <motion.div
            animate={{
              scale: [
                0.6,
                1,
                0.6,
              ],
              opacity: [
                0.2,
                0.7,
                0.2,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-8 h-8 rounded-full"
            style={{
              backgroundColor: accent,
              filter: "blur(10px)",
            }}
          />

          <span
            className={
              "relative text-[10px] tracking-[0.25em] uppercase " +
              (dark
                ? "text-[#83f36e]"
                : "text-[#3F8A22]")
            }
          >
            build
          </span>
        </motion.div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Scan line                                                         */}
      {/* ----------------------------------------------------------------- */}

      <motion.div
        animate={{
          y: [
            -120,
            120,
            -120,
          ],
          opacity: [
            0,
            0.7,
            0,
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 w-[1px] h-20 -translate-x-1/2"
        style={{
          background: dark
            ? "linear-gradient(to bottom, transparent, rgba(131,243,110,0.7), transparent)"
            : "linear-gradient(to bottom, transparent, rgba(63,138,34,0.35), transparent)",
        }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* Orbit dots                                                        */}
      {/* ----------------------------------------------------------------- */}

      <OrbitDot
        className="top-[48px] left-[155px]"
        theme={theme}
      />

      <OrbitDot
        className="bottom-[72px] right-[55px]"
        theme={theme}
      />

      <OrbitDot
        className="top-[130px] right-[28px]"
        theme={theme}
        small
      />

      {/* ----------------------------------------------------------------- */}
      {/* Labels                                                             */}
      {/* ----------------------------------------------------------------- */}

      <span
        className={
          "absolute top-2 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.25em] uppercase " +
          (dark
            ? "text-white/25"
            : "text-black/25")
        }
      >
        DESIGN
      </span>

      <span
        className={
          "absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.25em] uppercase " +
          (dark
            ? "text-white/25"
            : "text-black/25")
        }
      >
        ENGINEERING
      </span>

      <span
        className={
          "absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] tracking-[0.25em] uppercase " +
          (dark
            ? "text-white/25"
            : "text-black/25")
        }
      >
        EXPERIENCE
      </span>

      {/* Small technical labels */}
      <span
        className={
          "absolute top-[72px] right-[68px] text-[7px] tracking-[0.2em] uppercase " +
          (dark
            ? "text-white/20"
            : "text-black/20")
        }
      >
        01
      </span>

      <span
        className={
          "absolute bottom-[75px] left-[65px] text-[7px] tracking-[0.2em] uppercase " +
          (dark
            ? "text-white/20"
            : "text-black/20")
        }
      >
        02
      </span>
    </div>
  );
}

/* ========================================================================= */
/* ORBIT DOT                                                                 */
/* ========================================================================= */

function OrbitDot({
  className,
  theme,
  small,
}: {
  className: string;
  theme: Theme;
  small?: boolean;
}) {
  const dark = theme === "dark";

  return (
    <motion.div
      animate={{
        scale: [
          1,
          1.3,
          1,
        ],
        opacity: [
          0.5,
          1,
          0.5,
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={
        "absolute rounded-full " +
        className +
        " " +
        (small
          ? "w-1 h-1"
          : "w-2 h-2")
      }
      style={{
        backgroundColor: dark
          ? "#83f36e"
          : "#3F8A22",

        boxShadow: dark
          ? "0 0 12px rgba(131,243,110,0.8)"
          : "0 0 8px rgba(63,138,34,0.4)",
      }}
    />
  );
}