"use client"

import React from "react";
import Hero from "@/components/hero";
import Image from "next/image";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowRight,
  ArrowUp,
  Download,
  MonitorDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Bell, User, Shield, Zap } from 'lucide-react'
import Link from "next/link";
import { useRouter } from "next/navigation";


const features = [
  {
    icon: MapPin,
    title: 'Rastreamento de ATMs',
    description: 'Localize ATMs próximos com precisão em tempo real. Veja a distância, localização e rotas exatas até o caixa automático mais próximo.',
    gradient: 'from-primary',
  },
  {
    icon: Navigation,
    title: 'Cálculo de Trajeto',
    description: 'Sistema de navegação com tempo estimado de trajeto. Escolha entre mota, carro ou a pé. Evite deslocações desnecessárias.',
    gradient: 'from-secondary',
  },
  {
    icon: Bell,
    title: 'Notificações em Tempo Real',
    description: 'Receba alertas sobre disponibilidade de serviços, mudanças de estado dos ATMs e informações importantes de forma instantânea.',
    gradient: 'from-primary',
  },
  {
    icon: User,
    title: 'Autenticação Segura',
    description: 'Sistema de registro e login seguro. Perfil personalizado com histórico de operações e preferências salvas.',
    gradient: 'from-secondary',
  },
  {
    icon: Shield,
    title: 'Adaptação Inteligente',
    description: 'Inteligência artificial que se adapta às diferentes realidades regionais. Recomendações personalizadas baseadas no seu comportamento.',
    gradient: 'from-primary',
  },
  {
    icon: Zap,
    title: 'Espaço Publicitário',
    description: 'Plataforma de anúncios para empresas. Oportunidades de monetização e comunicação com utilizadores ativos.',
    gradient: 'from-secondary',
  },
]




