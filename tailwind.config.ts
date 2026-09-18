import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      letterSpacing: {
        // Slightly tighter than Tailwind's built-in `tracking-tight` (-0.025em),
        // reserved for large display headings.
        display: "-0.02em",
      },
      boxShadow: {
        // Shared soft elevation for opaque cards sitting on a tinted surface.
        soft: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 8px 20px -6px rgb(15 23 42 / 0.10)",
      },
      backgroundImage: {
        // The one brand heading gradient (GradientHeading), instead of every
        // caller spelling out "from-indigo-600 to-violet-600" itself.
        "gradient-brand": "linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)",
      },
      opacity: {
        // The hero wash's two non-standard low-opacity steps (Tailwind's
        // default scale has 5 and 10, not 6 and 8).
        6: "0.06",
        8: "0.08",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "aurora-drift-a": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(16px, -12px)" },
        },
        "aurora-drift-b": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-14px, 10px)" },
        },
      },
      animation: {
        // Hero entrance stagger ("full" intensity) — same fade/translate, four fixed delays.
        "fade-up": "fade-up 260ms ease-out both",
        "fade-up-1": "fade-up 260ms ease-out 40ms both",
        "fade-up-2": "fade-up 260ms ease-out 80ms both",
        "fade-up-3": "fade-up 260ms ease-out 120ms both",
        "fade-up-4": "fade-up 260ms ease-out 160ms both",
        // Same keyframe, quicker timing — "lite" intensity entrance.
        "fade-up-lite": "fade-up 180ms ease-out both",
        "fade-up-lite-1": "fade-up 180ms ease-out 30ms both",
        "fade-up-lite-2": "fade-up 180ms ease-out 60ms both",
        "fade-up-lite-3": "fade-up 180ms ease-out 90ms both",
        // Ambient hero-wash drift — slow, small-amplitude, looping.
        "aurora-a": "aurora-drift-a 26s ease-in-out infinite",
        "aurora-b": "aurora-drift-b 22s ease-in-out infinite",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("reduced-transparency", "@media (prefers-reduced-transparency: reduce)");
      addVariant("more-contrast", "@media (prefers-contrast: more)");
    }),
  ],
};
export default config;
