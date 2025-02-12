import { TAGS } from "@/utils/generatePostTags"
import { twMerge } from "tailwind-merge"

type Props = {
  selectedTags: string[]
  onSelectTag(tag: string): void
  clearTags(): void
}

const TagFilter = ({ selectedTags, onSelectTag, clearTags }: Props) => {
  const noTagsSelected = selectedTags.length === 0

  return (
    <div className="mb-4 bg-foreground">
      <div className="w-full max-w-5xl mx-auto flex overflow-x-scroll gap-2 px-2 no-scrollbar">
        <TagButton tag="All" isSelected={noTagsSelected} onClick={clearTags} />
        {TAGS.map((tag) => {
          const isSelected = selectedTags.includes(tag)
          return <TagButton key={tag} tag={tag} isSelected={isSelected} onClick={() => onSelectTag(tag)} />
        })}
      </div>
    </div>
  )
}

export default TagFilter

interface TagButtonProps {
  tag: string
  isSelected: boolean
  onClick(): void
}

function TagButton({ tag, isSelected, onClick }: TagButtonProps) {
  return (
    <button
      key={tag}
      className={twMerge(
        "py-2 px-4 text-sm text-md font-medium transition-all focus:outline-none border-b-2",
        isSelected ? "text-accent border-accent" : "text-secondary hover:text-accent border-transparent"
      )}
      onClick={onClick}
    >
      {tag}
    </button>
  )
}
