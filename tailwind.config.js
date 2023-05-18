/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'purple': '#6E64A2',
      'purple-dark': '#3b3552',
      'white': '#ffffff',
      'black': '#242526',
      'cyan': '#C1D5F0',
      'gray': '#4b5563',
      'lightblack': '#242526',
      'primary-content': '#242526',
      'underline-primary': '#BFD2EF',

    },
    fontFamily: {
      'primary': ['Playfair Display'],
      'caveat': ['Caveat', 'cursive'],
      'noto-sans': ['Noto Sans', 'sans-serif'],
      'georgia': 'georgia',
    }

  },
  plugins: [],
}

