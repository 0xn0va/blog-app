export default function Footer() {
  return (
    <footer className="bg-blue-600 py-4 mt-8">
      <div className="max-w-7xl mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} Blog Application</p>
      </div>
    </footer>
  )
}
