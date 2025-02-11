import React, { ReactNode } from "react"

type SectionWrapperProps = {
  children: ReactNode
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-grow">{children}</main>
    </div>
  )
}

export default SectionWrapper
