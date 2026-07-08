import ScrollReveal from './ScrollReveal'
import { axes } from '../data/siteData'

export default function Axes() {
  return (
    <section id="ejes" className="py-14 sm:py-20">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Hilos temáticos</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3 text-ink-900 max-w-2xl">
            Para pensar el presente y construir el futuro
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {axes.map((ax, i) => (
            <ScrollReveal key={ax.number} delay={i * 0.12}>
              <div className={`h-full rounded-3xl border-2 bg-white transition-all duration-300 p-8 flex flex-col items-center text-center gap-5 ${
                ax.color === 'green' ? 'border-forest-600' : 'border-terracotta-500'
              }`}>
                {ax.icon && (
                  <img src={ax.icon} alt={ax.title} className="w-16 h-16 object-contain" />
                )}
                <div>
                  <h3 className={`h-display text-2xl leading-snug ${
                    ax.color === 'green' ? 'text-forest-700' : 'text-terracotta-600'
                  }`}>{ax.title}</h3>
                  <p className="mt-3 text-ink-700 text-base leading-relaxed">{ax.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
