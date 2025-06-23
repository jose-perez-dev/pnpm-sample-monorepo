import baseConfig from '@bet-tracker/tailwind-config';

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: ['./stories/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
};
