import { HiArrowRight } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import { event } from '../data/siteData'

export default function Registration() {
  return (
    <section id="inscripcion" className="py-24 sm:py-32">
      <div className="container-x">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest-700 via-forest-600 to-terracotta-600 text-cream p-10 sm:p-16 shadow-2xl">
            <div className="absolute inset-0 bg-topo opacity-25 mix-blend-overlay" />
            <div className="relative max-w-2xl">
              <p className="eyebrow !text-sand-200">Inscripción</p>
              <h2 className="h-display text-4xl sm:text-6xl mt-3 leading-[1.05]">
                ¡Inscribite <span className="italic">ahora</span>!
              </h2>
              <p className="mt-5 text-lg text-cream/90">
                Asegurá tu lugar en el {event.name}. Serás redirigido al formulario oficial para completar tu registro.
              </p>
              <a href={event.registrationUrl} className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cream text-forest-700 font-semibold hover:bg-sand-100 hover:-translate-y-0.5 transition-all">
                Ir al formulario <HiArrowRight />
              </a>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-sand-300/30 blur-3xl" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
