import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'
import Reveal from './reveal'

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
  return (
    <section id="proceso" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Proceso</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Cuatro pasos hasta{' '}
            <span className="font-serif font-normal italic text-accent">abrir tus puertas</span>.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Un camino claro, con un equipo que se ocupa de cada detalle.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
          />
          <ol className="relative grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <Reveal as="li" key={title} delay={i * 100} className="relative">
                <div className="flex items-center gap-4">
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-ink text-accent shadow-[0_0_0_6px] shadow-ink">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-serif text-5xl italic text-white/15">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/60">{description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
