import type { Config } from "tailwindcss"

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
    },
    colors: {
      white: "#FFFFFF",
      blue: {
        primary: "#0F35B3",
        secondary: "#041E9F",
      },
      grey: {
        primary: "#CDCED7",
        secondary: "#B9BBC6",
      },
      red: {
        primary: "#CA1212",
        secondary: "#B90000",
        intComp: "#FFEBE8",
        secText: "#D3221D",
        higConText: "#661611",
      },
    },
  },
  plugins: [],
}

export default config
