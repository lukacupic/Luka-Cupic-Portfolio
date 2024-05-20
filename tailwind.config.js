module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      futura: ["Futura", "sans-serif"],
      karate: ["karate", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#0078ff",
        custom_gray: "#5c5c5c",
      },
      scale: {
        130: "1.30",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
