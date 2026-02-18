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
                image:"/portifolio/bic-card.png"
            },
              { subid:2,
                titulo:"Sistema Geral",
                image:"/portifolio/bic-f.png"
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
                image:"/portifolio/sol-24.png"
            },
              {
                 subid:2,
                titulo:"APP na mao",
                image:"/portifolio/sol-v.png"
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
                image:"/portifolio/mpla-festival.png"
            }
          ]
      },

]

const Page = ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = React.use(params);

    const DataSelected = data.find((item)=>item.id==Number(id));
    const navigation = useRouter()

    return (
        <>
            <main className='w-full bg-white text-black md:p-4'>
            <div className='w-full text-start md:text-start p-4 text-6xl font-bold flex gap-4 items-center'>
                <div style={{ backgroundImage: `url(${DataSelected?.image})` }}
                 className="flex  items-end w-[100px]  relative bg-cover bg-center h-[100px]"
                />
                <h1>{DataSelected?.name}</h1>
            </div>
            

            {
                DataSelected?<main className='md:p-20   grid grid-cols-1 md:grid-cols-3 md:gap-4 px-0 text-md w-full text-white'>
                {DataSelected.item.map((i, index) => (
                                            <section onClick={()=>{
                                                navigation.push("/Portifolio/"+id+"/"+i.subid.toString());
                                            }} key={index} 
                                            style={{ backgroundImage: `url(${i.image})` }}
                                            className="flex cursor-pointer items-end w-full  relative bg-cover bg-center h-[40vh]">
                                                <div className='p-10 z-1 text-2xl font-bold flex items-center gap-2'>
                                                    <p>{i.titulo}</p>
                                                    <div className="rounded-md bg-blue-900 p-2 w-[40px]">
                                                        <ArrowRight />
                                                   </div>
                                                </div>
                
                                                <div className="bg-gradient-to-t absolute  from-black to-transparent h-full w-full hover:opacity-10" />
                                            </section>
                                        ))
                }</main>       
                :(<main className='flex h-[70vh] justify-center items-center px-10 pt-20 text-md w-full '>
                    <h1 className='font-bold text-4xl'>Não encontrado!</h1>
                    </main>)
            }
                
            </main>

        </>
    );
}

export default Page;
