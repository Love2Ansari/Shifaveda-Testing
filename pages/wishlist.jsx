import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';
import { useWishlist } from 'context/WishlistContext';
import { products } from 'data';
import ProductCard from 'components/ProductCard';

export default function WishlistPage() {
  const { user, loading } = useAuth();
  const { ids } = useWishlist();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.replace(`/auth/login?next=${encodeURIComponent('/wishlist')}`);
  }, [loading, user, router]);

  if (loading || !user) return <main><section className="section"><div className="container">Checking your account…</div></section></main>;

  const items = products.filter((p) => ids.includes(p.id));
  return <>
    <Head><title>Wishlist | SHIFAVEDA</title></Head>
    <main><section className="section"><div className="container">
      <span className="eyebrow">YOUR ACCOUNT</span><h1>Wishlist</h1>
      {!items.length ? <div className="summary-card" style={{marginTop:24}}><p>Your wishlist is empty.</p><Link className="btn btn-dark" href="/products">Browse Products</Link></div> : <div className="product-grid" style={{marginTop:24}}>{items.map((p)=><ProductCard key={p.id} product={p}/>)}</div>}
    </div></section></main>
  </>;
}
