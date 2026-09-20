import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from 'lib/supabase';

const AuthContext = createContext(null);
const LOCAL_USER_KEY = 'shifaveda-demo-user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!supabase) {
        try { const saved = JSON.parse(localStorage.getItem(LOCAL_USER_KEY) || 'null'); if (active) setUser(saved); } catch (_) {}
        if (active) setLoading(false);
        return;
      }
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      setUser(data.session?.user || null);
      if (data.session?.user) await loadProfile(data.session.user.id);
      setLoading(false);
    };
    load();
    if (!supabase) return () => { active = false; };
    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!active) return;
      setUser(session?.user || null);
      if (session?.user) await loadProfile(session.user.id); else setProfile(null);
    });
    return () => { active = false; listener.subscription.unsubscribe(); };
  }, []);

  const loadProfile = async (id) => {
    if (!supabase) return;
    const { data } = await supabase.from('profiles').select('*').eq('id', id).maybeSingle();
    setProfile(data || null);
  };

  const signUp = async ({ email, password, name, phone }) => {
    if (!supabase) {
      const demo = { id: `demo-${Date.now()}`, email, user_metadata: { name, phone } };
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(demo)); setUser(demo); return { user: demo };
    }
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name, phone } } });
    if (error) throw error;
    return data;
  };

  const signIn = async (email, password) => {
    if (!supabase) {
      const demo = { id: `demo-${email}`, email, user_metadata: { name: email.split('@')[0] } };
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(demo)); setUser(demo); return { user: demo };
    }
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    if (supabase) await supabase.auth.signOut();
    localStorage.removeItem(LOCAL_USER_KEY); setUser(null); setProfile(null);
  };

  const value = useMemo(() => ({ user, profile, loading, signUp, signIn, signOut, refreshProfile: () => user && loadProfile(user.id) }), [user, profile, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
