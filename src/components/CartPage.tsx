import React from 'react';
import { useCart } from './CartContext';
import './cart.css';
import NavbarPanel from './NavbarPanel';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { CSSProperties } from 'react';
import Footer from './Footer';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, calculateTotal } = useCart();
  const { loggedIn } = useAuth();

  return (
    <>
    <NavbarPanel />
    {loggedIn ? (
      <>
  <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.Product_id} className="cart-item">
                <img src={process.env.PUBLIC_URL + `/img/${item.Image1}`} alt={item.Product_name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.Product_name}</h4>
                  <p>${item.Price.toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.Product_id)} className="remove-button">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Subtotal: ${calculateTotal().toFixed(2)}</h2>
            <p>Shipping: Free</p>
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            <Link to="/Checkout" className="checkout-button">Check Out</Link>
          </div>
        </div>
      )}
    </div>
    </>
    ) : (
      <>
      <div style={styles.container}>
      <h1>Login Required</h1>
      <p>You need to be logged in to use the cart.</p>
      <Link to="/login" style={styles.button}>Log in</Link>
    </div>
    </>
      )}
      <Footer />
  </>
  );
};

const styles: { container: CSSProperties, button: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};


export default CartPage;