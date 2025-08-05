'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "@/img/logo-2-removebg-preview.png"
import Image from 'next/image'
import 'animate.css';

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Detectar dirección de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false) // scroll hacia abajo
      } else {
        setVisible(true) // scroll hacia arriba
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-29 w-[90%] max-w-5xl rounded-2xl bg-[#1550A0] border border-white/20 shadow-lg px-6 py-3 flex items-center justify-between text-white transition-transform duration-500 ${
          visible ? 'translate-y-0' : '-translate-y-[130%]'
        }`}
      >
        {/* Logo */}
        <Image src={logo} alt="Gestion comercial" width={50} height={50} />

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
        <div className={`animate__animated animate__slideInRight fixed top-[1px] left-[0px] right-4 h-[100%] w-[100%] z-51 bg-blue-900/70 backdrop-blur-md shadow-lg p-4 flex flex-col items-center justify-center gap-4 md:hidden`}>
          <Image src={logo} alt="Gestion comercial" width={120} height={70} className='absolute top-[20px]' />
          <span onClick={() => { setOpen(!open) }} className='fixed top-[5px] right-[15px] text-white cursor-pointer text-[2rem]'>×</span>
          <a href="#hero" onClick={() => setOpen(false)} className="font-medium text-white text-[3rem] hover:text-blue-300 transition text-center w-[100%] pb-4 border-b-2">Inicio</a>
          <a href="#services" onClick={() => setOpen(false)} className="font-medium text-white text-[3rem] hover:text-blue-300 transition text-center w-[100%] pb-4 border-b-2">Servicios</a>
          <a href="#about" onClick={() => setOpen(false)} className="font-medium text-white text-[3rem] hover:text-blue-300 transition text-center w-[100%] pb-4 border-b-2">Nosotros</a>
          <a href="#contact" onClick={() => setOpen(false)} className="font-medium text-white text-[3rem] hover:text-blue-300 transition text-center w-[100%] pb-4 border-b-2">Contacto</a>
          <h4 className='absolute bottom-[2rem] text-sm text-gray-400 text-center p-4'>
            Especialistas en habilitaciones comerciales.
          </h4>
        </div>
      )}
    </>
  )
}
