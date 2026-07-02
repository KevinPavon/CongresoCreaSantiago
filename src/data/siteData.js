// Datos placeholder — reemplazar con los definitivos cuando estén.
export const event = {
  name: 'Congreso CREA Chaco Santiagueño',
  shortName: 'CREA CHS',
  tagline: 'Región que produce, región que une',
  intro:
    'Un encuentro pensado para empresarios agropecuarios, profesionales y actores del ecosistema productivo del Chaco Santiagueño. Dos jornadas de contenido, networking y futuro compartido.',
  date: 'MIÉ 7 y JUE 8 de octubre',
  // ISO futuro para countdown
  dateISO: '2026-10-07T08:30:00-03:00',
  location: 'Centro de Convenciones Fórum · Santiago del Estero',
  registrationUrl: '#',
}

export const nav = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Programa',  href: '#programa' },
  { label: 'Oradores',  href: '#oradores' },
  { label: 'Ubicación', href: '#sede' },
]

export const spaces = [
  {
    name: 'Auditorio',
    desc: 'Inspiración, tendencias y casos para pensar el futuro',
    photo: '/img/auditorio-foto.jpg',
  },
  {
    name: 'Conexiones',
    desc: 'Conversaciones, experiencias y vínculos para llevar las ideas a la acción',
    photo: '/img/conexiones-foto.jpg',
  },
  {
    name: 'Patio Santiagueño',
    desc: 'Relajar, conectar y disfrutar juntos',
    photo: '/img/patio.jpg',
  },
]

export const axes = [
  {
    number: '01',
    title: 'Contexto y Visión',
    desc: 'El potencial de la región y el rol de CREA como motor de desarrollo',
  },
  {
    number: '02',
    title: 'Futuro e Inteligencia Artificial',
    desc: 'Tendencias y oportunidades para transformar las empresas',
  },
  {
    number: '03',
    title: 'Liderazgo para la Acción',
    desc: 'Personas y grupos que impulsan el desarrollo de las empresas y la región',
  },
]

export const speakers = [
  { name: 'Sergio "Cachito" Vigil', role: 'Exjugador y entrenador de hockey sobre césped', talkTitle: '', bio: 'Exjugador y entrenador de hockey sobre césped', photo: '/oradores/Sergio.jpg' },
  { name: 'Fernando Preumayr', role: 'Consultor, speaker y profesor en agronegocios', talkTitle: '', bio: 'Consultor, speaker y profesor especializado en desarrollo de personas y equipos en agronegocios', photo: '/oradores/FERNANDO-PREUMAYR-1 (1).jpg' },
  { name: 'Juan Manuel Garzón', role: 'Economista, investigador IERAL de Fundación Mediterránea', talkTitle: '', bio: '', photo: '/oradores/Garzón.jpg' },
  { name: 'Pedro Meriggiola', role: 'Asesor CREA Barranca - Yaco | Región Córdoba Norte (COR)', talkTitle: '', bio: '', photo: '/oradores/PEDRO.webp' },
  { name: 'Ricardo Bindi', role: 'Asesor CREA Barranca - Yaco | Región Córdoba Norte (COR)', talkTitle: '', bio: '', photo: '/oradores/BINDI.webp' },
]

export const schedule = [
  {
    day: 'Día 1',
    date: 'Mié 7/10',
    tracks: [
      {
        name: 'Auditorio',
        items: [
          { time: '08:30 – 09:30', title: 'Acreditaciones' },
          { time: '09:30 – 10:00', title: 'Bienvenida institucional' },
          { time: '10:00 – 11:00', title: 'Panorama político y económico' },
          { time: '11:30 – 12:00', title: 'Desarrollando "Vaca Viva" en el Chaco Argentino' },
          { time: '12:00 – 12:20', title: 'ADN CREA como motor de desarrollo' },
          { time: '12:30 – 14:30', title: 'Almuerzo' },
          { time: '14:30 – 15:00', title: 'Riesgo del maíz y los modelos productivos' },
          { time: '15:00 – 15:30', title: 'Oportunidades y desafíos de la ganadería en la región' },
          { time: '15:30 – 16:00', title: 'El futuro de las empresas en Chaco Santiagueño' },
          { time: '16:00 – 16:30', title: 'Panel de empresarios' },
          { time: '16:45 – 17:30', title: 'Coffee break' },
          { time: '17:30 – 19:30', title: 'Inteligencia Artificial aplicada al agro' },
          { time: '20:00 – 23:00', title: 'Cena y peña CREA' },
        ],
      },
      {
        name: 'Conexiones',
        items: [
          { time: '14:30 – 16:00', title: 'Formación de Asesores', desc: 'Experiencia Asesor' },
          { time: '18:30 – 19:00', title: 'Uso de IA por asesores CREA' },
        ],
      },
    ],
  },
  {
    day: 'Día 2',
    date: 'Jue 8/10',
    tracks: [
      {
        name: 'Auditorio',
        items: [
          { time: '08:00 – 08:30', title: 'Recepción' },
          { time: '09:00 – 09:30', title: 'Liderazgo y autoliderazgo' },
          { time: '09:30 – 10:00', title: 'Gestión de equipos de trabajo' },
          { time: '10:00 – 10:30', title: 'Coffee break' },
          { time: '10:30 – 11:30', title: 'Temas técnicos en auditorio' },
          { time: '12:00 – 13:00', title: 'Cierre inspiracional' },
        ],
      },
      {
        name: 'Conexiones',
        items: [
          { time: '09:00 – 10:00', title: 'Foco técnico' },
          { time: '10:30 – 11:00', title: 'Foco empresarial' },
        ],
      },
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
  estrategicos: [
    { name: 'Advanta', logo: '' }, // pendiente: exportar LOGO ADVANTA.AI como PNG o SVG
  ],
  patrocinantes: [
    { name: 'La Merced', logo: '/sponsors/Patrocinante/LA MERCED - NUEVO.png' },
  ],
  auspiciantes: [
    { name: 'Tekron', logo: '' }, // pendiente: exportar LOGOS TEKRON.pdf como PNG o SVG
  ],
}

export const contact = {
  person: 'Lucrecia Insaurralde',
  role: 'Secretaria Regional',
  email: 'regionchs@crea.org.ar',
  social: {
    instagram: 'https://www.instagram.com/crearegionchs?igsh=MXV5YzhvOGt5cndzOA==',
  },
}
