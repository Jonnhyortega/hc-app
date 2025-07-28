// src/components/Faq.jsx
'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: '¿Por qué debo habilitar mi comercio?',
    answer: `El Código de Habilitaciones y Verificaciones establece:
Para el ejercicio de toda actividad comercial o industrial en el ejido de la Ciudad de Buenos Aires, deberá solicitarse habilitación o permiso municipal según corresponda. Las actividades relacionadas con la alimentación cumplirán, además, con las normas del Código Alimentario Argentino.`,
  },
  {
    question: '¿Dónde puedo habilitar mi comercio?',
    answer: `Es conveniente consultar con nuestros profesionales sobre la viabilidad antes de iniciar el proyecto, dadas las múltiples y variadas opciones que requiere cada trámite. En todos los casos, es necesaria la participación de un profesional.`,
  },
  {
    question: '¿Qué necesito para ser titular de una habilitación?',
    answer: `Es necesario:
- Estar inscripto en AFIP como persona física o jurídica y en IIBB de CABA.  
- Documentación que acredite el derecho de ocupación del local (contrato de alquiler, título de propiedad).  
- En el caso de personas jurídicas: contrato social, inscripciones en CUIT y en Ingresos Brutos.`,
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                  onClick={() => toggle(i)}
                >
                  <span className="text-left font-medium text-gray-800">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 py-4 bg-white text-gray-600 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
