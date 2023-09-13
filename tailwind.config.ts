import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mont)"],
        serif: ["var(--font-dancing)"],
      },
      colors: {
        brandingBlue: {
          400: "var(--brandingBlue-400)",
        },
        accentBlue: {
          400: "var(--accentBlue-400)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
