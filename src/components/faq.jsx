'use client'

import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { FaWhatsapp } from 'react-icons/fa'
import Reveal from './reveal'
import { Magnetic } from './effects'
import { site } from '@/lib/site'

const faqs = [
  {
    question: '¿Por qué debo habilitar mi comercio?',
    answer: (
      <p>
        El Código de Habilitaciones y Verificaciones establece que para el ejercicio de toda actividad comercial o
        industrial en la Ciudad de Buenos Aires debe solicitarse habilitación o permiso municipal según corresponda.
        Las actividades relacionadas con la alimentación cumplirán, además, con las normas del Código Alimentario
        Argentino.
      </p>
    ),
  },
  {
    question: '¿Dónde puedo habilitar mi comercio?',
    answer: (
      <p>
        Es conveniente consultar con nuestros profesionales sobre la viabilidad antes de iniciar el proyecto, dadas
        las múltiples y variadas opciones que requiere cada trámite. En todos los casos, es necesaria la
        participación de un profesional.
      </p>
    ),
  },
  {
    question: '¿Qué necesito para ser titular de una habilitación?',
    answer: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Estar inscripto en AFIP como persona física o jurídica y en IIBB de CABA.</li>
        <li>Documentación que acredite el derecho de ocupación del local (contrato de alquiler, título de propiedad).</li>
        <li>En el caso de personas jurídicas: contrato social, inscripciones en CUIT y en Ingresos Brutos.</li>
      </ul>
    ),
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Preguntas frecuentes</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Resolvemos tus{' '}
            <span className="font-serif font-normal italic text-brand">dudas</span>.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            ¿No encontrás lo que buscás? Escribinos y te respondemos a la brevedad.
          </p>
          <Magnetic className="mt-8">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 font-semibold text-ink transition hover:border-brand-100 hover:bg-brand-50"
            >
              <FaWhatsapp className="h-5 w-5 text-whatsapp" />
              Hacer una consulta
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={100} className="divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const id = `faq-${i}`
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                  >
                    <span className="text-lg font-medium text-ink">{faq.question}</span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition duration-300 ${
                        isOpen ? 'rotate-45 border-brand bg-brand text-white' : 'border-line text-ink'
                      }`}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={id}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pr-12 leading-relaxed text-ink-soft">{faq.answer}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
