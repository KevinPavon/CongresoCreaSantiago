import { motion } from 'framer-motion'
import { HiLocationMarker } from 'react-icons/hi'
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
  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">

      <div className="container-x relative flex flex-col items-center text-center gap-10">

        {/* Imagen principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <picture>
            <source
              type="image/webp"
              srcSet="/img/hero_chs_mobile.webp 960w, /img/hero_chs.webp 1920w"
              sizes="(max-width: 640px) 100vw, min(100vw, 896px)"
            />
            <img
              src="/img/hero_chs.jpg"
              alt="Congreso CREA Chaco Santiagueño"
              width="1920"
              height="1079"
              fetchPriority="high"
              className="w-full aspect-[16/9] object-cover"
            />
          </picture>
        </motion.div>

        {/* Badge fecha y lugar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-forest-800/70 backdrop-blur-sm text-cream rounded-2xl px-10 py-5 border border-forest-600/40"
        >
          <div className="text-2xl sm:text-3xl font-bold tracking-wide">{event.date}</div>
          <div className="text-base sm:text-lg opacity-80 mt-1">{event.location}</div>
        </motion.div>

        {/* Cuenta regresiva */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-lg"
        >
          <div className="text-sm uppercase tracking-widest text-terracotta-600 font-semibold mb-4">Cuenta regresiva</div>
          <div className="grid grid-cols-4 gap-3 text-center">
            {[
              { l: 'Días', v: c.d },
              { l: 'Hs',   v: c.h },
              { l: 'Min',  v: c.m },
              { l: 'Seg',  v: c.s },
            ].map((x) => (
              <div key={x.l} className="bg-forest-700 text-cream rounded-2xl py-5">
                <div className="font-display text-4xl sm:text-5xl font-bold leading-none">{String(x.v).padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-widest opacity-80 mt-2">{x.l}</div>
              </div>
            ))}
          </div>
        </motion.div>



      </div>
    </section>
  )
}
