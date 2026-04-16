import { HiLocationMarker, HiExternalLink } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'
import { venue } from '../data/siteData'

export default function Venue() {
  return (
    <section id="sede" className="py-24 sm:py-32 bg-gradient-to-b from-transparent via-sand-100/60 to-transparent">
      <div className="container-x grid lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
        <ScrollReveal>
          <p className="eyebrow">Sede y alojamiento</p>
          <h2 className="h-display text-4xl sm:text-5xl mt-3">{venue.name}</h2>
          <p className="mt-4 text-lg text-ink-700 flex items-center gap-2">
            <HiLocationMarker className="text-terracotta-600" /> {venue.address}
          </p>
          <a href={venue.mapUrl} target="_blank" rel="noreferrer" className="btn-ghost mt-6">
            Ver en Google Maps <HiExternalLink />
          </a>

          <div className="mt-10">
            <h3 className="font-display text-2xl mb-4">Hoteles recomendados</h3>
            <ul className="space-y-3">
              {venue.hotels.map((h, i) => (
                <li key={i} className="bg-cream border border-sand-200 rounded-2xl p-4 hover:border-terracotta-400 transition">
                  <div className="font-medium text-ink-900">{h.name}</div>
                  <div className="text-sm text-ink-700">{h.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-3xl overflow-hidden border border-sand-200 shadow-lg aspect-square lg:aspect-[4/5]">
            <iframe
              title="Mapa sede"
              src={venue.mapEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
