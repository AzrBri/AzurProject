import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductData, { ProductArray } from '../Admin/Product';
import NavbarPanel from './NavbarPanel';

interface Brand {
  Brand_id: number;
  Brand_name: string;
}

const ProductPage: React.FC = () => {
  const { products } = ProductData();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [brands, setBrands] = useState<Brand[]>([
    { Brand_id: 1, Brand_name: 'Lenovo' },
    { Brand_id: 2, Brand_name: 'MSI' },
    { Brand_id: 3, Brand_name: 'Asus' },
  ]);

  // Number of products per page
  const productsPerPage = 8;

  useEffect(() => {
    calculateTotalPages();
  }, [products, selectedBrands]);

  const calculateTotalPages = () => {
    const filteredProducts = selectedBrands.length > 0
      ? products.filter((product) => selectedBrands.includes(product.Brand.charCodeAt(0) - 64))
      : products;
    setTotalPages(Math.ceil(filteredProducts.length / productsPerPage));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brandId = parseInt(e.target.value);
    setSelectedBrands((prevBrands) =>
      e.target.checked ? [...prevBrands, brandId] : prevBrands.filter((id) => id !== brandId)
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getFilteredProducts = () => {
    let filteredProducts = products;
    if (selectedBrands.length > 0) {
      filteredProducts = products.filter((product) =>
        selectedBrands.includes(product.Brand.charCodeAt(0) - 64)
      );
    }
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  return (
    <>
    <NavbarPanel />
      <div className="container bg-dark">
        {/* Brand Filter */}
        <div className="card bg-dark text-light shadow">
          <div className="card-header">
            <h5>Filter</h5>
          </div>
          <div className="card-body">
            {/* Brand List */}
            {brands.map((brand) => (
              <div key={brand.Brand_id} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={brand.Brand_id}
                  id={`brand-${brand.Brand_id}`}
                  onChange={handleBrandChange}
                  checked={selectedBrands.includes(brand.Brand_id)}
                />
                <label className="form-check-label" htmlFor={`brand-${brand.Brand_id}`}>
                  {brand.Brand_name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Product List */}
        <div className="row mt-4">
          {getFilteredProducts().map((product: ProductArray) => (
            <div key={product.Product_id} className="col-md-6 col-lg-3 text-light">
              <div className="product-card" style={{ height: '400px', backgroundColor: 'transparent' }}>
                <img src={`${product.Image1}`} alt="" />
                <h5 className="text-center fw-bold">{product.Product_name}</h5>
                <p className="text-center text-light">{product.CPU}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row mt-4">
          <div className="col-md-12">
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <li
                  key={page}
                  className={`page-item ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  <button className="page-link">{page}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        body {
          background-color: #222;
        }
        .card {
          background-color: black;
        }
        .product-card {
          background-color: #222;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-bottom: 30px;
        }
        .product-card img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
};

export default ProductPage;