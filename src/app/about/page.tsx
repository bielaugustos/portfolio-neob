import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Um pouco da jornada aqui.</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Sou um profissional em formação, focado em compreender e aplicar tecnologia para resolver problemas reais. Tenho interesse em sistemas de informação, análise de dados e impacto social da inovação digital. Busco alinhar fundamentos técnicos a soluções práticas, com visão estratégica para transformar informação em valor sustentável.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
