import { Post } from "@/types/types"

interface Props {
  post: Post
}

export default function PostView({ post }: Props) {
  return (
    <div>
      <div className="bg-foreground">
        <div className="max-w-5xl mx-auto py-12">
          <h1 className="text-2xl font-bold capitalize text-accent">{post.title}</h1>
          <div className="text-secondary">
            <p>
              <strong>Post ID:</strong> {post.id}
            </p>
            <p>
              <strong>Author ID:</strong> {post.userId}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-4">
        <p>{post.body}</p>
      </div>
    </div>
  )
}
