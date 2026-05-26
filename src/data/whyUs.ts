import {
  TbBolt,
  TbShieldCheck,
  TbAward,
  TbHome,
  TbTools,
  TbHeadset,
} from 'react-icons/tb'
import type { WhyUsItem } from '@/types'

export const WHY_US: WhyUsItem[] = [
  {
    id: 'rapida',
    title: 'Atencion Rapida',
    description: 'Respondemos por WhatsApp en minutos y coordinamos visita en el dia o el siguiente habil.',
    icon: TbBolt,
  },
  {
    id: 'garantia',
    title: 'Trabajos Garantizados',
    description: 'Todos nuestros trabajos incluyen garantia escrita por mano de obra y repuestos.',
    icon: TbShieldCheck,
  },
  {
    id: 'experiencia',
    title: 'Experiencia Comprobada',
    description: 'Mas de 10 años atendiendo hogares, oficinas y comercios en CABA y GBA.',
    icon: TbAward,
  },
  {
    id: 'domicilio',
    title: 'Servicio a Domicilio',
    description: 'Vamos a tu casa o local con todo el equipo necesario para resolver en el momento.',
    icon: TbHome,
  },
  {
    id: 'herramientas',
    title: 'Herramientas Profesionales',
    description: 'Bomba de vacio, detector de fugas, manometro y herramientas certificadas.',
    icon: TbTools,
  },
  {
    id: 'soporte',
    title: 'Soporte Personalizado',
    description: 'Tratos directos con Luis: sin call centers ni intermediarios. Trato cercano y profesional.',
    icon: TbHeadset,
  },
]
