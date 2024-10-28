import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return <>
    <nav>
      <ul>
        <li className='borderHoverEffectParent'><Link href="/" className="borderHoverEffect">Home</Link></li>
        <li className='borderHoverEffectParent'><Link href="/projects" className="borderHoverEffect">Projects</Link></li>
      </ul>
    </nav>
    <Component {...pageProps} />
  </>
}