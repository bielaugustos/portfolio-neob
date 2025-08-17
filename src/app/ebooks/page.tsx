import POSTS from '@/data/posts'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'

export default function Blog() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Blog ©Ioverso</h1>

      <div className="flex flex-col gap-5">
        {POSTS.map((post: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; repoUrl: string | undefined }, id: Key | null | undefined) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-main-foreground font-base mt-5">
                <h2 className="font-heading text-xl sm:text-2xl">
                  {post.title}
                </h2>

                <p className="mt-2 text-xs">{post.description}</p>

                <div className="mt-4 grid grid-cols-1 gap-5">
                  <a
                    className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-3 text-center text-xs transition-all hover:shadow-none"
                    href={post.repoUrl}
                    target="_blank"
                  >
                    Acessar o conteúdo
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
