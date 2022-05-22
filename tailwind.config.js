module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        blink_motors_theme: {
          primary: '#3ABAF3',
          secondary: '#1EA0FE',
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
