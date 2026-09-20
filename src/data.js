export const categories = [
  { slug: 'mens-wellness', title: "Men's Wellness", description: 'Herbal wellness products designed for modern men.', icon: '♂' },
  { slug: 'daily-wellness', title: 'Daily Wellness', description: 'Simple additions to your everyday wellness routine.', icon: '✦' },
  { slug: 'personal-care', title: 'Personal Care', description: 'Massage and personal-care essentials for everyday use.', icon: '◌' },
];

export const products = [
  {
    id: 'alpha-xman-tila',
    name: 'ALPHA Xman Tila',
    subtitle: 'Herbal Massage Oil',
    category: 'personal-care',
    price: 599,
    mrp: 990,
    image: '/products/tila-front.png',
    gallery: ['/products/tila-front.png', '/products/tila-back.png', '/products/tila-ingredients.png', '/products/tila-benefits.png', '/products/tila-how-to-use.png'],
    description: 'A traditional herbal massage oil presented for men’s personal wellness routines.',
    highlights: ['External use only', '5–7 drops as directed on the pack', 'For massage use'],
  },
  {
    id: 'alpha-xman-powder',
    name: 'ALPHA Xman Powder',
    subtitle: 'Herbal Wellness Powder · 125g',
    category: 'mens-wellness',
    price: 1299,
    mrp: 2599,
    image: '/products/powder-front.png',
    gallery: ['/products/powder-front.png', '/products/powder-back.png', '/products/powder-ingredients.png', '/products/powder-benefits.png', '/products/powder-how-to-use.png'],
    description: 'A traditional herbal powder blend made with ingredients listed on the product label.',
    highlights: ['125g pack', 'Use as directed on the product label', 'Formulated around Ayurvedic ingredients'],
  },
  {
    id: 'alpha-golden-capsules',
    name: 'ALPHA Xman Golden Capsules',
    subtitle: 'Herbal Capsules · 15 Capsules',
    category: 'mens-wellness',
    price: 899,
    mrp: 1799,
    image: '/products/capsules-front.png',
    gallery: ['/products/capsules-front.png', '/products/capsules-back.png', '/products/capsules-ingredients.png', '/products/capsules-benefits.png', '/products/capsules-how-to-use.png'],
    description: 'A capsule-based herbal wellness product with ingredients displayed on the pack.',
    highlights: ['15 capsules', 'Take only as directed on the label', 'Store as instructed on the pack'],
  },
  {
    id: 'alpha-majoon',
    name: 'ALPHA Xman Majoon',
    subtitle: 'Herbal Wellness Paste · 250g',
    category: 'daily-wellness',
    price: 1499,
    mrp: 2699,
    image: '/products/majoon.png',
    gallery: ['/products/majoon.png', '/products/majoon-detail.png', '/products/majoon-how-to-use.png','/products/majoon-key-ingredients.png'],
    description: 'A traditional herbal wellness preparation. Product pricing can be updated in src/data.js.',
    highlights: ['250g pack shown in supplied artwork', 'Use as directed on the product label', 'Keep tightly closed and store as instructed'],
  },
];

export const getProduct = (id) => products.find((product) => product.id === id);
export const getCategory = (slug) => categories.find((category) => category.slug === slug);

export const companyLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { title: 'Track Order', href: '/track-order' },
  { title: 'All Products', href: '/products' },
];
