import type { Config } from "tailwindcss";

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
      },
   },
   plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
