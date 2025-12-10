
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Cabinet Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      cabinetGrotesk: ['Cabinet Grotesk', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
    extend: {
      keyframes: {
       shine: {
        '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
       },
     },
     animation: {
       shine: 'shine 3s linear infinite',
     },
     dropShadow: {
       glow: [
         "0 0px 20px rgba(255, 255, 255, 0.35)",
         "0 0px 65px rgba(255, 255, 255, 0.2)"
       ]
     }
   },
  },
  plugins: [],
}
