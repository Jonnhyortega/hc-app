'use client'

import Logo from "./utils/logo"

export default function AboutUs() {
  return (
    <div className="relative bg-blue-900/70 text-white text-justify">
      {/* Clip-path superior */}
      <div className="absolute top-0 left-0 w-full h-20 bg-blue-900/50 z-10" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} />

      {/* Contenido principal */}
      <div className="relative z-20 py-20 px-4 sm:px-10 lg:px-24 max-w-6xl mx-auto">
        {/* Título estilizado */}
        {/* <div className="mb-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wider font-mono">
            <span className="border-b-2 border-white pb-2 inline-block">HC</span>{' '}
            <span className="text-xl sm:text-2xl font-light tracking-widest uppercase">comercial</span>
          </h1>
        </div> */}

        <Logo />

        {/* Párrafos */}
        <p className="mb-6 leading-relaxed">
          Somos una empresa proveedora de servicios de asesoramiento para la gestión de habilitaciones de comercios e industrias en la ciudad de Buenos Aires. 
          Con años de experiencia en el sector, nos especializamos en guiar a nuestros clientes a través del complejo proceso de habilitaciones comerciales, asegurando que cada paso se realice de manera eficiente y cumpliendo con todas las normativas vigentes.
        </p>

        <p className="leading-relaxed">
          Nuestro equipo de expertos está capacitado para manejar desde las habilitaciones más simples hasta las más complejas, incluyendo aquellos casos que requieren permisos especiales o licencias adicionales. 
          Nos enfocamos en brindar un servicio personalizado, adaptándonos a las necesidades específicas de cada negocio, ya sea un local comercial, una oficina, un taller o una industria. 
          Ofrecemos asesoramiento en todos los aspectos relacionados con las habilitaciones, desde el análisis inicial del local hasta la obtención de la oblea que permite el funcionamiento legal del negocio.
        </p>
      </div>

      {/* Clip-path inferior */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-blue-900/90 z-10" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </div>
  )
}
