/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0B0F',
        surface: '#14161D',
        'surface-2': '#1B1E27',
        'surface-3': '#20242F',
        border: '#262A35',
        'border-soft': '#1E212B',
        ink: '#F3F4F6',
        muted: '#9AA0AE',
        faint: '#5E6472',
        accent: {
          blue: '#4F7CFF',
          violet: '#8B5CF6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #4F7CFF 0%, #8B5CF6 100%)',
        'accent-gradient-soft': 'linear-gradient(135deg, rgba(79,124,255,0.14) 0%, rgba(139,92,246,0.14) 100%)',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -24px rgba(0,0,0,0.6)',
        'card-hover': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -20px rgba(79,124,255,0.18)',
        glow: '0 0 80px -10px rgba(139,92,246,0.35)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        blink: 'blink 1.1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
