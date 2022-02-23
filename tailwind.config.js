const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      backgroundColor: {
        inherit: "inherit",
      },
    },
    colors: {
      primary: colors.stone,
      secondary: colors.rose,
    },
  },
  plugins: [],
};
