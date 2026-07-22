import { useCallback, useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import Axes from './components/Axes'
import Spaces from './components/Spaces'
import Speakers from './components/Speakers'
import Schedule from './components/Schedule'
import Venue from './components/Venue'
import Registration from './components/Registration'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const handleComplete = useCallback(() => setLoading(false), [])

  // Mientras esta la pantalla de carga no se puede scrollear el sitio de atras.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [loading])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* La pantalla de carga maneja su propio fundido de salida y recien
          entonces avisa para desmontarse. */}
      {loading && <LoadingScreen onComplete={handleComplete} />}

      {/* El sitio se monta desde el principio, por detras de la pantalla de carga,
          para que las imagenes se descarguen en paralelo y no despues. */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-topo opacity-60" aria-hidden />
      <Header />
      <main>
        <Hero />
        <Registration />
        <Axes />
        <Spaces />
        <Speakers />
        <Schedule />
        <Venue />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}
