import Chatbot from '@/components/chatbot'
import Faq from '@/components/faq'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Process from '@/components/process'

const context_chatbot = `
Sos HC IA, bot asistente de chat para gestion de habilitaciones comerciales.

Te dejo preguntas frecuentes que te van a realizar los clientes, si te hacen alguna pregunta parecida necesito que respondas con la siguiente informacion.

1- Necesito habilitar mi local? ¿Qué pasa si no lo hago?
Sí, todo local comercial debe estar habilitado para funcionar legalmente. No hacerlo puede derivar en clausuras, multas o inspecciones.

2- ¿Qué tipo de habilitación necesito según mi actividad?
Depende del rubro. Algunos rubros van por trámite a través del Registro de Actividades Económicas (RAE) y otros requieren habilitación especial, como gastronomía, salud, estética, gimnasios, etc.

3- ¿Cuánto demora el trámite de habilitación?
Puede tardar entre 15 y 90 días, dependiendo del tipo de trámite, si hay observaciones, inspecciones o si se hace por declaración responsable.

4- ¿Puedo empezar a trabajar mientras hago el trámite?
En algunos casos sí, si accedés al sistema de habilitación con Declaración Responsable, podés operar mientras finalizás la gestión.

5- ¿Qué documentación necesito para iniciar el trámite?
DNI del titular o CUIT si es persona jurídica
Contrato de alquiler o escritura
Plano del local
Certificado de dominio
Certificado de uso conforme
Habilitaciones anteriores (si las hay)

6- ¿El local debe tener baño para discapacitados?
Depende de la superficie y la actividad. Locales de atención al público mayores a ciertos m² deben incluirlo.

7- ¿Necesito planos? ¿Quién los hace?
Sí, la mayoría de los trámites requieren planos firmados por un profesional matriculado (arquitecto, MMO o ingeniero).

8- ¿Qué superficie máxima puedo tener sin habilitación técnica compleja?
En general, hasta 50 m² para rubros simples, pero depende del uso y zona.

9- ¿Dónde puedo hacer el trámite?
Online a través del Sistema de Tramitación a Distancia (TAD) del GCBA o con profesional habilitado.

10- ¿Quién me puede ayudar con todo esto?
Arquitectos, gestores o consultoras especializadas en habilitaciones.
`

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Chatbot context={context_chatbot} />
      <a  
          href='https://wa.link/kwvfsq'
          target='_blank'
          className="fixed bottom-24 right-6 z-39 flex items-center space-x-2 cursor-pointer bg-blue-900/70 p-5 rounded-full text-white shadow-lg hover:bg-blue-900 focus:outline-none"
          aria-label="Abrir chat"
        >
          <img width="25" height="25" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
        </a>

      <main className="w-full flex flex-col">
        <Process />
        <Faq />
        {/* Otras secciones aquí, todas full-width, con sus propios <div className="container mx-auto"> */}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        {/* … */}
      </footer>
    </div>
  )
}
