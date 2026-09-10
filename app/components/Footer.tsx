'use client';

import { Theme } from "../page";

type FooterProps = {
  theme: Theme;
  colors: { lime: string; };
};

export default function Footer({
  theme,
  colors,
}: FooterProps) {
  const dark = theme === "dark";

  return (
    <footer className={"absolute bottom-10 left-0 w-full border-t pt-10 px-12 py-5 pointer-events-none " +
      (dark ? "border-white/10" : "border-black/10")
    }
    >
      <div className={"flex flex-col items-center justify-center text-[10px] leading-relaxed " +
        (dark ? "text-white/30" : "text-black/30")
      }>

        <p className="font-medium"
          style={{ color: colors.lime, opacity: 0.8 }}>
          Built with Next.js, Tailwind CSS and Vercel.
        </p>

        <p>
          Interactive cursor powered by{" "}
          <a
            href="https://www.npmjs.com/package/threejs-components"
            target="_blank"
            rel="noopener noreferrer"
            className={
              "transition-colors pointer-events-auto " +
              (dark
                ? "hover:text-white/60"
                : "hover:text-black/60")
            }
          >
            threejs-components
          </a>
        </p>

      </div>
    </footer>
  );
}