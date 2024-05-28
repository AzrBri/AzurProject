import React, { createContext, useContext, useState, ReactNode } from 'react';
import ProductData, { ProductArray } from '../Admin/Product';

// Define the shape of the cart item
interface CartItem extends ProductArray {
  quantity: number;
}

// Define the shape of the cart context
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductArray) => void;
  removeFromCart: (productId: number) => void;
  calculateTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductArray) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.Product_id === product.Product_id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.Product_id === product.Product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter(item => item.Product_id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};