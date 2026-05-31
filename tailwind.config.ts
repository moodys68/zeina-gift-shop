import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ÆBELE-style editorial palette: warm ivory page, brass-gold accents,
        // deep navy call-to-action. `cream` stays white for cards, frames, and
        // text on dark elements (footer, category overlays).
        page: "#F4EEE1", // warm ivory background
        cream: "#FFFFFF",
        sand: "#EAE2D2", // warm beige for section bands / borders
        ink: "#2A2622", // warm charcoal text (softer than pure black)
        // `blush` keeps its name (used widely for accents) but now carries the
        // brass-gold ramp, so prices, badges, and focus rings turn gold.
        blush: {
          50: "#FAF6EC",
          100: "#F3EAD3",
          200: "#E7D5AC",
          300: "#D8BE81",
          400: "#C2A56B",
          500: "#A98A4B",
          600: "#8C7039",
        },
        // `gold` mirrors the brass ramp; used for display headings + eyebrows.
        gold: {
          400: "#C2A56B",
          500: "#A98A4B",
          600: "#8C7039",
        },
        // Deep navy for primary buttons (the ÆBELE "Explore the Collection" CTA).
        navy: {
          700: "#21385B",
          800: "#182A45",
        },
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
