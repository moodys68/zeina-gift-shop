import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fresh green & yellow gift-shop palette.
        // Token roles: `cream`/`sand` = backgrounds, `blush` = primary (green),
        // `gold` = accent (yellow), `ink` = dark text.
        cream: "#FFFFFF",
        sand: "#F1F2F4",
        blush: {
          50: "#E8F0E6",
          100: "#C9DDC2",
          200: "#93BE86",
          300: "#5C9A4D",
          400: "#3A7A2C",
          500: "#225E26",
          600: "#143F19",
        },
        gold: {
          400: "#C9A227",
          500: "#A6840F",
          600: "#7C6108",
        },
        ink: "#000000",
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "system-ui", "sans-serif"],
        display: [
          "var(--font-playfair)",
          "var(--font-amiri)",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(59, 47, 42, 0.08)",
        card: "0 4px 20px rgba(59, 47, 42, 0.06)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
