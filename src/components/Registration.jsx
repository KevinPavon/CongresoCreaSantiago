import { HiArrowRight } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import { event } from '../data/siteData'

export default function Registration() {
  return (
    <section id="inscripcion" className="py-14 sm:py-20">
      <div className="container-x">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest-700 via-forest-600 to-terracotta-600 text-cream p-10 sm:p-16 shadow-2xl">
            <div className="absolute inset-0 bg-topo opacity-25 mix-blend-overlay" />

            {/* Imagen de evento con filtro verde */}
            <div className="absolute inset-0">
              <picture className="block w-full h-full">
                <source
                  type="image/webp"
                  srcSet="/img/inscripcion_chs_mobile.webp 960w, /img/inscripcion_chs.webp 1920w"
                  sizes="(max-width: 640px) 100vw, min(100vw, 1152px)"
                />
                {/* object-position corrido hacia arriba para no cortar las cabezas */}
                <img
                  src="/img/inscripcion_chs.jpg"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_10%]"
                />
              </picture>
              <div className="absolute inset-0 bg-forest-700/75 mix-blend-multiply" />
            </div>

            <div className="relative max-w-2xl">
              <p className="eyebrow !text-sand-200">Inscripción</p>
              <h2 className="h-display text-4xl sm:text-6xl mt-3 leading-[1.05]">
                ¡Inscribite ahora!
              </h2>
              <p className="mt-5 text-lg text-cream/90">
                Completá el formulario y asegurá tu lugar.
              </p>
              <a href={event.registrationUrl} className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-terracotta-500 text-cream font-semibold shadow-lg hover:bg-terracotta-400 hover:-translate-y-0.5 transition-all">
                Quiero mi entrada <HiArrowRight />
              </a>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-sand-300/30 blur-3xl" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
