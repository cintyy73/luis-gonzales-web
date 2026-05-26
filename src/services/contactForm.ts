import type { ContactFormValues } from '@/types'
import { buildWhatsAppUrl } from '@/utils/whatsapp'

/**
 * Convierte los datos del formulario en un mensaje listo para WhatsApp
 * y abre la conversacion en una nueva pestaña.
 *
 * Hook de integracion futura: aca podes despachar tambien a EmailJS,
 * a un endpoint propio (Firebase / Supabase) o a un CRM.
 */
export const sendContactToWhatsApp = (values: ContactFormValues): void => {
  const message = [
    `Hola Luis, te contacto desde la web.`,
    ``,
    `Nombre: ${values.name}`,
    `Telefono: ${values.phone}`,
    `Zona: ${values.zone}`,
    `Servicio: ${values.service}`,
    ``,
    `Mensaje:`,
    values.message,
  ].join('\n')

  const url = buildWhatsAppUrl(message)
  window.open(url, '_blank', 'noopener,noreferrer')
}
