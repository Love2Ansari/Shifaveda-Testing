import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from 'context/CartContext';
import { useWishlist } from 'context/WishlistContext';
import { useAuth } from 'context/AuthContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const { ids, toggle } = useWishlist();
  const canBuy = Boolean(product.price);

  const handleAdd = () => {
    if (!canBuy) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const handleWishlist = async () => {
    if (!user) {
      router.push(`/auth/login?next=${encodeURIComponent(router.asPath)}`);
      return;
    }
    try { await toggle(product.id); } catch (_) {}
  };

  return <article className="product-card">
    <div style={{position:'relative'}}>
      <Link href={`/product/${product.id}`} className="product-image-wrap"><img src={product.image} alt={product.name} /></Link>
      <button type="button" aria-label={user ? 'Wishlist' : 'Login to add to wishlist'} onClick={handleWishlist} style={{position:'absolute',top:10,right:10,border:0,borderRadius:99,padding:'8px 10px',background:'#fff',cursor:'pointer'}}>{ids.includes(product.id)?'♥':'♡'}</button>
    </div>
    <div className="product-card-body">
      <Link href={`/product/${product.id}`}><h3>{product.name}</h3></Link>
      <span className="product-kicker">{product.subtitle}</span>
      <div className="product-card-bottom">
        <strong>{canBuy ? `₹${product.price.toLocaleString('en-IN')}` : 'Price to be updated'}</strong>
        {canBuy && product.mrp > product.price && <del>₹{product.mrp.toLocaleString('en-IN')}</del>}
      </div>
      <button className="btn btn-dark full" disabled={!canBuy} onClick={handleAdd}>{added ? 'Added to cart ✓' : canBuy ? 'Add to Cart' : 'Price Coming Soon'}</button>
    </div>
  </article>;
}
