"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation";

export default function Header() {

  const [menuAberto, setMenuAberto] = useState(false)
  const pathname = usePathname();
  const itensNavegacao = [
    { nome: "Sobre", href:"/about" },
    { nome: "Funcionalidades", href: pathname!="/"?"/":"#funcionalidades" }
  ]


  return (
    <header
    id="#inicial"
      className="w-full  h-[85px] md:h-[150px] md:px-40 z-50 text-[white] top-0 fixed sticky" 
       >
      <nav className=" w-full h-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-black text-3xl group">
            <Image
                      src="/logogeral.png"
                      alt="Clientes SUEZ"
                      width={80}
                      height={80}
                      className="border rounded-md bg-white sm h-12 w-12"
                    />
        </Link>

        {/* Menu Desktop */}
        <div className="relative flex items-center justify-center">
          <section className="w-full bg-blue-700 absolute p-3 blur-2xl">
            
          </section>
            <section className="w-full bg-blue-700 absolute z-1">
            
          </section>
               <div className="hidden  md:flex items-center gap-8 z-2">
          {itensNavegacao.map((item) => (
            <Link
              key={item.nome}
              href={item.href}
              className="text-white hover:text-white cursor-pointer font-medium hover:texto-primario transicao-white"
            >
              {item.nome}
            </Link>
          ))}
        </div>
        </div>
   


        {/* Menu Mobile */}
        <button className="md:hidden  texto-primario" onClick={() => setMenuAberto(!menuAberto)} aria-label="Menu">
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Mobile Expandido */}
      {menuAberto && (
        <div
          className="md:hidden bg-[#0b204f] z-50 bg-cinza-light  w-full"
        >
          <div className="px-4 py-8 w-full bg-black  flex flex-col gap-10 space-y-8">
            {itensNavegacao.map((item) => (
              <Link
                key={item.nome}
                href={item.href}
                className="block texto-cinza h-full text-2xl hover:text-white  cursor-pointer font-medium py-2 hover:texto-primario transicao-suave"
                onClick={() => setMenuAberto(false)}
              >
                {item.nome}
              </Link>
            ))}
          </div>
        </div>
      )}

    </header>
  )
}
