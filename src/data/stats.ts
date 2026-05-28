import { TbUsers, TbCalendarStats, TbStar, TbClockHour4 } from 'react-icons/tb'
import type { Stat } from '@/types'

export const STATS: Stat[] = [
  { id: 's1', value: 16, suffix: '+', label: 'Años de experiencia', icon: TbCalendarStats },
  { id: 's2', value: 1500, suffix: '+', label: 'Clientes satisfechos', icon: TbUsers },
  { id: 's3', value: 4.9, suffix: '/5', label: 'Calificacion promedio', icon: TbStar },
  { id: 's4', value: 24, suffix: 'hs', label: 'Respuesta promedio', icon: TbClockHour4 },
]
