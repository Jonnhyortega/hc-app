"use client";
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-38 w-[90%] max-w-5xl rounded-2xl bg-blue-900/70 border border-white/20 shadow-lg px-6 py-3 flex items-center justify-between text-white">
      {/* Logo */}
      <div className="text-xl font-bold">HC Gestión</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className=" hover:drop-shadow-[2px_2px_2px_black] font-bold transition cursor-pointer">Inicio</li>
        <li className="hover:text-blue-500 hover:drop-shadow-[2px_2px_2px_black] font-bold transition cursor-pointer">Servicios</li>
        <li className="hover:text-blue-500 hover:drop-shadow-[2px_2px_2px_black] font-bold transition cursor-pointer">Nosotros</li>
        <li className="hover:text-blue-500 hover:drop-shadow-[2px_2px_2px_black] font-bold transition cursor-pointer">Contacto</li>
      </ul>

      {/* Mobile Toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
      {open ? (
        <XMarkIcon className="h-6 w-6 text-white" />
        ) : (
        <Bars3Icon className="h-6 w-6 text-white" /> 
        )
      }

      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full mt-2 left-0 w-full bg-white/10 backdrop-blur-[20px] backdrop-saturate-[180%]  rounded-2xl shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <a className="text-sm font-medium hover:text-blue-300 transition">Inicio</a>
          <a className="text-sm font-medium hover:text-blue-300 transition">Servicios</a>
          <a className="text-sm font-medium hover:text-blue-300 transition">Nosotros</a>
          <a className="text-sm font-medium hover:text-blue-300 transition">Contacto</a>
        </div>
      )}
    </nav>
  )
}
