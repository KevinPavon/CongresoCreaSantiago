import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { nav, event } from '../data/siteData'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/85 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(28,19,13,0.25)]' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <a href="#inicio" className="flex items-center group">
          <img
            src="/img/LOGOS CHS_horizontal.png"
            alt="Congreso CREA Chaco Santiagueño"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          <nav className="flex items-center gap-7">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-ink-700 hover:text-terracotta-600 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#inscripcion" className="btn-primary text-sm !py-2">
            Inscripciones
          </a>
        </div>

        <button className="lg:hidden text-ink-900 text-2xl" onClick={() => setOpen((v) => !v)} aria-label="Menú">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-sand-200">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-ink-700 hover:text-terracotta-600">
                {n.label}
              </a>
            ))}
            <a href="#inscripcion" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">Inscripciones</a>
          </div>
        </div>
      )}
    </header>
  )
}
