import Image from 'next/image'
import logo from '@/img/logo-2-removebg-preview.png'
import { navLinks, site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image src={logo} alt="HC" width={64} height={46} className="h-11 w-auto" />
            <span className="border-l border-white/20 pl-4 text-sm font-medium uppercase leading-snug tracking-[0.15em] text-white/80">
              Gestión de
              <br />
              habilitación comercial
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
            Especialistas en habilitaciones para comercios e industrias en la Ciudad de Buenos Aires.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Navegación</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-white/75 transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Contacto</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white/75 transition hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-white/75 transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white/75 transition hover:text-white">
                {site.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <a
            href="https://www.jonnhyortegadev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Desarrollado por Jonnhy Ortega
          </a>
        </div>
      </div>
    </footer>
  )
}
