import ScrollReveal from './ScrollReveal'
import { sponsors } from '../data/siteData'

const tiers = [
  { key: 'estrategicos',   label: 'Aliado Estratégico', cardH: 'h-28 sm:h-32' },
  { key: 'patrocinantes',  label: 'Patrocinante',        cardH: 'h-24 sm:h-28' },
  { key: 'auspiciantes',   label: 'Auspiciante',         cardH: 'h-20 sm:h-24' },
  { key: 'institucionales', label: 'Institucional',      cardH: 'h-24 sm:h-28' },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-14 sm:py-20 bg-white">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Nos acompañan</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Quienes hacen posible este encuentro</h2>
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
                          className={`${t.cardH} min-w-[160px] max-w-[240px] flex-1 rounded-2xl bg-white border border-sand-200 hover:border-terracotta-400 transition-all duration-300 overflow-hidden`}
                        >
                          <div className="w-full h-full flex items-center justify-center p-4">
                            <img src={s.logo} alt={s.name} className={`w-full h-full object-contain ${s.imgClass ?? ''}`} />
                          </div>
                        </div>
                      ) : (
                        <div
                          key={i}
                          className={`${t.cardH} min-w-[160px] max-w-[240px] flex-1 rounded-2xl bg-white border border-dashed border-sand-300 grid place-content-center p-5`}
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
