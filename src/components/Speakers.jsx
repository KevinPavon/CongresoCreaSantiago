import { useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import { speakers } from '../data/siteData'

export default function Speakers() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const start = el.scrollLeft
    const target = start + dir * 320
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
    <section id="oradores" className="py-24 sm:py-32">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Oradores</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Voces que mueven al agro</h2>
        </ScrollReveal>

        <div className="relative mt-12">
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream shadow-md flex items-center justify-center text-ink-900 hover:bg-terracotta-500 hover:text-cream transition-colors"
            aria-label="Anterior"
          >
            <HiChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {speakers.map((s, i) => (
              <article
                key={i}
                className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 shrink-0 w-64 sm:w-72 snap-start"
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
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink-900/85 via-ink-900/40 to-transparent text-cream">
                    <div className="font-display text-xl leading-tight">{s.name}</div>
                    <div className="text-xs mt-1 text-cream/80">{s.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream shadow-md flex items-center justify-center text-ink-900 hover:bg-terracotta-500 hover:text-cream transition-colors"
            aria-label="Siguiente"
          >
            <HiChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
