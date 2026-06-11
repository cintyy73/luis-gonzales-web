import {
  TbAirConditioning,
  TbTool,
  TbDroplet,
  TbSettingsAutomation,
  TbWashMachine,
  TbMicrowave,
} from 'react-icons/tb'
import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'instalacion-aires',
    title: 'Instalación de Aires Acondicionados',
    shortTitle: 'Instalación de Splits',
    description:
      'Instalación profesional de equipos split en hogares, oficinas y comercios. Caños revestidos, vacío con bomba y prueba completa.',
    icon: TbAirConditioning,
    whatsappMessage: 'Hola Luis, necesito una instalación de aire acondicionado. ¿Podrías pasarme un presupuesto?',
    highlights: ['Caños prolijos', 'Vacío con bomba', 'Garantía escrita'],
    featured: true,
  },
  {
    id: 'reparacion-aires',
    title: 'Reparación de Aires Acondicionados',
    shortTitle: 'Reparación de Splits',
    description:
      'Diagnóstico y reparación de splits que no enfrían, hacen ruido, gotean o no encienden. Atención rápida a domicilio.',
    icon: TbTool,
    whatsappMessage: 'Hola Luis, necesito reparación de un aire acondicionado. ¿Cuándo podrías venir?',
    highlights: ['Diagnóstico al toque', 'Repuestos originales', 'Trabajos garantizados'],
    featured: true,
  },
  {
    id: 'carga-gas',
    title: 'Carga de Gas Refrigerante',
    shortTitle: 'Carga de Gas',
    description:
      'Recarga de gas R-410A y R-32 con detección de pérdidas y prueba de presión. Tu equipo vuelve a enfriar como el primer día.',
    icon: TbDroplet,
    whatsappMessage: 'Hola Luis, mi aire no enfría. Quiero consultar por carga de gas refrigerante.',
    highlights: ['R-410A y R-32', 'Detección de fugas', 'Prueba de presión'],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo y Limpieza',
    shortTitle: 'Mantenimiento Preventivo',
    description:
      'Service preventivo programado, limpieza química de evaporador y condensador, higienización y control de filtros. Aire saludable todo el año.',
    icon: TbSettingsAutomation,
    whatsappMessage: 'Hola Luis, quiero contratar un mantenimiento preventivo.',
    highlights: ['Limpieza química', 'Ahorro de consumo', 'Plan anual'],
  },
  {
    id: 'reparacion-lavarropas',
    title: 'Reparación de Lavarropas Automáticos',
    shortTitle: 'Reparación de Lavarropas',
    description:
      'Service especializado en todas las marcas y modelos. Bombas, electroválvulas, programadores, fajas, rulemanes y placas electrónicas.',
    icon: TbWashMachine,
    whatsappMessage: 'Hola Luis, mi lavarropas tiene un problema. ¿Podrías revisarlo?',
    highlights: ['Todas las marcas', 'Repuestos originales', 'Atención a domicilio'],
    featured: true,
  },
  {
    id: 'reparacion-microondas-hornos',
    title: 'Reparación de Microondas y Hornos Eléctricos',
    shortTitle: 'Microondas y Hornos',
    description:
      'Reparación de microondas y hornos eléctricos de todas las marcas. Magnetrones, resistencias, termostatos, placas y temporizadores.',
    icon: TbMicrowave,
    whatsappMessage: 'Hola Luis, necesito reparar un microondas u horno eléctrico. ¿Podés revisarlo?',
    highlights: ['Todas las marcas', 'Diagnóstico preciso', 'Trabajo garantizado'],
  },
]
