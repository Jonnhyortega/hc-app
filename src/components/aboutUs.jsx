import { ScaleIcon, UserGroupIcon, ShieldCheckIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import Reveal from './reveal'

const pillars = [
  {
    icon: UserGroupIcon,
    title: 'Servicio personalizado',
    text: 'Nos adaptamos a cada negocio: local, oficina, taller o industria.',
  },
  {
    icon: ScaleIcon,
    title: 'Normativa vigente',
    text: 'Cada paso se realiza cumpliendo con todas las reglamentaciones de la Ciudad.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Casos complejos',
    text: 'Desde habilitaciones simples hasta trámites con permisos especiales o licencias adicionales.',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'De principio a fin',
    text: 'Desde el análisis inicial del local hasta la obtención de la oblea.',
  },
]

export default function AboutUs() {
  return (
    <section id="nosotros" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Nosotros</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Simplificamos un proceso{' '}
            <span className="font-serif font-normal italic text-brand">complejo</span>.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Somos una empresa proveedora de servicios de asesoramiento para la gestión de habilitaciones de
              comercios e industrias en la Ciudad de Buenos Aires.
            </p>
            <p>
              Con años de experiencia en el sector, guiamos a nuestros clientes a través de todo el proceso,
              asegurando que cada paso se realice de manera eficiente y sin sorpresas.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 80}
              className="group rounded-2xl border border-line bg-paper p-6 transition-colors duration-300 hover:border-brand-100 hover:bg-brand-50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand shadow-sm ring-1 ring-line transition group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
