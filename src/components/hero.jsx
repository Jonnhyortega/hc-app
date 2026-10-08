import Image from 'next/image'
import { ArrowUpRightIcon, CheckBadgeIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import { FaWhatsapp } from 'react-icons/fa'
import heroImg from '../../public/hero-background.webp'
import { site } from '@/lib/site'

const highlights = ['Análisis de viabilidad', 'Presupuesto claro', 'Seguimiento de punta a punta']

const rubros = [
  'Comercios',
  'Industrias',
  'Locales comerciales',
  'Depósitos',
  'Oficinas',
  'Talleres',
  'Permisos especiales',
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand/40 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-40 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px] shadow-accent" />
            Habilitaciones municipales · Ciudad de Buenos Aires
          </p>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Habilitá tu negocio{' '}
            <span className="font-serif font-normal italic text-accent">sin vueltas</span>{' '}
            y con total legalidad.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Asesoramos a comercios e industrias en CABA para que inicien sus actividades de forma
            eficiente, cumpliendo con todas las normativas vigentes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-ink transition hover:bg-brand-50"
            >
              <FaWhatsapp className="h-5 w-5 text-whatsapp" />
              Hacé tu consulta
              <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Cómo trabajamos
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
            {highlights.map(h => (
              <li key={h} className="flex items-center gap-2">
                <CheckBadgeIcon className="h-5 w-5 text-accent" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src={heroImg}
              alt="Avenida Corrientes y el Obelisco, Ciudad de Buenos Aires"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="font-serif text-3xl italic leading-tight">Buenos Aires</p>
              <p className="mt-1 text-sm text-white/70">Conocemos la normativa de la Ciudad al detalle.</p>
            </div>
          </div>

          <div className="animate-float absolute -left-4 top-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-3.5 pr-5 text-ink shadow-xl sm:-left-10">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand">
              <DocumentCheckIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs text-muted">Resultado</span>
              <span className="block text-sm font-semibold">Habilitación aprobada</span>
            </span>
          </div>
        </div>
      </div>

      {/* Rubros marquee */}
      <div className="relative border-t border-white/10 py-6">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="animate-marquee flex shrink-0 items-center gap-12 pr-12" aria-label="Rubros que habilitamos">
            {[...rubros, ...rubros].map((r, i) => (
              <li
                key={i}
                aria-hidden={i >= rubros.length}
                className="flex items-center gap-12 whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-white/45"
              >
                {r}
                <span className="h-1 w-1 rounded-full bg-white/30" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
