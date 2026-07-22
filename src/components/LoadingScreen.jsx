import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Periodo de gracia: si la pagina termina de cargar antes de esto, la pantalla
// no llega a mostrarse nunca y se pasa directo al sitio. Cuando la carga se
// vuelva mas pesada (por ejemplo al sumar los logos de sponsors), aparece sola.
const DELAY_MS = 500
// Una vez que se mostro, se mantiene este minimo para que no sea un parpadeo.
const MIN_VISIBLE_MS = 500
// Tope de seguridad: si algun recurso tarda o falla, el sitio se muestra igual.
const MAX_MS = 2500
// Debe coincidir con la duracion de la transicion de opacidad de abajo.
const FADE_MS = 500

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [saliendo, setSaliendo] = useState(false)

  useEffect(() => {
    // Guard local a cada corrida del efecto, no un ref: con StrictMode el componente
    // se monta, se desmonta y se vuelve a montar, y un ref compartido haria que el
    // segundo montaje saliera sin programar el cierre.
    let listo = false
    let mostradaEn = null
    let raf, espera, tope, cierre, fin

    // A los DELAY_MS, si todavia no termino de cargar, recien ahi se muestra.
    espera = setTimeout(() => {
      if (listo) return
      mostradaEn = performance.now()
      setVisible(true)
      const avanzar = () => {
        setProgress((p) => (p < 90 ? p + (90 - p) * 0.05 : p))
        raf = requestAnimationFrame(avanzar)
      }
      raf = requestAnimationFrame(avanzar)
    }, DELAY_MS)

    const terminar = () => {
      if (listo) return
      listo = true
      clearTimeout(espera)
      if (raf) cancelAnimationFrame(raf)

      // Nunca se llego a mostrar: se pasa al sitio sin transicion.
      if (mostradaEn === null) {
        onComplete()
        return
      }

      setProgress(100)
      const restante = Math.max(0, MIN_VISIBLE_MS - (performance.now() - mostradaEn))
      cierre = setTimeout(() => {
        setSaliendo(true)
        fin = setTimeout(onComplete, FADE_MS)
      }, restante + 200)
    }

    if (document.readyState === 'complete') terminar()
    else window.addEventListener('load', terminar)
    tope = setTimeout(terminar, MAX_MS)

    return () => {
      listo = true
      if (raf) cancelAnimationFrame(raf)
      clearTimeout(espera)
      clearTimeout(tope)
      clearTimeout(cierre)
      clearTimeout(fin)
      window.removeEventListener('load', terminar)
    }
  }, [onComplete])

  // El scroll se bloquea solo si la pantalla llego a mostrarse.
  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center px-6 transition-opacity duration-500 ${
        saliendo ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ondas concentricas de fondo */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-forest-500/15"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1, 1.5] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
      </div>

      {/* Logo del congreso */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <img
          src="/img/LOGOS CHS_horizontal_Crea.png"
          alt="Congreso CREA Chaco Santiagueño"
          className="w-full h-auto drop-shadow-xl"
        />
      </motion.div>

      {/* Barra de progreso */}
      <motion.div
        className="relative z-10 mt-12 w-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="h-0.5 bg-forest-600/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-forest-400 to-terracotta-500 rounded-full transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-ink-700/50 text-xs mt-3 text-center tabular-nums">
          {Math.round(progress)}%
        </p>
      </motion.div>
    </div>
  )
}
