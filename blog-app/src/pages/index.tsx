import Link from "next/link"
import { GetStaticProps } from "next"
import { Post } from "@/types/types"
import { useState } from "react"

const HASHTAG_POOL = ["tech", "lifestyle", "coding", "news", "sports", "health", "finance"]

type PostWithHashtags = Post & { hashtags: string[] }

type Props = {
  posts: PostWithHashtags[]
}

export default function Home({ posts }: Props) {
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null)

  const filteredPosts = selectedHashtag ? posts.filter((post) => post.hashtags.includes(selectedHashtag)) : posts

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <div className="mb-4 flex gap-2">
        {HASHTAG_POOL.map((hashtag) => (
          <button
            key={hashtag}
            className={`px-3 py-1 text-sm rounded-lg ${selectedHashtag === hashtag ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setSelectedHashtag(hashtag === selectedHashtag ? null : hashtag)}
          >
            #{hashtag}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700">{post.body.slice(0, 100)}...</p>

            <div className="mt-2">
              {post.hashtags.map((tag) => (
                <button key={tag} className="text-sm text-blue-500 mr-2 cursor-pointer" onClick={() => setSelectedHashtag(tag)}>
                  #{tag}
                </button>
              ))}
            </div>

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
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!res.ok) {
      throw new Error(`Failed to fetch posts, status: ${res.status}`)
    }

    const posts: Post[] = await res.json()

    if (!Array.isArray(posts)) {
      throw new Error("API response is not an array")
    }

    const postsWithHashtags = posts.map((post) => ({
      ...post,
      hashtags: Array.from(
        new Set(Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map(() => HASHTAG_POOL[Math.floor(Math.random() * HASHTAG_POOL.length)]))
      ),
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
