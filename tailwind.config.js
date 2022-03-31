module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        // Custom colors
      },
      boxShadow: {
        // Custom shadows
      },
      aspectRatio: {
        // Custom aspect ratio
      },
      fontFamily: {
        // Custom fonts
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
