"use client";

import { motion, MotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { Theme } from "../page";

export default function LuminousTubeCanvas({
    theme,
    opacity,
    y,
    scale,
}: {
    theme: Theme;
    opacity: MotionValue<number>;
    y: MotionValue<number>;
    scale: MotionValue<number>;
}) {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const appRef = useRef<any>(null);

    useEffect(() => {

        if (theme === "light") return;

        let cancelled = false;

        const initialize = async () => {
            if (!mountRef.current) return;

            try {
                const { default: TubesCursor } = await import("threejs-components/build/cursors/tubes1.min.js");

                if (cancelled || !mountRef.current) return;

                const canvas = document.createElement("canvas");

                canvas.style.position = "absolute";
                canvas.style.inset = "0";
                canvas.style.width = "100%";
                canvas.style.height = "100%";
                canvas.style.display = "block";

                mountRef.current.appendChild(canvas);

                const app = TubesCursor(canvas, {
                    tubes: {
                        colors: [
                            "#f967fb",
                            "#53bc28",
                            "#6958d5",
                        ],

                        lights: {
                            intensity: 200,

                            colors: [
                                "#83f36e",
                                "#fe8a2e",
                                "#ff008a",
                                "#60aed5",
                            ],
                        },
                    },
                });

                if (!cancelled) appRef.current = app;
            } catch (error) {
                console.error("Failed to initialize TubesCursor:", error);
            }
        };

        initialize();

        const randomColors = (count: number) => {
            return new Array(count)
                .fill(0)
                .map(
                    () =>
                        "#" + Math.floor(Math.random() * 16777215)
                            .toString(16)
                            .padStart(6, "0")
                );
        };

        const handleClick = () => {
            const app = appRef.current;

            if (!app?.tubes) return;

            const colors = randomColors(3);
            const lightsColors = randomColors(4);

            app.tubes.setColors(colors);
            app.tubes.setLightsColors(lightsColors);
        };

        document.body.addEventListener("click", handleClick);

        return () => {
            cancelled = true;

            document.body.removeEventListener("click", handleClick);
            appRef.current = null;
            if (mountRef.current) mountRef.current.innerHTML = "";
        };
    }, [theme]);

    return (
        <motion.div
            ref={mountRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                opacity,
                y,
                scale,
                background: "transparent",
                mixBlendMode:
                    theme === "light"
                        ? "screen"
                        : "normal",
            }}
        />
    );
}