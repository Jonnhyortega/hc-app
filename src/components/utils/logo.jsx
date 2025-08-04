'use client'

export default function Logo() {
  return (
    <section className="text-white py-20 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row items-center justify-evenly gap-6 px-4 max-w-6xl w-full">
        
        {/* <div className="relative text-[120px] sm:text-[180px] font-bold leading-none tracking-tight flex justify-center items-center sm:items-start logo-outline">
          <span>H</span>
          <span className="absolute left-13 filter drop-shadow-black">C</span>
        </div> */}

        <div className="text-center border-t border-b border-white py-4 sm:py-6 px-4 sm:px-8">
          <p className="uppercase tracking-widest font-semibold text-xl sm:text-2xl">Gestión</p>
          <p className="uppercase tracking-widest font-semibold text-xl sm:text-2xl">de habilitación</p>
          <p className="uppercase tracking-widest font-semibold text-xl sm:text-2xl">comercial</p>
        </div>
      </div>
    </section>
  )
}
