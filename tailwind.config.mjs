/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Accent — Ghanaian Gold & Amber scale
        gold: {
          DEFAULT: '#F6CC4F',
          50: '#FDFBE8',
          100: '#FBF6C4',
          200: '#F8EC8F',
          300: '#F6CC4F',
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#451A03',
        },
        'ghana-green': {
          DEFAULT: '#059669',
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        'ghana-red': {
          DEFAULT: '#DC2626',
          50: '#FEF2F2',
          600: '#DC2626',
          700: '#B91C1C',
        },
        // Text scale — near-black
        neutral: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        ink: {
          DEFAULT: '#0F172A',
          50: '#FAFAFA',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Surfaces — white / warm paper
        paper: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F8FAFC',
          300: '#F1F5F9',
        },
        // Alternating section bands and hairline borders
        mist: {
          DEFAULT: '#F8FAFC',
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Geist Variable', 'Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono Variable', 'Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'card': '6px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(16, 24, 40, 0.05)',
        'card-hover': '0 8px 24px rgba(16, 24, 40, 0.10)',
      },
      backgroundImage: {
        'mudcloth': "url('/images/patterns/mudcloth.svg')",
        'kente-fade': 'linear-gradient(180deg, rgba(82, 183, 136, 0.08) 0%, rgba(250, 250, 250, 0) 100%)',
      },
    },
  },
  plugins: [],
};