"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const services = [
  {
    title: "Comunicação Institucional e Gestão da Imagem",
    color: "from-[#00D9C8] to-[#5FFFE8]",
    items: [
      "Estratégias integradas de comunicação",
      "Campanhas publicitárias refletindo a missão e valores",
      "Monitorização e gestão da imagem institucional",
      "Conteúdos consistentes e relevantes em várias plataformas",
    ],
  },
  {
    title: "Engajamento e Atração de Novo Público",
    color: "from-[#00D9C8] to-[#5FFFE8]",
    items: [
      "Estratégias de marketing digital para captar e fidelizar clientes",
      "Programas de fidelização e recompensas",
      "Campanhas interativas em redes sociais e plataformas digitais",
      "Análise de dados para identificar tendências e adaptar a comunicação",
    ],
  },
]

export function Services() {
  return (
    <section className="w-full py-20 px-4 bg-slate-50">

    {/* Stats */}
    <div className="w-full flex items-center justify-center">
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-20 mt-16">
            {[
              { number: "50+", label: "Clientes Ativos" },
              { number: "200+", label: "Projetos Concluídos" },
              { number: "15+", label: "Anos de Experiência" },
              { number: "98%", label: "Satisfação" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#002f64] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
 </div>

      <div className="max-w-6xl mx-auto pt-30">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002f64] mb-4 text-balance">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 text-balance">Soluções completas para o crescimento do seu negócio</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Gradient Header */}
             
              <CardHeader className="p-2 px-6 border-b">
                <CardTitle
                  className="text-xl font-bold text-gray-900 transition-all"
                >
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#002f64] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
