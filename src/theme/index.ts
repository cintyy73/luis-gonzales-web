import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    'html, body': {
      bg: 'bg.base',
      color: 'fg.default',
      fontFamily: 'body',
      textRendering: 'optimizeLegibility',
      scrollBehavior: 'smooth',
    },
    body: {
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    } as any,
    '*::selection': {
      bg: 'brand.500',
      color: 'white',
    },
    '*::-webkit-scrollbar': { width: '10px', height: '10px' },
    '*::-webkit-scrollbar-track': { bg: 'rgba(10,26,53,0.4)' },
    '*::-webkit-scrollbar-thumb': {
      bg: 'linear-gradient(180deg, #0EA5FF 0%, #0A1A35 100%)',
      borderRadius: '8px',
    },
  },
  theme: {
    breakpoints: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
    tokens: {
      fonts: {
        body: { value: "'Inter', system-ui, -apple-system, sans-serif" },
        heading: { value: "'Plus Jakarta Sans', 'Inter', sans-serif" },
      },
      fontSizes: {
        '7xl': { value: '4.5rem' },
        '8xl': { value: '6rem' },
        '9xl': { value: '8rem' },
      },
      radii: {
        xl2: { value: '1.25rem' },
        xl3: { value: '1.75rem' },
        xl4: { value: '2.25rem' },
      },
      colors: {
        brand: {
          50: { value: '#E6F4FF' },
          100: { value: '#B8DFFF' },
          200: { value: '#8AC9FF' },
          300: { value: '#5CB2FF' },
          400: { value: '#2E9BFF' },
          500: { value: '#0EA5FF' },
          600: { value: '#0584D6' },
          700: { value: '#0264A6' },
          800: { value: '#014375' },
          900: { value: '#012345' },
        },
        navy: {
          50: { value: '#E8ECF4' },
          100: { value: '#C5CEE0' },
          200: { value: '#9AA8C7' },
          300: { value: '#6F83AE' },
          400: { value: '#465F95' },
          500: { value: '#23427C' },
          600: { value: '#1A3163' },
          700: { value: '#13234A' },
          800: { value: '#0A1A35' },
          900: { value: '#050E20' },
        },
        sky: {
          50: { value: '#F0F9FF' },
          100: { value: '#E0F2FE' },
          200: { value: '#BAE6FD' },
          300: { value: '#7DD3FC' },
          400: { value: '#38BDF8' },
          500: { value: '#0EA5E9' },
          600: { value: '#0284C7' },
          700: { value: '#0369A1' },
          800: { value: '#075985' },
          900: { value: '#0C4A6E' },
        },
        whatsapp: {
          400: { value: '#34D399' },
          500: { value: '#22C55E' },
          600: { value: '#16A34A' },
          700: { value: '#15803D' },
        },
        accent: {
          50: { value: '#FFF4E6' },
          100: { value: '#FFE1BF' },
          200: { value: '#FFC78A' },
          300: { value: '#FFAB55' },
          400: { value: '#FB923C' },
          500: { value: '#F97316' },
          600: { value: '#EA580C' },
          700: { value: '#C2410C' },
          800: { value: '#9A3412' },
          900: { value: '#7C2D12' },
        },
      },
      shadows: {
        glow: {
          value:
            '0 18px 40px -18px rgba(5, 14, 32, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        },
        glowSoft: {
          value: '0 10px 24px -12px rgba(5, 14, 32, 0.45)',
        },
        premium: {
          value:
            '0 20px 60px -20px rgba(10, 26, 53, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        },
        card: {
          value:
            '0 10px 40px -12px rgba(10, 26, 53, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.04)',
        },
        cardHover: {
          value:
            '0 24px 60px -24px rgba(5, 14, 32, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        },
      },
      gradients: {
        hero: {
          value:
            'radial-gradient(at 20% 20%, rgba(14,165,255,0.25) 0px, transparent 50%), radial-gradient(at 80% 30%, rgba(125,211,252,0.15) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(2,132,199,0.20) 0px, transparent 50%), linear-gradient(180deg, #050E20 0%, #0A1A35 100%)',
        },
        brand: {
          value: 'linear-gradient(135deg, #0EA5FF 0%, #0284C7 100%)',
        },
        glass: {
          value:
            'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        },
      },
    },
    semanticTokens: {
      colors: {
        'bg.base': { value: '{colors.navy.900}' },
        'bg.surface': { value: '{colors.navy.800}' },
        'bg.subtle': { value: '{colors.navy.700}' },
        'bg.muted': { value: 'rgba(255,255,255,0.04)' },
        'fg.default': { value: '#F5F8FF' },
        'fg.muted': { value: 'rgba(245,248,255,0.72)' },
        'fg.subtle': { value: 'rgba(245,248,255,0.52)' },
        'border.subtle': { value: 'rgba(255,255,255,0.08)' },
        'border.default': { value: 'rgba(255,255,255,0.12)' },
        'border.accent': { value: 'rgba(14,165,255,0.4)' },
        'accent.solid': { value: '{colors.brand.500}' },
        'accent.muted': { value: '{colors.brand.700}' },
        'accent.warm': { value: '{colors.accent.500}' },
        'accent.warm.soft': { value: '{colors.accent.300}' },
        'accent.warm.bg': { value: 'rgba(249,115,22,0.10)' },
        'border.warm': { value: 'rgba(249,115,22,0.35)' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
