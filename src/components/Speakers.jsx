import { useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import { speakers } from '../data/siteData'

export default function Speakers() {
  const ref = useRef(null)
  const scroll = (dir) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }
  return (
    <section id="oradores" className="py-24 sm:py-32 bg-gradient-to-b from-transparent via-sand-100/60 to-transparent">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <ScrollReveal>
            <p className="eyebrow">Oradores</p>
            <h2 className="h-display text-4xl sm:text-5xl mt-3">Voces que mueven al agro</h2>
          </ScrollReveal>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} className="w-11 h-11 rounded-full border border-forest-600/30 hover:bg-forest-600 hover:text-cream transition grid place-content-center"><HiChevronLeft /></button>
            <button onClick={() => scroll(1)} className="w-11 h-11 rounded-full border border-forest-600/30 hover:bg-forest-600 hover:text-cream transition grid place-content-center"><HiChevronRight /></button>
          </div>
        </div>

        <div ref={ref} className="mt-10 flex gap-5 overflow-x-auto scroll-x snap-x snap-mandatory pb-4 -mx-5 px-5">
          {speakers.map((s, i) => (
            <article
              key={i}
              className="group snap-start shrink-0 w-[280px] sm:w-[320px] rounded-3xl overflow-hidden bg-cream border border-sand-200 hover:border-terracotta-400 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] bg-gradient-to-br from-sand-200 via-terracotta-300 to-forest-500 overflow-hidden">
                {s.photo ? (
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 grid place-content-center text-cream/70 font-display text-6xl">
                    {s.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink-900/80 to-transparent text-cream">
                  <div className="font-display text-xl leading-tight">{s.name}</div>
                  <div className="text-xs opacity-90">{s.role}</div>
                </div>
              </div>
              <div className="p-5 text-sm text-ink-700 min-h-[84px]">{s.bio}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
