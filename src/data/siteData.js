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
  registrationUrl: 'https://redcrea.org.ar/inscripciones/inscripcion_formulario/formularios/?evento_id=101',
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
    name: 'Mesas de Conexiones',
    desc: 'Conversaciones y vínculos para llevar ideas a la acción, en temáticas técnicas y empresariales',
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
  { name: 'Sergio "Cachito" Vigil', role: 'Exjugador y entrenador de hockey sobre césped', bio: 'Exjugador y entrenador de hockey sobre césped', photo: '/oradores/Sergio.jpg' },
  { name: 'Fernando Preumayr', role: 'Consultor, speaker y profesor en agronegocios', bio: 'Consultor, speaker y profesor especializado en desarrollo de personas y equipos en agronegocios', photo: '/oradores/FERNANDO-PREUMAYR-1 (1).jpg' },
  { name: 'Juan Manuel Garzón', role: 'Economista, investigador IERAL de Fundación Mediterránea', bio: '', photo: '/oradores/Garzón.jpg' },
  { name: 'Pedro Meriggiola', role: 'Asesor CREA Barranca - Yaco | Región Córdoba Norte (COR)', bio: '', photo: '/oradores/PEDRO.webp' },
  { name: 'Ricardo Bindi', role: 'Presidente y director de Contenidos de Agrositio S.A. Conductor del evento', bio: '', photo: '/oradores/Ricardo Bindi.jfif' },
  { name: 'Joan Cwaik', role: 'Autor, profesor en Universidad de San Andrés y Head of Marketing LATAM en Maytronics', bio: 'Autor de cinco libros sobre tecnología y sociedad. Profesor en la Universidad de San Andrés y Head of Marketing LATAM en Maytronics. Columnista en Diario Perfil.', photo: '/oradores/Joan_298-2_baja.jpeg' },
  { name: 'Santiago Bulat', role: 'Economista y consultor. Referente en análisis macroeconómico y divulgación financiera', bio: '', photo: '/oradores/Santiago Bulat.jpg' },
  { name: 'Francisco Iguerabide', role: 'Miembro del CREA Melo - Serrano (Región Centro). Expresidente de CREA', bio: '', photo: '/oradores/Francisco I..jpg' },
  { name: 'Fernando de Nevares', role: 'Miembro de los CREA Bragado (Región Norte de Buenos Aires) y Nómade (Grupo Sin Fronteras). Presidente de CREA', bio: 'Miembro de los CREA Bragado (Región Norte de Buenos Aires) y Nómade (Grupo Sin Fronteras). Presidente de CREA.', photo: '/oradores/Fernando de Nevares.png' },
  { name: 'Nicolás Neiff', role: 'Docente e investigador en ecofisiología de cultivos. Responsable de la Mesa Agrícola Región CREA Chaco Santiagueño', bio: 'Docente e investigador en ecofisiología de cultivos en la FCA-UNN. Responsable de la Mesa Agrícola de la Región CREA Chaco Santiagueño.', photo: '/oradores/Nicolas_Neiff.jpg' },
  { name: 'Federico Vartorelli', role: 'Director global de Inteligencia en Mejoramiento Genético de Bayer', bio: '', photo: '/oradores/Federico Vartorelli.jfif' },
  { name: 'Juan Marcos Olivero Vila', role: 'Consultor en estrategia, organización y proyectos de inversión. Técnico de CREA', bio: 'Consultor en estrategia, organización, planeamiento y evaluación de proyectos de inversión. Técnico de CREA.', photo: '/oradores/olivero_vila.jpg' },
]

