'use client'

import { useEffect, useRef, useState } from 'react'

const W = 1440
const H = 320
const OBELISK_X = 720
const TWINKLE = ['tw-1', 'tw-2', 'tw-3', 'tw-4']

// Generador pseudoaleatorio con semilla: el skyline sale idéntico en servidor y cliente.
function rng(seed) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Arma edificios y ventanas como paths SVG (un solo nodo por grupo, mucho más liviano que cientos de <rect>).
function buildSkyline(seed, { minH, maxH, windowChance, gapAroundObelisk = 0 }) {
  const rand = rng(seed)
  let buildings = ''
  let edges = ''
  const windows = { static: '', 'tw-1': '', 'tw-2': '', 'tw-3': '', 'tw-4': '' }
  const antennas = []
  let x = -10

  while (x < W) {
    const w = 34 + Math.floor(rand() * 60)
    const center = x + w / 2
    const nearObelisk = gapAroundObelisk && Math.abs(center - OBELISK_X) < gapAroundObelisk
    const h = nearObelisk ? minH * 0.6 + rand() * 20 : minH + Math.floor(rand() * (maxH - minH))
    const top = H - h

    buildings += `M${x} ${H}V${top}h${w}V${H}z`
    edges += `M${x} ${top}h${w}`
    if (!nearObelisk && h > maxH * 0.8 && rand() > 0.5) antennas.push({ x: x + w / 2, y: top })

    const cols = Math.floor((w - 10) / 10)
    const rows = Math.floor((h - 16) / 14)
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rand() < windowChance) {
          const roll = rand()
          const group = roll < 0.42 ? TWINKLE[Math.floor(roll / 0.105)] : 'static'
          windows[group] += `M${x + 7 + c * 10} ${top + 10 + r * 14}h4v6h-4z`
        }
      }
    }
    x += w + 2 + Math.floor(rand() * 6)
  }
  return { buildings, edges, windows, antennas }
}


const OBELISK = `${OBELISK_X - 17},${H} ${OBELISK_X - 10},44 ${OBELISK_X},20 ${OBELISK_X + 10},44 ${OBELISK_X + 17},${H}`

const particles = Array.from({ length: 14 }, (_, i) => {
  const rand = rng(100 + i)
  return {
    left: `${(rand() * 100).toFixed(2)}%`,
    bottom: `${(10 + rand() * 30).toFixed(2)}%`,
    size: Math.round(1 + rand() * 2.5),
    dur: `${(7 + rand() * 8).toFixed(1)}s`,
    delay: `${(-rand() * 12).toFixed(1)}s`,
  }
})

const svgProps = {
  viewBox: `0 0 ${W} ${H}`,
  preserveAspectRatio: 'xMidYMax slice',
  className: 'absolute inset-0 h-full w-full',
}

function Skyline({ data, fill, edge, windowColor, windowOpacity, obelisk = false }) {
  return (
    <div className="relative h-full w-full">
      {/* Capa estática: edificios + ventanas fijas */}
      <svg {...svgProps}>
        {obelisk && (
          <>
            <polygon points={OBELISK} fill={fill} />
            <polyline points={OBELISK} fill="none" stroke="rgb(165 205 253 / 0.9)" strokeWidth="1.5" />
          </>
        )}
        <path d={data.buildings} fill={fill} />
        <path d={data.edges} stroke={edge} strokeWidth="1.2" fill="none" />
        {data.antennas.map((a, i) => (
          <rect key={i} x={a.x - 0.75} y={a.y - 22} width="1.5" height="22" fill={edge} />
        ))}
        <path d={data.windows.static} fill={windowColor} opacity={windowOpacity} />
      </svg>

      {/* Ventanas que titilan: cada grupo es su propia capa y solo anima opacity (GPU) */}
      {TWINKLE.map(cls => (
        <svg key={cls} {...svgProps} className={`${svgProps.className} ${cls} will-change-[opacity]`}>
          <path d={data.windows[cls]} fill={windowColor} opacity={windowOpacity} />
        </svg>
      ))}

      {/* Balizas */}
      <svg {...svgProps} className={`${svgProps.className} beacon will-change-[opacity]`}>
        {obelisk && <circle cx={OBELISK_X} cy="15" r="3" fill="#4f9cf9" />}
        {data.antennas.map((a, i) => (
          <circle key={i} cx={a.x} cy={a.y - 23} r="1.8" fill="#ff6b6b" />
        ))}
      </svg>
    </div>
  )
}

