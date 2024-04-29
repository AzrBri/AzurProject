import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Carousel, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavbarPanel(){
  const navigate = useNavigate();
 
    const goToSecondsComp = () => {
 
        // This will navigate to second component
        navigate('/login');
    };
    const goToFirstComp = () => {
 
        // This will navigate to first component
        navigate('/reg');
    };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand as={Link} to="/home">
          <h3 style={{ color: "#007FFF" }}>AZUR</h3>
        </Navbar.Brand>
        <Nav className="mx-4 mt-2">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/prodPage">Products</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <NavDropdown title={<><i className="fas fa-user"></i> Profile <span>&#9662;</span></>} id="basic-nav-dropdown">
            {sessionStorage.getItem("logged") === "true" ? (
              <>
                <NavDropdown.Item href="profile.php" className="btn btn-primary">Profile</NavDropdown.Item>
                <NavDropdown.Item href="unset.php">Log-Out</NavDropdown.Item>
              </>
            ) : (
              <>
                <NavDropdown.Item onClick={goToSecondsComp}>Log-In</NavDropdown.Item>
                <NavDropdown.Item onClick={goToFirstComp}>Sign-Up</NavDropdown.Item>
              </>
            )}
          </NavDropdown>
          <Nav.Link href="cart.php"><i className="fas fa-shopping-cart"></i></Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarPanel;