import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'shifaveda-cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (Array.isArray(saved)) setCart(saved);
    } catch (_) {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  const addToCart = (product, quantity = 1) => {
    if (!product || !product.price) return false;
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) return items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      return [...items, { id: product.id, name: product.name, image: product.image, price: product.price, quantity }];
    });
    return true;
  };

  const updateQuantity = (id, quantity) => {
    setCart((items) => items.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
  };

  const removeFromCart = (id) => setCart((items) => items.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 1999 || subtotal === 0 ? 0 : 79;
  const total = subtotal + shipping;

  const value = useMemo(() => ({ cart, addToCart, updateQuantity, removeFromCart, clearCart, count, subtotal, shipping, total, ready }), [cart, count, subtotal, shipping, total, ready]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
