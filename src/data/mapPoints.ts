export type MapZone = 'caba' | 'norte' | 'sur' | 'oeste'

export interface MapPoint {
  id: string
  name: string
  zone: MapZone
  lat: number
  lng: number
}

export const MAP_POINTS: MapPoint[] = [
  // CABA
  { id: 'palermo', name: 'Palermo', zone: 'caba', lat: -34.5891, lng: -58.4173 },
  { id: 'belgrano', name: 'Belgrano', zone: 'caba', lat: -34.5630, lng: -58.4543 },
  { id: 'caballito', name: 'Caballito', zone: 'caba', lat: -34.6191, lng: -58.4400 },
  { id: 'villa-urquiza', name: 'Villa Urquiza', zone: 'caba', lat: -34.5736, lng: -58.4869 },
  { id: 'recoleta', name: 'Recoleta', zone: 'caba', lat: -34.5875, lng: -58.3974 },

  // Zona Norte
  { id: 'vicente-lopez', name: 'Vicente Lopez', zone: 'norte', lat: -34.5269, lng: -58.4707 },
  { id: 'san-isidro', name: 'San Isidro', zone: 'norte', lat: -34.4708, lng: -58.5121 },
  { id: 'san-martin', name: 'San Martin', zone: 'norte', lat: -34.5723, lng: -58.5345 },
  { id: 'olivos', name: 'Olivos', zone: 'norte', lat: -34.5106, lng: -58.4892 },

  // Zona Oeste
  { id: 'moron', name: 'Moron', zone: 'oeste', lat: -34.6532, lng: -58.6196 },
  { id: 'ramos-mejia', name: 'Ramos Mejia', zone: 'oeste', lat: -34.6435, lng: -58.5640 },
  { id: 'san-justo', name: 'San Justo', zone: 'oeste', lat: -34.6748, lng: -58.5616 },
  { id: 'castelar', name: 'Castelar', zone: 'oeste', lat: -34.6471, lng: -58.6433 },

  // Zona Sur
  { id: 'avellaneda', name: 'Avellaneda', zone: 'sur', lat: -34.6610, lng: -58.3654 },
  { id: 'lanus', name: 'Lanus', zone: 'sur', lat: -34.7075, lng: -58.3942 },
  { id: 'quilmes', name: 'Quilmes', zone: 'sur', lat: -34.7218, lng: -58.2619 },
  { id: 'ezpeleta', name: 'Ezpeleta', zone: 'sur', lat: -34.7488, lng: -58.2407 },
  { id: 'lomas-de-zamora', name: 'Lomas de Zamora', zone: 'sur', lat: -34.7622, lng: -58.4006 },
]

export const ZONE_META: Record<MapZone, { label: string; color: string }> = {
  caba: { label: 'CABA', color: '#0EA5FF' },
  norte: { label: 'Zona Norte', color: '#22C55E' },
  oeste: { label: 'Zona Oeste', color: '#A855F7' },
  sur: { label: 'Zona Sur', color: '#FB923C' },
}

export const MAP_CENTER: [number, number] = [-34.62, -58.45]
