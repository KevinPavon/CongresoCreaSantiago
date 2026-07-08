import { FaInstagram } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { contact, event, nav } from '../data/siteData'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-cream text-ink-900">
      <div className="container-x py-16 grid md:grid-cols-3 gap-10">
        <div>
          <img src="/img/LOGOS CHS_horizontal_Crea.png" alt={event.name} className="h-16 w-auto object-contain" />
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-ink-700/50 mb-3">Navegación</div>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><a className="hover:text-terracotta-600 transition" href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-ink-700/50 mb-3">Contacto</div>
          <p className="text-sm text-ink-900 font-medium">{contact.person}</p>
          <p className="text-xs text-ink-700/60 mb-3">{contact.role}</p>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm hover:text-terracotta-600 transition">
            <HiMail /> {contact.email}
          </a>
          <div className="flex gap-3 mt-5">
            <a href={contact.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-ink-900/20 grid place-content-center hover:bg-terracotta-500 hover:border-terracotta-500 hover:text-cream transition"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-900/10">
        <div className="container-x py-5 text-xs text-ink-700/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {event.name}. Todos los derechos reservados.</span>
          <span>Chaco Santiagueño · Argentina</span>
        </div>
      </div>
    </footer>
  )
}
