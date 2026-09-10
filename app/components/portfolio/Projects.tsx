"use client";

import { motion } from "motion/react";
import { Construction, ArrowDown } from "lucide-react";
import type { Theme } from "../../page";

type ProjectsProps = {
    theme: Theme;
    colors: {
        lime: string;
    };
};

export default function Projects({
    theme,
    colors,
}: ProjectsProps) {
    const dark = theme === "dark";

    return (
        <section
            id="projects"
            className={
                "relative min-h-screen overflow-hidden px-6 py-32 md:px-12 " +
                (dark
                    ? "bg-[#050505] text-white"
                    : "bg-[#F7F6F3] text-[#0a0a0a]")
            }
        >
            {/* Decorative glow */}

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}
                whileInView={{
                    opacity: dark ? 0.08 : 0.05,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full blur-[120px]"
                style={{
                    background: colors.lime,
                }}
            />

            <div className="relative mx-auto max-w-[1200px]">
                {/* Section header */}

                <div className="flex items-end justify-between border-b pb-6">
                    <div>
                        <motion.span
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className={
                                "text-[10px] tracking-[0.3em] uppercase " +
                                (dark
                                    ? "text-white/30"
                                    : "text-black/30")
                            }
                        >
                            03 / Projects
                        </motion.span>

                        <motion.h2
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
                            }}
                            transition={{
                                delay: 0.1,
                                duration: 0.7,
                            }}
                            className="mt-4 font-black uppercase tracking-tighter leading-[0.85]"
                            style={{
                                fontFamily:
                                    "'Archivo', sans-serif",
                                fontSize:
                                    "clamp(3rem, 8vw, 8rem)",
                            }}
                        >
                            Projects
                        </motion.h2>
                    </div>

                    <span
                        className={
                            "hidden text-[10px] tracking-[0.25em] uppercase md:block " +
                            (dark
                                ? "text-white/20"
                                : "text-black/25")
                        }
                    >
                        Selected work
                    </span>
                </div>

                {/* Construction area */}

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
                        amount: 0.2,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.8,
                    }}
                    className={
                        "relative mt-12 min-h-[500px] overflow-hidden rounded-2xl border " +
                        "flex flex-col items-center justify-center text-center " +
                        (dark
                            ? "border-white/10 bg-white/[0.02]"
                            : "border-black/10 bg-black/[0.02]")
                    }
                >
                    {/* Grid */}

                    <div
                        className={
                            "pointer-events-none absolute inset-0 opacity-30 " +
                            (
                                dark
                                    ? "bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
                                    : "bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)]"
                            )
                        }
                        style={{
                            backgroundSize: "50px 50px",
                        }}
                    />

                    {/* Center glow */}

                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute h-64 w-64 rounded-full blur-[100px]"
                        style={{
                            background: colors.lime,
                        }}
                    />

                    {/* Content */}

                    <div className="relative z-10 px-6">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.4,
                                type: "spring",
                                stiffness: 180,
                                damping: 14,
                            }}
                            className={
                                "mx-auto flex h-16 w-16 items-center justify-center rounded-full border " +
                                (dark
                                    ? "border-white/10 bg-white/[0.03]"
                                    : "border-black/10 bg-black/[0.03]")
                            }
                            style={{
                                color: colors.lime,
                                boxShadow: `0 0 40px ${colors.lime}18`,
                            }}
                        >
                            <Construction size={25} strokeWidth={1.5} />
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 0.6,
                            }}
                        >
                            <p
                                className="mt-8 font-black uppercase tracking-tight"
                                style={{
                                    fontFamily:
                                        "'Archivo', sans-serif",
                                    fontSize:
                                        "clamp(1.8rem, 4vw, 3.5rem)",
                                }}
                            >
                                Under construction
                            </p>

                            <p
                                className={
                                    "mx-auto mt-4 max-w-[420px] text-sm leading-relaxed " +
                                    (dark
                                        ? "text-white/35"
                                        : "text-black/45")
                                }
                            >
                                I'm currently putting together a
                                collection of projects and experiments.
                                Check back soon.
                            </p>
                        </motion.div>

                        {/* Status */}

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.8,
                            }}
                            className="mt-10 flex items-center justify-center gap-3"
                        >
                            <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{
                                    backgroundColor:
                                        colors.lime,
                                    boxShadow:
                                        `0 0 10px ${colors.lime}`,
                                }}
                            />

                            <span
                                className={
                                    "text-[9px] tracking-[0.25em] uppercase " +
                                    (dark
                                        ? "text-white/25"
                                        : "text-black/30")
                                }
                            >
                                Work in progress
                            </span>
                        </motion.div>
                    </div>

                    {/* Corner labels */}

                    <span
                        className={
                            "absolute left-5 top-5 text-[8px] tracking-[0.2em] uppercase " +
                            (dark
                                ? "text-white/15"
                                : "text-black/20")
                        }
                    >
                        PROJECT_003
                    </span>

                    <span
                        className={
                            "absolute bottom-5 right-5 text-[8px] tracking-[0.2em] uppercase " +
                            (dark
                                ? "text-white/15"
                                : "text-black/20")
                        }
                    >
                        2026
                    </span>
                </motion.div>

                {/* Bottom hint */}

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.5,
                    }}
                    className={
                        "mt-8 flex items-center justify-between text-[9px] tracking-[0.2em] uppercase " +
                        (dark
                            ? "text-white/20"
                            : "text-black/25")
                    }
                >
                    <span>
                        More coming soon
                    </span>

                    <ArrowDown size={13} />
                </motion.div>
            </div>
        </section>
    );
}

