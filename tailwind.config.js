/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#56C3A0",
      },
      boxShadow: {
        "custom-shadow": "0px 2px 9px -1px rgba(138,130,138,1)",
      },
    },
  },
  plugins: [],
};
