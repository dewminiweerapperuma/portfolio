import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A1420",
        panel: "#101E2E",
        panel2: "#0D1826",
        line: "#22384F",
        lineSoft: "#182A3E",
        copper: "#E59A65",
        copperDim: "#A66D42",
        signal: "#34D399",
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
        grid: "linear-gradient(#152437 1px, transparent 1px), linear-gradient(90deg, #152437 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
};
export default config;
