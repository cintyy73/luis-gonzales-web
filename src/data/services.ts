import {
  TbAirConditioning,
  TbTool,
  TbDroplet,
  TbSparkles,
  TbSettingsAutomation,
  TbWashMachine,
  TbWind,
} from 'react-icons/tb'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'instalacion-aires',
    title: 'Instalacion de Aires Acondicionados',
    shortTitle: 'Instalacion de Splits',
    description:
      'Instalacion profesional de equipos split en hogares, oficinas y comercios. Caños revestidos, vacio con bomba y prueba completa.',
    icon: TbAirConditioning,
    whatsappMessage: 'Hola Luis, necesito una instalacion de aire acondicionado. ¿Podrias pasarme un presupuesto?',
    highlights: ['Caños prolijos', 'Vacio con bomba', 'Garantia escrita'],
    featured: true,
  },
  {
    id: 'reparacion-aires',
    title: 'Reparacion de Aires Acondicionados',
    shortTitle: 'Reparacion de Splits',
    description:
      'Diagnostico y reparacion de splits que no enfrian, hacen ruido, gotean o no encienden. Atencion rapida a domicilio.',
    icon: TbTool,
    whatsappMessage: 'Hola Luis, necesito reparacion de un aire acondicionado. ¿Cuando podrias venir?',
    highlights: ['Diagnostico gratis', 'Repuestos originales', 'Trabajos garantizados'],
    featured: true,
  },
  {
    id: 'carga-gas',
    title: 'Carga de Gas Refrigerante',
    shortTitle: 'Carga de Gas',
    description:
      'Recarga de gas R-410A y R-32 con deteccion de perdidas y prueba de presion. Tu equipo vuelve a enfriar como el primer dia.',
    icon: TbDroplet,
    whatsappMessage: 'Hola Luis, mi aire no enfria. Quiero consultar por carga de gas refrigerante.',
    highlights: ['R-410A y R-32', 'Deteccion de fugas', 'Prueba de presion'],
  },
  {
    id: 'limpieza',
    title: 'Limpieza Profunda y Mantenimiento',
    shortTitle: 'Limpieza y Mantenimiento',
    description:
      'Limpieza quimica de evaporador y condensador, higienizacion, control de filtros y revision general. Aire saludable todo el año.',
    icon: TbSparkles,
    whatsappMessage: 'Hola Luis, quiero coordinar una limpieza y mantenimiento de mi aire acondicionado.',
    highlights: ['Limpieza quimica', 'Higienizacion', 'Filtros nuevos'],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo',
    shortTitle: 'Mantenimiento Preventivo',
    description:
      'Service preventivo programado para evitar fallas, ahorrar consumo y extender la vida util de tus equipos.',
    icon: TbSettingsAutomation,
    whatsappMessage: 'Hola Luis, quiero contratar un mantenimiento preventivo.',
    highlights: ['Plan anual', 'Ahorro de consumo', 'Sin sorpresas'],
  },
  {
    id: 'reparacion-lavarropas',
    title: 'Reparacion de Lavarropas',
    shortTitle: 'Reparacion de Lavarropas',
    description:
      'Service especializado en todas las marcas. Bombas, electrovalvulas, programadores, fajas, rulemanes y placas electronicas.',
    icon: TbWashMachine,
    whatsappMessage: 'Hola Luis, mi lavarropas tiene un problema. ¿Podrias revisarlo?',
    highlights: ['Todas las marcas', 'Repuestos originales', 'Atencion a domicilio'],
    featured: true,
  },
  {
    id: 'reparacion-secarropas',
    title: 'Reparacion de Secarropas',
    shortTitle: 'Reparacion de Secarropas',
    description:
      'Diagnostico y reparacion de secarropas centrifugos y por calor. Motores, fajas, termostatos y resistencias.',
    icon: TbWind,
    whatsappMessage: 'Hola Luis, necesito reparar mi secarropas. ¿Cuando podrias venir?',
    highlights: ['Diagnostico al instante', 'Garantia de trabajo', 'Domicilio CABA y GBA'],
  },
]
