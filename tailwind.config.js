/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg":
          "url('/assets/images/ant-rozetsky-HXOllTSwrpM-unsplash@2x.png')",
      },
      fontFamily: {
        inter: ["InterVariable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
