/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        'primary': '#4A90E2',
        'primary-light': '#E8F4FD',
        'primary-dark': '#357ABD',
        'secondary': '#7ED321',
        'secondary-light': '#F0F9E8',
        'accent': '#50C878',
        'neutral': {
          50: '#FAFBFC',
          100: '#F5F7FA',
          200: '#E4E7EB',
          300: '#CBD2D9',
          400: '#9AA5B1',
          500: '#7B8794',
          600: '#616E7C',
          700: '#52606D',
          800: '#3E4C59',
          900: '#323F4B',
        },
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
      }
    },
  },
  plugins: [],
}