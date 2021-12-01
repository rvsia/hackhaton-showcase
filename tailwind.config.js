module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: [
      //['purple', 'green', 'red', 'yellow', 'blue']
      'text-purple-400',
      'border-purple-400',
      'text-green-400',
      'border-green-400',
      'text-red-400',
      'border-red-400',
      'text-yellow-400',
      'border-yellow-400',
      'text-blue-400',
      'border-blue-400',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
