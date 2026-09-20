import Head from 'next/head';
import { useRouter } from 'next/router';
import PageShell from 'components/PageShell';
import ProductGrid from 'components/ProductGrid';
import { categories, products, getCategory } from 'data';

export async function getStaticPaths() { return { paths: categories.map((c) => ({ params: { slug: c.slug } })), fallback: false }; }
export async function getStaticProps({ params }) { return { props: { slug: params.slug } }; }
export default function CategoryPage({ slug }) {
  const category = getCategory(slug); const router = useRouter();
  if (!category) return null;
  const list = products.filter((p) => p.category === slug);
  return <><Head><title>{category.title} | SHIFAVEDA</title></Head><PageShell eyebrow="SHOP BY CATEGORY" title={category.title} text={category.description}><section className="section"><div className="container">{list.length ? <ProductGrid products={list}/> : <div className="empty-box">Products for this category are being added.</div>}<div className="back-row"><button onClick={() => router.back()} className="text-link button-link">← Go back</button></div></div></section></PageShell></>;
}
