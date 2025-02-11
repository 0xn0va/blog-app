import { GetStaticProps } from "next"
import Home from "@/components/Home"
import { Post } from "@/types/types"
import { generateHashtags } from "@/utils/generateHashtags"

type PostWithHashtags = Post & { hashtags: string[] }

type Props = {
  posts: PostWithHashtags[]
}

export default function Index({ posts }: Props) {
  return <Home posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!res.ok) {
      throw new Error(`Failed to fetch posts, status: ${res.status}`)
    }

    const posts: Post[] = await res.json()

    const postsWithHashtags = posts.map((post) => ({
      ...post,
      hashtags: generateHashtags(),
    }))

    return {
      props: {
        posts: postsWithHashtags,
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
