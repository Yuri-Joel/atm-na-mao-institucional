"use client"

import { MessageSquare, TrendingUp, Users, BarChart3 } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: MessageSquare,
    title: "Estratégias Integradas",
    description: "Comunicação consistente em todos os canais",
  },
  {
    icon: TrendingUp,
    title: "Gestão de Imagem",
    description: "Monitorização e proteção da reputação",
  },
  {
    icon: Users,
    title: "Engajamento",
    description: "Conexão autêntica com seu público",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Decisões baseadas em insights reais",
  },
]

export function InstitutionalCommunication() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full bg-[#00D9C8]/10 border border-[#00D9C8]/30">
                <span className="text-sm font-semibold text-[#002f64] ">COMUNICAÇÃO INSTITUCIONAL</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#002f64]  leading-tight text-balance">
                Construa uma Marca Forte e Consistente
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed text-pretty">
                Nossa expertise em comunicação institucional garante que sua mensagem chegue ao público certo, no
                momento certo, com o impacto certo.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#0046FF]/10">
                      <feature.icon className="w-5 h-5 text-[#002f64] " />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002f64]  mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image card */}
            <div className="relative">
              <div className="h-full flex items-center justify-center relative">
              <Image src="/pessoa1.png" alt="Pessoa" className="mb-10 z-1" width={800} height={800} />
              <div className="bg-blue-400 w-[300px] h-[300px] rounded-full animate-ping absolute"/>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#00D9C8] to-[#5FFFE8] rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
