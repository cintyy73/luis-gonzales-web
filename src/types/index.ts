import type { IconType } from 'react-icons'

export interface Service {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: IconType
  whatsappMessage: string
  highlights: string[]
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  zone: string
  rating: number
  comment: string
  service: string
  date: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  description?: string
  category?: 'instalacion' | 'reparacion' | 'mantenimiento' | 'lavarropas'
}

export interface Zone {
  id: string
  name: string
  description: string
  neighborhoods: string[]
}

export interface Stat {
  id: string
  value: number
  suffix?: string
  label: string
  icon: IconType
}

export interface WhyUsItem {
  id: string
  title: string
  description: string
  icon: IconType
}

export interface Brand {
  id: string
  name: string
  category: 'aires' | 'lavarropas' | 'multi'
  logoUrl?: string
}

export interface ContactFormValues {
  name: string
  phone: string
  zone: string
  service: string
  message: string
}
