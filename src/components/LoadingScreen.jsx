import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Tiempo minimo en pantalla: si la carga es instantanea, evita que la pantalla
// aparezca y desaparezca de golpe.
const MIN_MS = 500
// Tope de seguridad: si algun recurso tarda o falla, el sitio se muestra igual.
const MAX_MS = 2500
// Debe coincidir con la duracion de la transicion de opacidad de abajo.
const FADE_MS = 500

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [saliendo, setSaliendo] = useState(false)

  useEffect(() => {
    const inicio = performance.now()
    // Guard local a cada corrida del efecto, no un ref: con StrictMode el componente
    // se monta, se desmonta y se vuelve a montar, y un ref compartido haria que el
    // segundo montaje saliera sin programar el cierre.
    let listo = false
    let raf, tope, cierre, fin

    // Avanza suave hasta 90%; el 100% lo marca la carga real de la pagina.
    const avanzar = () => {
      setProgress((p) => (p < 90 ? p + (90 - p) * 0.05 : p))
      raf = requestAnimationFrame(avanzar)
    }
    raf = requestAnimationFrame(avanzar)

    const terminar = () => {
      if (listo) return
      listo = true
      cancelAnimationFrame(raf)
      setProgress(100)
      const restante = Math.max(0, MIN_MS - (performance.now() - inicio))
      cierre = setTimeout(() => {
        setSaliendo(true)
        fin = setTimeout(onComplete, FADE_MS)
      }, restante + 300)
    }

    if (document.readyState === 'complete') terminar()
    else window.addEventListener('load', terminar)
    tope = setTimeout(terminar, MAX_MS)

    return () => {
      listo = true
      cancelAnimationFrame(raf)
      clearTimeout(tope)
      clearTimeout(cierre)
      clearTimeout(fin)
      window.removeEventListener('load', terminar)
    }
  }, [onComplete])

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
