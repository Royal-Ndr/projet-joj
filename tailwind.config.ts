import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gainde: {
          emerald: '#007b55',
          sun: '#f6b209',
          terra: '#c75b3b',
          ocean: '#1367a1',
          sand: '#f7ecd5',
        },
      },
      boxShadow: {
        warm: '0 20px 50px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
