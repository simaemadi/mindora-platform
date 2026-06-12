module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#0ea5e9",
        dark: "#0f172a"
      },

        fontFamily: {
          sans: ["Estedad", "system-ui", "sans-serif"]
        },
      colors: {
         cream: {
           100: "#F3E9E2",
           200: "#d8cbb9",
           300: "#EEE7DF",
           400: "#F4EEEA"
         },
       blue: {
         100: "#1D2B3D",
         200: "#172637"
       },
         mustard: {
          100: "#B18943",
          200: "#c49a4a",
          300: "#B78B3B",       
         },
       white: {
         100: "#FFFFFF",
         200: "#FBFAF8",
         300: "#F1E8DC"
       },
      black: {
        100: "#000",
        200: "#212427",
        300: "#061426",
        400: "#34383C",
        500: "#52606D",
        600: "#172637"
      }
      },
    },
  },

  plugins: [],
};