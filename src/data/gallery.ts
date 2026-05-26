import type { GalleryImage } from '@/types'

// TODO: reemplazar `src` con links publicos de Google Drive (o URLs directas).
// La utility transformDriveImage() los convierte automaticamente a URL servible.
// Fallbacks con Unsplash HVAC profesionales mientras tanto.

export const GALLERY: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1631545308456-3a25e6818fd5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Instalacion profesional de split en pared',
    description: 'Instalacion de split frio/calor con caños revestidos',
    category: 'instalacion',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1599619585752-c3edb42a414c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Tecnico reparando aire acondicionado',
    description: 'Reparacion de placa electronica con prueba completa',
    category: 'reparacion',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1581094488379-6a40d8c1de25?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mantenimiento y limpieza profunda de split',
    description: 'Limpieza quimica e higienizacion completa',
    category: 'mantenimiento',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Carga de gas refrigerante con manometro',
    description: 'Carga de gas R-410A con manometro profesional',
    category: 'reparacion',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Reparacion de lavarropas a domicilio',
    description: 'Service de lavarropas con repuestos originales',
    category: 'lavarropas',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1635274602476-9b0e2e6e3c8b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Condensador exterior recien instalado',
    description: 'Condensador instalado con soportes reforzados',
    category: 'instalacion',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'Herramientas profesionales de servicio tecnico',
    description: 'Herramientas certificadas para diagnostico preciso',
    category: 'mantenimiento',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1604335398480-e8150c61c4f7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bomba de vacio en proceso de instalacion',
    description: 'Vacio profesional antes de cargar gas refrigerante',
    category: 'instalacion',
  },
]
