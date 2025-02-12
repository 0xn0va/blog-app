export const TAGS = ["Blockchain", "Cryptocurrencies", "NFTs", "DeFi", "DAOs", "Memecoins"] as const

function getRandomTag() {
  return TAGS[Math.floor(Math.random() * TAGS.length)]
}

/**
 * Generates a random set of post tags.
 *
 * This function creates a random number of tags (between 1 and 3) and returns
 * them as an array of unique tags. The tags are generated using the `getRandomTag`
 * function.
 *
 * @returns {string[]} An array of unique random tags.
 */
export const generatePostTags = () => {
  const numTags = Math.floor(Math.random() * 3) + 1
  return Array.from(new Set(Array(numTags).fill(null).map(getRandomTag)))
}
