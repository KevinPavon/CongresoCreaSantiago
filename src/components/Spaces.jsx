import ScrollReveal from './ScrollReveal'
import { spaces } from '../data/siteData'

export default function Spaces() {
  return (
    <section id="espacios" className="relative py-14 sm:py-20 bg-white">
      <img src="/img/Trama (1).svg" alt="" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-[0.07]" aria-hidden />
      <div className="container-x relative">
        <ScrollReveal>
          <p className="eyebrow text-terracotta-500">EXPERIENCIAS</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Espacios para conectarnos</h2>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {spaces.map((sp, i) => {
            const base = sp.photo.replace(/\.jpg$/, '')
            return (
            <ScrollReveal key={sp.name} delay={i * 0.12} className="h-full">
              <article className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Foto */}
                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                  <picture className="block w-full h-full">
                    <source
                      type="image/webp"
                      srcSet={`${base}-sm.webp 400w, ${base}.webp 800w`}
                      sizes="(max-width: 640px) 100vw, 380px"
                    />
                    <img
                      src={sp.photo}
                      alt={sp.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
                  {/* Nombre sobre la foto */}
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <h3 className="font-display text-3xl text-cream">{sp.name}</h3>
                  </div>
                </div>
                {/* Descripción — misma alternancia de color que las tarjetas de oradores:
                    Auditorio y Patio Santiagueño en verde, Conexiones en naranja. */}
                <div className={`p-6 flex-1 text-cream ${i % 2 === 0 ? 'bg-forest-700' : 'bg-terracotta-600'}`}>
                  <p className="text-base leading-relaxed text-cream/90">{sp.desc}</p>
                </div>
              </article>
            </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
