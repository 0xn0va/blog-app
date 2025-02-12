import React, { ReactNode } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="mt-[54px] flex flex-col min-h-screen bg-background text-primary">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
