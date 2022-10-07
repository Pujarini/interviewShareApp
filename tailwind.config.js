/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      // sm: { max: "640px" },
    },
    screens: {
      sm: { max: "640px" },

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        dark: "#121212",
        complement: "#320064",
        // gray: "#282828",
      },
    },
  },

  plugins: [],
};
