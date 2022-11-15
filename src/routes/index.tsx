import { For } from 'solid-js'
import { A, createRouteData, useRouteData } from 'solid-start'

type Meta = {
  title: string
  date: string
  description: string
  thumbnailUrl: string
}

export const routeData = () => {
  return createRouteData(async () => {
    const files = import.meta.glob('./blog/*.mdx')

    const posts = Object.keys(files).map(async (file) => {
      const slug = file.replace('./blog/', '').replace('.mdx', '')
      const meta = await files[file]()

      return { slug, ...((await meta) as Meta) }
    })

    return Promise.all(posts)
  })
}

const Home = () => {
  const posts = useRouteData<typeof routeData>()

  return (
    <div>
      <h2>index</h2>
      <For each={posts()}>
        {(post) => (
          <div>
            <A href={`/blog/${post.slug}`}>{post.title}</A>
          </div>
        )}
      </For>
    </div>
  )
}

export default Home
