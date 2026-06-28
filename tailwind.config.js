/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#06b6d4',
        purple: '#8b5cf6',
        'deep-blue': '#1e3a8a',
        bg: '#0A0A1A',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        cyan: '0 0 24px rgba(6,182,212,0.35)',
        purple: '0 0 24px rgba(139,92,246,0.35)',
        'cyan-lg': '0 0 60px rgba(6,182,212,0.2)',
      },
    },
  },
  plugins: [],
};
