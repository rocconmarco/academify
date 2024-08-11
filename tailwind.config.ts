import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundColor: "#ffefd5",
        owlBrown: "#a1522e",
        owlBeige: "#ffe0B3",
        owlLightOrange: "#ff9804",
        owlDarkOrange: "#f67c01",
        owlYellow: "#fec207"
      }
    },
  },
  plugins: [],
};
export default config;
