
export default function Hero() {
  return (
    <div className="relative h-screen w-scren bg-fixed bg-center bg-cover " style={{
      backgroundImage: "url('/hero-background.webp')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      WebkitBackgroundSize: "cover", // Safari
      WebkitBackgroundAttachment: "fixed", // Safari
      WebkitFlexDirection: "column", // Safari < 9
      msFlexDirection: "column", // IE11
      flexDirection: "column",
      WebkitAlignItems: "center", // Safari < 9
      msFlexAlign: "center", // IE11
      alignItems: "center",
      WebkitJustifyContent: "center", // Safari < 9
      msFlexPack: "center", // IE11
      justifyContent: "center",
      gap: "1rem",
      msGridRowGap: "1rem", // IE11
      msGridColumnGap: "1rem", // IE11
      position: "relative",
      WebkitTransform: "translateZ(0)", // Safari, mejora renderizado
      transform: "translateZ(0)",
    }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight drop-shadow-[5px_5px_5px_black]">
          HABILITACIONES<br /> MUNICIPALES
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl font-bold text-white/90 drop-shadow-[5px_5px_5px_black]">
          Asesoramos a comercios e industrias en la Ciudad de Buenos Aires para que inicien sus actividades con total legalidad y eficiencia.
        </p>
        <a
          href="https://wa.link/kwvfsq"
          className="mt-8 inline-block rounded-md bg-blue-500 px-8 py-3 text-lg font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Contactanos
        </a>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-24 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* Layer 1 */}
          <path
            fill="#0A2540"
            d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,144C672,149,768,171,864,165.3C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          {/* Layer 2 (lighter) */}
          <path
            fill="#0F2A55"
            fillOpacity="0.7"
            d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,117.3C672,128,768,160,864,170.7C960,181,1056,171,1152,160C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          {/* Layer 3 (even lighter) */}
          <path
            fill="#1550A0"
            fillOpacity="0.5"
            d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,149.3C672,160,768,192,864,181.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
