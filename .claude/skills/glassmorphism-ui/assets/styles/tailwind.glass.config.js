// Glassmorphism Tailwind CSS Configuration
// Add this to your tailwind.config.js or tailwind.config.ts

/** @type {import('tailwindcss').Config} */
const glassmorphismConfig = {
  theme: {
    extend: {
      // Extended backdrop blur values
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // Glass-specific colors
      colors: {
        glass: {
          white: {
            5: 'rgba(255, 255, 255, 0.05)',
            10: 'rgba(255, 255, 255, 0.10)',
            15: 'rgba(255, 255, 255, 0.15)',
            20: 'rgba(255, 255, 255, 0.20)',
            25: 'rgba(255, 255, 255, 0.25)',
            30: 'rgba(255, 255, 255, 0.30)',
          },
          black: {
            5: 'rgba(0, 0, 0, 0.05)',
            10: 'rgba(0, 0, 0, 0.10)',
            15: 'rgba(0, 0, 0, 0.15)',
            20: 'rgba(0, 0, 0, 0.20)',
            25: 'rgba(0, 0, 0, 0.25)',
            30: 'rgba(0, 0, 0, 0.30)',
          },
        },
      },

      // Glass shadows
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.15)',
        'glass-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glass-inner': 'inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        'glass-glow': '0 0 40px rgba(255, 255, 255, 0.1)',
      },

      // Border colors for glass
      borderColor: {
        'glass-light': 'rgba(255, 255, 255, 0.2)',
        'glass-medium': 'rgba(255, 255, 255, 0.3)',
        'glass-dark': 'rgba(0, 0, 0, 0.1)',
      },

      // Extended border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // Glass-optimized animations
      animation: {
        'glass-fade-in': 'glassFadeIn 0.3s ease-out',
        'glass-slide-up': 'glassSlideUp 0.3s ease-out',
        'glass-scale-in': 'glassScaleIn 0.2s ease-out',
        'glass-blur-in': 'glassBlurIn 0.4s ease-out',
      },

      keyframes: {
        glassFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glassSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glassScaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glassBlurIn: {
          '0%': { 
            opacity: '0', 
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
          },
          '100%': { 
            opacity: '1', 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          },
        },
      },

      // Background images for glass containers
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'glass-dark': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        'glass-mesh': `
          radial-gradient(at 40% 20%, #4f46e5 0%, transparent 50%),
          radial-gradient(at 80% 0%, #7c3aed 0%, transparent 50%),
          radial-gradient(at 0% 50%, #2563eb 0%, transparent 50%),
          radial-gradient(at 80% 50%, #db2777 0%, transparent 50%),
          radial-gradient(at 0% 100%, #0891b2 0%, transparent 50%)
        `,
        'glass-aurora': `
          radial-gradient(ellipse at top, #7c3aed 0%, transparent 50%),
          radial-gradient(ellipse at bottom, #2563eb 0%, transparent 50%)
        `,
      },
    },
  },

  // Custom plugin for glass utilities
  plugins: [
    function ({ addUtilities, addComponents }) {
      // Glass utility classes
      addUtilities({
        '.glass-effect': {
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
        },
        '.glass-effect-sm': {
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
        },
        '.glass-effect-lg': {
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
        },
        '.glass-effect-xl': {
          'backdrop-filter': 'blur(24px)',
          '-webkit-backdrop-filter': 'blur(24px)',
        },
      });

      // Glass component classes
      addComponents({
        '.glass-card': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'border-radius': '1rem',
          'padding': '1.5rem',
          'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        '.glass-button': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'border-radius': '0.75rem',
          'padding': '0.75rem 1.5rem',
          'color': 'white',
          'font-weight': '500',
          'transition': 'all 0.3s ease',
          '&:hover': {
            'background': 'rgba(255, 255, 255, 0.2)',
            'transform': 'translateY(-2px)',
          },
        },
        '.glass-input': {
          'width': '100%',
          'padding': '0.75rem 1rem',
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(8px)',
          '-webkit-backdrop-filter': 'blur(8px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'border-radius': '0.75rem',
          'color': 'white',
          '&::placeholder': {
            'color': 'rgba(255, 255, 255, 0.5)',
          },
          '&:focus': {
            'outline': 'none',
            'border-color': 'rgba(255, 255, 255, 0.4)',
            'box-shadow': '0 0 0 3px rgba(255, 255, 255, 0.1)',
          },
        },
        '.glass-nav': {
          'position': 'fixed',
          'left': '1rem',
          'right': '1rem',
          'z-index': '50',
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'border-radius': '1.5rem',
          'padding': '1rem 1.5rem',
          'box-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        },
      });
    },
  ],
};

module.exports = glassmorphismConfig;

// Usage in your tailwind.config.js:
// const glassmorphism = require('./path/to/tailwind.glass.config.js');
// 
// module.exports = {
//   ...glassmorphism,
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   // your other config
// };
