import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
   darkMode: ["class", '[data-theme="dark"]'],
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            heading: "#42446E",
         },
         fontFamily: {
            // sans: ["var(--font-inter)", ...fontFamily.sans],
            // serif: ["var(--font-inter)", ...fontFamily.serif],
            mono: ["var(--font-fira-code)", ...fontFamily.mono],
         },
      },
   },
   plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
