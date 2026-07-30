/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#06b6d4',
          dark: '#0891B2',
          light: '#67E8F9',
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          500: '#06b6d4',
          600: '#0891B2',
          700: '#0E7490',
        },
        surface: '#F8FAFC',
        border: '#E5E7EB',
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)',
        'elevated': '0 20px 40px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.04)',
        'modal': '0 25px 60px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.06)',
        'accent-sm': '0 2px 8px rgba(6,182,212,0.15)',
        'accent-md': '0 4px 16px rgba(6,182,212,0.2)',
        'accent-lg': '0 8px 30px rgba(6,182,212,0.25)',
      },
      borderRadius: {
        'card': '12px',
        'btn': '10px',
        'input': '8px',
        'badge': '100px',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'heading': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
};
