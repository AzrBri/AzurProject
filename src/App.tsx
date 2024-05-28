import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import Reg from "./components/RegPage";
import ProdList from "./components/ProductPage";
import ProdDetails from "./components/ProductDetail";
import CartPanel from "./components/CartPage";
import Account from "./Admin/AccPanel";
import Product from "./Admin/ProdPanel";
import Admin from "./Admin/login";
import Checkout from "./components/TransactionPage";
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';
import Confirmation from './components/ConfirmationPage';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneN: string;
  gender: string;
  age: number;
  birthdate: string;
  email: string;
  password: string;
  
}

function App() {
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);
    return (
      <AuthProvider>
       <CartProvider>
        <Router>
            <Routes>
                <Route path="/home"
                    element={<Home />} />
                <Route path="/login" element={<Login registeredUsers={registeredUsers} />} />
                <Route
                  path="/reg"
                  element={<Reg registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers} />}
                />  
                <Route
                  path="/Admin/"
                  element={<Admin />}
                />    
                <Route path="/accPanel"
                    element={<Account />} />
                <Route path="/prodPanel"
                    element={<Product />} />
                <Route path="/prodPage"
                    element={<ProdList />} />
                <Route path="/cart" element={<CartPanel />} />
                <Route path="/prodDetails" element={<ProdDetails />}
                />
                <Route path="/Checkout" element={<Checkout />}
                />
                
                <Route path="/" element={<ProdList />} />
                <Route path="/prodDetails/:productId" element={<ProdDetails />} />
                <Route path="/confirm" element={<Confirmation />} />
        
            </Routes>
        </Router>
      </CartProvider>
      </AuthProvider>
    );
}
 
export default App;
