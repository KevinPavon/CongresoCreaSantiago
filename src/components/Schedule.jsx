import { useState } from 'react'
import { HiSpeakerphone, HiUserGroup, HiChevronDown } from 'react-icons/hi'
import { MdRestaurant } from 'react-icons/md'
import ScrollReveal from './ScrollReveal'
import { schedule } from '../data/siteData'

const TRACK = {
  auditorio:  { label: 'Auditorio',            Icon: HiSpeakerphone, textCls: 'text-forest-600',     iconBg: 'bg-forest-400/10'      },
  conexiones: { label: 'Mesas de Conexiones',  Icon: HiUserGroup,    textCls: 'text-terracotta-600', iconBg: 'bg-terracotta-300/20'  },
  patio:      { label: 'Patio Santiagueño',    Icon: MdRestaurant,   textCls: 'text-sand-500',       iconBg: 'bg-sand-100'           },
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0)
  const [openItem, setOpenItem] = useState(null)

  const handleDayChange = (i) => { setActiveDay(i); setOpenItem(null) }
  const toggle = (i) => setOpenItem(openItem === i ? null : i)

  const day = schedule[activeDay]

  return (
    <section id="programa" className="relative py-14 sm:py-20 bg-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{ backgroundImage: "url('/img/Trama (1).svg')", backgroundSize: 'cover' }}
        aria-hidden
      />
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Programa</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">Cronograma</h2>
        </ScrollReveal>

        {/* Pestañas de día */}
        <div className="mt-10 flex gap-3 flex-wrap">
          {schedule.map((d, i) => (
            <button
              key={i}
              onClick={() => handleDayChange(i)}
              className={`px-6 py-3 rounded-full font-display font-semibold uppercase tracking-wide text-sm transition-all ${
                activeDay === i
                  ? 'bg-forest-700 text-cream shadow-md'
                  : 'bg-cream text-forest-700 border border-forest-700/30 hover:border-forest-700'
              }`}
            >
              {d.day} <span className="font-normal normal-case tracking-normal opacity-70">| {d.date}</span>
            </button>
          ))}
        </div>

        {/* Leyenda de referencias */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 bg-cream/70 border border-sand-200 rounded-2xl px-5 py-3 text-sm text-ink-700">
          <span className="text-xs font-semibold uppercase tracking-wider opacity-50 mr-1">Referencias:</span>
          {Object.values(TRACK).map(({ label, Icon, textCls }) => (
            <span key={label} className="flex items-center gap-1.5">
              <Icon className={`text-lg ${textCls}`} />
              <span>{label}</span>
            </span>
          ))}
        </div>

        {/* Lista acordeón */}
        <div className="mt-6 rounded-2xl border border-sand-200 overflow-hidden divide-y divide-sand-200">
          {day.items.map((item, i) => {
            const meta = TRACK[item.type]
            const isOpen = openItem === i
            const hasDesc = !!item.desc

            return (
              <div key={i} className={`transition-colors ${isOpen ? 'bg-cream/80' : 'bg-white hover:bg-sand-50'}`}>
                <button
                  onClick={() => hasDesc && toggle(i)}
                  className={`w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 text-left ${hasDesc ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {/* Hora */}
                  <span className="w-14 sm:w-16 flex-shrink-0 font-display font-semibold text-sm text-terracotta-600">
                    {item.time}
                  </span>
                  {/* Ícono de espacio */}
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${meta.iconBg}`}>
                    <meta.Icon className={`text-base ${meta.textCls}`} />
                  </span>
                  {/* Título */}
                  <span className="flex-1 font-display text-base sm:text-lg text-ink-900 font-medium leading-snug">
                    {item.title}
                  </span>
                  {/* Flecha acordeón */}
                  {hasDesc && (
                    <HiChevronDown
                      className={`flex-shrink-0 text-xl text-ink-700/40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {/* Descripción desplegable */}
                {hasDesc && isOpen && (
                  <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 pb-5">
                    <span className="w-14 sm:w-16 flex-shrink-0" aria-hidden />
                    <span className="w-8 flex-shrink-0" aria-hidden />
                    <p className="text-sm text-ink-700 leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
