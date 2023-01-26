/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#2d2d2d',
      'secondary': '#525050',
      'white': '#eeeeee',
      "black": "#000000",
      'red': '#d01345',
      "light-grey": "#666666",
      "blue": "#3860be",
      "pink": "#f799ba",
      "light-green": "#00a85a",
      "green": "#018849",
      "tan": "#ffebcc"
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      large: "16px",
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '30px',
      '5xl': '36px',
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {},
  },
  plugins: [],
}
