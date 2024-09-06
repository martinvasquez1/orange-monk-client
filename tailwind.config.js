/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        monk: {
          primary: '#570df8',
          secondary: '#ff0000',
          accent: '#1a73e8',
          neutral: '#dbdbdb',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#f7f7f7',
          'base-content': '#707682',
          info: '#1c92f2',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
        },
      },
      'dark',
      'coffee',
      'forest',
    ],
  },
};
