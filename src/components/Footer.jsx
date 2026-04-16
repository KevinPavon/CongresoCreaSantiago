import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { contact, event, nav } from '../data/siteData'

export default function Footer() {
  return (
    <footer id="contacto" className="mt-10 bg-forest-800 text-cream">
      <div className="container-x py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-2xl leading-tight">{event.name}</div>
          <p className="mt-3 text-cream/70 text-sm max-w-xs">{event.tagline}.</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-sand-300 mb-3">Navegación</div>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><a className="hover:text-terracotta-300 transition" href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-sand-300 mb-3">Contacto</div>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm hover:text-terracotta-300 transition">
            <HiMail /> {contact.email}
          </a>
          <div className="flex gap-3 mt-5">
            <a href={contact.social.instagram} aria-label="Instagram" className="w-10 h-10 rounded-full border border-cream/20 grid place-content-center hover:bg-terracotta-500 hover:border-terracotta-500 transition"><FaInstagram /></a>
            <a href={contact.social.facebook} aria-label="Facebook" className="w-10 h-10 rounded-full border border-cream/20 grid place-content-center hover:bg-terracotta-500 hover:border-terracotta-500 transition"><FaFacebook /></a>
            <a href={contact.social.linkedin} aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-cream/20 grid place-content-center hover:bg-terracotta-500 hover:border-terracotta-500 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-5 text-xs text-cream/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {event.name}. Todos los derechos reservados.</span>
          <span>Chaco Santiagueño · Argentina</span>
        </div>
      </div>
    </footer>
  )
}
