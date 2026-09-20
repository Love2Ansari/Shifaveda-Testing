import Link from 'next/link';

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <Link href="/" className="logo logo-light">SHIFA<span>VEDA</span></Link>
        <p>Modern men&apos;s wellness inspired by Indian traditions. Explore herbal wellness and personal-care products made for everyday routines.</p>
      </div>
      <div><h4>Shop</h4><Link href="/products">All Products</Link><Link href="/category/mens-wellness">Men&apos;s Wellness</Link><Link href="/category/daily-wellness">Daily Wellness</Link><Link href="/category/personal-care">Personal Care</Link></div>
      <div><h4>Help</h4><Link href="/track-order">Track Order</Link><Link href="/contact">Contact</Link><Link href="/shipping-returns">Shipping & Returns</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></div>
      <div><h4>SHIFAVEDA</h4><Link href="/about">About Us</Link><p className="footer-small">Customer support<br/>Mon–Sat · 10 AM–6 PM</p><a href="mailto:hello@shifaveda.com">hello@shifaveda.com</a></div>
    </div>
    <div className="container footer-bottom">© {new Date().getFullYear()} SHIFAVEDA. All rights reserved.</div>
  </footer>;
}
