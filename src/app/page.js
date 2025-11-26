import AboutUs from '@/components/aboutUs'
import Chatbot from '@/components/chatbot'
import Contacto from '@/components/contact'
import Faq from '@/components/faq'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Process from '@/components/process'
import Services from '@/components/services'



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
        hola
      </section>
      {/* <Chatbot /> */}
        <a  
          href='https://wa.link/kwvfsq'
          target='_blank'
          className="fixed bottom-24 right-6 z-39 flex items-center space-x-2 cursor-pointer bg-blue-900/70 p-5 rounded-full text-white shadow-lg hover:bg-blue-900 focus:outline-none"
          aria-label="Abrir chat"
        >
          <img width="25" height="25" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
        </a>

      <main className="w-full flex flex-col">
        <section id="about">
          <AboutUs />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contacto />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
