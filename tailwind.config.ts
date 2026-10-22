import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // Zinc-950
        surface: "#18181b",    // Zinc-900
        border: "#27272a",     // Zinc-800
        primary: "#fafafa",    // Zinc-50
        muted: "#a1a1aa",      // Zinc-400
        accent: "#00f0ff",     // Cyan (The System Color)
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;