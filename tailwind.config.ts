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
          dark: '#2C353E',
          light: '#E8F4FD',
          muted: '#6B7A8D',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00477F 0%, #0993D1 100%)',
        'gradient-hero': 'linear-gradient(135deg, #00477F 0%, #0569A8 50%, #0993D1 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F8FAFC 0%, #EDF4FB 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 71, 127, 0.08)',
        'card-hover': '0 8px 40px rgba(0, 71, 127, 0.16)',
        'hero': '0 20px 60px rgba(0, 71, 127, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
