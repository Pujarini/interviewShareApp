/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: { max: "640px" },

      md: { max: "768px" },

      lg: { max: "1024px" },

      xl: { max: "1280px" },

      "2xl": { max: "1536px" },
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
