import { CONTACT } from '@/data/contact'

export const buildWhatsAppUrl = (message?: string): string => {
  const base = `https://wa.me/${CONTACT.whatsappRaw}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const buildTelUrl = (): string => `tel:${CONTACT.phoneIntl}`

export const openWhatsApp = (message?: string): void => {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}
