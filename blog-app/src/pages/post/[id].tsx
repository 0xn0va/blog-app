import { GetStaticProps, GetStaticPaths } from "next"
import { Post } from "@/types/types"

type PostProps = {
  post: Post
}

export default function PostDetails({ post }: PostProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>
        <strong>Post ID:</strong> {post.id}
      </p>
      <p>
        <strong>Author ID:</strong> {post.userId}
      </p>
      <p>{post.body}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: Post[] = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post: Post = await res.json()

  return {
    props: { post },
  }
}
