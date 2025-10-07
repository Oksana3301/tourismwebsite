/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* Ocean-Inspired Color System */
      colors: {
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
        accent: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'sans-serif'],
        inter: ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      /* Apple Spacing Scale (8px base) */
      spacing: {
        '0': '0',
        '1': '0.25rem',   /* 4px */
        '2': '0.5rem',    /* 8px */
        '3': '0.75rem',   /* 12px */
        '4': '1rem',      /* 16px */
        '5': '1.25rem',   /* 20px */
        '6': '1.5rem',    /* 24px */
        '7': '1.75rem',   /* 28px */
        '8': '2rem',      /* 32px */
        '9': '2.25rem',   /* 36px */
        '10': '2.5rem',   /* 40px */
        '11': '2.75rem',  /* 44px */
        '12': '3rem',     /* 48px */
        '14': '3.5rem',   /* 56px */
        '16': '4rem',     /* 64px */
        '20': '5rem',     /* 80px */
        '24': '6rem',     /* 96px */
        '28': '7rem',     /* 112px */
        '32': '8rem',     /* 128px */
        '36': '9rem',     /* 144px */
        '40': '10rem',    /* 160px */
        '44': '11rem',    /* 176px */
        '48': '12rem',    /* 192px */
        '52': '13rem',    /* 208px */
        '56': '14rem',    /* 224px */
        '60': '15rem',    /* 240px */
        '64': '16rem',    /* 256px */
        '72': '18rem',    /* 288px */
        '80': '20rem',    /* 320px */
        '96': '24rem',    /* 384px */
      },
      /* Apple Border Radius */
      borderRadius: {
        'none': '0',
        'sm': '0.5rem',    /* 8px */
        'DEFAULT': '0.75rem',  /* 12px */
        'md': '1rem',      /* 16px */
        'lg': '1.25rem',   /* 20px */
        'xl': '1.5rem',    /* 24px */
        '2xl': '2rem',     /* 32px */
        '3xl': '2.5rem',   /* 40px */
        'full': '9999px',
      },
      /* Apple Typography Scale */
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.01em' }],      /* 12px */
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.01em' }],  /* 14px */
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.011em' }],    /* 16px */
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.015em' }], /* 18px */
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],   /* 20px */
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],     /* 24px */
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.03em' }], /* 30px */
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.035em' }],  /* 36px */
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.04em' }],           /* 48px */
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.045em' }],       /* 60px */
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.05em' }],         /* 72px */
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }],           /* 96px */
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.055em' }],          /* 128px */
      },
      /* Font Weights */
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      /* Line Heights */
      lineHeight: {
        none: '1',
        tight: '1.1',
        snug: '1.2',
        normal: '1.5',
        relaxed: '1.6',
        loose: '2',
      },
      /* Letter Spacing */
      letterSpacing: {
        tighter: '-0.055em',
        tight: '-0.04em',
        normal: '-0.011em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      /* Animations */
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(-24px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.96)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      /* Apple Transition Timing */
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      /* Shadows (Apple Style) */
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'none': 'none',
      },
      /* Backdrop Blur */
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      /* Container */
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',  /* 24px */
          sm: '2rem',         /* 32px */
          lg: '3rem',         /* 48px */
          xl: '4rem',         /* 64px */
          '2xl': '5rem',      /* 80px */
        },
      },
      /* Max Width */
      maxWidth: {
        'xs': '20rem',     /* 320px */
        'sm': '24rem',     /* 384px */
        'md': '28rem',     /* 448px */
        'lg': '32rem',     /* 512px */
        'xl': '36rem',     /* 576px */
        '2xl': '42rem',    /* 672px */
        '3xl': '48rem',    /* 768px */
        '4xl': '56rem',    /* 896px */
        '5xl': '64rem',    /* 1024px */
        '6xl': '72rem',    /* 1152px */
        '7xl': '80rem',    /* 1280px */
        'full': '100%',
      },
      /* Screens (Apple Breakpoints) */
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
