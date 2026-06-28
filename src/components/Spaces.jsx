import ScrollReveal from './ScrollReveal'
import { spaces } from '../data/siteData'

export default function Spaces() {
  return (
    <section id="espacios" className="py-24 sm:py-32">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Espacios</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Espacios para conectarnos</h2>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {spaces.map((sp, i) => (
            <ScrollReveal key={sp.name} delay={i * 0.12} className="h-full">
              <article className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Foto */}
                <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                  <img
                    src={sp.photo}
                    alt={sp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
                  {/* Nombre sobre la foto */}
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <h3 className="font-display text-3xl text-cream">{sp.name}</h3>
                  </div>
                </div>
                {/* Descripción */}
                <div className="bg-cream border border-t-0 border-sand-200 group-hover:border-terracotta-400 p-6 transition-colors duration-500 flex-1">
                  <p className="text-ink-700 text-base leading-relaxed">{sp.desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
