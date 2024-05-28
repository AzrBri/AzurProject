import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Carousel, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

function Footer(){
  return (
    <>
          <footer className="bg-black text-white py-5">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="text-primary font-weight-bold">AZUR</h1>
              <h3 className="text-secondary">Gaming Laptops</h3>
            </Col>
          </Row>
          <Row className="text-center my-4">
            <Col>
              <p style={{ fontSize: 24 }}>Products</p>
            </Col>
            <Col>
              <p style={{ fontSize: 24 }}>About</p>
            </Col>
            <Col>
              <p style={{ fontSize: 24 }}>Help</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p style={{ fontSize: 24 }}>AZUR COMP INC, ALL RIGHTS RESERVED.</p>
            </Col>
          </Row>
          <Row className="text-center my-4">
            <Col>
              <div className="d-flex justify-content-center">
                <div className="bg-primary mx-2" style={{ width: 600, height: 5, borderRadius: 20 }}></div>
                <div className="bg-primary mx-2" style={{ width: 600, height: 5, borderRadius: 20 }}></div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="bg-primary mx-2" style={{ width: 600, height: 5, borderRadius: 20 }}></div>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <Col xs="auto">
              <img
                className="img-fluid mx-2"
                style={{ width: 60, height: 60 }}
                src={process.env.PUBLIC_URL + '/img/Google.png'}
                alt="Google"
              />
            </Col>
            <Col xs="auto">
              <img
                className="img-fluid mx-2"
                style={{ width: 60, height: 60 }}
                src={process.env.PUBLIC_URL + '/img/Facebook.png'}
                alt="Facebook"
              />
            </Col>
          </Row>
        </Container>
      </footer>
    </>
    );
}
export default Footer;