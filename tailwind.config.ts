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
        cubes: "url('/cube-512.png')",
      },
      backgroundColor: {
        card: "#14192B",
      },
      colors: {
        "dark-blue": "#0A0C13",
        primary: "#9F7AEA",
        accent: "#4698A7",
      },
    },
  },
  plugins: [],
};
export default config;
