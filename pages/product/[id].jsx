import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { products, getProduct } from 'data';
import { useCart } from 'context/CartContext';
import { useState } from 'react';
import ProductReviews from 'components/ProductReviews';

export async function getStaticPaths() { return { paths: products.map((p) => ({ params: { id: p.id } })), fallback: false }; }
export async function getStaticProps({ params }) { return { props: { id: params.id } }; }
export default function ProductPage({ id }) {
  const product = getProduct(id);
  const router = useRouter();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.image || '');

  if (!product) return null;

  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const add = () => {
    if (!product.price) return;
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1300);
  };

  return <><Head><title>{product.name} | SHIFAVEDA</title><meta name="description" content={product.description}/></Head>
    <main className="product-detail"><div className="container">
      <button onClick={() => router.back()} className="back-button">← Back</button>
      <div className="product-detail-grid">
        <div className="product-gallery">
          <div className="main-product-image">
            <img src={selectedImage || product.image} alt={product.name}/>
          </div>
          {gallery.length > 1 && <div className="gallery-row" role="list" aria-label="Product images">
            {gallery.map((src, index) => <button
              type="button"
              key={src}
              className={`gallery-thumb ${selectedImage === src ? 'active' : ''}`}
              onClick={() => setSelectedImage(src)}
              aria-label={`View product image ${index + 1}`}
              aria-pressed={selectedImage === src}
            >
              <img src={src} alt={`${product.name} image ${index + 1}`}/>
            </button>)}
          </div>}
        </div>
        <div className="product-info"><span className="eyebrow">{product.subtitle}</span><h1>{product.name}</h1><p className="product-desc">{product.description}</p><div className="detail-price">{product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Price to be updated'}</div>{product.mrp > product.price && <div className="mrp">MRP <del>₹{product.mrp.toLocaleString('en-IN')}</del></div>}<div className="highlight-list">{product.highlights.map((h) => <div key={h}>✓ {h}</div>)}</div>{product.price ? <><div className="qty-row"><span>Quantity</span><div><button onClick={() => setQty(Math.max(1, qty - 1))}>−</button><b>{qty}</b><button onClick={() => setQty(qty + 1)}>+</button></div></div><button className="btn btn-dark large full" onClick={add}>{added ? 'Added to Cart ✓' : 'Add to Cart'}</button><Link href="/cart" className="btn btn-gold large full mt-2">Go to Cart</Link></> : <div className="notice">This product is shown in the catalogue. Add its selling price in <code>src/data.js</code> before enabling checkout.</div>}<div className="delivery-note">Secure checkout · Address collected before order placement · Cash on Delivery flow included</div></div>
      </div>
    </div></main><ProductReviews productId={product.id}/>
  </>;
}
