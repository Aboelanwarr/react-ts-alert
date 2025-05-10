import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './components/**/*.{html,js,ts,jsx,tsx}'],
theme: {
  extend: {
    colors: {
    },
  },
},
  plugins: [],
};

export default config;
