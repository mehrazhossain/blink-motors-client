module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        blink_motors_theme: {
          primary: '#E11D48',
          secondary: '#222f3e',
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
