import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

export default function AdminLogin() {
  const { user, profile, loading, signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user && profile?.role === 'admin') router.replace('/admin');
  }, [loading, user, profile, router]);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      const result = await signIn(email, password);
      if (result?.user) {
        // profile is loaded by AuthContext after the auth session changes.
        // The dashboard performs the authoritative role check as well.
        setTimeout(() => router.replace('/admin'), 300);
      }
    } catch (err) {
      setError(err.message || 'Unable to sign in');
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <Head><title>Admin Login | SHIFAVEDA</title></Head>
      <main>
        <section className="section">
          <div className="container" style={{ maxWidth: 520 }}>
            <div className="summary-card">
              <span className="eyebrow">SHIFAVEDA ADMIN</span>
              <h1>Admin Login</h1>
              <p>Website owner/admin access. Only an account with the <strong>admin</strong> role can open the dashboard.</p>
              <form className="checkout-form" onSubmit={submit}>
                <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" /></label>
                <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" /></label>
                {error && <div className="error-box">{error}</div>}
                <button className="btn btn-gold large" disabled={busy}>{busy ? 'Signing in…' : 'Login as Admin'}</button>
              </form>
              <p style={{ marginTop: 16 }}><Link href="/auth/login">Customer Login</Link></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
