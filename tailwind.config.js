/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.{js,ts,jsx,vue}",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SFProDisplay: "SF Pro Display",
        WorkSans: "Work Sans",
      },
      colors: {
        dark: "#1B1F2D",
        lightBlue: "#2F80ED",
      },
      backgroundColor: {
        lightBlue: "#2F80ED",
      },

      fontSize: {
        large: "2rem",
      },
    },
  },
  plugins: [],
};
