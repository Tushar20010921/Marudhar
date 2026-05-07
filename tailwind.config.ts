import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        luxe: {
          50: "#f7f3ee",
          100: "#ede6dc",
          200: "#dacdb9",
          300: "#c7b496",
          400: "#b39b73",
          500: "#9a835a",
          600: "#7d6846",
          700: "#5f4e34",
          800: "#403423",
          900: "#201a11"
        },
        immersive: {
          50: "#f0f4ff",
          100: "#dde5ff",
          200: "#c0d0ff",
          300: "#9bb6ff",
          400: "#6b90ff",
          500: "#3b6bff",
          600: "#2b55d6",
          700: "#1f3ea8",
          800: "#152a73",
          900: "#0c173f"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 24px 80px -40px rgba(255, 255, 255, 0.45)",
        glow: "0 0 40px rgba(59, 107, 255, 0.35)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top left, rgba(59,107,255,0.3), transparent 55%)",
        "hero-glow": "radial-gradient(circle at 70% 20%, rgba(179,155,115,0.25), transparent 50%)"
      }
    }
  },
  plugins: []
};

export default config;
