/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creovo-bg': '#FFFFFF',
        'creovo-dark': '#0A0A0A',
        'creovo-yellow': '#FFD21F',
        'creovo-yellow-hover': '#F0C413',
        'creovo-soft': '#F5F5F0',
        'creovo-border': 'rgba(10, 10, 10, 0.18)',
        'creovo-border-subtle': 'rgba(10, 10, 10, 0.08)',
        'creovo-border-strong': 'rgba(10, 10, 10, 0.35)',
        'creovo-muted': '#666666',
        'creovo-text': '#0A0A0A',
      },
      fontFamily: {
        sans: [
          'Syne',
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          '"Space Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'widest-editorial': '0.18em',
      },
      lineHeight: {
        'tighter': '0.92',
        'tight': '1.05',
      },
    },
  },
  plugins: [],
}
