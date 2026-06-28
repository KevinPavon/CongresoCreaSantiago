import ScrollReveal from './ScrollReveal'
import { axes } from '../data/siteData'

export default function Axes() {
  return (
    <section id="ejes" className="py-24 sm:py-32">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Ejes temáticos</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3 text-ink-900 max-w-2xl">
            Tres ejes para pensar el presente y construir el futuro
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {axes.map((ax, i) => (
            <ScrollReveal key={ax.number} delay={i * 0.12}>
              <div className="group h-full rounded-3xl border border-forest-600/20 hover:border-forest-600 bg-cream hover:bg-forest-600 transition-all duration-500 p-8 flex flex-col gap-6">
                <span className="font-display text-6xl font-bold text-forest-600/30 group-hover:text-cream/30 transition-colors leading-none select-none">
                  {ax.number}
                </span>
                <div>
                  <h3 className="h-display text-2xl text-forest-700 group-hover:text-cream leading-snug transition-colors">{ax.title}</h3>
                  <p className="mt-3 text-ink-700 group-hover:text-cream/80 text-base leading-relaxed transition-colors">{ax.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
