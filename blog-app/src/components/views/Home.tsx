import { useState } from "react"
import { Post } from "@/types/types"
import PostCard from "@/components/PostCard"
import TagFilter from "@/components/TagFilter"
import { TAGS } from "@/utils/generatePostTags"

type PostWithTags = Post & { tags: string[] }

type Props = {
  posts: PostWithTags[]
}

export default function HomeView({ posts }: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  function toggleTag(tag: string) {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        // Remove tag
        return prev.filter((h) => h !== tag)
      } else {
        // Add tag
        if (prev.length === TAGS.length - 1) return []
        return [...prev, tag]
      }
    })
  }

  function clearTags() {
    setSelectedTags([])
  }

  const filteredPosts = selectedTags.length === 0 ? posts : posts.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)))

  return (
    <div>
      <TagFilter selectedTags={selectedTags} onSelectTag={toggleTag} clearTags={clearTags} />

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} onSelectTag={toggleTag} />
        ))}
      </div>
    </div>
  )
}
