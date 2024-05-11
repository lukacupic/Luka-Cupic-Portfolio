module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      futura: ["Futura", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-hamburgers")],
};
