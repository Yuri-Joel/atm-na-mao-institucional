"use client"

import { useEffect, useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import type { CarouselApi } from "@/types/carrocel";
import { Sparkles, TrendingUp, Users, Zap } from "lucide-react"


const slides = [
  {
    icon: Sparkles,
    id: 0,
    text: "Inovação Digital",
    description: "Soluções tecnológicas de ponta",
    bg: "blue",
    image: "/11.jpg",
  },
  {
    icon: TrendingUp,
    id: 1,
    text: "Crescimento Garantido",
    description: "Resultados mensuráveis e escaláveis",
    bg: "red",
    image: "/13.jpg",
  },
  {
    icon: Users,
    id: 2,
    text: "Engajamento Total",
    description: "Conecte-se com seu público",
    bg: "green",
    image: "/12.jpg",
  },
  {
    icon: Zap,
    id: 3,
    text: "Performance Máxima",
    description: "Otimização em tempo real",
    bg: "orange",
    image: "/10.jpg",
  },
]
export default function Home() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const pluginRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

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
    <main className="w-full bg-black overflow-hidden  h-[30vh] md:h-[70vh] ">
      <Carousel
        setApi={setApi}
        className="relative w-full overflow-hidden  h-[30vh] md:h-[70vh] "
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[pluginRef.current]}
      >
        <CarouselContent className="w-full h-[30vh] md:h-[70vh]  ">
          {slides.map((slide) => {
            const Icon = slide.icon
            return (
              <CarouselItem key={slide.id} 
              style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundRepeat: "no-repeat",      
                  backgroundSize: "cover",          
                  backgroundPosition: "center",    
                }}
               className="relative bg-black w-full h-full flex items-center md:justify-center bg-cover bg-center">

                <div
                  className={`relative w-full h-full flex items-center md:justify-center md:px-30 bg-gradient-to-br ${slide.bg}`}
                >
                  <div className="relative sm:px8-3 z-10 text-center text-white w-full md:px-4 max-w-2xl">
                    <h1 className="text-2xl md:text-6xl font-bold mb-4 text-balance">{slide.text}</h1>
                    <p className="text-1xl md:pt-5 md:text-2xl text-white/90">{slide.description}</p>
                  </div>
                </div>

                 <div className="absolute inset-0 bg-[#021d3d] opacity-60"  />
 <div className="absolute inset-0 bg-cover bg-left bg-[url('/linhas.png')] opacity-40"  />

              </CarouselItem>
            )
          })}
        </CarouselContent>


        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 rounded-full transition-all ${
                index === current ? "bg-white w-2 h-2" : "bg-white/50 w-2 h-2 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </main>
  )
}
