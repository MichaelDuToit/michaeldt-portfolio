import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return <>
  <nav>
    <ul>
      <li><Link href="/">Michael du Toit</Link></li>
      <li><Link href="/projects">Projects</Link></li>
    </ul>
  </nav>
  <Component {...pageProps} />
  </>
}
