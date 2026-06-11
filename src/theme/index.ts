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
    '*::-webkit-scrollbar-track': { bg: 'rgba(10,11,13,0.5)' },
    '*::-webkit-scrollbar-thumb': {
      bg: 'linear-gradient(180deg, #008BF4 0%, #000000 100%)',
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
        heading: { value: "'Poppins', 'Inter', sans-serif" },
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
        // Colores de marca (del logo): azul del copo, naranja del sol, negro de fondo
        palette: {
          blue: { value: '#008BF4' }, // azul del copo de nieve
          orange: { value: '#F58E3F' }, // naranja del sol
          black: { value: '#000000' }, // fondo negro
        },
        brand: {
          50: { value: '#E5F3FE' },
          100: { value: '#BBDFFD' },
          200: { value: '#8ECAFC' },
          300: { value: '#5FB4FB' },
          400: { value: '#2F9FF8' },
          500: { value: '#008BF4' }, // azul del logo
          600: { value: '#0070C7' },
          700: { value: '#00549A' },
          800: { value: '#00396D' },
          900: { value: '#001E40' },
        },
        navy: {
          50: { value: '#ECEDEE' },
          100: { value: '#CFD0D2' },
          200: { value: '#A4A6AA' },
          300: { value: '#74767C' },
          400: { value: '#494B51' },
          500: { value: '#2B2D33' },
          600: { value: '#1C1E23' },
          700: { value: '#131418' },
          800: { value: '#0A0B0D' },
          900: { value: '#000000' }, // negro del logo (fondo base)
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
          50: { value: '#FEF1E6' },
          100: { value: '#FDDCBF' },
          200: { value: '#FBC494' },
          300: { value: '#F9AB69' },
          400: { value: '#F79C52' },
          500: { value: '#F58E3F' }, // naranja del logo (sol)
          600: { value: '#E5731F' },
          700: { value: '#C25A12' },
          800: { value: '#94440D' },
          900: { value: '#6B3109' },
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
            'radial-gradient(at 18% 20%, rgba(0,139,244,0.22) 0px, transparent 50%), radial-gradient(at 82% 28%, rgba(245,142,63,0.16) 0px, transparent 50%), radial-gradient(at 50% 88%, rgba(0,139,244,0.12) 0px, transparent 55%), linear-gradient(180deg, #000000 0%, #0A0B0D 100%)',
        },
        brand: {
          value: 'linear-gradient(135deg, #008BF4 0%, #00549A 100%)',
        },
        glass: {
          value:
            'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        },
      },
    },
    semanticTokens: {
      colors: {
        // base/_light/_dark forzados: estos nombres colisionan con tokens por
        // defecto de Chakra v3, asi el override gana en cualquier color mode
        'bg.base': { value: { base: '{colors.navy.900}', _light: '{colors.navy.900}', _dark: '{colors.navy.900}' } },
        'bg.surface': { value: '{colors.navy.800}' },
        'bg.subtle': { value: { base: '{colors.navy.700}', _light: '{colors.navy.700}', _dark: '{colors.navy.700}' } },
        'bg.muted': { value: { base: 'rgba(255,255,255,0.04)', _light: 'rgba(255,255,255,0.04)', _dark: 'rgba(255,255,255,0.04)' } },
        'fg.default': { value: { base: '#E6EAF0', _light: '#E6EAF0', _dark: '#E6EAF0' } },
        'fg.muted': { value: { base: '#B0B6C0', _light: '#B0B6C0', _dark: '#B0B6C0' } },
        'fg.subtle': { value: { base: '#888F9B', _light: '#888F9B', _dark: '#888F9B' } },
        'border.subtle': { value: { base: 'rgba(255,255,255,0.08)', _light: 'rgba(255,255,255,0.08)', _dark: 'rgba(255,255,255,0.08)' } },
        'border.default': { value: 'rgba(255,255,255,0.12)' },
        'border.accent': { value: 'rgba(0,139,244,0.4)' },
        'accent.solid': { value: '{colors.brand.500}' },
        'accent.muted': { value: '{colors.brand.700}' },
        'accent.warm': { value: '{colors.accent.500}' },
        'accent.warm.soft': { value: '{colors.accent.300}' },
        'accent.warm.bg': { value: 'rgba(245,142,63,0.10)' },
        'border.warm': { value: 'rgba(245,142,63,0.35)' },
        // Colores del logo
        'palette.blue': { value: '{colors.palette.blue}' },
        'palette.orange': { value: '{colors.palette.orange}' },
        'palette.black': { value: '{colors.palette.black}' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
