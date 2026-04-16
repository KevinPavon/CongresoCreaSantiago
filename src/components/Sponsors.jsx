import ScrollReveal from './ScrollReveal'
import { sponsors } from '../data/siteData'

const tiers = [
  { key: 'estrategicos', label: 'Aliados estratégicos', size: 'h-20 sm:h-24' },
  { key: 'patrocinantes', label: 'Patrocinantes', size: 'h-16 sm:h-20' },
  { key: 'auspiciantes', label: 'Auspiciantes', size: 'h-14 sm:h-16' },
]

function Placeholder({ size }) {
  return (
    <div className={`${size} min-w-[140px] rounded-2xl bg-cream border border-dashed border-sand-300 grid place-content-center text-sand-500 text-xs tracking-widest uppercase`}>
      Logo
    </div>
  )
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 sm:py-32">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Sponsors y alianzas</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Quienes hacen posible el congreso</h2>
        </ScrollReveal>

        <div className="mt-12 space-y-12">
          {tiers.map((t) => {
            const list = sponsors[t.key] || []
            return (
              <div key={t.key}>
                <h3 className="font-display text-xl text-forest-700 mb-4">{t.label}</h3>
                <div className="flex flex-wrap gap-4">
                  {list.length === 0
                    ? Array.from({ length: 3 }).map((_, i) => <Placeholder key={i} size={t.size} />)
                    : list.map((s, i) => (
                        <div key={i} className={`${t.size} min-w-[140px] rounded-2xl bg-cream border border-sand-200 grid place-content-center p-4`}>
                          {s.logo ? <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" /> : s.name}
                        </div>
                      ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
