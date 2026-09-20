# SHIFAVEDA Next.js Storefront

A mobile-responsive SHIFAVEDA men's wellness storefront converted from the supplied Next.js template.

## Included
- SHIFAVEDA navigation with Home, All Products, Men's Wellness, Daily Wellness, Personal Care, About Us and Contact.
- Supplied product artwork integrated for ALPHA Xman Tila, ALPHA Xman Powder, ALPHA Xman Golden Capsules and ALPHA Xman Majoon.
- Product detail pages.
- Add-to-cart, quantity controls, cart summary and shipping calculation.
- Checkout form collecting customer name, mobile, email, full address, landmark, city, state and PIN code.
- Cash-on-delivery order placement with an order ID.
- Order success page and browser-based order tracking.
- WhatsApp handoff after order placement; change the number in `src/config.js`.
- About, Contact, Shipping & Returns, Privacy and Terms pages so navigation links do not dead-end.
- Responsive layout for desktop, tablet and mobile.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important before launch

1. Replace the placeholder support email/phone and WhatsApp number in `src/config.js`.
2. Update product prices in `src/data.js`. The Majoon price is intentionally `0` because a reliable selling price was not visible in the supplied artwork; it will show as "Price to be updated" until you set it.
3. Replace the starter legal pages with your final policies.
4. The included order tracker stores orders in the customer browser. It is a working demo/local storefront flow, not a shared production order database.
5. For real parcel fulfilment, connect the checkout to a database/admin system and a shipping provider. For online payments, connect a payment gateway such as Razorpay/Cashfree/PayU after the business account and server-side keys are configured.
