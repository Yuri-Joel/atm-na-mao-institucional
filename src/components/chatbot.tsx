'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, X, RotateCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { connectSocket, getSocket} from '@/services/socket'



/**
 * Interface da mensagem
 */
interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chatbot() {

  /**
   * Estados
   */
  const [isOpen, setIsOpen] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    
  ])

  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)


  /**
   * Scroll automático
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])


  /**
   * Conectar socket
   */
  useEffect(() => {

    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token") || "public-user"
        : "public-user"

    const socket = connectSocket(token, "consultas")


socket.on("assistant:typing", (status: boolean) => {
  setIsLoading(status);
});

    /**
     * Receber mensagem do bot
     */
   socket.on("assistant:reply", (data)  => {

      const botMessage: Message = {
        id: Date.now().toString(),
        text: data.reply,
        sender: "bot",
        timestamp: new Date(),
      }

     
      setMessages(prev => [...prev, botMessage])

      setIsLoading(false)

       // 🎵 toca som
  messageAudio.current?.play().catch(err => console.log("Erro ao tocar som:", err));
    })


    /**
     * Limpeza
     */
    return () => {
      socket.off("assistant:reply")
    }

  }, [])



  /**
   * Enviar mensagem
   */
  const handleSendMessage = (e: React.FormEvent) => {

    e.preventDefault()

    if (!inputValue.trim()) return

    const socket = getSocket()

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    /**
     * Atualizar UI
     */
    setMessages(prev => [...prev, userMessage])

    setIsLoading(true)


   socket.emit("assistant:message", {
  message: inputValue,
});
    setInputValue('')
  }



const messageAudio = useRef<HTMLAudioElement | null>(null);

useEffect(() => {
  messageAudio.current = new Audio("/sounds/sound_message.mp3");
}, []);

  /**
   * UI
   */
  return (
    <>
      {/* Botão flutuante */}
   {/* ================= CHAT BOX ================= */}
      <div
        className={`fixed bottom-24 right-6 w-[380px] h-[520px]rounded-2xl shadow-2xl transition-all duration-500 transform z-40 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-10 pointer-events-none"
        }`}
      >
      
      </div>

      {/* ================= BOTÃO FLUTUANTE ================= */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

        {/* Texto lateral animado */}
        {!isOpen && (
          <div className="bg-red-500 text-white text-sm px-4 py-2 rounded-full shadow-lg animate-pulse transition-all duration-300">
            Tem uma dúvida?
          </div>
        )}

        {/* Botão principal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative rounded-full shadow-xl transition-all duration-300 flex items-center justify-center text-white ${
            isOpen
              ? "bg-red-500 hover:bg-red-600 rotate-90 w-12 h-12"
              : "bg-gradient-to-br from-red-500 to-red-700 hover:scale-110 hover:shadow-2xl w-18 h-18"
          }`}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <img
              src="/agente.png"
              alt="Assistente"
              className="w-16 h-16 object-contain rounded-full"
            />
          )}
        </button>
      </div>


      {/* Janela */}
      {isOpen && (

        <div className="fixed bottom-24 md:right-6 w-full md:w-96 h-[75vh] md:h-[500px] bg-white rounded-4xl shadow-2xl flex flex-col overflow-hidden z-40 border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-300">


          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 flex items-center justify-between">

            <div className="flex justify-between items-center gap-2 w-full">



<div className='flex items-center gap-2'>
        <div
        onClick={() => setIsOpen(!isOpen)}
        className={` w-12 h-12 cursor-pointer rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
         'bg-gradient-to-br border-white border-2  bg-cover bg-left bg-[url(/agente.png))] from-red-500 to-r-600 hover:shadow-xl hover:scale-110'
        } text-white z-40`}
      />
              <div>
                <h3 className="font-semibold text-sm">
                  Suzana
                </h3>

                <p className="text-xs text-blue-100">
                  Online
                </p>
              </div>
</div>

<div>
  <Button 
   onClick={() => setIsOpen(!isOpen)}
  className='bg-white text-red-600 w-8 h-8'>
    <X size={28} />
  </Button>
</div>


            </div>
          </div>



          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
         {messages.map((message, idx) => {
  const prevMessage = messages[idx - 1];
  const isDifferentSender = prevMessage?.sender !== message.sender;

  return (
    <div
      key={message.id}
      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} ${
        isDifferentSender ? "mt-4" : "mt-1"
      }`} // <--- aqui ajusta espaço entre diferentes senders
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
          message.sender === "user"
            ? "bg-red-500 text-white rounded-br-none"
            : "bg-white text-gray-900 border border-gray-200 rounded-bl-none whitespace-pre-line"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
})}


            {/* Loading */}
       {isLoading && (
  <div className="flex justify-start">
    <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
      </div>
    </div>
  </div>
)}

            <div ref={messagesEndRef} />

          </div>



          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 p-4 bg-white flex gap-2"
          >

                  <Button
                    type="button"
                    onClick={()=>{
                      setInputValue("")
                    }}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-red-500 hover:bg-red-700 text-white"
                    >
                    <RotateCw size={18} />
                  </Button>

            <Input
              value={inputValue}
              onChange={(e) =>
                setInputValue(e.target.value)
              }
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
              className="flex-1"
            />


            <Button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-red-500 hover:bg-red-700 text-white"
            >

              <Send size={18} />

            </Button>

          </form>


        </div>

      )}

    </>
  )
}