const Page = () => {

  const nav = useRouter()

  return (
    <>
      <main className="relative w-full px-4 md:px-30 bg-[#0B1221] flex flex-col items-center text-black">
        <div  className="w-[80%] rounded-[0px_0px_100%_100%] bg-blue-600 opacity-10 h-[300px] absolute blur-3xl">
            www
        </div>
        <main className="w-full flex flex-col justify-center gap-8 z-1">
          <section className="flex flex-col gap-3 ">
            <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
              Seu ATM <br></br> Sempre à Mão
            </h1>
            <p className="text-md text-white text-center">
              Localize <b>ATMs</b> próximos em tempo real,<br></br> verifique
              disponibilidade de saldo e serviços, e otimize seu tempo.<br></br>{" "}
              Acesso bancário mais simples e eficiente para cidadãos de Angola.
            </p>
          </section>
          <div className="w-full flex items-center justify-center text-white">
             <p>Disponível para <b>Android</b> e <b>IOS</b></p>
          </div>
          <section className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-center md:justify-center md:items-center">
            <div className="flex flex-col items-center justify-center relative sm:flex-row gap-4">
         
              <img src={"/button-android.png"} className=" cursor-pointer w-full  z-2 md:w-[250px] text-white h-12 px-8"/>
              <div className="bg-blue-400 absolute animate-ping md:w-[110px] shadow-blue-400 rounded-md h-9"></div>
            </div>

             <div className="flex flex-col items-center justify-center relative sm:flex-row gap-4">
               <img src={"/button-ios.png"} className=" cursor-pointer w-full  z-2 md:w-[250px] text-white h-12 px-8"/>
              <div className="bg-blue-400 absolute animate-ping md:w-[110px] shadow-blue-400 rounded-md h-9"></div>
        
            </div>
          </section> 
           <section className="w-full flex items-center justify-center">

         
<div className="grid grid-cols-3 gap-2 px-10 md:pt-8 text-white">
                <div className="space-y-2">
                  <p className="text-md md:text-3xl font-bold">5.6M</p>
                  <p className="text-sm ">
                    Usuários Potenciais
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-md md:text-3xl font-bold">24/7</p>
                  <p className="text-sm">
                    Disponível Sempre
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-md md:text-3xl font-bold">Real-time</p>
                  <p className="text-sm">
                    Informações Ao Vivo
                  </p>
                </div>
              </div>
  </section>

        </main>

         <section className="relative w-full pt-10 flex flex-col md:flex-row items-center justify-center  ">
          
                <div className="items-center w-full flex flex-col justify-center md:justify-start md:w-[40%]">
                  <h1 className="text-2xl  sm:text-6xl font-bold text-balance text-white leading-tight">
                    O que é o ATM NA MÃO?
                  </h1>
        
                  <p className="md:text-xl text-justify text-foreground/70 text-white md:text-center md:text-left leading-relaxed">
                    ATM NA MÃO é uma plataforma que visa aprimorar a experiência dos
                    cidadãos no acesso aos serviços bancários essenciais. O sistema
                    possibilita uma gestão eficiente do tempo, reduzindo filas nos
                    caixas automáticos (ATMs) e agências financeiras.
                  </p>
                </div>     
            <section className="relative justify-center flex items-center">

                 <Image
                  src="/assets/5.png"
                  alt="Clientes SUEZ"
                  width={600}
                  height={600}
                  className="z-1"
                />
                <div className="bg-blue-500 w-[350px] h-[350px] rounded-full blur-3xl absolute animate-pulse">
                    v
                </div>
        
           </section>   </section>



            <section id="funcionalidades" className="py-20 sm:py-32 relative w-full pt-10 flex items-center justify-center ">
               
                    <div className="w-[80%] rounded-[0px_0px_100%_100%] bg-blue-600 opacity-10 h-[300px] absolute blur-3xl">
            www
        </div>


                 <div id="#funcionalidades" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-1">
                   <div className="text-center space-y-4 mb-16">
                     <h2 className="text-4xl sm:text-5xl font-bold text-white">Funcionalidades Principais</h2>
                     <p className="text-xl text-white text-center pt-2">
                       Tudo o que você precisa para ter acesso bancário simples, rápido e eficiente
                     </p>
                   </div>
           
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 z-1">
                     {features.map((feature, index) => {
                       const Icon = feature.icon
                       return (
                         <div key={index} className="p-8 hover:shadow-4xl transition-all duration-300 border-2 border-blue-950/20 rounded-2xl hover:border-border">
                           <main className="flex w-full gap-2 items-center">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-400  mb-6 flex items-center justify-center`}>
                             <Icon className={`w-6 h-6 text-white`} />
                            
                           </div> <div>
                                 <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                             </div>
                           </main>
                         
           
                          
                           <p className="text-white leading-relaxed pt-3 ">{feature.description}</p>
                         </div>
                       )
                     })}
                   </div>
                 </div>
               </section>



                  <section className="relative w-full pt-10 flex flex-col md:flex-row items-center justify-center  ">
          

   <section className="relative justify-center flex items-center ">

                 <Image
                  src="/assets/3.png"
                  alt="Clientes SUEZ"
                  width={600}
                  height={600}
                  className="z-1"
                />
                <div className="bg-blue-500 w-[350px] h-[350px] rounded-full blur-3xl absolute animate-pulse">
                    v
                </div>
        
           </section> 

                <div className="items-center w-full md:w-[40%] md:pb-40">
                
                <h1 className="text-2xl font-bold text-foreground/70 text-white leading-relaxed text-center md:text-left ">O Problema</h1>
<p className="text-md text-justify text-foreground/70 text-white leading-relaxed text-center md:text-left ">
   O setor bancário em Angola enfrenta desafios significativos: longas filas nos ATMs e instituições bancárias dificultam operações essenciais como levantamentos, consultas e transferências. O tempo perdido em deslocações e a incerteza quanto à disponibilidade dos ATMs representam obstáculos para milhões de cidadãos.
 </p>
                <h1 className="text-2xl font-bold text-foreground/70 text-white leading-relaxed pt-4 text-center md:text-left ">A Solução</h1>
<p className="text-md text-justify text-foreground/70 text-white leading-relaxed md:text-center md:text-left ">
ATM NA MÃO fornece informações em tempo real sobre localização, estado e disponibilidade dos caixas automáticos. Reduz filas desnecessárias, economiza tempo dos utilizadores e contribui para a modernização do setor financeiro angolano.
</p>
        
                
                </div>     
           </section>


      </main>
    </>
  );
};

export default Page;
