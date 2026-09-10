import { ArrowBigDownDash, ChevronDown, Mail, MousePointer2, PlayCircle } from "lucide-react";

import GlassButton from "../GlassButton";
import type { Theme } from "../../page";

type HeroProps = {
  theme: Theme;
  colors: {
    lime: string;
    magenta: string;
    glow: string;
    headingGlow: string;
  };
  onClick: () => void;
};

export default function Hero({
  theme,
  colors,
  onClick
}: HeroProps) {
  const dark = theme === "dark";

  return (
  // <section
  //   id="hero"
  //   className="relative flex flex-col min-h-[calc(100vh-100px)]"
  // >
  //   <div className="flex flex-col items-center text-center max-w-[1024px] mx-auto px-6 pt-20">
  //     {/* Label */}
  //     <span
  //       className="text-[10px] tracking-[0.3em] uppercase rounded-full px-4 py-2 backdrop-blur-md border"
  //       style={{
  //         color: colors.magenta,
  //         borderColor: dark
  //           ? "rgba(249,103,251,0.3)"
  //           : "rgba(180,24,154,0.3)",
  //         backgroundColor: dark
  //           ? "rgba(255,255,255,0.03)"
  //           : "rgba(0,0,0,0.03)",
  //       }}
  //     >
  //       Frontend developer
  //     </span>

  //     {/* Heading */}
  //     <h1
  //       className={
  //         "mt-8 uppercase font-black tracking-tighter leading-[0.85] " +
  //         (dark ? "text-white" : "text-[#0a0a0a]")
  //       }
  //       style={{
  //         fontFamily: "'Archivo', sans-serif",
  //         fontSize: "clamp(3.5rem, 9vw, 8rem)",
  //         textShadow: colors.headingGlow,
  //       }}
  //     >
  //       Laura
  //       <br />

  //       <span
  //         style={{
  //           color: colors.lime,
  //           textShadow: colors.glow,
  //         }}
  //       >
  //         Simion
  //       </span>
  //     </h1>

  //     {/* Description */}
  //     <p
  //       className={
  //         "mt-8 max-w-[650px] text-lg font-light leading-relaxed " +
  //         (dark ? "text-white/50" : "text-black/55")
  //       }
  //     >
  //       Interfaces that feel simple,
  //       engineering that isn't
  //     </p>

  //     {/* CTA */}
  //     <div className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto">
  //       <GlassButton
  //         icon={Mail}
  //         theme={theme}
  //         onClick={onClick}
  //       >
  //         Let's connect
  //       </GlassButton>
  //     </div>
  //   </div>

  //   {/* Scroll indicator */}
  //   <a
  //     href="#about"
  //     aria-label="Scroll to about section"
  //     className={
  //       "absolute bottom-6 left-1/2 -translate-x-1/2 " +
  //       "flex flex-col items-center gap-1 " +
  //       "transition-colors duration-300 pointer-events-auto " +
  //       (dark
  //         ? "text-white/30 hover:text-[#83f36e]"
  //         : "text-black/30 hover:text-[#3F8A22]")
  //     }
  //   >
  //     <span className="text-[9px] tracking-[0.25em] uppercase">
  //       Scroll
  //     </span>

  //     <ChevronDown
  //       size={18}
  //       strokeWidth={1.5}
  //       className="animate-bounce"
  //     />
  //   </a>
  // </section>

    <section
      id="home"
      className="relative z-10 flex min-h-screen flex-col items-center text-center px-6 pt-32"
    >
      {/* Hero content */}
      <div className="flex flex-col items-center">
        {/* Label */}
        <span
          className="text-[10px] tracking-[0.3em] uppercase rounded-full px-4 py-2 backdrop-blur-md border"
          style={{
            color: colors.magenta,
            borderColor: dark
              ? "rgba(249,103,251,0.3)"
              : "rgba(180,24,154,0.3)",
            backgroundColor: dark
              ? "rgba(255,255,255,0.03)"
              : "rgba(0,0,0,0.03)",
          }}
        >
          Frontend developer
        </span>

        {/* Heading */}
        <h1
          className={
            "mt-8 uppercase font-black tracking-tighter leading-[0.85] " +
            "max-w-[1024px] " +
            (dark ? "text-white" : "text-[#0a0a0a]")
          }
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            textShadow: colors.headingGlow,
          }}
        >
          Laura
          <br />

          <span
            style={{
              color: colors.lime,
              textShadow: colors.glow,
            }}
          >
            Simion
          </span>
        </h1>

        {/* Description */}
        <p
          className={
            "mt-8 max-w-[650px] text-lg font-light leading-relaxed " +
            (dark ? "text-white/50" : "text-black/55")
          }
        >
          Interfaces that feel simple,
          engineering that isn't
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto">
          <GlassButton
            icon={Mail}
            theme={theme}
            onClick={onClick}
          >
            Let's connect
          </GlassButton>
        </div>
      </div>

      {/* Interaction information */}
      {dark && (
        <div className="absolute left-8 top-[80%] z-20 pointer-events-none">
          <div className="flex items-start justify-start gap-3 text-left text-white/40">
            <div className="w-6 border-t mt-2 border-white/30" />

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase mb-2 flex items-center justify-start gap-2 text-white/50">
                <MousePointer2 size={12} />
                Mouse Interaction Active
              </p>

              <p className="text-sm max-w-[220px] leading-snug text-white/40">
                Move cursor to distort space. Click anywhere to reset spectrum.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className={
          "absolute bottom-6 left-1/2 -translate-x-1/2 " +
          "flex flex-col items-center gap-1 " +
          "transition-colors duration-300 pointer-events-auto " +
          (dark
            ? "text-white/30 hover:text-[#83f36e]"
            : "text-black/30 hover:text-[#3F8A22]")
        }
      >
        <span className="text-[9px] tracking-[0.25em] uppercase">
          Scroll
        </span>

        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className="animate-bounce"
        />
      </a>
    </section>
  )
}