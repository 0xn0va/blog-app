import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "@/components/Navbar"
import SectionWrapper from "@/components/SectionWrapper"
import Footer from "@/components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SectionWrapper>
        <Component {...pageProps} />
      </SectionWrapper>
      <Footer />
    </>
  )
}
