'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import logo from '@/img/logo-2-removebg-preview.png'
import { navLinks, site } from '@/lib/site'
import { Magnetic } from './effects'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onEsc = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? 'border border-white/10 bg-ink/80 shadow-xl shadow-ink/10 backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
        aria-label="Principal"
      >
        <a href="#inicio" className="flex items-center gap-3" aria-label="HC Gestión Comercial, inicio">
          <Image src={logo} alt="" width={44} height={32} priority className="h-8 w-auto" />
          <span className="hidden text-sm font-medium leading-tight text-white/90 sm:block">
            Gestión de
            <br />
            habilitación comercial
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic strength={0.2}>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-brand-50"
            >
              Consultar
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </Magnetic>
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-8 pt-7">
          <Image src={logo} alt="HC Gestión Comercial" width={44} height={32} className="h-8 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10"
            aria-label="Cerrar menú"
            tabIndex={open ? 0 : -1}
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
        </div>
        <ul className="mt-12 flex flex-col px-8">
          {navLinks.map((l, i) => (
            <li
              key={l.href}
              className={`border-b border-white/10 transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="block py-5 font-serif text-4xl text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute inset-x-8 bottom-10">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-semibold text-ink"
          >
            Hablar con un asesor
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <p className="mt-4 text-center text-sm text-white/50">Especialistas en habilitaciones en CABA</p>
        </div>
      </div>
    </header>
  )
}
