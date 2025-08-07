import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:gscontatoec@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/bielaugustos',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/gabrielaugustos/',
    },
  ]

  return (
    <div className="mr-auto mt-10 flex flex-wrap items-center gap-10 justify-center ">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" className='hover:text-amber-500'/>
          </a>
        )
      })}
    </div>
  )
}
