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
    },
    // height: {
    //   "screen-svh": "100svh",
    //   "screen-lvh": "100lvh",
    //   "screen-dvh": "100dvh",
    // },
    maxWidth: {
      "screen-svw": "100svw",
      "screen-lvw": "100lvw",
      "screen-dvw": "100dvw",
      "screen-vw": "100vw",
    },
  },
  plugins: [],
};
export default config;
