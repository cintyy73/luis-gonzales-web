import type { Brand } from '@/types'

// Si tenes el SVG/PNG real de la marca, dejalo en /public/brands/<id>.svg y
// el componente lo va a mostrar automaticamente. Mientras tanto se renderiza
// el nombre como wordmark estilizado.
export const BRANDS: Brand[] = [
  { id: 'samsung', name: 'Samsung', category: 'multi', logoUrl: '/brands/samsung.svg' },
  { id: 'lg', name: 'LG', category: 'multi', logoUrl: '/brands/lg.svg' },
  { id: 'whirlpool', name: 'Whirlpool', category: 'lavarropas', logoUrl: '/brands/whirlpool.svg' },
  { id: 'electrolux', name: 'Electrolux', category: 'lavarropas', logoUrl: '/brands/electrolux.svg' },
  { id: 'drean', name: 'Drean', category: 'lavarropas', logoUrl: '/brands/drean.svg' },
  { id: 'patriot', name: 'Patriot', category: 'lavarropas', logoUrl: '/brands/patriot.svg' },
  { id: 'bgh', name: 'BGH', category: 'multi', logoUrl: '/brands/bgh.svg' },
  { id: 'surrey', name: 'Surrey', category: 'aires', logoUrl: '/brands/surrey.svg' },
  { id: 'philco', name: 'Philco', category: 'aires', logoUrl: '/brands/philco.svg' },
  { id: 'carrier', name: 'Carrier', category: 'aires', logoUrl: '/brands/carrier.svg' },
]
