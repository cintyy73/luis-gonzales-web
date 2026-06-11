export const CONTACT = {
  name: 'Luis Gonzalez',
  brand: 'Luis Gonzalez',
  tagline: 'Técnico certificado UTN · 16 años de experiencia',

  phone: '11 3327-5539',
  phoneIntl: '+5491133275539',
  whatsappRaw: '5491133275539',
  whatsappDisplay: '+54 9 11 3327-5539',

  email: 'serviciotecnico.luisgonzalez@gmail.com',

  city: 'Ciudad Autónoma de Buenos Aires',
  country: 'Argentina',
  serviceArea: 'CABA y Gran Buenos Aires',

  hours: 'Lunes a Sábado de 8:00 a 20:00',
  hoursShort: 'Lun-Sab 8-20hs',

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    whatsapp: 'https://wa.me/5491133275539',
  },

  // TODO: reemplazar con link público de Google Drive (foto de WhatsApp del técnico).
  // El componente Avatar la pasa por transformDriveImage() automáticamente.
  avatarDriveUrl: '',

  // Fallback profesional si avatarDriveUrl está vacío.
  avatarFallback:
    'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&q=80',
} as const