export default function CityScene({ className = '' }) {
  // Se genera en el navegador después de cargar: no suma peso al HTML ni demora la primera pintura
  const [city, setCity] = useState(null)
  useEffect(() => {
    setCity({
      far: buildSkyline(7, { minH: 90, maxH: 250, windowChance: 0.1 }),
      near: buildSkyline(21, { minH: 26, maxH: 105, windowChance: 0.18, gapAroundObelisk: 110 }),
    })
  }, [])

  const rootRef = useRef(null)
  const sceneRef = useRef(null)
  const layers = useRef([])

  // Pausa todas las animaciones cuando la escena no está en pantalla
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver(([entry]) => {
      root.toggleAttribute('data-paused', !entry.isIntersecting)
    })
    io.observe(root)
    return () => io.disconnect()
  }, [])

  // Inclinación 3D y paralaje por capas según el mouse
  useEffect(() => {
    const scene = sceneRef.current
    const area = scene?.closest('section, footer')
    if (!scene || !area) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    let target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let frame = 0

    const loop = () => {
      current.x += (target.x - current.x) * 0.06
      current.y += (target.y - current.y) * 0.06
      scene.style.transform = `rotateX(${current.y * -4}deg) rotateY(${current.x * 6}deg)`
      layers.current.forEach(el => {
        if (!el) return
        const depth = Number(el.dataset.depth)
        el.style.transform = `translate3d(${current.x * depth * -30}px, ${current.y * depth * -10}px, 0)`
      })
      frame =
        Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001
          ? requestAnimationFrame(loop)
          : 0
    }
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(loop)
    }
    const onMove = e => {
      const r = area.getBoundingClientRect()
      target = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 }
      kick()
    }
    const onLeave = () => {
      target = { x: 0, y: 0 }
      kick()
    }

    area.addEventListener('mousemove', onMove, { passive: true })
    area.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      area.removeEventListener('mousemove', onMove)
      area.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const layer = i => el => {
    layers.current[i] = el
  }

  return (
    <div ref={rootRef} aria-hidden className={`scene pointer-events-none select-none [perspective:1200px] ${className}`}>
      <div ref={sceneRef} className="relative h-full [transform-style:preserve-3d]">
        {/* Halo detrás de la ciudad */}
        <div className="absolute bottom-[90px] left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-brand/40 blur-[100px] sm:bottom-[110px]" />

        {/* Ciudad lejana con el Obelisco */}
        <div
          ref={layer(0)}
          data-depth="0.4"
          className="absolute inset-x-[-6%] bottom-[90px] h-[190px] opacity-90 will-change-transform sm:bottom-[110px] sm:h-[270px]"
        >
          {city && <Skyline data={city.far} fill="#11284d" edge="rgb(79 156 249 / 0.55)" windowColor="#7fb6fb" windowOpacity={0.6} obelisk />}
        </div>

        {/* Ciudad cercana */}
        <div
          ref={layer(1)}
          data-depth="1"
          className="absolute inset-x-[-8%] bottom-[90px] h-[120px] will-change-transform sm:bottom-[110px] sm:h-[170px]"
        >
          {city && <Skyline data={city.near} fill="#0b1a31" edge="rgb(79 156 249 / 0.6)" windowColor="#ffd88a" windowOpacity={0.8} />}
        </div>

        {/* Haz de inspección */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="scan-beam absolute bottom-[90px] top-[20%] w-24 bg-gradient-to-r from-transparent via-accent/25 to-transparent will-change-transform sm:bottom-[110px]">
            <div className="absolute inset-y-0 left-1/2 w-px bg-accent/70 shadow-[0_0_14px_2px] shadow-accent/60" />
          </div>
        </div>

        {/* Piso de plano en perspectiva: la grilla se desplaza con transform (sin repintar) */}
        <div className="absolute inset-x-0 bottom-0 h-[90px] overflow-hidden [perspective:260px] sm:h-[110px]">
          <div className="absolute inset-x-[-60%] bottom-0 h-[260%] origin-bottom overflow-hidden [transform:rotateX(72deg)] [mask-image:linear-gradient(to_top,black_10%,transparent_85%)]">
            <div className="blueprint-grid floor-move absolute inset-x-0 -top-16 bottom-0 will-change-transform" />
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        </div>

        {/* Partículas */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle absolute rounded-full bg-accent/70 shadow-[0_0_6px] shadow-accent will-change-transform"
            style={{ left: p.left, bottom: p.bottom, width: p.size, height: p.size, '--dur': p.dur, '--delay': p.delay }}
          />
        ))}
      </div>
    </div>
  )
}
