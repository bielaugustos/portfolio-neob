
import Links from '@/components/links'
import TerminalEffect from '@/components/TerminalEffect';


export default function Home() {
  return (
    <div className="font-base">
      
      <p className="text-center font-semibold text-sm">
        Olá! Meu nome é Gabriel, atualmente estudo para me tornar{" "}
        <span className="font-extrabold text-amber-600">junior web developer</span>{" "}
         (BR).
      </p>

      <TerminalEffect />

        <p className="text-xs font-normal text-center">
          Este portfólio é uma coleção de modelos de código aberto (open-source)
          no estilo neobrutalista.

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
  );
}