import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { event } from '../data/siteData'

function useCountdown(target) {
  const [t, setT] = useState(() => diff(target))
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])
  return t
}
function diff(target) {
  const ms = Math.max(0, new Date(target) - new Date())
  const d = Math.floor(ms / 86400000)
  const h = Math.floor((ms / 3600000) % 24)
  const m = Math.floor((ms / 60000) % 60)
  const s = Math.floor((ms / 1000) % 60)
  return { d, h, m, s }
}

export default function Hero() {
  const c = useCountdown(event.dateISO)
  const [sede, ciudad] = event.location.split(', ')

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Foto al corte, ocupa todo el ancho */}
      <div className="absolute inset-0">
        <picture className="block w-full h-full">
          <source
            type="image/webp"
            srcSet="/img/hero_chs_mobile.webp 960w, /img/hero_chs.webp 1920w"
            sizes="100vw"
          />
          <img
            src="/img/hero_chs.jpg"
            alt="Congreso CREA Chaco Santiagueño"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* Tinte verde de marca, en la linea del tratamiento de la seccion de inscripcion
            pero mas suave, para que la foto conserve presencia. */}
        <div className="absolute inset-0 bg-forest-700/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-800/55 via-transparent to-forest-800/25" />
      </div>

      {/* Contenido sobre la imagen */}
      <div className="relative container-x flex flex-col items-center text-center gap-8 sm:gap-10 pt-32 sm:pt-44 pb-16 sm:pb-20">
        {/* Fecha y lugar, respetando el formato del flyer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-cream rounded-2xl border-2 border-forest-400 shadow-xl px-8 py-5 sm:px-14 sm:py-7"
        >
          <div className="font-display text-2xl sm:text-4xl font-bold text-forest-600 tracking-wide">
            {event.date}
          </div>
          <div className="h-0.5 bg-terracotta-500 my-3 sm:my-4" />
          <div className="text-base sm:text-xl text-ink-900 leading-snug">
            {sede},<br />
            {ciudad}
          </div>
        </motion.div>

        {/* Cuenta regresiva */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-lg"
        >
          <div className="text-sm uppercase tracking-widest text-cream font-semibold mb-4 drop-shadow">
            Cuenta regresiva
          </div>
          <div className="grid grid-cols-4 gap-3 text-center">
            {[
              { l: 'Días', v: c.d },
              { l: 'Hs',   v: c.h },
              { l: 'Min',  v: c.m },
              { l: 'Seg',  v: c.s },
            ].map((x) => (
              <div key={x.l} className="bg-cream/95 backdrop-blur-sm text-forest-700 rounded-2xl py-4 sm:py-5 shadow-lg">
                <div className="font-display text-3xl sm:text-5xl font-bold leading-none">
                  {String(x.v).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-forest-600/80 mt-2">{x.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Degrade inferior para empalmar con el fondo de la pagina */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  )
}
