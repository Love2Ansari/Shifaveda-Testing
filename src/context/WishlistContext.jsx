import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from 'lib/supabase';
import { useAuth } from 'context/AuthContext';

const C = createContext(null);

export function WishlistProvider({ children }) {
  const { user } = useAuth();
  const [ids, setIds] = useState([]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!user || !supabase) {
        if (active) setIds([]);
        return;
      }
      const { data } = await supabase
        .from('wishlist')
        .select('product_id')
        .eq('user_id', user.id);
      if (active) setIds((data || []).map((x) => x.product_id));
    };
    load();
    return () => { active = false; };
  }, [user]);

  const toggle = async (id) => {
    if (!user || !supabase) return { requiresLogin: true };
    if (ids.includes(id)) {
      const { error } = await supabase
        .from('wishlist')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', id);
      if (error) throw error;
      setIds((current) => current.filter((x) => x !== id));
    } else {
      const { error } = await supabase
        .from('wishlist')
        .insert({ user_id: user.id, product_id: id });
      if (error) throw error;
      setIds((current) => [...current, id]);
    }
    return { requiresLogin: false };
  };

  return <C.Provider value={useMemo(() => ({ ids, toggle }), [ids])}>{children}</C.Provider>;
}

export const useWishlist = () => useContext(C);
