const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      "./index.html",
      "./src/**/*.vue",
      "./src/**/*.js"
      // etc.
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        violet: {
          50: "hsl(276, 100%, 91%)",
          100: "hsl(276, 100%, 81%)",
          200: "hsl(264, 100%, 61%)",
          300: "hsl(276, 55%, 52%)",
          400: "hsl(271, 36%, 24%)"
        },
        grey: {
          100: "hsl(270, 20%, 96%)",
          200: "hsl(206, 6%, 79%)",
          300: "hsl(270, 7%, 64%)",
          400: "hsl(271, 15%, 43%)"
        },
        magenta: {
          100: " hsl(289, 100%, 72%)",
          200: " hsl(293, 100%, 63%)"
        }
      },
      height: {
        100: "500px",
        110: "700px"
      }
    }
  }
};
