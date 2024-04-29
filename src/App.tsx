import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import Reg from "./components/RegPage";
import ProdList from "./components/ProductPage";
import Account from "./Admin/AccPanel";
import Product from "./Admin/ProdPanel";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home"
                    element={<Home />} />
                <Route path="/login"
                    element={<Login />} />
                <Route path="/reg"
                    element={<Reg />} />
                <Route path="/accPanel"
                    element={<Account />} />
                <Route path="/prodPanel"
                    element={<Product />} />
                <Route path="/prodPage"
                    element={<ProdList />} />
            </Routes>
        </Router>
    );
}
 
export default App;
