// Datos placeholder — reemplazar con los definitivos cuando estén.
export const event = {
  name: 'Congreso CREA Chaco Santiagueño',
  shortName: 'CREA CHS',
  tagline: 'Región que produce, región que une',
  intro:
    'Un encuentro pensado para empresarios agropecuarios, profesionales y actores del ecosistema productivo del Chaco Santiagueño. Dos jornadas de contenido, networking y futuro compartido.',
  date: 'Fecha a confirmar',
  // ISO futuro para countdown; actualizar al confirmarse
  dateISO: '2026-09-15T09:00:00-03:00',
  location: 'Centro de Convenciones Fórum · Santiago del Estero',
  registrationUrl: '#',
}

export const nav = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre el Congreso', href: '#sobre' },
  { label: 'Oradores', href: '#oradores' },
  { label: 'Programa', href: '#programa' },
  { label: 'Sede', href: '#sede' },
  { label: 'Inscripción', href: '#inscripcion' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contacto', href: '#contacto' },
]

export const speakers = [
  { name: 'Orador 1', role: 'Cargo / Empresa', bio: 'Breve bio (máx 200 caracteres).', photo: '' },
  { name: 'Orador 2', role: 'Cargo / Empresa', bio: 'Breve bio (máx 200 caracteres).', photo: '' },
  { name: 'Orador 3', role: 'Cargo / Empresa', bio: 'Breve bio (máx 200 caracteres).', photo: '' },
  { name: 'Orador 4', role: 'Cargo / Empresa', bio: 'Breve bio (máx 200 caracteres).', photo: '' },
  { name: 'Orador 5', role: 'Cargo / Empresa', bio: 'Breve bio (máx 200 caracteres).', photo: '' },
]

export const schedule = [
  {
    day: 'Día 1',
    date: 'A confirmar',
    items: [
      { time: '09:00', title: 'Acreditación y bienvenida', desc: 'Apertura de puertas, café de inicio.' },
      { time: '10:00', title: 'Panel inaugural', desc: 'Apertura institucional CREA.' },
      { time: '11:30', title: 'Conferencia principal', desc: 'Orador a confirmar.' },
      { time: '13:00', title: 'Almuerzo & networking', desc: '' },
      { time: '15:00', title: 'Paneles simultáneos', desc: 'Ganadería · Agricultura · Gestión.' },
      { time: '18:00', title: 'Cierre del día', desc: '' },
    ],
  },
  {
    day: 'Día 2',
    date: 'A confirmar',
    items: [
      { time: '09:00', title: 'Apertura día 2', desc: '' },
      { time: '10:00', title: 'Casos de estudio', desc: 'Empresas CREA de la región.' },
      { time: '12:30', title: 'Almuerzo', desc: '' },
      { time: '14:30', title: 'Mesa redonda', desc: 'Futuro del agro en el Chaco Santiagueño.' },
      { time: '17:00', title: 'Cierre y brindis', desc: '' },
    ],
  },
]

export const venue = {
  name: 'Centro de Convenciones Fórum',
  address: 'Perú 511, Santiago del Estero',
  mapUrl: 'https://share.google/GfVPhCVQU2asTM2hO',
  mapEmbed:
    'https://www.google.com/maps?q=Centro+de+Convenciones+Forum+Peru+511+Santiago+del+Estero&output=embed',
  hotels: [
    { name: 'Hotel a confirmar', desc: 'Distancia a la sede · categoría.' },
    { name: 'Hotel a confirmar', desc: 'Distancia a la sede · categoría.' },
    { name: 'Hotel a confirmar', desc: 'Distancia a la sede · categoría.' },
  ],
}

export const sponsors = {
  estrategicos: [],
  patrocinantes: [],
  auspiciantes: [],
}

export const contact = {
  email: 'contacto@creachacosantiagueno.com',
  phone: '',
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
}
