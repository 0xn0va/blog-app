import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 p-4 fixed w-full top-0 left-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className={`flex space-x-4 ${isOpen ? "block" : "hidden"} sm:flex`}>
          <li>
            <Link href="/" className={`text-white ${router.pathname === "/" ? "font-bold" : ""} active:bg-blue-500 px-2 py-1 rounded`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`text-white ${router.pathname === "/about" ? "font-bold" : ""} active:bg-blue-500 px-2 py-1 rounded`}>
              About
            </Link>
          </li>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-white">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  )
}
