import Head from 'next/head';
import SiteHeader from 'components/SiteHeader';
import SiteFooter from 'components/SiteFooter';
import { CartProvider } from 'context/CartContext';
import { AuthProvider } from 'context/AuthContext';
import { WishlistProvider } from 'context/WishlistContext';
import 'styles/style.css';
import 'styles/responsive.css';

export default function MyApp({ Component, pageProps }) {
  return <AuthProvider><WishlistProvider><CartProvider>
    <Head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="theme-color" content="#163a2b"/><title>SHIFAVEDA — Men&apos;s Wellness</title><meta name="description" content="SHIFAVEDA — modern men's wellness and personal care inspired by Indian traditions." /></Head>
    <SiteHeader/><Component {...pageProps}/><SiteFooter/>
  </CartProvider></WishlistProvider></AuthProvider>;
}
