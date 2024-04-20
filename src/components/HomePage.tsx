import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Carousel, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function HomePage() {
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
    <div style={{ width: 1440, height: 'auto', position: 'relative', background: '#333333' }}>
                      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{ width: 1440, height: 153 }}>
          <Container fluid>
            <Navbar.Brand>AZUR</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link>Products</Nav.Link>
                <NavDropdown title="Profile" id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={goToSecondsComp}>Login</NavDropdown.Item>
                  <NavDropdown.Item onClick={goToFirstComp}>Registration</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
  <img style={{width: 1440, height: 608.45, left: 0, top: 80, position: 'absolute', borderTopLeftRadius: 20, borderTopRightRadius: 20}} src={process.env.PUBLIC_URL + '/img/20240305_134357_0000 1.png'} />
  <div style={{width: 287, height: 64, left: 576, top: 788, position: 'absolute'}}>
    <div style={{width: 257, height: 10, left: 15, top: 0, position: 'absolute', background: '#007FFF', borderRadius: 20}} />
    <div style={{width: 200, height: 5, left: 44, top: 59, position: 'absolute', background: '#007FFF', borderRadius: 20}} />
    <div style={{width: 287, height: 19, left: 0, top: 25, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Exo', fontWeight: '600', wordWrap: 'break-word'}}>Featured Products</div>
  </div>
  <div className="card d-flex justify-content-center align-items-center" style={{width: 400, height: 1000, left: 520, top: 920, position: 'absolute', background: '#005DB3', borderRadius: 20}}>
  <img className="img-fluid" style={{width: 400, height: 293.98}} src={process.env.PUBLIC_URL + '/img/h732 (12)_1703116357 1.png'} />
  <div className="d-flex flex-column align-items-center" style={{width: 303, height: 585}}>
    <div style={{width: 303, textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Exo', fontWeight: '600', wordWrap: 'break-word'}}>ROG Strix SCAR 18 (2024)</div>
    <div style={{width: 269, textAlign: 'center', color: '#F5F5F5', fontSize: 20, fontFamily: 'Exo', fontWeight: '600', wordWrap: 'break-word'}}>Up to Intel® Core™ i9-14900HX<br/>Up to GeForce® RTX™ 4090 GPU<br/>Up to Windows 11 Pro<br/>Up to 18-inch, 2.5k Mini-LED, 16:10 (2560 x 1600, WQXGA), Refresh Rate: 250Hz/3ms<br/>ROG Nebula HDR<br/>Up to 2TB PCIe® 4.0 NVMe™ M.2 SSD</div>
    <div style={{textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Exo', fontWeight: '700', wordWrap: 'break-word'}}>$2,999.99</div>
    <div className="btn d-flex justify-content-center align-items-center" style={{width: 200, height: 60, background: '#007FFF', borderRadius: 16}}>
    <div style={{textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Exo', fontWeight: '500', wordWrap: 'break-word'}}>Select</div>
    </div>
  </div>
  </div>
  <div className="card d-flex justify-content-center align-items-center" style={{width: 400, height: 1000, left: 956, top: 920, position: 'absolute', background: '#005DB3', borderRadius: 20}}>
  <img className="img-fluid" style={{width: 400, height: 293.98}} src={process.env.PUBLIC_URL + '/img/h732 (18)_1703117120 1.png'} />
  <div className="d-flex flex-column align-items-center" style={{width: 303, height: 585}}>
    <div style={{width: 303, textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Exo', fontWeight: '600', wordWrap: 'break-word'}}>2021 ROG Zephyrus S17</div>
    <div style={{width: 269, textAlign: 'center', color: '#F5F5F5', fontSize: 20, fontFamily: 'Exo', fontWeight: '600', wordWrap: 'break-word'}}>Windows 10 Pro<br/>NVIDIA® GeForce RTX™ 3080 Laptop GPU<br/>11th Gen Intel® Core™ i9-11900H Processor<br/>17.3" WQHD (2560 x 1440) 16:9 165Hz<br/>2TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage</div>
    <div style={{textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Exo', fontWeight: '700', wordWrap: 'break-word'}}>$3,299.99</div>
    <div className="btn d-flex justify-content-center align-items-center" style={{width: 200, height: 60,  background: '#007FFF', borderRadius: 16}} >
    <div style={{textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Exo', fontWeight: '500', wordWrap: 'break-word'}}>Select</div>
    </div>
  </div>
  </div>
  <div className="card d-flex justify-content-center align-items-center" style={{width: 400, height: 1000, left: 84, top: 920, position: 'absolute', background: '#005DB3', borderRadius: 20}}>
  <img className="img-fluid" style={{width: 400, height: 332.83}} src={process.env.PUBLIC_URL + '/img/h732 (6)_1703115765.png'} />
  <div className="d-flex flex-column align-items-center" style={{width: 303, height: 585}}>
    <div style={{width: 303, textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Exo', fontWeight: '600', wordWrap: 'break-word'}}>ROG Flow Z13 (2023)</div>
    <div style={{width: 269, textAlign: 'center', color: '#F5F5F5', fontSize: 20, fontFamily: 'Exo', fontWeight: '600', wordWrap: 'break-word'}}>NVIDIA® GeForce RTX™ 4050 Laptop GPU<br/>Windows 11 Home<br/>13th Gen Intel® Core™ i9-13900H Processor<br/>13.4" QHD+ (2560 x 1600, WQXGA) 16:10 165Hz ROG Nebula Display<br/>1TB M.2 NVMe™ PCIe® 4.0 SSD storage (2230)</div>
    <div style={{textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Exo', fontWeight: '700', wordWrap: 'break-word'}}>$1,749.99</div>
    <div className="btn d-flex justify-content-center align-items-center" style={{width: 200, height: 60,  background: '#007FFF', borderRadius: 16}}>
    <div style={{textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Exo', fontWeight: '500', wordWrap: 'break-word'}}>Select</div>
    </div>
  </div>
  </div>
           <div style={{width: 1440, height: 504, left: 0, top: 2046, position: 'absolute'}}>
      <Carousel>
        <Carousel.Item>
          <img className="img-fluid"
            src={process.env.PUBLIC_URL + '/img/banner1.png'}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid"
            src={process.env.PUBLIC_URL + '/img/banner2.png'}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="img-fluid"
            src={process.env.PUBLIC_URL + '/img/banner3.png'}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
<div style={{width: 619, left: 410, top: 2602, position: 'absolute', textAlign: 'center'}}>
  <span style={{color: '#007FFF', fontSize: 36, fontFamily: 'Exo', fontWeight: '700', wordWrap: 'break-word'}}>Refine Your Gaming Experience:</span>
  <span style={{color: '#007FFF', fontSize: 32, fontFamily: 'Exo', fontWeight: '700', wordWrap: 'break-word'}}> <br/>Tailor your Search with Precision</span>
</div>
  <div className="btn" style={{width: 200, height: 60, background: 'black', borderRadius: 16, top: 2716, left: 620, position: 'absolute'}}>
<div style={{textAlign: 'center', color: '#007FFF', fontSize: 24, fontFamily: 'Exo', fontWeight: '700', wordWrap: 'break-word'}}>FILTER</div>
</div>
<a className="btn">
<div className="d-flex flex-column align-items-center justify-content-center" style={{width: 400, height: 500, background: '#333333', borderRadius: 20, top: 2857, left: 89, position: 'absolute'}}>
<img className="img-fluid" style={{width: 300, height: 239.94, left: 50, top: 2857}} src={process.env.PUBLIC_URL + '/img/1024 (2) 1.png'}/>
<div className="text-center" style={{width: 344, textAlign: 'center'}}>
<div style={{color: '#007FFF', fontSize: 32, fontFamily: 'Exo', fontWeight: '700', wordWrap: 'break-word'}}>Raider 18 HX A14V<br/><br/></div><div style={{color: 'white', fontSize: 20, fontFamily: 'Exo', fontWeight: '500', wordWrap: 'break-word'}}>Intel® Core™ processor (14th gen) / GeForce RTX™ 40 Series</div></div>
</div>
</a>
<a className="btn">
<div className="d-flex flex-column align-items-center justify-content-center" style={{width: 400, height: 500, background: '#333333', borderRadius: 20, top: 2857, left: 520, position: 'absolute'}}>
<img className="img-fluid" style={{width: 300, height: 239.94, left: 570, top: 2857}} src={process.env.PUBLIC_URL + '/img/1024 1.png'}/>
<div className="text-center" style={{width: 344, textAlign: 'center'}}><div style={{color: '#007FFF', fontSize: 32, fontFamily: 'Exo', fontWeight: '700', wordWrap: 'break-word'}}>Titan 18 HX A14V<br/><br/></div><div style={{color: 'white', fontSize: 20, fontFamily: 'Exo', fontWeight: '500', wordWrap: 'break-word'}}>Intel® Core™ processor (14th gen) / GeForce RTX™ 40 Series</div></div>
</div>
</a>
<a className="btn">
<div className="d-flex flex-column align-items-center justify-content-center" style={{ width: 400, height: 500, background: '#333333', borderRadius: 20, top: 2857, left: 951, position: 'absolute' }}>
  <img className="img-fluid" style={{ width: 300, height: 239.94 }} src={process.env.PUBLIC_URL + '/img/1024 (1) 1.png'} alt="Product" />
  <div className="text-center" style={{ width: 344, textAlign: 'center' }}>
    <div style={{ color: '#007FFF', fontSize: 32, fontFamily: 'Exo', fontWeight: '700' }}>Vector 17 HX A14V<br/><br/></div>
    <div style={{ color: 'white', fontSize: 20, fontFamily: 'Exo', fontWeight: '500' }}>Intel® Core™ processor (14th gen) / GeForce RTX™ 40 Series</div>
  </div>
</div>
</a>
   <footer style={{ width: 1440, height: 400, left: 0, top: 3541, position: 'absolute' }}>
          <div style={{ width: 1440, height: 400, left: 0, top: 0, position: 'absolute', background: 'black' }}>
            <div style={{ width: 321, height: 43, left: 13, top: 37, position: 'absolute' }}>
              <div style={{ left: 141, top: 6, position: 'absolute', textAlign: 'center', color: '#7E7E7E', fontSize: 24, fontFamily: 'Exo', fontWeight: '400', wordWrap: 'break-word' }}>Gaming Laptops</div>
              <div style={{ width: 152, height: 43, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#007FFF', fontSize: 40, fontFamily: 'Exo', fontWeight: '600', wordWrap: 'break-word' }}>AZUR</div>
            </div>
            <div style={{ left: 116, top: 123, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Exo', fontWeight: '400', wordWrap: 'break-word' }}>Products</div>
            <div style={{ left: 267, top: 123, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Exo', fontWeight: '400', wordWrap: 'break-word' }}>About</div>
            <div style={{ left: 386, top: 123, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Exo', fontWeight: '400', wordWrap: 'break-word' }}>Help</div>
            <div style={{ left: 499, top: 341, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Exo', fontWeight: '400', wordWrap: 'break-word' }}>AZUR COMP INC, ALL RIGHTS RESERVED.</div>
            <div style={{ width: 600, height: 5, left: 0, top: 159, position: 'absolute', background: '#007FFF', borderRadius: 20 }} />
            <div style={{ width: 600, height: 5, left: 840, top: 231, position: 'absolute', background: '#007FFF', borderRadius: 20 }} />
            <img style={{ width: 60, height: 60, left: 1067, top: 242, position: 'absolute' }} src={process.env.PUBLIC_URL + '/img/Google.png'} alt="Google" />
            <img style={{ width: 60, height: 60, left: 1174, top: 242, position: 'absolute' }} src={process.env.PUBLIC_URL + '/img/Facebook.png'} alt="Facebook" />
          </div>
        </footer>
    </div>
  );
}

export default HomePage;