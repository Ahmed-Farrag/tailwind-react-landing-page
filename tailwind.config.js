/** @type {import('tailwindcss').Config} */
// matrial tailwind
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#67dbda",
      },
      screens: {
        sm: "570px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      }, //from bootstrap
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
        animation: {
          moveRight: "moveRight 1s ease-in-out infinite",
        }, //animation
      },
    },
  },
  plugins: [], //matrial tailwind  - tailwind elements
});
