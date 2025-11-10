import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        card: {
          DEFAULT: 'var(--color-card-background)',
          foreground: 'var(--color-foreground)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: '#18181B',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: '#18181B',
        },
        border: 'var(--color-border)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
} satisfies Config;