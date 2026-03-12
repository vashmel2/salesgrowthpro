import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#00477F',
          bright: '#0993D1',
          dark: '#1A1F25',
          text: '#2C353E',
          light: '#EAF5FC',
          muted: '#6B7A8D',
          surface: '#F7FAFB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00477F 0%, #0993D1 100%)',
        'gradient-hero': 'linear-gradient(160deg, #001B33 0%, #00477F 40%, #0569A8 70%, #0993D1 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F7FAFB 0%, #EAF5FC 100%)',
        'gradient-dark': 'linear-gradient(160deg, #0F1419 0%, #1A2332 50%, #162030 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 80%, rgba(9,147,209,0.3) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(0,71,127,0.3) 0%, transparent 50%), radial-gradient(at 50% 50%, rgba(5,105,168,0.2) 0%, transparent 60%)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,71,127,0.06)',
        'card-hover': '0 8px 40px rgba(0,71,127,0.12)',
        'glow': '0 0 40px rgba(9,147,209,0.15)',
        'glow-lg': '0 0 80px rgba(9,147,209,0.2)',
        'hero': '0 20px 60px rgba(0,71,127,0.25)',
        'glass': '0 8px 32px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
