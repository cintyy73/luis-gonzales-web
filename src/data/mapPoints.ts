export type MapZone = 'caba' | 'norte' | 'sur' | 'oeste'

export interface MapPoint {
  id: string
  name: string
  zone: MapZone
  lat: number
  lng: number
}

export const MAP_POINTS: MapPoint[] = [
  // CABA (15)
  { id: 'palermo', name: 'Palermo', zone: 'caba', lat: -34.5891, lng: -58.4173 },
  { id: 'belgrano', name: 'Belgrano', zone: 'caba', lat: -34.5630, lng: -58.4543 },
  { id: 'caballito', name: 'Caballito', zone: 'caba', lat: -34.6191, lng: -58.4400 },
  { id: 'villa-urquiza', name: 'Villa Urquiza', zone: 'caba', lat: -34.5736, lng: -58.4869 },
  { id: 'recoleta', name: 'Recoleta', zone: 'caba', lat: -34.5875, lng: -58.3974 },
  { id: 'almagro', name: 'Almagro', zone: 'caba', lat: -34.6097, lng: -58.4203 },
  { id: 'villa-crespo', name: 'Villa Crespo', zone: 'caba', lat: -34.5985, lng: -58.4395 },
  { id: 'flores', name: 'Flores', zone: 'caba', lat: -34.6276, lng: -58.4642 },
  { id: 'nunez', name: 'Nuñez', zone: 'caba', lat: -34.5454, lng: -58.4625 },
  { id: 'saavedra', name: 'Saavedra', zone: 'caba', lat: -34.5566, lng: -58.4862 },
  { id: 'san-telmo', name: 'San Telmo', zone: 'caba', lat: -34.6213, lng: -58.3735 },
  { id: 'puerto-madero', name: 'Puerto Madero', zone: 'caba', lat: -34.6118, lng: -58.3637 },
  { id: 'mataderos', name: 'Mataderos', zone: 'caba', lat: -34.6606, lng: -58.5050 },
  { id: 'liniers', name: 'Liniers', zone: 'caba', lat: -34.6402, lng: -58.5197 },
  { id: 'villa-devoto', name: 'Villa Devoto', zone: 'caba', lat: -34.5970, lng: -58.5135 },

  // Zona Norte (15)
  { id: 'vicente-lopez', name: 'Vicente Lopez', zone: 'norte', lat: -34.5269, lng: -58.4707 },
  { id: 'san-isidro', name: 'San Isidro', zone: 'norte', lat: -34.4708, lng: -58.5121 },
  { id: 'san-martin', name: 'San Martin', zone: 'norte', lat: -34.5723, lng: -58.5345 },
  { id: 'olivos', name: 'Olivos', zone: 'norte', lat: -34.5106, lng: -58.4892 },
  { id: 'florida', name: 'Florida', zone: 'norte', lat: -34.5170, lng: -58.4892 },
  { id: 'martinez', name: 'Martinez', zone: 'norte', lat: -34.4901, lng: -58.5024 },
  { id: 'beccar', name: 'Beccar', zone: 'norte', lat: -34.4604, lng: -58.5239 },
  { id: 'acassuso', name: 'Acassuso', zone: 'norte', lat: -34.4778, lng: -58.5158 },
  { id: 'boulogne', name: 'Boulogne', zone: 'norte', lat: -34.4881, lng: -58.5614 },
  { id: 'munro', name: 'Munro', zone: 'norte', lat: -34.5286, lng: -58.5189 },
  { id: 'san-fernando', name: 'San Fernando', zone: 'norte', lat: -34.4441, lng: -58.5570 },
  { id: 'tigre', name: 'Tigre', zone: 'norte', lat: -34.4264, lng: -58.5793 },
  { id: 'don-torcuato', name: 'Don Torcuato', zone: 'norte', lat: -34.4886, lng: -58.6225 },
  { id: 'villa-adelina', name: 'Villa Adelina', zone: 'norte', lat: -34.5061, lng: -58.5413 },
  { id: 'la-lucila', name: 'La Lucila', zone: 'norte', lat: -34.4998, lng: -58.4980 },

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
