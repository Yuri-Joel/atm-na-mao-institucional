"use client"

import { useEffect, useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import type { CarouselApi } from "@/types/carrocel";
import { Globe, Smartphone, Check, Zap } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"


export function DigitalInnovation() {

const additionalServices = ["Realização de estudos de mercado", "Treinamento de equipe", "Eventos e workshops"]
const innovations = [
  {
    icon: Globe,
    title: "Profissionalização do Site",
    items: [
      "Redesign completo com interface intuitiva",
      "SEO otimizado para maior visibilidade",
      "Funcionalidades avançadas (chatbots, fóruns de suporte)",
      "Áreas de acesso exclusivo para clientes",
    ],
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    items: [
      "Desenvolvimento de apps nativos",
      "Experiência mobile otimizada",
      "Integração com sistemas existentes",
      "Notificações push personalizadas",
    ],
  },
]

  const [api, setApi] = useState<CarouselApi|null>()
  const [current, setCurrent] = useState(0)
  const pluginRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  
  return (
    <section className="w-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
       {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0046FF]/10 border border-[#0046FF]/20 mb-6">
            <Zap className="w-4 h-4 text-[#0046FF]" />
            <span className="text-sm font-semibold text-[#0046FF]">
              INOVAÇÃO DIGITAL
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0046FF] mb-6 text-balance">
            Tecnologia que Transforma Negócios
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed text-pretty">
            Soluções digitais avançadas para levar sua empresa ao próximo nível
          </p>
        </div>

        <div className="screen grid md:grid-cols-2 grid-cols-1 gap-3 w-full">
       {innovations.map((innovation, index) => {
                const Icon = innovation.icon
                return (
                 <Card className="h-full border-2 border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <CardHeader className="bg-[#002f64] text-white relative overflow-hidden flex items-center w-full h-[90px]">
                      
                        <div className="relative flex items-center gap-4 ">
                          <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-pretty">{innovation.title}</h3>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-8 pb-8">
                        <ul className="space-y-4">
                          {innovation.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex gap-3 items-start">
                              <div className="flex-shrink-0 mt-1">
                                <Check className="w-5 h-5 text-green-500" />
                              </div>
                              <span className="text-slate-700 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                )
              })}
           
        </div>
      </div>

 <section className="w-full py-40 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0046FF] mb-4 text-balance">Serviços Adicionais</h2>
          <p className="text-xl text-gray-600 text-balance">Complementos essenciais para o sucesso do seu projeto</p>
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {additionalServices.map((service, index) => (
            <Card
              key={index}
              className=" border-blue-200 flex gap-4 border-2 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-slate-50 to-slate-100"
            >
           
              <CardContent className="pt-2 pb-2 px-2">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-gray-900 leading-relaxed">{service}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    </section>
  )
}


  