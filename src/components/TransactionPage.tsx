import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css';
import NavbarPanel from './NavbarPanel';
import { useCart } from './CartContext';
import Footer from './Footer';

const TransactionPage: React.FC = () => {
  const { cart, calculateTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    street: '',
    barangay: '',
    municipality: '',
    province: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVC: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePlaceOrder = () => {
    const orderDetails = {
      ...formData,
      paymentMethod,
      cartItems: cart,
      totalAmount: calculateTotal(),
    };

    navigate('/confirm', { state: orderDetails });
  };

  return (
    <>
      <NavbarPanel />
      <div className="container my-5">
        <h2 className="text-end">Estimated Total</h2>
        <h3 className="text-end">${calculateTotal().toFixed(2)}</h3>

        <h3 className="mt-5">Checkout</h3>

        <h4>Shipping Address</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required/>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="street" className="form-label">Street</label>
              <input type="text" className="form-control" id="street" placeholder="Street" value={formData.street} onChange={handleInputChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="barangay" className="form-label">Barangay</label>
              <input type="text" className="form-control" id="barangay" placeholder="Barangay" value={formData.barangay} onChange={handleInputChange} required/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="municipality" className="form-label">Municipality</label>
              <input type="text" className="form-control" id="municipality" placeholder="Municipality" value={formData.municipality} onChange={handleInputChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="province" className="form-label">Province</label>
              <input type="text" className="form-control" id="province" placeholder="Province" value={formData.province} onChange={handleInputChange} required/>
            </div>
          </div>
        </form>

        <h4>Payment Method</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cod"
                  className="form-check-input me-2"
                  value="COD"
                  onChange={(e) => setPaymentMethod(e.target.value)} required
                />
                <label htmlFor="cod" className="form-check-label">Cash On Delivery</label>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cc"
                  className="form-check-input me-2"
                  value="CC"
                  onChange={(e) => setPaymentMethod(e.target.value)} required
                />
                <label htmlFor="cc" className="form-check-label">Credit/Debit Card</label>
              </div>
            </div>
          </div>
        </div>

        {paymentMethod === 'CC' && (
          <div>
            <h4>Credit/Debit Card Information</h4>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input type="text" className="form-control" id="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Name on Card</label>
              <input type="text" className="form-control" id="cardName" placeholder="Name on Card" value={formData.cardName} onChange={handleInputChange} required />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cardExpiry" className="form-label">Expiry Date</label>
                <input type="text" className="form-control" id="cardExpiry" placeholder="MM/YY" value={formData.cardExpiry} onChange={handleInputChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cardCVC" className="form-label">CVC</label>
                <input type="text" className="form-control" id="cardCVC" placeholder="CVC" value={formData.cardCVC} onChange={handleInputChange} required />
              </div>
            </div>
          </div>
        )}

        <div className="cart-items mt-5">
          {cart.map(item => (
            <div key={item.Product_id} className="d-flex align-items-center mt-4">
              <img src={process.env.PUBLIC_URL + `/img/${item.Image1}`} alt={item.Product_name} className="img-fluid me-3" style={{ width: '150px' }} />
              <div>
                <h4>{item.Product_name}</h4>
                <p>Qty {item.quantity}</p>
                <p>Subtotal ${(item.Price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Subtotal</h5>
            <p className="card-text">${calculateTotal().toFixed(2)}</p>
            <h5 className="card-title">Shipping</h5>
            <p className="card-text">$0.00</p>
            <h5 className="card-title">Total</h5>
            <h3 className="card-text">${calculateTotal().toFixed(2)}</h3>
            <button type="button" className="btn btn-primary w-100 mt-3" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TransactionPage;