import type { ContactFormValues } from '@/types'
import { CONTACT } from '@/data/contact'

const buildBody = (values: ContactFormValues): string =>
  [
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

/**
 * Abre el cliente de email predeterminado del usuario con un mensaje
 * pre-llenado dirigido a CONTACT.email.
 */
export const sendContactByEmail = (values: ContactFormValues): void => {
  const subject = `Consulta web · ${values.service}`
  const body = buildBody(values)
  const url = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = url
}
