import Link from "next/link"
import { Post } from "@/types/types"
import { MoveRight } from "lucide-react"

type Props = {
  post: Post & { tags: string[] }
  onSelectTag: (tag: string) => void
}

const PostCard = ({ post, onSelectTag }: Props) => {
  return (
    <div key={post.id} className="border rounded-lg p-4 shadow-md bg-foreground">
      <h2 className="text-lg font-semibold mb-2">
        <Link href={`/post/${post.id}`} className="text-accent hover:underline capitalize">
          {post.title}
        </Link>
      </h2>
      <div className="my-2">
        {post.tags.map((tag) => (
          <button
            key={tag}
            className=" font-medium text-white mr-2 cursor-pointer rounded px-1.5 py-0.5 text-xs bg-accent hover:bg-accent/90 border-accent border hover:text-accent transition-colors"
            onClick={() => onSelectTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <p className="text-primary text-sm">{post.body.slice(0, 100)}...</p>

      <Link href={`/post/${post.id}`} className="text-accent font-medium mt-2 inline-block hover:underline">
        Read More...
      </Link>
    </div>
  )
}

export default PostCard
