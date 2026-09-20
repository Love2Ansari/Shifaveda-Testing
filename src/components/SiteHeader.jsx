import Link from 'next/link';
import { useState } from 'react';
import { useCart } from 'context/CartContext';
import { useAuth } from 'context/AuthContext';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const { user, profile } = useAuth();
  const close = () => setOpen(false);
  const links = [['Home','/'],['All Products','/products'],["Men's Wellness",'/category/mens-wellness'],['Daily Wellness','/category/daily-wellness'],['Personal Care','/category/personal-care'],['About Us','/about'],['Contact','/contact']];
  return <>
    <div className="announcement">SHIFAVEDA · Modern men&apos;s wellness, rooted in Indian traditions</div>
    <header className="site-header"><div className="site-header-inner">
      <Link href="/" className="logo" onClick={close}>SHIFA<span>VEDA</span></Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu"><span/><span/><span/></button>
      <nav className={`main-nav ${open ? 'open' : ''}`}>{links.map(([label,href]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}</nav>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <Link href="/wishlist" className="cart-link" onClick={close}>Wishlist</Link><Link href={user ? '/account' : '/auth/login'} className="cart-link" onClick={close}>{user ? (profile?.name || 'Account') : 'Login'}</Link>
        <Link href="/cart" className="cart-link" aria-label="Cart" onClick={close}>Cart <b>{count}</b></Link>
      </div>
    </div></header>
  </>;
}
