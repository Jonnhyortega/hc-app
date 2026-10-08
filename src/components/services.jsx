import { FaShoppingCart, FaIndustry, FaStore, FaWarehouse, FaBuilding } from 'react-icons/fa'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Reveal from './reveal'
import { site } from '@/lib/site'

const services = [
  {
    icon: FaShoppingCart,
    title: 'Comercios',
    text: 'Habilitación de actividades comerciales de venta y atención al público.',
  },
  {
    icon: FaStore,
    title: 'Locales comerciales',
    text: 'Análisis del local, adecuaciones y documentación para operar legalmente.',
  },
  {
    icon: FaWarehouse,
    title: 'Depósitos',
    text: 'Gestión de habilitaciones para almacenamiento y logística.',
  },
  {
    icon: FaBuilding,
    title: 'Oficinas',
    text: 'Trámites ágiles para espacios administrativos y profesionales.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Servicios</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Habilitaciones para{' '}
              <span className="font-serif font-normal italic text-brand">cada tipo</span> de actividad.
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Cada rubro tiene sus requisitos. Te decimos exactamente qué necesitás antes de empezar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Featured tile */}
          <Reveal className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:row-span-2 md:p-10">
            <div className="bg-grid-dark absolute inset-0 opacity-60" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-brand blur-[90px]" />
            <div className="relative flex h-full flex-col">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-accent ring-1 ring-white/15">
                <FaIndustry className="h-6 w-6" />
              </span>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight">Industrias</h3>
              <p className="mt-3 leading-relaxed text-white/70">
                Acompañamos habilitaciones industriales, incluyendo los casos que requieren permisos
                especiales o licencias adicionales.
              </p>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-brand-50 md:mt-auto"
              >
                Consultar por mi industria
                <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={80 + i * 70}
              className="group rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-brand/5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
