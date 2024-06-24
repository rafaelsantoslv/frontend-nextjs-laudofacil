import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        primary: '#2196F3',
        white: '#FFFFFF',
        gray: {
          light: '#F1F1F1',
          medium: '#9E9E9E',
        },
        dark: '#0D47A1',
        success: '#4CAF50',
        error: '#F44336',
      },
    },
  },
  plugins: [],
};

export default config;
