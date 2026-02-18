"use client"

import Image from "next/image"

export function Clients() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#002f64] mb-6 text-balance">Nossos Clientes</h2>
            <p className="text-xl text-gray-600 leading-relaxed text-pretty max-w-2xl mx-auto">
              Empresas que confiam na SUEZ para transformar sua comunicação e presença digital
            </p>
          </div>

          {/* Clients Grid */}
          <div className="p-4 overflow-hidden grid grid-cols-4 gap-8">
            <Image
              src="/sociais/1.png"
              alt="Clientes SUEZ"
              width={150}
              height={150}
              className=""
            />
   <Image
              src="/sociais/2.png"
              alt="Clientes SUEZ"
              width={150}
              height={100}
              className=""
            />
               <Image
              src="/sociais/3.png"
              alt="Clientes SUEZ"
              width={150}
              height={100}
              className=""
            />
               <Image
              src="/sociais/4.png"
              alt="Clientes SUEZ"
              width={150}
              height={100}
              className=""
            />
               <Image
              src="/sociais/5.png"
              alt="Clientes SUEZ"
              width={150}
              height={100}
              className=""
            />
               <Image
              src="/sociais/6.png"
              alt="Clientes SUEZ"
              width={150}
              height={100}
              className=""
            />
               <Image
              src="/sociais/7.png"
              alt="Clientes SUEZ"
              width={150}
              height={100}
              className=""
            />
            
          </div>

        </div>
      </div>
    </section>
  )
}
