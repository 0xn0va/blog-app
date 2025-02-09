import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="bg-blue-600 p-4 fixed w-full top-0 left-0 z-10">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className={`text-white ${router.pathname === "/" ? "font-bold" : ""} active:bg-black px-2 py-1 rounded`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={`text-white ${router.pathname === "/about" ? "font-bold" : ""} active:bg-black px-2 py-1 rounded`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
