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
  // Se muestra en dos lineas en el hero, cortando por la coma (formato del flyer).
  location: 'Centro de Convenciones Fórum, Santiago del Estero',
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
    title: 'Contexto y visión',
    desc: 'El potencial de la región y el rol de CREA como motor de desarrollo',
    icon: '/img/CONTEXTO Y VISION.png',
    color: 'green',
  },
  {
    number: '02',
    title: 'Futuro e inteligencia artificial',
    desc: 'Tendencias y oportunidades para transformar las empresas',
    icon: '/img/FUTURO.png',
    color: 'orange',
  },
  {
    number: '03',
    title: 'Liderazgo para la acción',
    desc: 'Personas y grupos que impulsan el desarrollo de las empresas y la región',
    icon: '/img/LIDERAZGO.png',
    color: 'green',
  },
]

export const speakers = [
  { name: 'Sergio "Cachito" Vigil', role: 'Exjugador y entrenador de hockey sobre césped', talkTitle: '', bio: 'Exjugador y entrenador de hockey sobre césped', photo: '/oradores/Sergio.jpg' },
  { name: 'Fernando Preumayr', role: 'Consultor, speaker y profesor en agronegocios', talkTitle: '', bio: 'Consultor, speaker y profesor especializado en desarrollo de personas y equipos en agronegocios', photo: '/oradores/FERNANDO-PREUMAYR-1 (1).jpg' },
  { name: 'Juan Manuel Garzón', role: 'Economista, investigador IERAL de Fundación Mediterránea', talkTitle: '', bio: '', photo: '/oradores/Garzón.jpg' },
  { name: 'Pedro Meriggiola', role: 'Asesor CREA Barranca - Yaco | Región Córdoba Norte (COR)', talkTitle: '', bio: '', photo: '/oradores/PEDRO.webp' },
  // photo pendiente: falta el recurso de Ricardo Bindi. Con photo vacio se muestran las iniciales sobre el degradado.
  { name: 'Ricardo Bindi', role: 'Presidente y director de contenidos de Agrositio S.A. Conductor del evento', bio: '', photo: '' },
]

export const schedule = [
  {
    day: 'Día 1',
    date: 'Mié 7/10',
    tracks: [
      {
        name: 'Auditorio',
        items: [
          { time: '08:30 a 09:30 h', title: 'Acreditaciones' },
          { time: '09:30 a 10:00 h', title: 'Bienvenida institucional' },
          { time: '10:00 a 11:00 h', title: 'Panorama político y económico' },
          { time: '11:30 a 12:00 h', title: 'Desarrollando "Vaca Viva" en el Chaco Argentino' },
          { time: '12:00 a 12:20 h', title: 'ADN CREA como motor de desarrollo' },
          { time: '12:30 a 14:30 h', title: 'Almuerzo' },
          { time: '14:30 a 15:00 h', title: 'Riesgo del maíz y los modelos productivos' },
          { time: '15:00 a 15:30 h', title: 'Oportunidades y desafíos de la ganadería en la región' },
          { time: '15:30 a 16:00 h', title: 'El futuro de las empresas en Chaco Santiagueño' },
          { time: '16:00 a 16:30 h', title: 'Panel de empresarios' },
          { time: '16:45 a 17:30 h', title: 'Coffee break' },
          { time: '17:30 a 19:30 h', title: 'Inteligencia Artificial aplicada al agro' },
          { time: '20:00 a 23:00 h', title: 'Cena y peña CREA' },
        ],
      },
      {
        name: 'Conexiones',
        items: [
          { time: '14:30 a 16:30 h', title: 'Encuentro con Asesores CREA', desc: 'Para profesionales y estudiantes del sector agro que quieran conocer el rol del Asesor CREA, su metodología y ser parte de una red con oportunidades de crecimiento.' },
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
          { time: '08:00 a 08:30 h', title: 'Recepción' },
          { time: '09:00 a 09:30 h', title: 'Liderazgo y autoliderazgo' },
          { time: '09:30 a 10:00 h', title: 'Gestión de equipos de trabajo' },
          { time: '10:00 a 10:30 h', title: 'Coffee break' },
          { time: '10:30 a 11:30 h', title: 'Temas técnicos en auditorio' },
          { time: '12:00 a 13:00 h', title: 'Cierre inspiracional' },
        ],
      },
      {
        name: 'Conexiones',
        items: [
          { time: '14:30 a 16:30 h', title: 'Encuentro con Asesores CREA', desc: 'Para profesionales y estudiantes del sector agro que quieran conocer el rol del Asesor CREA, su metodología y ser parte de una red con oportunidades de crecimiento.' },
        ],
      },
    ],
  },
]

export const venue = {
  name: 'Centro de Convenciones Fórum',
  address: 'Perú 511, Provincia de Santiago del Estero',
  mapUrl: 'https://maps.app.goo.gl/vvGWjrRTTrQqkswm9',
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
