import { motion } from 'framer-motion'
import { HiArrowRight, HiLocationMarker } from 'react-icons/hi'
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

        {/* Logo central */}
        <motion.img
          src="/img/LOGOS CHS_horizontal_Crea.png"
          alt="Congreso CREA Chaco Santiagueño"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl object-contain"
        />

        {/* Cuenta regresiva */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-sm"
        >
          <div className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-3">Cuenta regresiva</div>
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { l: 'Días', v: c.d },
              { l: 'Hs',   v: c.h },
              { l: 'Min',  v: c.m },
              { l: 'Seg',  v: c.s },
            ].map((x) => (
              <div key={x.l} className="bg-forest-700 text-cream rounded-xl py-3">
                <div className="font-display text-2xl font-bold leading-none">{String(x.v).padStart(2, '0')}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-80 mt-1">{x.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a href="#inscripcion" className="btn-primary">
            Inscribirme <HiArrowRight />
          </a>
          <a href="#programa" className="btn-ghost">Ver programa</a>
        </motion.div>



      </div>
    </section>
  )
}
