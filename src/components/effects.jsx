'use client'

import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const hasFinePointer = () => window.matchMedia('(pointer: fine)').matches

// Botón "magnético": se desplaza levemente hacia el cursor.
export function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !hasFinePointer()) return

    const onMove = e => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }
    const onLeave = () => {
      el.style.transform = ''
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return (
    <span
      ref={ref}
      className={`inline-flex transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </span>
  )
}

// Tarjeta con brillo que sigue al cursor (ver .spotlight en globals.css).
export function SpotlightCard({ children, className = '', ...props }) {
  const ref = useRef(null)

  const onMove = e => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight ${className}`} {...props}>
      {children}
    </div>
  )
}

// Contenedor cuyo hijo se desplaza más lento que el scroll.
export function Parallax({ children, speed = 0.15, className = '' }) {
  const wrapRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    let frame = 0

    const update = () => {
      frame = 0
      const wrap = wrapRef.current
      const inner = innerRef.current
      if (!wrap || !inner) return
      const r = wrap.getBoundingClientRect()
      const center = r.top + r.height / 2 - window.innerHeight / 2
      // La imagen está agrandada un 18%: se limita el desplazamiento para no mostrar los bordes
      const max = r.height * 0.09
      const y = Math.max(-max, Math.min(max, center * -speed))
      inner.style.transform = `translate3d(0, ${y}px, 0) scale(1.18)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return (
    <div ref={wrapRef} className={className}>
      <div ref={innerRef} className="absolute inset-0 scale-[1.18]">
        {children}
      </div>
    </div>
  )
}

// Devuelve el avance (0 a 1) del scroll sobre un elemento.
export function useScrollProgress(ref, { start = 0.8, end = 0.4 } = {}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0

    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const from = vh * start
      const to = vh * end - r.height
      // Redondeado: si el valor no cambia, React no vuelve a renderizar la sección
      setProgress(Math.round(Math.min(1, Math.max(0, (from - r.top) / (from - to))) * 100) / 100)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref, start, end])

  return progress
}
