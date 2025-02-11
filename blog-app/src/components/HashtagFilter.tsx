type Props = {
  hashtags: string[]
  selectedHashtags: string[]
  onSelectHashtag: (hashtag: string) => void
}

const HashtagFilter = ({ hashtags, selectedHashtags, onSelectHashtag }: Props) => {
  return (
    <div className="mb-4 flex flex-wrap gap-2 justify-between sm:justify-evenly px-4">
      {hashtags.map((hashtag) => {
        const isSelected = selectedHashtags.includes(hashtag)
        return (
          <button
            key={hashtag}
            className={`px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium rounded-md transition-all
              ${
                isSelected
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-600 border-0"
              }
              focus:outline-none`}
            onClick={() => onSelectHashtag(hashtag)}
          >
            {hashtag}
          </button>
        )
      })}
    </div>
  )
}

export default HashtagFilter
