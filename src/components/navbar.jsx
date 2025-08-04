"use client"
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "@/img/logo-2-removebg-preview.png"
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-29 w-[90%] max-w-5xl rounded-2xl bg-blue-900/70 border border-white/20 shadow-lg px-6 py-3 flex items-center justify-between text-white">
        {/* Logo */}
          <Image src={logo} alt="Gestion comercial" width={50} height={50}/>
       

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-blue-500 font-bold transition cursor-pointer">Inicio</a>
          <a href="#services" className="hover:text-blue-500 font-bold transition cursor-pointer">Servicios</a>
          <a href="#about" className="hover:text-blue-500 font-bold transition cursor-pointer">Nosotros</a>
          <a href="#contact" className="hover:text-blue-500 font-bold transition cursor-pointer">Contacto</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      {/* Overlay Blur */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-[20px] left-4 right-4 h-[90vh] z-51 bg-blue-900/70 backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center gap-4 md:hidden">
          <Image src={logo} alt="Gestion comercial" width={70} height={70} className='absolute top-[20px] '/>
          <span onClick={()=>{setOpen(!open)}} className='fixed top-[5px] right-[15px] text-white'>x</span>
          <a href="#hero" onClick={() => setOpen(false)} className="text-lg font-medium text-white hover:text-blue-300 transition">Inicio</a>
          <a href="#services" onClick={() => setOpen(false)} className="text-lg font-medium text-white hover:text-blue-300 transition">Servicios</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-lg font-medium text-white hover:text-blue-300 transition">Nosotros</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-lg font-medium text-white hover:text-blue-300 transition">Contacto</a>
          <h4 className='absolute bottom-[0px] text-sm text-gray-400 text-center p-4'>Especialistas en habilitaciones comerciales.
          </h4>
        </div>
      )}
    </>
  )
}
