type Props = {
  hashtags: string[]
  selectedHashtags: string[]
  onSelectHashtag: (hashtag: string) => void
}

const HashtagFilter = ({ hashtags, selectedHashtags, onSelectHashtag }: Props) => {
  return (
    <div className="mb-4 flex gap-2">
      {hashtags.map((hashtag) => (
        <button
          key={hashtag}
          className={`px-3 py-1 text-sm rounded-lg ${selectedHashtags.includes(hashtag) ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => onSelectHashtag(hashtag)}
        >
          {hashtag}
        </button>
      ))}
    </div>
  )
}

export default HashtagFilter
