import { useState } from "react"
import { Post } from "@/types/types"
import PostCard from "@/components/PostCard"
import HashtagFilter from "@/components/HashtagFilter"

type PostWithHashtags = Post & { hashtags: string[] }

type Props = {
  posts: PostWithHashtags[]
}

const Home = ({ posts }: Props) => {
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>(["All"])

  const allHashtags = Array.from(new Set(["All", "Decentralization", "Blockchain", "Cryptocurrencies", "NFTs", "Smart Contracts", "DeFi", "DAOs"]))

  const toggleHashtag = (hashtag: string) => {
    setSelectedHashtags((prev) =>
      hashtag === "All" ? ["All"] : prev.includes(hashtag) ? prev.filter((h) => h !== hashtag) : [...prev.filter((h) => h !== "All"), hashtag]
    )
  }

  const filteredPosts =
    selectedHashtags.includes("All") || selectedHashtags.length === 0
      ? posts
      : posts.filter((post) => post.hashtags.some((tag) => selectedHashtags.includes(tag)))

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <HashtagFilter hashtags={allHashtags} selectedHashtags={selectedHashtags} onSelectHashtag={toggleHashtag} />

      <div className="grid md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} onSelectHashtag={toggleHashtag} />
        ))}
      </div>
    </main>
  )
}

export default Home
