import { useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import { speakers } from '../data/siteData'

export default function Speakers() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    // El paso se mide sobre la tarjeta real: en mobile ocupa todo el ancho y en
    // desktop 288px, asi que un salto fijo no sirve para los dos casos.
    const card = el.firstElementChild
    const gap = parseFloat(getComputedStyle(el).columnGap) || 24
    const stepSize = card ? card.getBoundingClientRect().width + gap : 320
    const start = el.scrollLeft
    const max = el.scrollWidth - el.clientWidth
    const target = Math.max(0, Math.min(max, start + dir * stepSize))
    const duration = 500
    const startTime = performance.now()

    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

    const step = (now) => {
      const elapsed = Math.min((now - startTime) / duration, 1)
      el.scrollLeft = start + (target - start) * ease(elapsed)
      if (elapsed < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return (
    <section id="oradores" className="py-14 sm:py-20">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Oradores</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Conocé a quienes te inspirarán en el Congreso</h2>
        </ScrollReveal>

        <div className="relative mt-12">
          <button
            onClick={() => scroll(-1)}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream/95 shadow-md flex items-center justify-center text-ink-900 hover:bg-terracotta-500 hover:text-cream transition-colors"
            aria-label="Anterior"
          >
            <HiChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {speakers.map((s, i) => (
              <article
                key={i}
                className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 shrink-0 w-full sm:w-72 snap-start flex flex-col"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-sand-200 via-terracotta-300 to-forest-500 overflow-hidden">
                  {s.photo ? (
                    <img
                      src={s.photo}
                      alt={s.name}
                      draggable={false}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-content-center text-cream/60 font-display text-7xl">
                      {s.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                    </div>
                  )}
                </div>
                <div className={`px-5 py-4 text-cream flex-1 ${i % 2 === 0 ? 'bg-forest-700' : 'bg-terracotta-600'}`}>
                  <div className="font-display text-xl leading-tight">{s.name}</div>
                  <div className="text-xs mt-1 text-cream/80">{s.role}</div>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream/95 shadow-md flex items-center justify-center text-ink-900 hover:bg-terracotta-500 hover:text-cream transition-colors"
            aria-label="Siguiente"
          >
            <HiChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
