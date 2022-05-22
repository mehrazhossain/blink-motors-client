module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        blink_motors_theme: {
          primary: '#00d2d3',
          secondary: '#01a3a4',
          accent: '#595959',
          neutral: '#E3FFFF',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },
  plugins: [require('daisyui')],
};
