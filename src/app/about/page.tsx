import { MapPin, Clock, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <main
      id="sobre"
      className="sm:py-32  flex justify-start flex-col items-start  w-full px-5"
    >
      <section className="relative w-full h-full mb-20 flex flex-col md:flex-row items-center justify-center  ">
        <div className="items-start w-full flex flex-col justify-center md:justify-start md:w-[30%]">
          <h1 className="text-white text-center md:text-start font-bold text-3xl">Tela de Login</h1>

          <p className="md:text-md text-foreground/70 text-white gap-2 text-justify md:text-left leading-relaxed">
            A Tela de Login do ATM na Mão foi desenhada para ser segura e
            instantânea.<br></br>
            <b className="text-blue-400 pt-2">Acesso Social:</b>
            <br></br> Entre com um só toque usando Facebook ou Google para
            máxima conveniência.<br></br>
            <b className="text-blue-400 pt-2">Login Simplificado:</b>
            <br></br> Campos claros e diretos para e-mail and senha, garantindo
            um acesso rápido.
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
        </section>{" "}
      </section>

      <section className="relative w-full h-full mb-20 flex-col-reverse flex md:flex-row items-center justify-center  ">
        <section className="relative justify-center flex items-center">
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

        <div className="items-start w-full flex flex-col justify-center md:justify-start md:w-[30%]">
          <h1 className="text-white font-bold text-3xl">Tela Inicial Home</h1>
            
          <p className="md:text-md text-justify text-foreground/70 text-white gap-2 text-center md:text-left leading-relaxed">
            A Tela inicial do ATM na Mão é o seu painel de controlo financeiro,
            desenhado para ser dinâmico e relevante. <br></br>
            <b className="text-blue-400 pt-2">Destaques e Informações:</b>
            <br></br> Veja as notícias mais importantes e dicas úteis logo à
            entrada. <br></br>
            <b className="text-blue-400 pt-2">Rede de Parceiros:</b>
            <br></br> Navegue facilmente pela nossa lista crescente de
          bancos parceiros. <br></br> 
          <b className="text-blue-400 pt-2">Ação Rápida:</b>
            <br></br>  O botão central em destaque leva-o
          diretamente à função principal — o localizador de ATMs — com um único
          toque.
          </p>
        </div>
      </section>



 

       <section className="relative w-full h-full mb-20 flex flex-col md:flex-row items-center justify-center  ">
        <div className="items-start w-full flex flex-col justify-center md:justify-start md:w-[30%]">
          <h1 className="text-white font-bold text-3xl">Tela Perfil e
Preferências</h1>

          <p className="md:text-md text-justify text-foreground/70 text-white gap-2 text-center md:text-left leading-relaxed">
          
            O seu <b className="text-blue-400 pt-2">Perfil</b> é o coração da sua experiência
personalizada. Com uma navegação clara e
direta, pode editar os seus dados e, mais
importante, ajustar as preferências ao seu
gosto. Quer mudar o idioma, o tema ou o
tipo de notificação? Com um simples toque,
você está no comando
          </p>
        </div>
        <section className="relative justify-center flex items-center">
          <Image
            src="/assets/4.png"
            alt="Clientes SUEZ"
            width={600}
            height={600}
            className="z-1"
          />
          <div className="bg-blue-500 w-[350px] h-[350px] rounded-full blur-3xl absolute animate-pulse">
            v
          </div>
        </section>{" "}
      </section>




      <section className="relative w-full h-full mb-20 flex flex-col-reverse md:flex-row items-center justify-center  ">
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
        </section>







        <div className="items-start w-full flex flex-col justify-center md:justify-start md:w-[30%]">
          <h1 className="text-white font-bold text-3xl">Mapa e Localizador</h1>
            
          <p className="md:text-md text-foreground/70 text-white gap-2 text-justify md:text-left leading-relaxed">
            Nunca mais se sinta perdido à procura de
um ATM ou balcão! Esta é a funcionalidade
que resolve um problema real do dia a dia
de forma brilhante.  <br></br>
            <b className="text-blue-400 pt-2">Praticidade Visual: </b>
            <br></br> A visualização do mapa
mostra todos os pontos de serviço próximos
de si de forma clara e instantânea. <br></br>
            
          </p>
        </div>
      </section>




 


    <section className="relative w-full h-full mb-20 flex flex-col md:flex-row items-center justify-center  ">
        <div className="items-start w-full flex flex-col justify-center md:justify-start md:w-[30%]">
          <h1 className="text-white font-bold text-3xl">Mapa e Localizador</h1>

          <p className="md:text-md text-foreground/70 text-white gap-2 text-justify md:text-left leading-relaxed">
  
            <b className="text-blue-400 pt-2">Pesquisa Poderosa:</b>
            <br></br> A barra de pesquisa
permite-lhe encontrar locais específicos
com uma rapidez impressionante. <br></br>
            <b className="text-blue-400 pt-2">Múltiplas Visualizações:</b>
            <br></br>  Prefere uma lista?
Com um toque, alterne para uma
visualização em lista que detalha o nome, o
endereço e a distância de cada ponto. 

<br></br>    <b className="text-blue-400 pt-2">Precisão Absoluta:</b>
            <br></br>Dê zoom no mapa para
ver a sua localização exata e o percurso
mais curto até ao ATM desejado. É a
combinação perfeita de tecnologia GPS e
dados bancários para lhe poupar tempo e
esforço
          </p>
        </div>
        <section className="relative justify-center flex items-center">
          <Image
            src="/assets/6.png"
            alt="Clientes SUEZ"
            width={600}
            height={600}
            className="z-1"
          />
          <div className="bg-blue-500 w-[350px] h-[350px] rounded-full blur-3xl absolute animate-pulse">
            v
          </div>
        </section>{" "}
      </section>


      <section className="relative w-full h-full mb-20 flex flex-col-reverse md:flex-row items-center justify-center  ">
        <section className="relative justify-center flex items-center">
          <Image
            src="/assets/7.png"
            alt="Clientes SUEZ"
            width={600}
            height={600}
            className="z-1"
          />
          <div className="bg-blue-500 w-[350px] h-[350px] rounded-full blur-3xl absolute animate-pulse">
            v
          </div>
        </section>

        



        <div className="items-start w-full flex flex-col justify-center md:justify-start md:w-[30%]">
          <h1 className="text-white font-bold text-3xl">Tela de Pesquisa</h1>
            
          <p className="md:text-md text-foreground/70 text-white gap-2 text-justify md:text-left leading-relaxed">
           Direta
Encontre facilmente o ATM que precisa.
Pesquise por locais que você já conhece ou
pelo nome do banco para chegar direto ao
ponto, sem complicação. <br></br>
           
            <br></br> VE olha que você também pode fazer o
mapeamento de todos os atm apartir da
sua localização atual <br></br>
           
          </p>
        </div>
      </section>





           <section className="relative w-full h-full mb-20 flex flex-col md:flex-row items-center justify-center  ">
        <div className="items-start w-full flex flex-col justify-center md:justify-start md:w-[30%]">
          <h1 className="text-white font-bold text-3xl">Tela de Notificações</h1>

          <p className="md:text-md text-foreground/70 text-white gap-2 text-justify md:text-left leading-relaxed">
           Acompanhe o que acontece em tempo real.
Receba uma notificação quando um ATM é
abastecido, quando entra em manutenção e
quando novas funções são adicionadas para
facilitar o seu dia a dia. Tudo que precisa
saber em um só lugar
          </p>
        </div>
        <section className="relative justify-center flex items-center">
          <Image
            src="/assets/8.png"
            alt="Clientes SUEZ"
            width={600}
            height={600}
            quality={100}
            className="z-1"
          />
          <div className="bg-blue-500 w-[350px] h-[350px] rounded-full blur-3xl absolute animate-pulse">
            v
          </div>
        </section>{" "}
      </section>



    </main>
  );
}
