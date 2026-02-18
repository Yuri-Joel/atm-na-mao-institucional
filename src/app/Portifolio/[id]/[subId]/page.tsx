"use client"

import React from 'react';
import Hero from "@/components/hero"
import Image from "next/image"
import { ArrowBigLeft, ArrowBigRight, ArrowRight, MonitorDot } from 'lucide-react';
import { useRouter } from 'next/navigation';


const data = [
    {
        id:1,
        name:"Banco BIC",
        image:"/portifolio/bic.png",
           item:[
            {
                 subid:1,
                titulo:"Festival de 12 anos",
                image:"/portifolio/bic-card.png",
                descricao:"omos a agência escolhida para desenvolver a campanha 360° da Oferta Pública de Venda (OPV) do Banco de Fomento Angola (BFA), um marco histórico e a maior operação do género já realizada em Angola. Da ideia inicial ao resultado final, fomos responsáveis por toda a estratégia e execução da comunicação, assegurando clareza, impacto e proximidade com investidores e com o público em geral. Um projecto que reforça a confiança, a transparência e a credibilidade do mercado de capitais angolano. 📌 Detalhes da OPV: O BFA deu início à sua OPV de acções — um passo relevante para o fortalecimento do mercado de capitais em Angola."
           
            },
              { subid:2,
                titulo:"Sistema Geral",
                image:"/portifolio/bic-f.png",
                descricao:"omos a agência escolhida para desenvolver a campanha 360° da Oferta Pública de Venda (OPV) do Banco de Fomento Angola (BFA), um marco histórico e a maior operação do género já realizada em Angola. Da ideia inicial ao resultado final, fomos responsáveis por toda a estratégia e execução da comunicação, assegurando clareza, impacto e proximidade com investidores e com o público em geral. Um projecto que reforça a confiança, a transparência e a credibilidade do mercado de capitais angolano. 📌 Detalhes da OPV: O BFA deu início à sua OPV de acções — um passo relevante para o fortalecimento do mercado de capitais em Angola."
           
            },
          ]
    },
           {
        id:2,
        name:"BANCO SOL",
          image:"/portifolio/sol.png",
             item:[
            {
                 subid:1,
                titulo:"Festival de 24 anos",
                image:"/portifolio/sol-24.png",
                descricao:"omos a agência escolhida para desenvolver a campanha 360° da Oferta Pública de Venda (OPV) do Banco de Fomento Angola (BFA), um marco histórico e a maior operação do género já realizada em Angola. Da ideia inicial ao resultado final, fomos responsáveis por toda a estratégia e execução da comunicação, assegurando clareza, impacto e proximidade com investidores e com o público em geral. Um projecto que reforça a confiança, a transparência e a credibilidade do mercado de capitais angolano. 📌 Detalhes da OPV: O BFA deu início à sua OPV de acções — um passo relevante para o fortalecimento do mercado de capitais em Angola."
           
            },
              {
                 subid:2,
                titulo:"APP na mao",
                image:"/portifolio/sol-v.png",
                descricao:"omos a agência escolhida para desenvolver a campanha 360° da Oferta Pública de Venda (OPV) do Banco de Fomento Angola (BFA), um marco histórico e a maior operação do género já realizada em Angola. Da ideia inicial ao resultado final, fomos responsáveis por toda a estratégia e execução da comunicação, assegurando clareza, impacto e proximidade com investidores e com o público em geral. Um projecto que reforça a confiança, a transparência e a credibilidade do mercado de capitais angolano. 📌 Detalhes da OPV: O BFA deu início à sua OPV de acções — um passo relevante para o fortalecimento do mercado de capitais em Angola."
           
            },
          ]
     },
           {
        id:3,
        name:"MPLA",
          image:"/portifolio/mpla.png",
          item:[
            {
                subid:1,
                titulo:"Festival de 20 anos",
                image:"/portifolio/mpla-festival.png",
                descricao:"omos a agência escolhida para desenvolver a campanha 360° da Oferta Pública de Venda (OPV) do Banco de Fomento Angola (BFA), um marco histórico e a maior operação do género já realizada em Angola. Da ideia inicial ao resultado final, fomos responsáveis por toda a estratégia e execução da comunicação, assegurando clareza, impacto e proximidade com investidores e com o público em geral. Um projecto que reforça a confiança, a transparência e a credibilidade do mercado de capitais angolano. 📌 Detalhes da OPV: O BFA deu início à sua OPV de acções — um passo relevante para o fortalecimento do mercado de capitais em Angola."
            }
          ]
      },

]
const Page = ({ params }: { params: Promise<{id:string, subId: string }> }) => {

    const { id, subId } = React.use(params);

     const data_ = data.find((item)=>item.id==Number(id));
     const DataSelected = data_?.item.find((item)=>item.subid==Number(subId));
 
    return (
        <>
            <main className='w-full bg-white text-black md:p-10'>
            <div className='md:w-[60%] md:p-10 w-full p-4'>
                <h1 className='text-3xl font-bold'>{DataSelected?.titulo}</h1>
                <p className='pt-6'>{DataSelected?.descricao}</p>
            </div>
       
       <section 
       style={{ backgroundImage: `url(${DataSelected?.image})` }}
       className="flex pt-4 rounded-4 cursor-pointer items-end w-full  relative bg-cover bg-center h-[40vh]"/>

            </main>

        </>
    );
}

export default Page;
