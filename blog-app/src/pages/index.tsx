import { GetStaticProps } from "next"
import HomeView from "@/components/views/Home"
import { Post } from "@/types/types"
import { generatePostTags } from "@/utils/generatePostTags"
import Head from "next/head"

type PostWithTags = Post & { tags: string[] }

type Props = {
  posts: PostWithTags[]
}

export default function HomePage({ posts }: Props) {
  return (
    <>
      <Head>
        <title>My Blog Name</title>
      </Head>
      <HomeView posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!res.ok) {
      throw new Error(`Failed to fetch posts, status: ${res.status}`)
    }

    const posts: Post[] = await res.json()

    const postsWithTags = posts.map((post) => ({
      ...post,
      tags: generatePostTags(),
    }))

    return {
      props: {
        posts: postsWithTags,
      },
    }
  } catch (error) {
    console.error("Error fetching posts:", error)
    return {
      props: {
        posts: [],
      },
    }
  }
}
