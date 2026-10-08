'use client'

import { useRef } from 'react'
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'
import Reveal from './reveal'
import { useScrollProgress } from './effects'

const steps = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Inspección visual',
    description: 'Visitamos tu local y analizamos los requisitos para tu actividad.',
  },
  {
    icon: DocumentTextIcon,
    title: 'Presupuesto',
    description: 'Te entregamos un informe detallado y una cotización sin sorpresas.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Inicio del trámite',
    description: 'Presentamos los formularios y gestionamos el expediente por vos.',
  },
  {
    icon: QrCodeIcon,
    title: 'Inicio de actividades',
    description: 'Obtención del QR y acompañamiento para que empieces a operar.',
  },
]

export default function Process() {
  const listRef = useRef(null)
  const progress = useScrollProgress(listRef)

  return (
    <section id="proceso" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[130px] transition-opacity duration-700"
        style={{ opacity: 0.3 + progress * 0.7 }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Proceso</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Cuatro pasos hasta{' '}
            <span className="text-shine font-serif font-normal italic">abrir tus puertas</span>.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Un camino claro, con un equipo que se ocupa de cada detalle.
          </p>
        </Reveal>

        <div ref={listRef} className="relative mt-16">
          {/* Línea horizontal (desktop) */}
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block">
            <div
              className="h-full origin-left bg-gradient-to-r from-brand via-accent to-accent shadow-[0_0_12px_1px] shadow-accent"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
          {/* Línea vertical (mobile) */}
          <div aria-hidden className="absolute bottom-7 left-7 top-7 w-px bg-white/10 sm:hidden">
            <div
              className="w-full origin-top bg-gradient-to-b from-brand via-accent to-accent shadow-[0_0_12px_1px] shadow-accent"
              style={{ height: '100%', transform: `scaleY(${progress})` }}
            />
          </div>

          <ol className="relative grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, i) => {
              const active = progress >= i / steps.length + 0.04
              return (
                <Reveal as="li" key={title} delay={i * 100} className="relative max-sm:pl-20">
                  <div className="flex items-center gap-4 max-sm:absolute max-sm:left-0 max-sm:top-0">
                    <span
                      className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border bg-ink shadow-[0_0_0_6px] shadow-ink transition-all duration-500 ${
                        active
                          ? 'scale-110 border-accent text-white'
                          : 'border-white/15 text-white/40'
                      }`}
                    >
                      <span
                        className={`absolute inset-0 rounded-2xl bg-accent/20 transition-opacity duration-500 ${
                          active ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <span
                        className={`absolute -inset-2 rounded-3xl bg-accent/30 blur-xl transition-opacity duration-500 ${
                          active ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <Icon className="relative h-6 w-6" />
                    </span>
                    <span
                      className={`font-serif text-5xl italic transition-colors duration-500 max-sm:hidden ${
                        active ? 'text-accent/60' : 'text-white/10'
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:hidden">
                    Paso 0{i + 1}
                  </p>
                  <h3
                    className={`mt-1 text-xl font-semibold transition-colors duration-500 sm:mt-6 ${
                      active ? 'text-white' : 'text-white/45'
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed transition-colors duration-500 ${
                      active ? 'text-white/70' : 'text-white/35'
                    }`}
                  >
                    {description}
                  </p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
