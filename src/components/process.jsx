// src/components/Process.jsx
import {
    MagnifyingGlassIcon,
    DocumentTextIcon,
    CheckCircleIcon,
    QrCodeIcon,
  } from '@heroicons/react/24/outline'
  
  export default function Process() {
    const steps = [
      {
        id: 1,
        title: 'Inspección visual',
        icon: <MagnifyingGlassIcon className="h-12 w-12 text-blue-500" />,
        description: 'Visitamos tu local y analizamos requisitos.',
      },
      {
        id: 2,
        title: 'Presupuesto',
        icon: <DocumentTextIcon className="h-12 w-12 text-blue-500" />,
        description: 'Informe detallado y cotización sin sorpresas',
      },
      {
        id: 3,
        title: 'Inicio del trámite',
        icon: <CheckCircleIcon className="h-12 w-12 text-blue-500" />,
        description: 'Presentamos formularios y gestionamos expediente',
      },
      {
        id: 4,
        title: 'Inicio de actividades',
        icon: <QrCodeIcon className="h-12 w-12 text-blue-500" />,
        description: 'Obtención de QR y entrenamiento de operaciones',
      },
    ]
  
    return (
      <section className="relative bg-white pt-16 pb-20 overflow-hidden">
        {/* Contenido centrado */}
        <div className="container mx-auto px-4 sm:px-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Proceso de habilitación
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ id, title, icon, description }) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center text-center"
              >
                <div className="text-2xl font-bold text-gray-800">{id}</div>
                <h3 className="mt-4 text-xl font-medium text-gray-700">{title}</h3>
                <div className="mt-4">{icon}</div>
                <p className="mt-4 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Onda full-width alineada */}
        <div className="absolute bottom-0 inset-x-0 w-full leading-none">
          <svg
            className="block h-20 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#0ea5e9"
              fillOpacity="0.2"
              d="M0,160L48,181.3C96,203,192,245,288,266.7C384,288,480,288,576,266.7C672,245,768,203,864,197.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path
              fill="#0ea5e9"
              fillOpacity="0.4"
              d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,181.3C672,192,768,192,864,170.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            <path
              fill="#0ea5e9"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,170.7C672,192,768,256,864,266.7C960,277,1056,235,1152,213.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>
    )
  }
  