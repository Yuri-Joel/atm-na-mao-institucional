"use client"

import Image from "next/image"
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const Footer =()=> {
  const anoAtual = new Date().getFullYear()
  const numeroWhatsApp = "244923456789"
  const nav = useRouter()
  
const info_ = [
        {
          icone: MapPin,
          titulo: "Localização",
          descriptions:"ONDE ESTAMOS",
          detalhes: "Zango 3, Projecto Kamgamba, Rua 16",
        },
        {
          icone: Phone,
          titulo: "Telefone",
          descriptions:"CONTACTO TELEFÓNICO",
          detalhes: "+244 975 817 186",
        },
        {
          icone: Mail,
          titulo: "EMAIL",
          descriptions:"EMAIL",
          detalhes: "sinfa373@gmail.com",
        },
      ]

  return (
    <>
    <footer id="#contacts" className="relative bg-[#070c16] text-white md:pt-10 pt-6 pb-6  text-sm font-sans overflow-hidden w-full flex items-center justify-center">

      {/* BACKGROUND DO PRIMEIRO DESIGN */}
      <div className="absolute inset-0 bg-cover bg-left opacity-30 bg-[url('/images/linhas.png')]" />

      <div className="flex flex-col items-center justify-center relative z-10  px-4  w-full">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1  w-full md:flex md:justify-start md:gap-5 ">

          {/* COLUNA 1: LOGO + TEXTO */}
          <div className="sm:w-full px-40">
            <Link href="/" className="flex items-center sm:w-full gap-2">
              <Image
                src="/logogeral.png"
                alt="Logo"
                width={60}
                height={60}
                className="border rounded-md bg-white"
              />
            </Link>

          </div>

          {/* COLUNA 2–5: LINKS */}
          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4 py-4 w-full">

            {/* SOBRE */}
            <div>
              <h4 className="font-bold mb-1 text-white">Sobre a Empresa</h4>
              <ul className="flex pt-2 flex-col mt-5 gap-2 text-gray-400">
                <li className=""><Link target="_blank" href="https://suez.ao/"  className="hover:text-emerald-400 transition">suez inovações</Link></li>
            
            </ul>
            </div>


            {/* CONTACTOS */}
            <div className="sm:w-full">
              <h4 className=" font-bold mb-4 text-white">Contactos</h4>
              <ul className="flex pt-2 flex-col mt-5 gap-2 text-gray-400 text-sm">
                <li className="flex gap-3"><Phone size={18} />+244 930 184 929</li>
                <li className="flex gap-3"><Mail size={18} /> geral@suez.ao</li>
              </ul>
            </div>

                {/* SOLUÇÕES */}
            <div>
              <h4 className="font-bold mb-4 text-white">Ir para</h4>
              <ul className="flex pt-2 flex-col mt-5 gap-2 text-gray-400">
                <li className=""><Link target="_blank" href="https://atmn.ao/"  className="hover:text-emerald-400 transition">ATM na mão web</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div className="w-full border-t border-gray-800 pt-8 pb-4 flex  md:flex-row justify-between items-start md:items-center gap-6">

          <div className="space-y-1 text-gray-500 text-xs">
            <p>© {anoAtual} SUEZ. Todos os direitos reservados.</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition"><Facebook size={18} /></a>
              <a href="#" className="hover:text-white transition"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={18} /></a>
            </div>
          </div>
        </div>

      </div>
    </footer> 
    </>
  )
}




 