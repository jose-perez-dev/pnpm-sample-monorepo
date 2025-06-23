import baseConfig from '@bet-tracker/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: ['./stories/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
};
