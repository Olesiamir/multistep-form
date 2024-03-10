/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '678px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'Pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'main-mobile': "url('/images/bg-sidebar-mobile.svg')",
        'main-desktop': "url('/images/bg-sidebar-desktop.svg')"
      },
    },
  },
  plugins: [],
}

