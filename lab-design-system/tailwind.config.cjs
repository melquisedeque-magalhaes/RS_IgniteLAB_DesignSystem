/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Aqui ficará contido os arquivos que vão ter classes do tailwind
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      // Definindo as cores que o tailwind vai ter, com base no designSystem
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',

      'cyan-500': '#81d8f7',
      'cyan-300': '#9be1fb',
    },
    extend: {
      // Definindo a fonte "padrão"
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
