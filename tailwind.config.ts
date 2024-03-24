import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", "sans-serif"],
        didot: ["Didot", "serif"],
      },
    },
    minHeight: {
      "screen-svh": "100svh",
      "screen-lvh": "100lvh",
      "screen-dvh": "100dvh",
    },
  },
  plugins: [],
};
export default config;
