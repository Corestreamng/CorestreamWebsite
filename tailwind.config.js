/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
        '50': '12.5rem',
        '130': '32.5rem',
        '140': '35rem',
        '345': '345px',
      },
      height: {
        '345': '345px',
        '80': '20rem',
        '90': '22.5rem',
      },
      width: {
        '45': '11.25rem',
        '50': '12.5rem',
        '120': '30rem',
        '140': '35rem',
      },
    },
  },
  plugins: [],
};
