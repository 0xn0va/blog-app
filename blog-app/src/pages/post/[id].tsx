import { GetStaticProps, GetStaticPaths } from "next"
import { Post } from "@/types/types"
import PostView from "@/components/views/Post"
import Head from "next/head"

type PostProps = {
  post: Post
}

export default function PostPage({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>Post {post.id} | My Blog Name</title>
      </Head>
      <PostView post={post} />
    </>
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
