import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="font-heading text-2xl sm:text-4xl">Gabriel Augusto</h1>
        <p>Olá Universo! Sou <span className='font-bold text-amber-600'>junior web developer</span> (BR).</p>

      <div className="mt-8 text-base sm:text-lg">
        <p><span className='font-bold'>trabalho_atual</span> : Escrever código;</p>
        <p><span className='font-bold'>cidade_atual</span> : São Paulo, Brasil;</p>
        <p><span className='font-bold'>hobbies</span> : Estudar, assistir animes, ler um pouco;</p>
        <br></br>
        <p>
          <span className='font-bold text-amber-600'>ambições</span> : Aprender inglês, criar aplicativos, terminar meu livro...
        </p>
        <p className='font-bold'>#existe mais de 11 ambições aqui;</p>
        <p> <br></br>
          Este portfólio é uma coleção de modelos de código aberto (open-source) no estilo neobrutalista.
          Confira o{' '}
          <a
            target="_blank"
            className="font-bold underline"
            href="https://github.com/neobrutalism-templates/portfolio"
          >
            github repo
          </a>{' '}
          para mais informações.
        </p>
      </div>

      <Links />
    </div>
  )
}
