"use client";

import { Mail, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Theme } from "../page";

type ContactModalProps = {
    theme: Theme;
    colors: { lime: string };
    isOpen: boolean;
    onClose: () => void;
};

export default function ContactModal({
    theme,
    colors,
    isOpen,
    onClose,
}: ContactModalProps) {
    const dark = theme === "dark";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formLoadedAt] = useState(() => Date.now());

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => { document.body.style.overflow = originalOverflow };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => { window.removeEventListener("keydown", handleKeyDown) }
    }, [isOpen, onClose]);

    const handleSubmit = async (
        e: React.SubmitEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setIsSending(true);

        const elapsed = Date.now() - formLoadedAt;

        if (elapsed < 2000) {
            console.warn("Form submitted too quickly.");
            return;
        }

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key:
                            process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                        name,
                        email,
                        message,
                        subject: `New portfolio message from ${name}`,
                        botcheck: ""
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                console.error(
                    "Web3Forms error:",
                    result
                );

                throw new Error(
                    result.message ||
                    "Failed to send message."
                );
            }

            setSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error(
                "Failed to send message:",
                error
            );
        } finally {
            setIsSending(false);
        }
    };

    const handleClose = () => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}

                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.35
                        }}
                        onClick={handleClose}
                        className="fixed inset-0 z-[90] bg-[#2E3B2E]/50 backdrop-blur-sm"
                    />

                    {/* Modal */}

                    <motion.div
                        initial={{
                            y: "-100%",
                            opacity: 0,
                            scale: 0.98
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{
                            y: "-100%",
                            opacity: 0,
                            scale: 0.98
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 20,
                            mass: 0.8
                        }}
                        className="fixed inset-x-0 top-0 z-[100] flex max-h-[100dvh] justify-center overflow-y-auto"
                    >
                        <div
                            className={
                                "relative w-full max-w-[1100px] min-h-[min(760px,100dvh)] px-6 py-8 md:px-12 md:py-10 " +
                                (dark
                                    ? "bg-[#080808] text-white"
                                    : "bg-[#F7F6F3] text-[#0a0a0a]")
                            }
                        >
                            {/* Decorative glow */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.7
                                }}
                                animate={{
                                    opacity: 0.5,
                                    scale: 0.5
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.2
                                }}
                                className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full blur-[100px]"
                                style={{
                                    background: colors.lime
                                }}
                            />

                            {/* Top bar */}

                            <div className="relative flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Mail
                                        size={17}
                                        style={{
                                            color:
                                                colors.lime,
                                        }}
                                    />

                                    <span
                                        className={
                                            "text-[10px] tracking-[0.3em] uppercase " +
                                            (dark
                                                ? "text-white/40"
                                                : "text-black/40")
                                        }
                                    >
                                        Contact
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleClose}
                                    aria-label="Close contact form"
                                    className={
                                        "flex h-10 w-10 items-center justify-center rounded-full border transition-colors " +
                                        (dark
                                            ? "border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white"
                                            : "border-black/10 bg-black/[0.03] text-black/50 hover:bg-black/[0.08] hover:text-black")
                                    }
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Main content */}

                            <div className="relative mt-16 grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
                                {/* Left */}

                                <div>
                                    <motion.span
                                        initial={{
                                            opacity: 0,
                                            y: 20
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            delay: 0.15
                                        }}
                                        className={
                                            "text-[10px] tracking-[0.3em] uppercase " +
                                            (dark
                                                ? "text-white/30"
                                                : "text-black/30")
                                        }
                                    >
                                        Let's connect
                                    </motion.span>

                                    <motion.h2
                                        initial={{
                                            opacity: 0,
                                            y: 35
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 0.9
                                        }}
                                        className="mt-5 uppercase font-black tracking-tighter leading-[0.85]"
                                        style={{
                                            fontFamily:
                                                "'Archivo', sans-serif",
                                            fontSize:
                                                "clamp(2.5rem, 5vw, 6rem)"
                                        }}
                                    >
                                        Let's build
                                        <br />

                                        <span
                                            style={{
                                                color:
                                                    colors.lime,
                                                textShadow:
                                                    dark
                                                        ? `0 0 30px ${colors.lime}`
                                                        : "none",
                                            }}
                                        >
                                            something
                                        </span>
                                    </motion.h2>

                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                            y: 20
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            delay: 0.3,
                                            duration: 0.6
                                        }}
                                        className={
                                            "mt-8 max-w-[480px] text-base leading-relaxed " +
                                            (dark
                                                ? "text-white/45"
                                                : "text-black/55")
                                        }
                                    >
                                        Have a project, an idea,
                                        or just want to talk
                                        frontend? Drop me a
                                        message.
                                    </motion.p>
                                </div>

                                {/* Form */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 30
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.25,
                                        duration: 0.7
                                    }}
                                    className={
                                        "rounded-2xl border p-4 md:p-6 backdrop-blur-md " +
                                        (dark
                                            ? "border-white/10 bg-white/[0.025]"
                                            : "border-black/10 bg-black/[0.025]")
                                    }
                                >
                                    {!submitted ? (
                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <Field
                                                label="Name"
                                                value={name}
                                                onChange={setName}
                                                placeholder="Your name"
                                                theme={theme}
                                                required
                                            />

                                            <Field
                                                label="Email"
                                                type="email"
                                                value={email}
                                                onChange={setEmail}
                                                placeholder="you@example.com"
                                                theme={theme}
                                                required
                                            />

                                            <div>
                                                <label
                                                    className={
                                                        "mb-2 block text-[9px] tracking-[0.2em] uppercase " +
                                                        (dark
                                                            ? "text-white/35"
                                                            : "text-black/40")
                                                    }
                                                >
                                                    Message
                                                </label>

                                                <textarea
                                                    value={message}
                                                    onChange={(event) => setMessage(event.target.value)}
                                                    placeholder="Tell me about your project..."
                                                    required
                                                    rows={5}
                                                    className={
                                                        "w-full resize-none border-b bg-transparent px-0 py-3 text-sm outline-none transition-colors " +
                                                        (dark
                                                            ? "border-white/15 text-white placeholder:text-white/20 focus:border-[#83f36e]"
                                                            : "border-black/15 text-black placeholder:text-black/25 focus:border-[#3F8A22]")
                                                    }
                                                />
                                            </div>

                                            <input
                                                type="text"
                                                name="botcheck"
                                                tabIndex={-1}
                                                autoComplete="off"
                                                className="hidden"
                                                aria-hidden="true"
                                            />

                                            <button
                                                type="submit"
                                                disabled={isSending}
                                                className={
                                                    "group flex w-full items-center justify-center gap-3 " +
                                                    "px-7 py-4 rounded-full font-bold " +
                                                    "text-xs tracking-[0.15em] uppercase " +
                                                    "transition-all duration-300 " +
                                                    (
                                                        isSending
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : "hover:scale-[1.03]"
                                                    )
                                                }
                                                style={{
                                                    backgroundColor: colors.lime,
                                                    color: dark
                                                        ? "#050505"
                                                        : "#ffffff",
                                                }}
                                            >
                                                {isSending
                                                    ? "Sending..."
                                                    : "Send message →"}
                                            </button>
                                        </form>
                                    ) : (
                                        <SuccessMessage
                                            theme={theme}
                                            colors={colors}
                                        />
                                    )}
                                </motion.div>
                            </div>

                            {/* Bottom */}

                            <div
                                className={
                                    "absolute bottom-6 left-6 right-6 flex items-center justify-between border-t pt-5 md:left-12 md:right-12 " +
                                    (dark
                                        ? "border-white/10"
                                        : "border-black/10")
                                }
                            >
                                <span
                                    className={
                                        "text-[9px] tracking-[0.2em] uppercase " +
                                        (dark
                                            ? "text-white/20"
                                            : "text-black/25")
                                    }
                                >
                                    Available for long term contract only
                                </span>

                                <span
                                    className={
                                        "text-[9px] tracking-[0.2em] uppercase " +
                                        (dark
                                            ? "text-white/20"
                                            : "text-black/25")
                                    }
                                >
                                    ESC to close
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/* -------------------------------------------------------------------------- */
/* FIELD */
/* -------------------------------------------------------------------------- */

function Field({
    label,
    value,
    onChange,
    placeholder,
    theme,
    type = "text",
    required = false,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    theme: Theme;
    type?: string;
    required?: boolean;
}) {
    const dark = theme === "dark";

    return (
        <div>
            <label
                className={
                    "mb-2 block text-[9px] tracking-[0.2em] uppercase " +
                    (dark
                        ? "text-white/35"
                        : "text-black/40")
                }
            >
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                required={required}
                className={
                    "w-full border-b bg-transparent px-0 py-3 text-sm outline-none transition-colors " +
                    (dark
                        ? "border-white/15 text-white placeholder:text-white/20 focus:border-[#83f36e]"
                        : "border-black/15 text-black placeholder:text-black/25 focus:border-[#3F8A22]")
                }
            />
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* SUCCESS */
/* -------------------------------------------------------------------------- */

function SuccessMessage({ theme }: { theme: Theme; colors: { lime: string; }; }) {
    const dark = theme === "dark";

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 10,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            className={
                "mt-5 text-sm " +
                (dark
                    ? "text-[#83f36e]"
                    : "text-[#3F8A22]")
            }
        >
            Message sent successfully.
            I'll get back to you soon.
        </motion.div>
    );
}