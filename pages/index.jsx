import Head from 'next/head';
import Link from 'next/link';
import { products, categories } from 'data';
import ProductGrid from 'components/ProductGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>SHIFAVEDA — Men&apos;s Wellness</title>
      </Head>
      {/* <section className="hero-home">
        <div className="container hero-grid">
          <div className="hero-copy">
          <span className="eyebrow">MEN&apos;S WELLNESS · ROOTED IN INDIA</span>
          <h1>Wellness for the man you&apos;re becoming.</h1>
          <p>Discover herbal wellness and personal-care essentials created around simple, intentional routines.</p>
          <div className="hero-actions"><Link href="/products" className="btn btn-gold">Shop All Products</Link><Link href="/about" className="btn btn-outline">Discover SHIFAVEDA</Link></div>
          <div className="hero-points"><span>✓ Thoughtful herbal formulations</span><span>✓ Everyday routines</span><span>✓ Made in India</span></div>
        </div>
          <section className="hero-banner">
            <img src="/products/majoon-hero.png" alt="SHIFAVEDA Majoon" />
          </section>
          <div className="hero-visual">
            <div className="hero-ring" />
            <img src="/products/majoon.png" alt="SHIFAVEDA featured men's wellness product" />
            <div className="hero-float">
              <b>Featured</b>
              <span>Golden Capsules</span>
            </div>
          </div>
        </div>
      </section> */}
      <section className="hero-home">
        <section className="hero-banner">
          <img src="/products/majoon-hero.png" alt="SHIFAVEDA Majoon" />
        </section>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SHOP BY CATEGORY</span>
              <h2>Find your wellness routine.</h2>
            </div>
            <Link href="/products" className="text-link">
              View all products →
            </Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link href={`/category/${category.slug}`} className="category-card" key={category.slug}>
                <span>{category.icon}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <b>Explore →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FEATURED PRODUCTS</span>
              <h2>Made for modern men.</h2>
            </div>
            <Link href="/products" className="text-link">
              Shop all →
            </Link>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-section">
          <div>
            <span className="eyebrow light">WHY SHIFAVEDA</span>
            <h2>Traditional inspiration. Modern experience.</h2>
            <p>
              SHIFAVEDA brings Indian wellness traditions into a clean, easy-to-shop experience. We keep product
              information straightforward and routines practical.
            </p>
            <Link href="/about" className="btn btn-gold">
              About SHIFAVEDA
            </Link>
          </div>
          <div className="trust-box">
            <div>
              <strong>01</strong>
              <span>Ingredient-conscious</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Men&apos;s wellness focus</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Simple daily routines</span>
            </div>
            <div>
              <strong>04</strong>
              <span>India-inspired wellness</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div>
            <span className="eyebrow">HOW SHOPPING WORKS</span>
            <h2>Simple from cart to doorstep.</h2>
          </div>
          <div className="steps">
            <div>
              <b>01</b>
              <h3>Add to cart</h3>
              <p>Choose your products and quantities.</p>
            </div>
            <div>
              <b>02</b>
              <h3>Enter address</h3>
              <p>Fill in the details needed for delivery.</p>
            </div>
            <div>
              <b>03</b>
              <h3>Place order</h3>
              <p>Confirm your order and save the order ID.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
