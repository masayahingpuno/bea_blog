/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
  theme: {

    fontFamily: {
      'primary': ['Playfair Display'],
      'caveat': ['Caveat', 'cursive'],
      'noto-sans': ['Noto Sans', 'sans-serif'],
      'nunito': ['Nunito Sans', 'sans-serif'],
      'georgia': ['georgia', 'sans-serif'],
    },

    extends: {
      colors: {
        primary: { "50": "#faf5ff", "100": "#f3e8ff", "200": "#e9d5ff", "300": "#d8b4fe", "400": "#c084fc", "500": "#a855f7", "600": "#9333ea", "700": "#7e22ce", "800": "#6b21a8", "900": "#581c87" },
        // secondary: { "50": "#ecfeff", "100": "#cffafe", "200": "#a5f3fc", "300": "#67e8f9", "400": "#22d3ee", "500": "#06b6d4", "600": "#0891b2", "700": "#0e7490", "800": "#155e75", "900": "#164e63" }

      },
      fontFamily: {
        'georgia': ['georgia', 'sans-serif'],
      }
    },

  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
  darkMode: 'class',
}

