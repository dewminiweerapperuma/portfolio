import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080D18",
        panel: "#0F172A",
        panel2: "#162238",
        line: "#1E2C42",
        lineSoft: "#142032",
        copper: "#F59E0B",
        copperDim: "#B45309",
        signal: "#10B981",
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
        grid: "linear-gradient(rgba(30, 44, 66, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 44, 66, 0.35) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};
export default config;
