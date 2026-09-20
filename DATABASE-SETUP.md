# SHIFAVEDA database setup

1. Create a Supabase project.
2. Open SQL Editor and run `supabase-schema.sql`.
3. Run `seed-products.sql` to create the catalogue rows.
4. In Supabase Authentication, configure Email provider as desired.
5. Copy the project URL and publishable/anon key into `.env.local`.
6. Add the service-role key to `.env.local` only on the server; never expose it to the browser.
7. Restart `npm run dev`.
8. Register a user. To make that user an admin, run:
   `update public.profiles set role='admin' where id='USER_UUID';`

Orders are stored in `orders` and purchased products in `order_items`. Customer identity and RLS prevent one signed-in customer from reading another customer's orders. Guest orders are stored with `user_id` null but retain customer name, phone and delivery address in the order record.

## Owner/Admin Login
1. Create the owner's account once in Supabase Authentication > Users, using the owner's email and password.
2. The database trigger creates the matching `profiles` row with `role = 'customer'`.
3. Promote only the owner's account to admin in the Supabase SQL Editor:

```sql
UPDATE public.profiles
SET role = 'admin'
WHERE id = (SELECT id FROM auth.users WHERE email = 'YOUR-ADMIN-EMAIL');
```

4. Open `/admin/login` on the website and sign in with that email/password.
5. Customer accounts can never choose the `admin` role during signup.
