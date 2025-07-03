module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        revanta: {
          primary: '#00ff00',
          secondary: '#8000ff',
          accent: '#1f2937',
          neutral: '#111111',
          'base-100': '#0d0d0d',
        },
      },
    ],
  },
}
