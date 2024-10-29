import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        "border-spin": "border-spin 5s linear infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        "pinging": "pinging 1s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
      keyframes: {
        "border-spin": {
          "100%": {
            transform: 'rotate(360deg)'
          }
        },
        "move-left": {
          "0%": {
            transform: 'translateX(0%)'
          },
          "100%": {
            transform: 'translateX(-50%)'
          }
        },
        "move-right": {
          "0%": {
            transform: 'translateX(-50%)'
          },
          "100%": {
            transform: 'translateX(0%)'
          }
        }, "pinging": {
            "75%, 100%": {
              transform: 'scale(2) translateX(-25%) translateY(-25%)',
              opacity: '0'
            }
        }
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
