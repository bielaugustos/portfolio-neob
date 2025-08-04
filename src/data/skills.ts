import {
  type IconType,
  SiAstro,
  SiCss3,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'astro', icon: SiAstro },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'git',
          icon: SiGit,
        },
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
  ]

export default SKILLS
