import Footer from '@/components/footer';
import NavigationBar from '@/components/navigationBar';
import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {

  const useLandingPageNavigationBarStyle = Component.useLandingPageNavigationBarStyle ?? false;

  return (<>
      <NavigationBar useLandingPageNavigationBarStyle={useLandingPageNavigationBarStyle} />
      <Component {...pageProps} />
      <Footer />
    </>
    );
}