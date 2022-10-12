/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Aqui ficará contido os arquivos que vão ter classes do tailwind
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      // Definindo a fonte "padrão"
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
