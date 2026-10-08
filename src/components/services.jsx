import { FaShoppingCart, FaIndustry, FaStore, FaWarehouse, FaBuilding } from 'react-icons/fa'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Reveal from './reveal'
import { Magnetic, SpotlightCard } from './effects'
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
          <Reveal className="md:row-span-2">
            <SpotlightCard
              className="h-full overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-10"
              style={{ '--spot-color': 'rgb(79 156 249 / 0.22)', '--spot-border': 'rgb(165 205 253 / 0.8)' }}
            >
            <div className="bg-grid-dark absolute inset-0 opacity-60" />
            <div className="absolute -right-[186px] -bottom-[186px] h-[468px] w-[468px] bg-[radial-gradient(closest-side,rgb(21_80_160/0.8),transparent)]" />
            <div className="relative flex h-full flex-col">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-accent ring-1 ring-white/15">
                <FaIndustry className="h-6 w-6" />
              </span>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight">Industrias</h3>
              <p className="mt-3 leading-relaxed text-white/70">
                Acompañamos habilitaciones industriales, incluyendo los casos que requieren permisos
                especiales o licencias adicionales.
              </p>
              <Magnetic className="mt-10 w-fit md:mt-auto">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-brand-50"
                >
                  Consultar por mi industria
                  <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </div>
            </SpotlightCard>
          </Reveal>

          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={80 + i * 70}>
              <SpotlightCard className="group h-full rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
