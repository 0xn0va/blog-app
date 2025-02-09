import Link from "next/link"
import { GetStaticProps } from "next"
import { Post } from "@/types/types"

type Props = {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts?.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700">{post.body.slice(0, 100)}...</p>
            <Link href={`/post/${post.id}`} className="text-blue-500 font-medium mt-2 inline-block">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: Post[] = await res.json()

  console.log("fetched posts:", posts)

  return {
    props: {
      posts: posts || [],
    },
  }
}
