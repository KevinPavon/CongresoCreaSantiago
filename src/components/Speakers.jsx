import ScrollReveal from './ScrollReveal'
import { speakers } from '../data/siteData'

export default function Speakers() {
  return (
    <section id="oradores" className="py-24 sm:py-32">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Oradores</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Voces que mueven al agro</h2>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="h-full">
              <article className="group rounded-3xl overflow-hidden bg-cream border border-sand-200 hover:border-terracotta-400 hover:shadow-xl transition-all duration-500 shadow-sm h-full flex flex-col">
                {/* Foto */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-sand-200 via-terracotta-300 to-forest-500 overflow-hidden">
                  {s.photo ? (
                    <img src={s.photo} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 grid place-content-center text-cream/60 font-display text-7xl">
                      {s.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink-900/85 via-ink-900/40 to-transparent text-cream">
                    <div className="font-display text-xl leading-tight">{s.name}</div>
                    <div className="text-xs mt-1 text-cream/80">{s.role}</div>
                  </div>
                </div>
                {/* Tema y bio */}
                <div className="p-5 flex-1">
                  {s.talkTitle && (
                    <p className="text-sm font-semibold text-terracotta-600 italic mb-2">{s.talkTitle}</p>
                  )}
                  <p className="text-sm text-ink-700 leading-relaxed">{s.bio}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
