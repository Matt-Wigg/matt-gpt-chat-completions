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
        highlight: "var(--highlight)",
        background: "var(--background)",
        dark: "var(--dark)",
        light: "var(--light)",
      },
    },
  },
  plugins: [],
};
export default config;
