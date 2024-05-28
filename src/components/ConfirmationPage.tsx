import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';
import Footer from './Footer';

interface OrderDetails {
  email: string;
  firstName: string;
  lastName: string;
  street: string;
  barangay: string;
  municipality: string;
  province: string;
  paymentMethod: string;
  cartItems: {
    Product_id: string;
    Product_name: string;
    Image1: string;
    Price: number;
    quantity: number;
  }[];
  totalAmount: number;
}

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const orderDetails = location.state as OrderDetails;

  return (
    <>
    <NavbarPanel />
    <div className="container my-5">
      <h3 className="mt-5">Order Confirmation</h3>
      <h4>Thank you for your purchase, {orderDetails.firstName}!</h4>

      <h5>Order Details:</h5>
      <p>Email: {orderDetails.email}</p>
      <p>Name: {orderDetails.firstName} {orderDetails.lastName}</p>
      <p>Address: {orderDetails.street}, {orderDetails.barangay}, {orderDetails.municipality}, {orderDetails.province}</p>
      <p>Payment Method: {orderDetails.paymentMethod}</p>

      <h5>Products:</h5>
      <div className="cart-items mt-3">
        {orderDetails.cartItems.map(item => (
          <div key={item.Product_id} className="d-flex align-items-center mt-3">
            <img src={process.env.PUBLIC_URL + `/img/${item.Image1}`} alt={item.Product_name} className="img-fluid me-3" style={{ width: '150px' }} />
            <div>
              <h6>{item.Product_name}</h6>
              <p>Qty {item.quantity}</p>
              <p>Subtotal ${(item.Price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Total Amount</h5>
          <h3 className="card-text">${orderDetails.totalAmount.toFixed(2)}</h3>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ConfirmationPage;