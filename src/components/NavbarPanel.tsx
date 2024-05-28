import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Carousel, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useAuth } from './AuthContext';

function NavbarPanel(){
  const navigate = useNavigate();
 const { loggedIn } = useAuth();
    const goToSecondsComp = () => {
 
        navigate('/login');
    };
    const goToFirstComp = () => {
 
        navigate('/reg');
    };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand as={Link} to="/home">
          <h3 style={{ color: "#007FFF" }}>AZUR</h3>
        </Navbar.Brand>
        <Nav className="mx-4 mt-2">
          <Nav.Link style={{ color: "#007FFF" }} as={Link} to="/home">Home</Nav.Link>
          <Nav.Link style={{ color: "#007FFF" }} as={Link} to="/prodPage">Products</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <NavDropdown title={<><i className="fas fa-user"></i> Profile <span>&#9662;</span></>} id="basic-nav-dropdown">
            {loggedIn ? (
              <>
                <NavDropdown.Item href="unset.php" style={{ color: "#007FFF" }}>Log-Out</NavDropdown.Item>
              </>
            ) : (
              <>
                <NavDropdown.Item onClick={goToSecondsComp} style={{ color: "#007FFF" }}>Log-In</NavDropdown.Item>
                <NavDropdown.Item onClick={goToFirstComp} style={{ color: "#007FFF" }}>Sign-Up</NavDropdown.Item>
              </>
            )}
          </NavDropdown>
         <Nav.Link as={Link} style={{ color: "#007FFF" }} to="/cart"><i className="fas fa-shopping-cart"></i></Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarPanel;