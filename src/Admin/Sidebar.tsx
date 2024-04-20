import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import "./sidebar.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`sidebar ${isOpen ? 'sidebar-active' : ''}`}>
      <ul className="mt-5 ps-4 text-center fw-bold text-primary">
        <li><i className="fas fa-user"></i><Link to="/accPanel" className="text-light">Accounts</Link></li>
        <li><i className="fas fa-box"></i><Link to="/prodPanel" className="text-light">Products</Link></li>
        <li><i className="fas fa-chart-line"></i><a href="salesInventory.php" className="text-light">Sales Inventory</a></li>
        <li><i className="fas fa-file-alt"></i><a href="orderSummary.php" className="text-light">Order Summary</a></li>
        <li><i className="bi bi-box-arrow-right"></i><a href="../index.php" className="text-danger">LOG-OUT</a></li>
      </ul>
    </div>
    <nav className="navbar bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fs-5 fw-bold text-light" href="#">ADMIN</a>
        <button className="btn btn-primary trigger-button" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
    </>
  );
}

export default Sidebar;