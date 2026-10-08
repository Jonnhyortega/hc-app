import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { ArrowUpIcon, ArrowUpRightIcon, MapPinIcon } from '@heroicons/react/24/outline'
import logo from '@/img/logo-hc.webp'
import { navLinks, site } from '@/lib/site'
import { Magnetic } from './effects'

const socials = [
  { icon: FaWhatsapp, label: 'WhatsApp', href: site.whatsappUrl, external: true },
  { icon: FaInstagram, label: 'Instagram', href: site.instagramUrl, external: true },
  { icon: FaEnvelope, label: 'Email', href: `mailto:${site.email}` },
]

const contacts = [
  { icon: FaWhatsapp, value: site.phone, href: site.whatsappUrl, external: true },
  { icon: FaEnvelope, value: site.email, href: `mailto:${site.email}` },
  { icon: FaInstagram, value: site.instagram, href: site.instagramUrl, external: true },
]

const ext = external => (external ? { target: '_blank', rel: 'noopener noreferrer' } : {})

function FooterLink({ href, external, children }) {
  return (
    <a
      href={href}
      {...ext(external)}
      className="group inline-flex items-center gap-1.5 text-white/65 transition-colors hover:text-white"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      <ArrowUpRightIcon className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="absolute -top-48 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand/30 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Marca */}
          <div>
            <a href="#inicio" className="inline-flex items-center gap-4" aria-label="Volver al inicio">
              <Image src={logo} alt="HC" width={64} height={46} className="h-11 w-auto" />
              <span className="border-l border-white/20 pl-4 text-sm font-medium uppercase leading-snug tracking-[0.15em] text-white/85">
                Gestión de
                <br />
                habilitación comercial
              </span>
            </a>
            <p className="mt-6 max-w-sm leading-relaxed text-white/55">
              Especialistas en habilitaciones para comercios e industrias en la Ciudad de Buenos Aires.
            </p>
            <ul className="mt-8 flex gap-3">
              {socials.map(({ icon: Icon, label, href, external }) => (
                <li key={label}>
                  <Magnetic strength={0.35}>
                    <a
                      href={href}
                      {...ext(external)}
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition duration-300 hover:border-accent hover:bg-accent hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Navegación</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map(l => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Contacto</h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              {contacts.map(({ icon: Icon, value, href, external }) => (
                <li key={value} className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-accent" />
                  <span className="min-w-0 [overflow-wrap:anywhere]">
                    <FooterLink href={href} external={external}>
                      {value}
                    </FooterLink>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3 text-white/65">
                <MapPinIcon className="h-4 w-4 shrink-0 text-accent" />
                Ciudad Autónoma de Buenos Aires
              </li>
            </ul>

            <a
              href={site.whatsappUrl}
              {...ext(true)}
              className="group mt-8 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-accent/50 hover:bg-white/[0.07]"
            >
              <span>
                <span className="block text-sm text-white/55">¿Tenés una consulta?</span>
                <span className="mt-0.5 block font-semibold">Escribinos por WhatsApp</span>
              </span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-ink transition duration-300 group-hover:rotate-45 group-hover:bg-accent">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>


        {/* Marca gigante */}
        <div aria-hidden className="pointer-events-none mt-20 select-none overflow-hidden">
          <p className="text-fade-down translate-y-[18%] text-center text-[clamp(4.5rem,17vw,14rem)] font-semibold leading-[0.8] tracking-tighter">
            HC Gestión
          </p>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="relative border-t border-white/10 bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 pb-24 pt-6 text-xs text-white/40 sm:flex-row sm:px-6 sm:pb-6">
          <p>&copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.astralvisionestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Desarrollado por Astral Vision
            </a>
            <Magnetic strength={0.4}>
              <a
                href="#inicio"
                aria-label="Volver arriba"
                className="group grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <ArrowUpIcon className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  )
}
