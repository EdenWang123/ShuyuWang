/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#F5F0E8',
        ink:    '#1A1716',
        accent: '#BF3B2C',
        gold:   '#B8882A',
        teal:   '#1B4D5F',
        muted:  '#948E86',
        border: '#DED8CF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 9vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.025em' }],
        'headline': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
};
