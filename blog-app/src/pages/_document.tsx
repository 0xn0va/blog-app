import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M2.5%2016.88a1%201%200%2001-.32-1.43l9-13.02a1%201%200%20011.64%200l9%2013.01a1%201%200%2001-.32%201.44l-8.51%204.86a2%202%200%2001-1.98%200Z'%3E%3C/path%3E%3Cpath%20d='M12%202v20'%3E%3C/path%3E%3C/svg%3E"
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
