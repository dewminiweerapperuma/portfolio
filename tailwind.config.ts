import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#090A1A",
        panel: "#0F122B",
        panel2: "#16193E",
        line: "#1E2356",
        lineSoft: "#141738",
        copper: "#6366F1",
        copperDim: "#4F46E5",
        signal: "#818CF8",
        accent: "#6366F1",
        accentGlow: "#818CF8",
        violet: "#7C3AED",
        ink: "#F8FAFC",
        inkDim: "#CBD5E1",
        inkFaint: "#94A3B8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};
export default config;
