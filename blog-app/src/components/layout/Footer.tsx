export default function Footer() {
  return (
    <footer className="bg-foreground py-4 mt-8">
      <div className="max-w-5xl mx-auto text-center text-sm font-medium text-secondary">
        <p>&copy; {new Date().getFullYear()} My Blog Name</p>
      </div>
    </footer>
  )
}
