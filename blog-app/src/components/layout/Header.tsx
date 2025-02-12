import Link from "next/link"
import { useRouter } from "next/router"
import { Pyramid } from "lucide-react"
import { twMerge } from "tailwind-merge"

export default function Header() {
  const router = useRouter()

  return (
    <header className="h-[54px] bg-accent py-4 fixed w-full top-0 left-0 z-10 shadow-md">
      <nav className="max-w-5xl mx-auto flex justify-between items-center px-2">
        <ul className={twMerge("flex gap-8")}>
          <li>
            <Link href="/" className={twMerge("text-white flex gap-2", router.pathname === "/" ? "font-bold" : "")}>
              <Pyramid /> My Blog Name
            </Link>
          </li>
          <li>
            <Link href="/about" className={twMerge("text-white py-1", router.pathname === "/about" ? "font-bold" : "")}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
