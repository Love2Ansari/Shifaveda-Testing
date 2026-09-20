# SHIFAVEDA - Complete E-commerce Setup

## 1. Install and run

```bash
npm i
npm run dev
```

Open http://localhost:3000.

## 2. Connect the real database

Create a Supabase project, run `supabase-schema.sql` in SQL Editor, then run `seed-products.sql`.
Copy `.env.example` to `.env.local` and fill the Supabase URL, publishable key, and server-only service role key. Restart the dev server.

The browser never receives the service role key. Orders are created by `/api/orders`, prices and stock are read from PostgreSQL, and order/customer access is protected by authentication and RLS.

## 3. Make an admin

Register normally, then in Supabase SQL Editor run:

```sql
update public.profiles set role='admin' where id='YOUR_AUTH_USER_UUID';
```

Then visit `/admin`.

## 4. Payments

COD works after the database is connected. Online payments use Razorpay when `NEXT_PUBLIC_RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are configured. Never expose the secret key to the browser.

## 5. Reviews

A signed-in customer can submit a review only after the product appears in a delivered order. Reviews are stored in PostgreSQL and require admin approval before public display.

## 6. Guest orders

Login is optional. Guest checkout stores name, phone, email, full delivery address, products, quantities, prices, shipping, discount, total, payment method/status and order status in `orders` and `order_items`. Guest tracking uses order number + phone.

## Admin login
The website owner logs in separately at `/admin/login`. First create the owner in Supabase Authentication, then set that user's `profiles.role` to `admin` using the SQL shown in `DATABASE-SETUP.md`. Never put the Supabase service-role key in client-side code.

## Wishlist login rule
Wishlist is account-only. A visitor who clicks the wishlist heart is sent to customer login, and the wishlist is stored per authenticated user's Supabase ID.
