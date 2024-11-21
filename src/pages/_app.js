import Footer from '@/components/footer';
import NavigationBar from '@/components/navigationBar';
import '@/styles/globals.scss'
import Link from 'next/link'

export default function App({ Component, pageProps }) {

  const useLandingPageNavigationBarStyle = Component.useLandingPageNavigationBarStyle ?? false;

  return (
    <div className="page">
      <NavigationBar useLandingPageNavigationBarStyle={useLandingPageNavigationBarStyle} />
      <Component {...pageProps} />
      <Footer />
    </div>
    );
}