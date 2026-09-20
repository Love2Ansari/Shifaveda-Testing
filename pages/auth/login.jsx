import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

export default function Login(){
 const {signIn}=useAuth(); const router=useRouter(); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [busy,setBusy]=useState(false);
 const submit=async e=>{e.preventDefault();setError('');setBusy(true);try{await signIn(email,password);router.push(router.query.next || '/account')}catch(err){setError(err.message||'Unable to sign in')}finally{setBusy(false)}};
 return <><Head><title>Login | SHIFAVEDA</title></Head><main><section className="section"><div className="container" style={{maxWidth:520}}><div className="summary-card"><h1>Login</h1><p>Sign in to view your account and orders.</p><form className="checkout-form" onSubmit={submit}><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label>{error&&<div className="error-box">{error}</div>}<button className="btn btn-gold large" disabled={busy}>{busy?'Signing in…':'Login'}</button></form><p style={{marginTop:16}}>New customer? <Link href="/auth/register">Create an account</Link></p><p><Link href="/auth/forgot-password">Forgot password?</Link></p></div></div></section></main></>;
}
