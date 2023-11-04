/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "firstColor" : "hsl(27,34%,59%)",
        "firstColorLight" : "hsl(42,13%,34%)",
        "titleColor" : "hsl(0,0%,100%)",
        "textColor" : "hsl(0,0%,67%)",
        "bgColor" : "hsl(0,0%,8%)",
        "contColor" : "hsl(0,0%,6%)",
        "hsla" : "hsl(0,0%,0%,0.75)",
      },
      fontFamily: {
        'bodyFont': ['"Kanit"',"sans-serif"] ,
        'secondFont': ['"Lobster Two"',"cursive"] ,
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

