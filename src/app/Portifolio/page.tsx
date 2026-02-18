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
        image:"/portifolio/bic.png"
    },
           {
        id:2,
        name:"BANCO SOL",
          image:"/portifolio/sol.png"
     },
           {
        id:3,
        name:"MPLA",
          image:"/portifolio/mpla.png"
      },

]


const PAGE = () => {
     const navigation = useRouter()
    return (
        <>
            <main className='w-full relative md:px-30 p-10 md:p-20 bg-[#fff] text-[#021d3d]'>
                <div>
                    <h1 className='font-bold text-3xl '>O nosso trabalho</h1>
                </div>
                <p className='pt-4 text-xl'>Uma agência de comunicação com 33 anos de existência em Angola, contudo inquieta, ágil e com foco<br></br> em resultados. Trabalhamos com base em metodologias flexíveis e equipas multidisciplinares, prontas a<br></br> dar asas à imaginação e abraçamos todos os desafios.</p>

            </main>

            <main className='w-full   bg-[#021d3d] text-white'>

                <main className='grid grid-cols-1 md:grid-cols-3 gap-0 px-0 text-md w-full'>
                    {
                        data.map((i, index) => (
                            <section onClick={()=>{
                                navigation.push("/Portifolio/"+i.id.toString());
                            }} key={index}
                              style={{ backgroundImage: `url(${i.image})` }}
                            className="flex cursor-pointer items-end w-full  relative  bg-cover bg-center h-[40vh]">
                                <div className='flex gap-3  items-center p-10 z-1 text-2xl font-bold'>
                                    <p>{i.name}</p>
                                    <div className="rounded-md  bg-blue-900  p-2 w-[40px]">
                                        <ArrowRight />
                                    </div>
                                </div>

                                <div className="bg-gradient-to-t absolute  from-[#021d3d] to-transparent h-full w-full hover:opacity-20" />
                            </section>
                        ))
                    }

                </main>
            </main>

        </>
    );
}

export default PAGE;
