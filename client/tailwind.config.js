module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navColor: {
          50: "#ffe5e8",
          100: "#fdb7be",
          200: "#f58995",
          300: "#f05b6a",
          400: "#eb2f41",
          500: "#d11627",
          600: "#a40f1e",
          700: "#760914",
          800: "#48030b",
          900: "#1e0001",
        },
        ratingColor: {
          50: "#e3fce9",
          100: "#bef1ca",
          200: "#97e6aa",
          300: "#6fdc89",
          400: "#48d368",
          500: "#2fb94f",
          600: "#23903c",
          700: "#17672a",
          800: "#093e18",
          900: "#001703",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
