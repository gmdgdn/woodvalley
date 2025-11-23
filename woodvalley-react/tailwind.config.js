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
          50: '#FFF8F0',
          100: '#FFE4CC',
          200: '#D4A574',
          300: '#8B6F47',
          400: '#6B5742',
          500: '#4A3F35',
          600: '#3E2723',
          700: '#2D1B13',
          800: '#231510',
          900: '#1A0F0D',
          950: '#0D0706',
        },
        steel: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
        safety: {
          50: '#FFF4E6',
          100: '#FFE8CC',
          200: '#FFD699',
          300: '#FFC266',
          400: '#FFAD33',
          500: '#FF9800',
          600: '#FF6F00',
          700: '#E65100',
          800: '#BF360C',
          900: '#8B2500',
        },
        accent: {
          blue: '#00B4D8',
          cyan: '#0096C7',
          teal: '#06D6A0',
          purple: '#7209B7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243e 100%)',
        'hero-pattern': "linear-gradient(135deg, rgba(15, 12, 41, 0.95) 0%, rgba(48, 43, 99, 0.9) 50%, rgba(36, 36, 62, 0.95) 100%), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        'wood-texture': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6F00 0%, #FF9800 50%, #FFC107 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.safety.500"), 0 0 20px theme("colors.safety.600")',
        'neon-blue': '0 0 5px theme("colors.accent.blue"), 0 0 20px theme("colors.accent.cyan")',
        'glow': '0 0 40px rgba(255, 111, 0, 0.3)',
        'xl-colored': '0 20px 50px -12px rgba(255, 111, 0, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(255, 111, 0, 0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        "float-slow": {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        "slide-in-right": {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "slide-in-left": {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "scale-in": {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        "pulse-glow": {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 111, 0, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 111, 0, 0.8)' },
        },
        "shimmer": {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        "gradient-x": {
          '0%, 100%': { backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
        "gradient-y": {
          '0%, 100%': { backgroundPosition: 'center top' },
          '50%': { backgroundPosition: 'center bottom' },
        },
        "wiggle": {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        "bounce-horizontal": {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        "spin-slow": {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-y": "gradient-y 3s ease infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "bounce-horizontal": "bounce-horizontal 1s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    }
  },
  plugins: [],
}
