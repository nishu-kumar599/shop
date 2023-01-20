/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      extra: "240px",
      small: "320px",
      mobile: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    lineClamo: {
      10: "10",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
