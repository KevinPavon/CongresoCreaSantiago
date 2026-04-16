import { HiUsers, HiLightBulb, HiGlobe } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import { event } from '../data/siteData'

const pillars = [
  { icon: HiUsers, title: 'Comunidad', text: 'Empresarios y equipos CREA conectados con la región.' },
  { icon: HiLightBulb, title: 'Conocimiento', text: 'Casos, paneles y contenido de alto nivel técnico.' },
  { icon: HiGlobe, title: 'Territorio', text: 'Una mirada desde y para el Chaco Santiagueño.' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative">
      <div className="container-x">
        <ScrollReveal>
          <p className="eyebrow">Sobre el congreso</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3 max-w-3xl">
            Un espacio para <span className="italic text-terracotta-600">pensar</span>, compartir y proyectar el agro de la región.
          </h2>
          <p className="mt-6 text-ink-700 text-lg max-w-3xl">{event.intro}</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-cream border border-sand-200 p-7 hover:border-terracotta-400 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-terracotta-500/10 text-terracotta-600 grid place-content-center text-2xl">
                  <p.icon />
                </div>
                <h3 className="h-display text-2xl mt-5">{p.title}</h3>
                <p className="text-ink-700 mt-2">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
