/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // "Forest inside the city, city inside the forest" — the two registers
        // the whole page moves between.
        canopy: {
          DEFAULT: "#141912", // deep forest-black, the "shade" register
          soft: "#1D2418",
          line: "#2A331F",
        },
        clearing: {
          DEFAULT: "#EDE8DA", // warm stone, the "light" register
          soft: "#F5F1E6",
          line: "#DAD2BC",
        },
        ink: "#17160F",
        ivory: "#F4EFE2",
        brass: {
          DEFAULT: "#B08A4E",
          light: "#CBA772",
          dim: "#7C6339",
        },
        sage: "#8A9A7E",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        data: ["'Space Grotesk'", "monospace"],
      },
      maxWidth: {
        canvas: "1560px",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
