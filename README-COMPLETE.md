# SHIFAVEDA Full E-commerce

## Run locally

```bash
npm i
npm run dev
```

Open http://localhost:3000.

## Database

Copy `.env.example` to `.env.local`, add Supabase values, then follow `DATABASE-SETUP.md`.

Without Supabase credentials the storefront still boots, and auth has a local demo fallback; real orders/reviews/admin data require Supabase.

## Main routes

- `/` storefront
- `/products` search/filter/sort
- `/auth/login`, `/auth/register`, `/auth/forgot-password`
- `/account` and `/account/orders/[id]`
- `/cart`, `/checkout`, `/track-order`
- `/admin` dashboard, `/admin/orders`, `/admin/products`, `/admin/reviews`

## Security

Use only the Supabase publishable/anon key in browser code. Keep `SUPABASE_SERVICE_ROLE_KEY` server-side. Run the supplied RLS policies before going live.
