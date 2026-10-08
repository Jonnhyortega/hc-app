import Image from 'next/image'
import { ArrowUpRightIcon, CheckBadgeIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import { FaWhatsapp } from 'react-icons/fa'
import heroImg from '@/img/obelisco.webp'
import { site } from '@/lib/site'
import { Magnetic, Parallax } from './effects'
import CityScene from './cityScene'

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

const title = [
  { text: 'Habilitá' },
  { text: 'tu' },
  { text: 'negocio' },
  { text: 'sin', accent: true },
  { text: 'vueltas', accent: true },
  { text: 'y' },
  { text: 'con' },
  { text: 'total' },
  { text: 'legalidad.' },
]

// Escalonado del título (ms). Corto a propósito: el título es el elemento LCP.
const WORD_STAGGER = 35

// Retardo (ms) de cada bloque del hero, después de que termina el título
const after = (n = 0) => ({ '--delay': `${title.length * WORD_STAGGER + 100 + n * 80}ms` })

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      {/* Auroras: degradado radial en vez de filter: blur (el blur grande trababa Safari/iPhone) */}
      <div className="aurora-a absolute -top-[260px] left-1/2 h-[760px] w-[1150px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(21_80_160/0.45),transparent)]" />
      <div className="aurora-b absolute right-[-18%] top-[22%] h-[640px] w-[640px] bg-[radial-gradient(closest-side,rgb(79_156_249/0.2),transparent)]" />

      <div className="relative">
      {/* Ciudad 3D de fondo */}
      <CityScene className="fade-up absolute inset-x-0 bottom-0 h-[300px] opacity-80 sm:h-[400px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-48 pt-32 sm:px-6 sm:pb-56 lg:grid-cols-[1.1fr_1fr] lg:pt-40 lg:pb-60">
        <div>
          <p
            className="fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-white/80"
            style={{ '--delay': '0ms' }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Habilitaciones municipales · Ciudad de Buenos Aires
          </p>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            {title.map(({ text, accent }, i) => (
              <span key={i}>
                <span
                  className={`word ${accent ? 'font-serif font-normal italic' : ''}`}
                  style={{ '--delay': `${i * WORD_STAGGER}ms` }}
                >
                  {accent ? <span className="text-shine">{text}</span> : text}
                </span>
                {i < title.length - 1 && ' '}
              </span>
            ))}
          </h1>

          <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/70" style={after(0)}>
            Asesoramos a comercios e industrias en CABA para que inicien sus actividades de forma
            eficiente, cumpliendo con todas las normativas vigentes.
          </p>

          <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={after(1)}>
            <Magnetic className="w-full sm:w-auto">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3.5 font-semibold text-ink shadow-[0_0_40px_-8px] shadow-accent/60 transition hover:bg-brand-50"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-100/80 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <FaWhatsapp className="relative h-5 w-5 text-whatsapp" />
                <span className="relative">Hacé tu consulta</span>
                <ArrowUpRightIcon className="relative h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#proceso"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Cómo trabajamos
              </a>
            </Magnetic>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
            {highlights.map((h, i) => (
              <li key={h} className="fade-up flex items-center gap-2" style={after(2 + i)}>
                <CheckBadgeIcon className="h-5 w-5 text-accent" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up relative mx-auto w-full max-w-md lg:max-w-none" style={{ '--delay': '0ms' }}>
          <Parallax
            speed={0.12}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40"
          >
            <Image
              src={heroImg}
              alt="Avenida Corrientes y el Obelisco, Ciudad de Buenos Aires"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </Parallax>
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <div className="absolute inset-x-6 bottom-6">
            <p className="font-serif text-3xl italic leading-tight">Buenos Aires</p>
            <p className="mt-1 text-sm text-white/70">Conocemos la normativa de la Ciudad al detalle.</p>
          </div>

          <div className="fade-up absolute -left-4 top-10 sm:-left-10" style={after(1)}>
            <div className="animate-float flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-3.5 pr-5 text-ink shadow-xl">
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
