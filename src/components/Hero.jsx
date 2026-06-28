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
      <div className="container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
        {/* Left — text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            Congreso · Edición inaugural
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-display text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] text-ink-900"
          >
            Congreso <span className="italic text-terracotta-600">CREA</span>
            <br />
            <span className="text-forest-700">Chaco Santiagueño</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-ink-700 max-w-xl"
          >
            {event.tagline}. Dos jornadas para pensar juntos el futuro del agro en el corazón de la región.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#inscripcion" className="btn-primary">
              Inscribirme <HiArrowRight />
            </a>
            <a href="#programa" className="btn-ghost">Ver programa</a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-700">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500" />
              {event.date}
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-forest-600" />
              {event.location}
            </div>
          </div>
        </div>

        {/* Right — logo + countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden bg-cream shadow-2xl p-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <img
              src="/img/LOGOS CHS_horizontal_Crea.png"
              alt="Congreso CREA Chaco Santiagueño"
              className="w-full max-w-sm object-contain"
            />

            {/* Countdown */}
            <div className="w-full bg-cream/95 backdrop-blur rounded-2xl p-4 shadow-lg">
              <div className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2">Cuenta regresiva</div>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { l: 'Días', v: c.d },
                  { l: 'Hs',   v: c.h },
                  { l: 'Min',  v: c.m },
                  { l: 'Seg',  v: c.s },
                ].map((x) => (
                  <div key={x.l} className="bg-forest-700 text-cream rounded-xl py-2">
                    <div className="font-display text-2xl font-bold leading-none">{String(x.v).padStart(2, '0')}</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-80 mt-1">{x.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-sand-300/70 blur-2xl animate-float" />
          <div className="absolute -bottom-10 -left-8 w-36 h-36 rounded-full bg-terracotta-400/50 blur-3xl animate-float" />
        </motion.div>
      </div>
    </section>
  )
}
