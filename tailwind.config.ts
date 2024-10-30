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
        50: "#edf6ff",
        100: "#d8eaff",
        200: "#b9daff",
        300: "#89c4ff",
        400: "#51a3ff",
        500: "#297dff",
        600: "#125bfe",
        700: "#0b44ea",
        800: "#0f35b3",
        900: "#133595",
        950: "#11225a",
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
