'use client'

import { PhoneIcon, EnvelopeIcon, CameraIcon } from '@heroicons/react/24/outline'
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:flex items-center justify-between gap-10">
        
        {/* Columna 1: Marca */}
        <div>
          <img src='/logo.webp' alt="logo" width={550} />
          <p className="mt-4 text-sm text-gray-400">
            Especialistas en habilitaciones para comercios e industrias en CABA.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-blue-400 transition">Nosotros</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Servicios</a></li>
            <li><a href="#faq" className="hover:text-blue-400 transition">Preguntas frecuentes</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://wa.link/kwvfsq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400"
              >
                <PhoneIcon className="w-5 h-5 text-green-400" />
                +54 11 5833-3949
              </a>
            </li>
            <li>
              <a
                href="mailto:gestioncomercialhc@gmail.com"
                className="flex items-center gap-2 hover:text-red-400"
              >
                <EnvelopeIcon className="w-5 h-5 text-red-400" />
                gestioncomercialhc@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gestionhc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-400"
              >
                <CameraIcon className="w-5 h-5 text-pink-400" />
                @gestionhc
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} HC Gestión Comercial. Todos los derechos reservados.
      </div>

      <div className='flex items-center justify-center decoration-1'>
        <a className='text-white underline mt-2 text-center text-xs w-[100%]' href="https://www.jonnhyortegadev.com" target='_blank'>
            Content creator
        </a>
      </div>
    </footer>
  )
}
