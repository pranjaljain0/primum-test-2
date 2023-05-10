/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          marineBlue: "#02295A",
          purplishBlue: "#473DFF",
          pastelBlue: "#ADBEFF",
          lightBlue: "#BFE2FD",
          strawberry: "#ED3548",
        },
        neutral: {
          coolGray: "#9699AB",
          lightGray: "#D6D9E6",
          magnolia: "#F0F6FF",
          alabaster: "#FAFBFF",
        },
      },
    },
  },
  plugins: []
};
