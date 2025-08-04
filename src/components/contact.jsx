'use client'
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
export default function Contacto() {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover py-16"
      style={{ backgroundImage: "url('/background-contact.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-900/70 z-0" />

      <div className="relative z-10 text-white text-center max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">CONTACTANOS PARA</h2>
        <h3 className="text-4xl font-bold border-y-2 inline-block py-2 mb-12">CONSULTAS</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/gestionhc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white rounded-full p-6 mb-4">
              <FaInstagram className="text-pink-600 text-4xl" />
            </div>
            <p className="font-semibold text-lg">Instagram</p>
            <span className="text-sm text-white">@gestionhc</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.link/kwvfsq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white rounded-full p-6 mb-4">
              <FaWhatsapp className="text-green-500 text-4xl" />
            </div>
            <p className="font-semibold text-lg">Cel & WhatsApp</p>
            <span className="text-sm text-white">+54 11 5833-3949</span>
          </a>

          {/* Correo */}
          <a
            href="mailto:gestioncomercialhc@gmail.com"
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white rounded-full p-6 mb-4">
              <FaEnvelope className="text-red-500 text-4xl" />
            </div>
            <p className="font-semibold text-lg">Correo</p>
            <span className="text-sm text-white">gestioncomercialhc@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
