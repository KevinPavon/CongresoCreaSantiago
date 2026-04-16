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

        {/* Right — visual card + countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-terracotta-400 via-sand-300 to-forest-500 shadow-2xl">
            <div className="absolute inset-0 bg-topo opacity-40 mix-blend-multiply" />
            {/* silhouette landscape */}
            <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#fbf7ee" stopOpacity="0.15" />
                  <stop offset="1" stopColor="#1f3c22" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              <rect width="400" height="500" fill="url(#sky)" />
              <circle cx="310" cy="110" r="52" fill="#faf4e6" fillOpacity="0.85" />
              <path d="M0 360 Q60 320 120 340 T260 330 T400 350 L400 500 L0 500 Z" fill="#2d5130" fillOpacity="0.85" />
              <path d="M0 400 Q80 370 160 385 T340 380 T400 395 L400 500 L0 500 Z" fill="#1f3c22" />
              {/* Quebracho */}
              <g transform="translate(70 330)">
                <rect x="-3" y="0" width="6" height="70" fill="#3a2a1f" />
                <circle cx="0" cy="-6" r="22" fill="#3e6b3e" />
                <circle cx="-14" cy="4" r="16" fill="#3e6b3e" />
                <circle cx="14" cy="4" r="16" fill="#3e6b3e" />
              </g>
              <g transform="translate(280 310)">
                <rect x="-3" y="0" width="6" height="85" fill="#3a2a1f" />
                <circle cx="0" cy="-10" r="28" fill="#3e6b3e" />
                <circle cx="-18" cy="0" r="18" fill="#3e6b3e" />
                <circle cx="18" cy="0" r="18" fill="#3e6b3e" />
              </g>
            </svg>

            <div className="absolute bottom-5 left-5 right-5 bg-cream/95 backdrop-blur rounded-2xl p-4 shadow-lg">
              <div className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2">Cuenta regresiva</div>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { l: 'Días', v: c.d },
                  { l: 'Hs', v: c.h },
                  { l: 'Min', v: c.m },
                  { l: 'Seg', v: c.s },
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
