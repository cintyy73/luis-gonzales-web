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
    title: 'Atención Rápida',
    description: 'Respondemos por WhatsApp en minutos y coordinamos visita en el día o el siguiente hábil.',
    icon: TbBolt,
  },
  {
    id: 'garantia',
    title: 'Trabajos Garantizados',
    description: 'Todos nuestros trabajos incluyen garantía escrita por mano de obra y repuestos.',
    icon: TbShieldCheck,
  },
  {
    id: 'experiencia',
    title: 'Certificado UTN · 16 años',
    description: 'Instalador y reparador certificado por la UTN, con 16 años de experiencia en hogares, oficinas y comercios de CABA y GBA.',
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
    description: 'Bomba de vacío, detector de fugas, manómetro y herramientas certificadas.',
    icon: TbTools,
  },
  {
    id: 'soporte',
    title: 'Soporte Personalizado',
    description: 'Tratos directos con Luis: sin call centers ni intermediarios. Trato cercano y profesional.',
    icon: TbHeadset,
  },
]
