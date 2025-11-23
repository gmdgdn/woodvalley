/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#FAFAFA',
          800: '#3E2723',
          900: '#281815',
          950: '#1A0F0D',
        },
        steel: {
          500: '#607D8B',
          800: '#37474F',
        },
        safety: {
          500: '#FF6F00',
          600: '#E65100',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(40, 24, 21, 0.9), rgba(55, 71, 79, 0.8)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        'wood-texture': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')"
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [],
}
