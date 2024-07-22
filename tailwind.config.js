/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to all of your components
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#1abc9c',
          500: '#16a085',
          700: '#0e6251',
        },
        gray: {
          800: '#2c3e50',
          900: '#1a252f',
        },
      },
    },
  },
  plugins: [],
};
