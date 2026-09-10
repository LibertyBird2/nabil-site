import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f9",
          100: "#d9e2f1",
          200: "#b7c8e4",
          300: "#8ba7d4",
          400: "#5c81c1",
          500: "#3d62ac",
          600: "#2d4b90",
          700: "#253b75",
          800: "#223361",
          900: "#0f172a",
          950: "#0a0f1d",
        },
        gold: {
          50: "#fdfbe8",
          100: "#fcf4c5",
          200: "#fae78e",
          300: "#f6d34e",
          400: "#f1be1d",
          500: "#c59b27",
          600: "#b8860b",
          700: "#8a5e0b",
          800: "#734a10",
          900: "#633c12",
        },
        parchment: {
          50: "#fcfbf9",
          100: "#f7f5f0",
          200: "#efece3",
          300: "#e2dccf",
          400: "#d0c5b3",
          500: "#baaa96",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Amiri", "serif"],
        sans: ["var(--font-sans)", "Inter", "Tajawal", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
