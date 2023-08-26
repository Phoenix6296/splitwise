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
        primary: "0px 9px 0px -4px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
