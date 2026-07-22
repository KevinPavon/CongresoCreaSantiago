import { FaInstagram } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { contact, event, nav } from '../data/siteData'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-forest-400 text-cream">
      <div className="container-x py-16 grid md:grid-cols-3 gap-10 items-start">
        <div>
          {/* El logo tiene el texto en verde oscuro y gris: sobre la banda verde no contrasta,
              asi que va sobre una placa clara. */}
          <div className="inline-block bg-white rounded-2xl px-5 py-4 shadow-lg">
            <img
              src="/img/LOGOS CHS_horizontal_Crea.png"
              alt={event.name}
              className="h-24 sm:h-32 w-auto object-contain"
            />
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-cream/70 mb-3">Navegación</div>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><a className="text-cream/90 hover:text-cream hover:underline transition" href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-cream/70 mb-3">Contacto</div>
          <p className="text-sm font-medium">{contact.person}</p>
          <p className="text-xs text-cream/70 mb-3">{contact.role}</p>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-cream/90 hover:text-cream hover:underline transition">
            <HiMail /> {contact.email}
          </a>
          <div className="flex gap-3 mt-5">
            <a
              href={contact.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cream/40 grid place-content-center hover:bg-cream hover:text-forest-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior en blanco: ademas de cerrar la banda verde, deja legible el logo de Base2 */}
      <div className="bg-white text-ink-700">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-ink-700/60 text-center sm:text-left">
            © {new Date().getFullYear()} {event.name}. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-2">
            <span className="text-ink-700/60">Powered by</span>
            <a
              href="https://base2soluciones.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-70 transition-opacity"
              aria-label="Base2 Software Engineering Studio"
            >
              <img src="/base2.png" alt="Base2 Software Engineering Studio" className="h-8 w-auto" style={{ maxWidth: 120 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
