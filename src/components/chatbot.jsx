'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import callChatAPI from '@/utils/chatbot'
import 'animate.css'

const botSound = typeof Audio !== 'undefined' ? new Audio('/sounds/bot-response.mp3') : null

const context_chatbot = `
Sos HC IA, el asistente virtual oficial de HC Gestión Comercial.

Tu tarea es ayudar a los visitantes del sitio web a comprender el proceso de habilitación de comercios e industrias en CABA.

Respondé siempre con un tono claro, profesional y accesible para todo público.

Respondé de forma breve pero completa. Siempre ofrecé contactar al equipo humano cuando sea necesario.

Si el usuario realiza una pregunta que coincide o se parece a una de estas preguntas frecuentes, respondé con la información correspondiente:

1. ¿Necesito habilitar mi local?
Sí. Todo local comercial debe estar habilitado legalmente. No hacerlo puede implicar clausura, multas o inspecciones.

2. ¿Qué tipo de habilitación necesito?
Depende del rubro. Algunos rubros se habilitan vía RAE, otros requieren trámites especiales (gastronomía, salud, etc.).

[...]

10. ¿Quién me puede ayudar con esto?
Arquitectos, gestores o consultoras especializadas como HC Gestión Comercial.

Si el usuario hace una pregunta que no podés responder con seguridad, ofrecé derivar la consulta a un especialista de HC a través de WhatsApp o correo electrónico.

Nunca inventes información. Si no sabés, derivá.
`

export default function Chatbot() {
  const initialBotMessage = '¡Hola! ¿En qué te puedo ayudar hoy? 🙌🏽'
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', content: initialBotMessage },
  ])
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  const quickReplies = [
    '¿Qué necesito para la habilitación?',
    '¿Cómo puedo contactarme con un asesor?'
  ]

  const toggleChat = () => setChatOpen(o => !o)

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(scrollToBottom, [messages, scrollToBottom])

  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && setChatOpen(false)
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  const send = async text => {
    setMessages(m => [...m, { from: 'user', content: text }])
    setHistory(h => [...h, { role: 'user', content: text }])
    setLoading(true)

    let reply
    switch (text) {
      case '¿Cómo puedo contactarme con un asesor?':
        reply = (
          <span>
            Podés contactarnos haciendo clic aquí:&nbsp;
            <a
              href="https://wa.link/kwvfsq"
              className="text-blue-700 font-medium hover:underline"
            >
              Asesoramiento por whatsapp
              <img width="20" height="20" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
            </a>
          </span>
        )
        break
      case '¿Qué necesito para la habilitación?':
        reply = (
          <ul className="list-disc list-inside text-gray-700">
            <li>Inscripción en AFIP (CUIT).</li>
            <li>Inscripción en Ingresos Brutos (IIBB CABA).</li>
            <li>Contrato de alquiler o título de propiedad.</li>
            <li>Documentación societaria (si corresponde).</li>
          </ul>
        )
        break
      default:
        try {
          reply = await callChatAPI(text, history, context_chatbot)
        } catch {
          reply = 'Lo siento, hubo un error al procesar tu consulta. Intenta nuevamente.'
        }
    }

    setMessages(m => [...m, { from: 'bot', content: reply }])
    setHistory(h => [
      ...h,
      { role: 'assistant', content: typeof reply === 'string' ? reply : '' },
    ])

    // 🔊 Reproducir sonido si el bot respondió con texto plano
    if (typeof reply === 'string' && botSound) {
      botSound.currentTime = 0
      botSound.volume = 0.7
      botSound.play().catch(() => {})
    }

    setLoading(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const v = input.trim()
    if (!v) return
    send(v)
    setInput('')
  }

  return (
    <>
      {!chatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 cursor-pointer bg-blue-900/70 p-5 rounded-full text-white shadow-lg hover:bg-blue-900 focus:outline-none"
          aria-label="Abrir chat"
        >
          <img 
            width="25" 
            height="25" 
            src="https://img.icons8.com/ios-filled/50/chatgpt.png" 
            alt="chatgpt"
          />
        </button>
      )}

      {chatOpen && (
        <div
          className="fixed bottom-0 inset-1 z-40 flex items-end justify-end p-4"
          onClick={toggleChat}
        >
          <div
            className="relative w-full max-w-sm bg-white/10 backdrop-blur-[16px] backdrop-saturate-[180%] border border-white/20 rounded-xl shadow-xl flex flex-col animate__animated animate__slideInUp"
            onClick={e => e.stopPropagation()}
          >
            <header className="flex items-center justify-between px-4 py-2 bg-blue-800 text-white rounded-tl-lg rounded-tr-lg">
              <h3 className="text-lg font-semibold">Asistente</h3>
              <button onClick={toggleChat} className="text-xl leading-none cursor-pointer">
                ×
              </button>
            </header>

            <div className="h-[400px] overflow-y-auto px-4 py-2 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.from === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-lg ${
                      m.from === 'user'
                        ? 'bg-blue-800 text-white'
                        : 'bg-gray-100 text-gray-800'
                    } animate__animated animate__fadeIn`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="w-10 h-10 border-4 border-blue-800 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            <div className="px-4 py-2 border-t border-gray-200 space-x-2 flex flex-wrap gap-1">
              {quickReplies.map((q, i) => (
                <button
                  key={i}
                  onClick={() => send(q)}
                  className="inline-block cursor-pointer bg-blue-100 text-blue-800 px-3 py-1 rounded-sm text-sm hover:bg-blue-200"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center px-4 py-2 border-t border-gray-200"
            >
              <input
                type="text"
                className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu mensaje..."
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="ml-2 p-2 bg-blue-800 rounded-full text-white hover:bg-blue-900 focus:outline-none"
              >
                <ArrowUpIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
