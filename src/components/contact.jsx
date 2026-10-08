import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Reveal from './reveal'
import { site } from '@/lib/site'

const channels = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: site.phone,
    href: site.whatsappUrl,
    external: true,
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: site.instagram,
    href: site.instagramUrl,
    external: true,
  },
]

export default function Contacto() {
  return (
    <section id="contacto" className="bg-white px-4 pb-24 sm:px-6 sm:pb-32">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand px-6 py-16 text-white sm:px-12 sm:py-20">
        <div className="bg-grid-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/50 blur-[110px]" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-ink/60 blur-[110px]" />

        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              ¿Listo para habilitar{' '}
              <span className="font-serif font-normal italic">tu negocio</span>?
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/75">
              Contanos qué actividad querés desarrollar y dónde. Te asesoramos sobre la viabilidad y los pasos a
              seguir.
            </p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brand-50"
            >
              <FaWhatsapp className="h-5 w-5 text-whatsapp" />
              Hablar con un asesor
              <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <ul className="min-w-0 space-y-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-wider text-white/60">{label}</span>
                    <span className="block font-medium [overflow-wrap:anywhere]">{value}</span>
                  </span>
                  <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-white/50 transition group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
