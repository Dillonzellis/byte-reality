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
      colors: {
        brandingBlue: {
          700: "#00395c",
          400: "#0078C2",
          300: "#d5e9f6",
          100: "#fbfdfe",
        },
        accentBlue: {
          400: "#3cc3ba",
        },
        brandingNeutral: {
          700: "#040f15",
          100: "#fbfdfe",
        },
      },
    },
  },
  plugins: [],
};
export default config;
