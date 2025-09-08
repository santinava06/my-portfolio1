import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb", // azul elegante
          dark: "#1e40af",
          light: "#60a5fa"
        },
        accent: {
          DEFAULT: "#a21caf", // violeta
          light: "#f3e8ff"
        },
        background: {
          DEFAULT: "#f8fafc", // gris muy claro
          dark: "#18181b"
        },
        gray: {
          950: "#0f172a",
          900: "#18181b",
          800: "#27272a",
          700: "#3f3f46",
          600: "#52525b",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
          200: "#e4e4e7",
          100: "#f4f4f5",
          50:  "#fafafa"
        }
      }
    },
  },
  plugins: [],
}; 