import ScrollReveal from './ScrollReveal'
import { sponsors } from '../data/siteData'

const tiers = [
  { key: 'estrategicos',  label: 'Aliado Estratégico', cardH: 'h-28 sm:h-32' },
  { key: 'patrocinantes', label: 'Patrocinante',        cardH: 'h-20 sm:h-24' },
  { key: 'auspiciantes',  label: 'Auspiciante',         cardH: 'h-16 sm:h-20' },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 sm:py-32">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Sponsors y alianzas</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Quienes hacen posible el congreso</h2>
        </ScrollReveal>

        <div className="mt-14 space-y-14">
          {tiers.map((t) => {
            const list = sponsors[t.key] || []
            if (list.length === 0) return null
            return (
              <ScrollReveal key={t.key}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-px flex-1 bg-sand-200" />
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-ink-700/60">{t.label}</h3>
                    <span className="h-px flex-1 bg-sand-200" />
                  </div>
                  <div className="flex flex-wrap justify-center gap-5">
                    {list.map((s, i) =>
                      s.logo ? (
                        <div
                          key={i}
                          className={`${t.cardH} min-w-[160px] max-w-[240px] flex-1 rounded-2xl bg-cream border border-sand-200 hover:border-terracotta-400 hover:shadow-md transition-all duration-300 grid place-content-center p-5`}
                        >
                          <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" />
                        </div>
                      ) : (
                        <div
                          key={i}
                          className={`${t.cardH} min-w-[160px] max-w-[240px] flex-1 rounded-2xl bg-cream border border-dashed border-sand-300 grid place-content-center p-5`}
                        >
                          <span className="text-sm text-ink-700/50 font-medium">{s.name}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
