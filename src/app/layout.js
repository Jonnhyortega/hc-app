import "./globals.css";
import { Inter, Instrument_Serif } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif-display',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

const GA_ID = 'G-0S1RVV2XKX'

export const metadata = {
  title: 'HC Gestión Comercial | Habilitaciones comerciales en CABA',
  description:
    'Asesoramiento integral para habilitaciones de comercios, industrias, depósitos y oficinas en la Ciudad de Buenos Aires. Del análisis del local a la obtención de la oblea.',
  keywords: [
    'habilitaciones comerciales',
    'habilitación CABA',
    'habilitación de comercios',
    'habilitación industrial',
    'gestoría habilitaciones Buenos Aires',
  ],
  openGraph: {
    title: 'HC Gestión Comercial | Habilitaciones comerciales en CABA',
    description:
      'Asesoramiento integral para habilitar tu comercio o industria en la Ciudad de Buenos Aires.',
    locale: 'es_AR',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a1628',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body className={`${inter.variable} ${serif.variable} font-sans antialiased`}>
        {children}

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
