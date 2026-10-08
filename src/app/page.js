import { FaWhatsapp } from 'react-icons/fa'
import AboutUs from '@/components/aboutUs'
import Contacto from '@/components/contact'
import Faq from '@/components/faq'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Process from '@/components/process'
import Services from '@/components/services'
import { site } from '@/lib/site'
import { Magnetic } from '@/components/effects'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Process />
        <Faq />
        <Contacto />
      </main>
      <Footer />

      <div className="fixed bottom-5 right-5 z-40">
        <span className="absolute inset-0 motion-safe:animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s]" />
        <Magnetic strength={0.4}>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp"
            aria-label="Escribinos por WhatsApp"
          >
            <FaWhatsapp className="h-7 w-7" />
          </a>
        </Magnetic>
      </div>
    </>
  )
}
