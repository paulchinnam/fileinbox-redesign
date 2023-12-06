/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skyblue: "#66ABE4",
        darkteal: "#4787a0",
        periwinkle: "#707de4",
        mintgreen: "#66e48f",
        forestgreen: "#47a064",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-background": "url('https://i.imgur.com/Dk7CRg2.png')",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
