import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import Reg from "./components/RegPage";
import Account from "./Admin/AccPanel";
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
            </Routes>
        </Router>
    );
}
 
export default App;
