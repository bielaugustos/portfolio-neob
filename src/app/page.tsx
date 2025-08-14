
import Links from '@/components/links'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="font-base">
      <h1 className="font-heading text-2xl sm:text-4xl text-center">
        Gabriel Augusto
      </h1>
      <p className="text-center font-semibold">
        Olá Universo! Sou{" "}
        <span className="font-extrabold text-amber-600">junior web developer</span>{" "}
        (BR).
      </p>

      <div className="mt-8 text-sm sm:text-xs leading-5">
        <p>
          <span className="font-semibold">trabalho_atual</span> : Escrever
          código;
        </p>
        <p>
          <span className="font-semibold">cidade_atual</span> : São Paulo,
          Brasil;
        </p>
        <p>
          <span className="font-semibold">hobbies</span> : Estudar, assistir
          animes, ler um pouco;
        </p>
        <br></br>
        <p>
          <span className="text-amber-600">ambições</span> : Aprender
          inglês, criar aplicativos, terminar meu livro...
        </p>
        <p className="font-base"><span className='text-amber-600'>#existe</span> mais de 11 ambições aqui...</p>



        <Image src="/asteroidsHome.png" alt="Descrição da imagem" width={400} height={300} className='flex mx-auto' style={{ zIndex: -1 }} />


        <p className="text-xs font-normal text-center">
          Este portfólio é uma coleção de modelos de código aberto (open-source)
          no estilo neobrutalista.
          <br></br>
          Confira o{" "}
          <a
            target="_blank"
            className="font-bold underline"
            href="https://github.com/neobrutalism-templates/portfolio"
          >
            github repo
          </a>{" "}
          para mais informações.
        </p>

        <Links />

      </div>
    </div>
  );
}