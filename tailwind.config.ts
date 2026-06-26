import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: {
          900: "#0a1f0f",
          800: "#0f2d17",
          700: "#1a3d22",
          600: "#1e4d28",
        },
        gold: {
          400: "#f5c842",
          500: "#e6b800",
          600: "#c9a000",
        },
        grass: {
          400: "#4ade80",
          500: "#22c55e",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "Impact", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "pitch-gradient": "linear-gradient(160deg, #0a1f0f 0%, #1a3d22 50%, #0f2d17 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
