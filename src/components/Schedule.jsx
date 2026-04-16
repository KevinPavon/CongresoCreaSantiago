import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { schedule } from '../data/siteData'

export default function Schedule() {
  const [active, setActive] = useState(0)
  const day = schedule[active]
  return (
    <section id="programa" className="py-24 sm:py-32">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Programa</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Dos jornadas, una agenda intensa</h2>
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {schedule.map((d, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                active === i
                  ? 'bg-forest-700 text-cream shadow'
                  : 'bg-cream text-forest-700 border border-forest-700/20 hover:border-forest-700'
              }`}
            >
              {d.day} · <span className="opacity-70">{d.date}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 relative">
          <div className="absolute left-5 sm:left-24 top-2 bottom-2 w-px bg-sand-300" aria-hidden />
          <ol className="space-y-5">
            {day.items.map((it, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <li className="relative pl-14 sm:pl-40 group">
                  <div className="absolute left-0 sm:left-0 top-1 w-20 sm:w-24 font-display text-xl text-terracotta-600 hidden sm:block">
                    {it.time}
                  </div>
                  <div className="sm:hidden text-xs font-semibold text-terracotta-600 mb-1">{it.time}</div>
                  <span className="absolute left-3.5 sm:left-[5.45rem] top-3 w-3 h-3 rounded-full bg-terracotta-500 ring-4 ring-cream group-hover:scale-125 transition" />
                  <div className="bg-cream border border-sand-200 rounded-2xl p-5 hover:border-terracotta-400 transition-all">
                    <h3 className="font-display text-xl text-ink-900">{it.title}</h3>
                    {it.desc && <p className="text-sm text-ink-700 mt-1">{it.desc}</p>}
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
