import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

const linkStyles = "bg-slate-700 p-4 flex items-center rounded-md hover:bg-slate-800"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav className="flex gap-4 border-b-2 border-white bg-blue-500 p-2">
          <Link href="/" className={linkStyles}>Home</Link>
          <Link href="/todo" className={linkStyles}>Todo list</Link>
          <Link href="/fetch" className={linkStyles}>Fetch test</Link>
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
