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
    highlights: ['Diagnostico al toque', 'Repuestos originales', 'Trabajos garantizados'],
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
    id: 'mantenimiento',
    title: 'Mantenimiento Preventivo y Limpieza',
    shortTitle: 'Mantenimiento Preventivo',
    description:
      'Service preventivo programado, limpieza quimica de evaporador y condensador, higienizacion y control de filtros. Aire saludable todo el año.',
    icon: TbSettingsAutomation,
    whatsappMessage: 'Hola Luis, quiero contratar un mantenimiento preventivo.',
    highlights: ['Limpieza quimica', 'Ahorro de consumo', 'Plan anual'],
  },
  {
    id: 'reparacion-lavarropas',
    title: 'Reparacion de Lavarropas Automaticos',
    shortTitle: 'Reparacion de Lavarropas',
    description:
      'Service especializado en todas las marcas y modelos. Bombas, electrovalvulas, programadores, fajas, rulemanes y placas electronicas.',
    icon: TbWashMachine,
    whatsappMessage: 'Hola Luis, mi lavarropas tiene un problema. ¿Podrias revisarlo?',
    highlights: ['Todas las marcas', 'Repuestos originales', 'Atencion a domicilio'],
    featured: true,
  },
  {
    id: 'reparacion-microondas-hornos',
    title: 'Reparacion de Microondas y Hornos Electricos',
    shortTitle: 'Microondas y Hornos',
    description:
      'Reparacion de microondas y hornos electricos de todas las marcas. Magnetrones, resistencias, termostatos, placas y temporizadores.',
    icon: TbMicrowave,
    whatsappMessage: 'Hola Luis, necesito reparar un microondas u horno electrico. ¿Podes revisarlo?',
    highlights: ['Todas las marcas', 'Diagnostico preciso', 'Trabajo garantizado'],
  },
]
