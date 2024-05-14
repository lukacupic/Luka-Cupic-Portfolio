module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      futura: ["Futura", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#0078ff",
        custom_gray: "#5c5c5c",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
