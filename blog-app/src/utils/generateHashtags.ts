const HASHTAG_POOL = ["Decentralization", "Blockchain", "Cryptocurrencies", "NFTs", "Smart Contracts", "DeFi", "DAOs", "MEME Coins"]

export const generateHashtags = () => {
  return Array.from(
    new Set(Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map(() => HASHTAG_POOL[Math.floor(Math.random() * HASHTAG_POOL.length)]))
  )
}
