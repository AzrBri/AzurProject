import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Carousel, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavbarPanel from './NavbarPanel';
import Footer from './Footer';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import ProductData, { ProductArray } from '../Admin/Product';

function HomePage() {
  const { products } = ProductData();
  const prod1 = products.slice(0, 3);
  const prod2 = products.slice(3, 6);
  return (
    <>
  <div className="bg-dark text-white pb-5">
      <NavbarPanel />
      <Container fluid className="position-relative p-0">
        <img
          className="img-fluid w-100"
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          src={process.env.PUBLIC_URL + '/img/20240305_134357_0000 1.png'}
          alt="Banner"
        />
      </Container>

      <Container className="mt-5 text-center">
        <div className="mb-3">
          <div className="bg-primary rounded-pill mx-auto" style={{ width: 200, height: 5 }} />
          <div className="bg-primary rounded-pill mx-auto mt-3" style={{ width: 100, height: 3 }} />
        </div>
        <h2 className="font-weight-bold">Featured Products</h2>
      </Container>

      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          {prod1.map((product: ProductArray) => (
            <Col key={product.Product_id} xs={4} md={4} lg={4}>
              <Card className="bg-primary text-white text-center h-100">
                <Card.Img variant="top" className="p-3 img-fluid" src={process.env.PUBLIC_URL + `/img/${product.Image1}`} />
                <Card.Body>
                  <Card.Title className="font-weight-bold">{product.Product_name}</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: product.Description }} />
                  <h3 className="font-weight-bold">{product.Price}</h3>
                    <Link to={`/prodDetails/${product.Product_id}`}>
                                <Button style={{background: '#007FFF'}} variant="info" className="btn-lg mt-3 text-white">Select</Button>
                    </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="my-5">
        <Carousel>
          {['banner1.png', 'banner2.png', 'banner3.png'].map((banner, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + `/img/${banner}`}
                alt={`Slide ${idx + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
   
    <Container className="text-center my-5">
        <Row>
          <Col>
            <h2 className="text-primary font-weight-bold">Refine Your Gaming Experience:</h2>
            <h3 className="text-primary font-weight-bold">Tailor your Search with Precision</h3>
          </Col>
        </Row>
        <Row className="justify-content-center my-4">
          <Col xs="auto">
            <Button variant="dark" style={{ width: 200, height: 60, borderRadius: 16 }}>
              <span style={{ color: '#007FFF', fontSize: 24, fontFamily: 'Exo', fontWeight: '700' }}>FILTER</span>
            </Button>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center mb-5">          {prod1.map((product: ProductArray) => (
            <Col key={product.Product_id} xs={4} md={4} lg={4}>
            <Link to={`/prodDetails/${product.Product_id}`} style={{textDecoration: 'none'}}>
              <Card className=" text-white text-center h-100" style={{ borderRadius: 20, background: '#333333' }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <Image
                    className="img-fluid mb-3"
                    
                    src={process.env.PUBLIC_URL + `/img/${product.Image3}`}
                    alt={product.Product_name}
                  />
                  <Card.Title className="text-primary font-weight-bold" style={{ fontSize: 32 }}>{product.Product_name}</Card.Title>
                  <Card.Text style={{ fontSize: 18 }}>{product.CPU}</Card.Text>
                  <Card.Text style={{ fontSize: 18 }}>{product.GPU}</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
       </div>
      <Footer />
      </>
  );
}

export default HomePage;