export const schedule = [
  {
    day: 'DÍA 1',
    date: 'MIÉ 7/10',
    items: [
      { time: '08:30 h', title: 'Acreditaciones', type: 'auditorio' },
      { time: '09:30 h', title: 'Bienvenida institucional', desc: 'Apertura del evento y presentación de la jornada, por Ricardo Bindi.', type: 'auditorio' },
      { time: '10:00 h', title: 'Panorama político y económico', desc: 'Una mirada estratégica sobre el rumbo económico, las tendencias de mercado y las oportunidades para el sector, por Santiago Bulat.', type: 'auditorio' },
      { time: '11:30 h', title: 'Desarrollando "Vaca Viva" en el Chaco Argentino', desc: 'Una experiencia productiva con foco en el desarrollo regional, por Juan Manuel Garzón.', type: 'auditorio' },
      { time: '12:00 h', title: 'ADN CREA como motor de desarrollo', desc: 'La visión CREA como impulso al crecimiento y la transformación, por Francisco Iguerabide y Fernando de Nevares.', type: 'auditorio' },
      { time: '12:30 h', title: 'Almuerzo', type: 'patio' },
      { time: '14:30 h', title: 'Riesgo del maíz y los modelos productivos', desc: 'Estrategias para gestionar la incertidumbre en la producción, por Nicolás Neiff y Federico Vartorelli.', type: 'auditorio' },
      { time: '14:30 h', title: 'Encuentro con Asesores CREA', desc: 'Para profesionales y estudiantes del sector agro que quieran conocer el rol del Asesor CREA, su metodología y ser parte de una red con oportunidades de crecimiento.', type: 'conexiones' },
      { time: '15:00 h', title: 'Oportunidades y desafíos de la ganadería en la región', desc: 'Claves para entender el presente y las perspectivas de la actividad, orador a confirmar.', type: 'auditorio' },
      { time: '15:30 h', title: 'El futuro de las empresas en Chaco Santiagueño', desc: 'Escenarios y decisiones que marcarán el rumbo, orador a confirmar.', type: 'auditorio' },
      { time: '16:00 h', title: 'Panel de empresarios', desc: 'Experiencias, aprendizajes y desafíos en la gestión, oradores a confirmar.', type: 'auditorio' },
      { time: '16:45 h', title: 'Coffee break', type: 'patio' },
      { time: '17:30 h', title: 'El futuro con la inteligencia artificial', desc: 'El impacto de la IA en la toma de decisiones y el futuro del agro, por Joan Cwaik.', type: 'auditorio' },
      { time: '18:15 h', title: 'Uso de inteligencia artificial en el agro', desc: 'Aplicaciones concretas de inteligencia artificial en la producción y gestión, por Pedro Meriggiola.', type: 'auditorio' },
      { time: '20:00 h', title: 'Cena y peña CREA', type: 'patio' },
    ],
  },
  {
    day: 'DÍA 2',
    date: 'JUE 8/10',
    items: [
      { time: '08:00 h', title: 'Recepción', type: 'auditorio' },
      { time: '08:45 h', title: 'Mesas con foco técnico', desc: 'Intercambio sobre producción, tecnología y manejo para mejorar resultados en el campo.', type: 'conexiones' },
      { time: '09:00 h', title: 'Liderazgo y autoliderazgo', desc: 'Claves para liderar y liderarse en contextos desafiantes, por Juan Marcos Olivero Vila.', type: 'auditorio' },
      { time: '09:30 h', title: 'Gestión de equipos de trabajo', desc: 'Herramientas para potenciar equipos y mejorar resultados, por Fernando Preumayr.', type: 'auditorio' },
      { time: '10:00 h', title: 'Coffee break', type: 'patio' },
      { time: '10:30 h', title: 'Charla a confirmar', type: 'auditorio' },
      { time: '10:30 h', title: 'Mesas de Conexiones con foco empresarial', desc: 'Intercambio sobre estrategia, gestión y modelos de negocio para potenciar la empresa.', type: 'conexiones' },
      { time: '11:00 h', title: 'Charla a confirmar', type: 'auditorio' },
      { time: '11:30 h', title: 'Cierre institucional', desc: 'Cierre CREA, por Fernando de Nevares.', type: 'auditorio' },
      { time: '12:00 h', title: 'Cierre inspiracional', desc: 'Una mirada desde el alto rendimiento sobre liderazgo, equipo y superación, por Sergio "Cachito" Vigil.', type: 'auditorio' },
      { time: '13:30 h', title: 'Almuerzo', type: 'patio' },
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
    { name: 'Hilton Garden Inn', address: 'Leandro N. Alem 148', phone: '0385 428-3100', url: 'https://www.hilton.com/es/hotels/sdegigi-hilton-garden-inn-santiago-del-estero/' },
    { name: 'Hotel Altos del Estero', address: 'Salta 40', url: 'https://www.hotelaltosdelestero.com/', rateUrl: 'https://drive.google.com/file/d/1_v9FK3mVCNt9aoGA0Xj75u7K10o8cYHq/view?usp=sharing' },
    { name: 'Hotel NH', address: 'Independencia 110', phone: '0385 424-0303', url: 'https://www.nh-hotels.com/es/hotel/nh-santiago-del-estero' },
    { name: 'Abba Bristol Hotel', address: 'Av. Moreno Sur 677', url: 'https://www.instagram.com/abbabristolhotel/?hl=es', rateUrl: 'https://drive.google.com/file/d/1FBb8s8Amq13s_53LsSum19VM0p5MGusk/view?usp=sharing' },
  ],
}

export const sponsors = {
  estrategicos: [
    { name: 'Advanta',  logo: '/sponsors/Estrategico/ADV_logotype_CMYK_positivo.jpg', imgClass: 'scale-[1.7]' },
    { name: 'COFCO',    logo: '/sponsors/Estrategico/CofcoIntl_primary_cmyk (1) (1).png' },
  ],
  patrocinantes: [
    { name: 'AGD',        logo: '/sponsors/Patrocinante/Logo AGD.jpg',                                                imgClass: 'scale-[1.6]' },
    { name: 'Experta',    logo: '/sponsors/Patrocinante/Experta APP _ Isologotipo Color.png',                        imgClass: 'scale-[1.0]' },
    { name: 'Las Marías', logo: '/sponsors/Patrocinante/LA MERCED - NUEVO.png',                                     imgClass: 'scale-[1.4]' },
    { name: 'Nidera',     logo: '/sponsors/Patrocinante/nidera.png' },
    { name: 'Terratio',   logo: '/sponsors/Patrocinante/Terratio Logo horizontal verde fondo blanco 400x400.png',   imgClass: 'scale-[2.1]' },
    { name: 'UPL',        logo: '/sponsors/Patrocinante/UPL.png' },
  ],
  auspiciantes: [
    { name: 'Agross',   logo: '/sponsors/Auspiciante/Agross.jpg',                    imgClass: 'scale-[2.0]' },
    { name: 'Alltec',   logo: '/sponsors/Auspiciante/JPG_LogoRGB_ALLTEC.jpg',        imgClass: 'scale-[2.0]' },
    { name: 'Bayer',    logo: '/sponsors/Auspiciante/bayer_new-02.jpg',              imgClass: 'scale-[1.5]' },
    { name: 'Brevant',  logo: '/sponsors/Auspiciante/Brevant_HorBlk_Semillas_R.png' },
    { name: 'Chelala',  logo: '/sponsors/Auspiciante/chelala.png' },
    { name: 'Pampero',  logo: '/sponsors/Auspiciante/pampero.png',                   imgClass: 'scale-[2.0]' },
    { name: 'Tekron',   logo: '/sponsors/Auspiciante/tekron_argentina_logo.jpeg',   imgClass: 'scale-[1.5]' },
  ],
  institucionales: [
    { name: 'Cámara Argentina de Economías Regionales', logo: '/sponsors/Institucional/camara-economias-regionales.png' },
    { name: 'Ministerio de Producción',                 logo: '/sponsors/Institucional/ministerio-produccion.png' },
    { name: 'Santiago del Estero',                      logo: '/sponsors/Institucional/santiago-del-estero.png' },
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
