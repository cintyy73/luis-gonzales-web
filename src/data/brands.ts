import type { Brand } from '@/types'

// Las marcas con logoUrl apuntan a Simple Icons CDN (SVG monocromatico).
// Las marcas argentinas/menores no estan en Simple Icons y caen al wordmark
// estilizado del componente BrandLogo. Para reemplazar por el SVG real, dejar
// el archivo en /public/brands/<id>.svg y poner logoUrl: '/brands/<id>.svg'.
export const BRANDS: Brand[] = [
  { id: 'samsung', name: 'Samsung', category: 'multi', logoUrl: 'https://cdn.simpleicons.org/samsung' },
  { id: 'lg', name: 'LG', category: 'multi', logoUrl: 'https://cdn.simpleicons.org/lg' },
  { id: 'whirlpool', name: 'Whirlpool', category: 'lavarropas' },
  { id: 'electrolux', name: 'Electrolux', category: 'lavarropas' },
  { id: 'drean', name: 'Drean', category: 'lavarropas' },
  { id: 'patriot', name: 'Patriot', category: 'lavarropas' },
  { id: 'bgh', name: 'BGH', category: 'multi' },
  { id: 'surrey', name: 'Surrey', category: 'aires' },
  { id: 'philco', name: 'Philco', category: 'aires' },
  { id: 'carrier', name: 'Carrier', category: 'aires' },
]
