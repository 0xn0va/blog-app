import Link from "next/link"
import { Post } from "@/types/types"
import { MoveRight } from "lucide-react"

type Props = {
  post: Post & { hashtags: string[] }
  onSelectHashtag: (hashtag: string) => void
}

const PostCard = ({ post, onSelectHashtag }: Props) => {
  return (
    <div key={post.id} className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2">
        <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline capitalize">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-700">{post.body.slice(0, 100)}...</p>

      <div className="mt-2">
        {post.hashtags.map((tag) => (
          <button key={tag} className="text-sm text-blue-500 mr-2 cursor-pointer" onClick={() => onSelectHashtag(tag)}>
            {tag}
          </button>
        ))}
      </div>

      <Link href={`/post/${post.id}`} className="text-blue-500 font-medium mt-2 inline-block">
        Read More <MoveRight className="inline-block ml-2" size={20} />
      </Link>
    </div>
  )
}

export default PostCard
