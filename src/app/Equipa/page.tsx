"use client"

import React from 'react';
import Hero from "@/components/hero"
import Image from "next/image"
import { ArrowBigLeft, ArrowBigRight, ArrowRight, MonitorDot } from 'lucide-react';
import { useRouter } from 'next/navigation';

const data = [
    {
        id: 1,
        name: "António Lunguela",
        cargo: "CEO",
        image: "/equipa/antonio.jpg"
    },
    {
        id: 2,
        name: "Yuri Joel",
        cargo: "Desenvolvedor fullStack e diretor de projectos",
        image: "/equipa/yuri.png"
    },
    {
        id: 3,
        name: 'Directora geral',
        cargo: "Directora geral",
        image: "/equipa/antonio.jpg"
    },
    {
        id: 4,
        name: 'Adalberto Jamba',
        cargo: "Desenvolvedor",
        image: "/equipa/adalberto.png"
    },
    {
        id: 5,
        name: 'William Santos',
        cargo: "UI UX",
        image: "/equipa/antonio.jpg"
    },
];

const Page = () => {
    const navigation = useRouter()
    return (
        <>
            <main className='relative w-full md:px-30 p-8 md:p-20 bg-white text-white'>
                <div>
                    <h1 className='font-bold  text-4xl text-[#05549a]'>Nossa Equipa</h1>
                </div>
                <p className='pt-4 text-xl text-[#05549a]'>Uma agência de comunicação com 33 anos de existência em Angola, contudo inquieta, ágil e com foco.<br></br> em resultados. Trabalhamos com base em metodologias flexíveis, e equipas multidisciplinares prontas.<br></br> dar asas à imaginação, e abraçamos todos os desafios.</p>

            </main>

            <main className='w-full  bg-[#021d3d] text-white'>

                <main className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 pt-20 px-2 md:px-20 lg:px-50 py-20 text-md w-full'>
                    {
                        data.map((i, index) => (
                            <section onClick={() => {
                                navigation.push("/Equipa/" + i.id.toString());
                            }} key={index} className="flex hover:border-1 cursor-pointer w-full bg-[#021123]  flex-col items-end  relative rounded-2xl h-[70vh] transition-all duration-300 hover:-translate-y-6">

                                <div
                                    style={{ backgroundImage: `url(placeholder-user.jpg)` }}
                                    className="rounded-[10px_10px_0px_0px] w-full h-full bg-cover bg-center"
                                />
                                <div className='p-8 w-full z-1 text-xl font-bold'>
                                    <p className='text-md'>{i.name}</p>
                                    <p className='font-light text-md'>{i.cargo}</p>

                                </div>

                            </section>
                        ))
                    }

                </main>
            </main>

        </>
    );
}

export default Page;
