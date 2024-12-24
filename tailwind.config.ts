import TailwindTypography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      colors: {
        primary: '#13FFAA',
        secondary: '#1E67C6',
        tertiary: '#CE84CF',
        quaternary: '#DD335C'
      }
    }
  },
  plugins: [TailwindTypography()]
} satisfies Config
