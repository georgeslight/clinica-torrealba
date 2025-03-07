import type { Config } from "tailwindcss";

// @ts-ignore
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
      screens: {
        wide: { min: "1281px" },
      },
    },
  },
  plugins: [],
};
export default config;
