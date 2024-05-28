import React from 'react';
import NavbarPanel from './NavbarPanel';
import ProductData, { ProductArray } from '../Admin/Product';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useCart } from './CartContext';
import { Carousel, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Footer from './Footer';

const ProductDetail: React.FC = () => {
  const { products } = ProductData();
  const relatedProducts = products.slice(0, 3);
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();

  if (!productId) {
    return <div>Invalid Product ID</div>;
  }
  
  const numericProductId = parseInt(productId, 10);
  
  if (isNaN(numericProductId)) {
    return <div>Invalid Product ID</div>;
  }

  const product = products.find(p => p.Product_id === numericProductId);

  if (!product) {
    return <div>Product not found</div>;
  }
  
  
  return (
    <body className="bg-dark">
      <NavbarPanel />
    <div className="container text-light">
      <div className="row mt-5">
        <div className="col-md-6">
          <Carousel>
          {[product.Image1, product.Image2, product.Image3].map((banner, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + `/img/${banner}`}
                alt={`Slide ${idx + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
        <div className="col-md-6">
          <h2>{product.Product_name}</h2>
          <p>{product.Description}</p>
          <p className="fw-bold">${product.Price.toFixed(2)}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h4>GPU</h4>
          <p>{product.GPU}</p>

          <h4>Processor</h4>
          <p>{product.CPU}</p>
        </div>
        <div className="col-md-6">
          <h4>RAM</h4>
          <p>{product.RAM}</p>

          <h4>Storage</h4>
          <p>{product.Storage}</p>
        </div>
      </div>
      
    </div>
    <div className="row mt-5 mb-5">
      <div className="col-md-12">
        <h2 style={{ color: '#0080FF' }}>Related Products</h2>
        <div className="row m-0">
          {relatedProducts.map((product: ProductArray) => (
            <div className="col-4" key={product.Product_id}>
              <Link to={`/prodDetails/${product.Product_id}`} style={{ textDecoration: 'none' }}>
                <div className="card bg-dark text-light">
                  <img src={process.env.PUBLIC_URL + `/img/${product.Image1}`} alt="Related Product" className="card-img-top img-fluid" />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.Product_name}</h5>
                    <p className="card-text">Php: {product.Price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
        <Footer />
    </body>

  );
};

export default ProductDetail;