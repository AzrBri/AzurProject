import React, { ChangeEvent, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductData, ProductArray } from '../Admin/Product';

import Sidebar from './Sidebar';

interface PartialProductArray extends Partial<ProductArray> {
  Product_id: number;
}

export const ProdPanel: React.FC = () => {
  const { products, setProducts } = ProductData();
  const [newProduct, setNewProduct] = useState<PartialProductArray>({
    Product_id: 0, // Set a default value for Product_id
  });
  const [imagePreviews, setImagePreviews] = useState<string[]>(['', '', '']);
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  // Function to handle input change for adding new product
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  // Function to handle file change for image upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const previews = [...imagePreviews];
        previews[index] = reader.result as string;
        setImagePreviews(previews);
        setNewProduct((prevProduct) => ({ ...prevProduct, [`Image${index + 1}`]: reader.result as string }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddProduct = () => {
    const filteredEntries = Object.entries(newProduct).filter(
      ([_, value]) => value !== undefined
    );

    const product: ProductArray = {
      ...Object.fromEntries(filteredEntries),
      Product_id: products.length + 1,
      Product_name: newProduct.Product_name || '', // Default value for Product_name
      Image1: newProduct.Image1 || '', // Default value for Image1
      Image2: newProduct.Image2 || '', // Default value for Image2
      Image3: newProduct.Image3 || '', // Default value for Image3
      Description: newProduct.Description || '',
      Brand: newProduct.Brand || '', // Default value for Brand
      GPU: newProduct.GPU || '', // Default value for GPU
      CPU: newProduct.CPU || '', // Default value for CPU
      RAM: newProduct.RAM || '', // Default value for RAM
      Storage: newProduct.Storage || '', // Default value for Storage
      Stock: newProduct.Stock || 0, // Default value for Stock
      Price: newProduct.Price || 0, // Default value for Price
    };

    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    setNewProduct({ Product_id: 0 }); // Reset newProduct
    setImagePreviews(['', '', '']);
    setConfirmationMessage('Product added successfully!');
  };

  return (
    <>
      <Sidebar />
      <div className="card text-bg-dark container mt-5">
        <div className="card-header fw-bold fs-4">
          Product Panel
        </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              Add Product
            </button>
          </div>
          {confirmationMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {confirmationMessage}
            </div>
          )}
          <div className="table-responsive">
            <table className="table table-dark table-striped table-hover mt-4">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image1</th>
                  <th scope="col">Image2</th>
                  <th scope="col">Image3</th>
                  <th scope="col">ProductName</th>
                  <th scope="col">Description</th>
                  <th scope="col">Brand</th>
                  <th scope="col">GPU</th>
                  <th scope="col">CPU</th>
                  <th scope="col">RAM</th>
                  <th scope="col">Storage</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.Product_id}>
                    <td>{product.Product_id}</td>
                    <td><img src={product.Image1} height="80px" width="100px" alt="Image1" /></td>
                    <td><img src={product.Image2} height="80px" width="100px" alt="Image2" /></td>
                    <td><img src={product.Image3} height="80px" width="100px" alt="Image3" /></td>
                    <td>{product.Product_name}</td>
                    <td>{product.Description}</td>
                    <td>{product.Brand}</td>
                    <td>{product.GPU}</td>
                    <td>{product.CPU}</td>
                    <td>{product.RAM}</td>
                    <td>{product.Storage}</td>
                    <td>{product.Stock}</td>
                    <td>{product.Price}</td>
                    <td>
                      <a href={`editProd/${product.Product_id}`}><i className="bi bi-pencil"></i></a> ||
                      <a href={`delProd/${product.Product_id}`} onClick={() =>
                        window.confirm('Are you sure you want to Archive this record?')}><i className="bi bi-trash3"></i></a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="modal fade" id="addModal" tabIndex={-1} aria-labelledby="addModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addModalLabel">Add Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-dark">
              <form>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">Product Name</label>
                  <input type="text" className="form-control" id="productName" name="Product_name" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="image1" className="form-label">Image 1</label>
                  <input type="file" className="form-control" id="image1" onChange={(e) => handleFileChange(e, 0)} accept="image/*" />
                  <div className="preview-container mt-2">
                    {imagePreviews[0] && <img src={imagePreviews[0]} alt="Preview 1" className="img-preview img-fluid" />}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="image2" className="form-label">Image 2</label>
                  <input type="file" className="form-control" id="image2" onChange={(e) => handleFileChange(e, 1)} accept="image/*" />
                  <div className="preview-container mt-2">
                    {imagePreviews[1] && <img src={imagePreviews[1]} alt="Preview 2" className="img-preview img-fluid" />}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="image3" className="form-label">Image 3</label>
                  <input type="file" className="form-control" id="image3" onChange={(e) => handleFileChange(e, 2)} accept="image/*" />
                  <div className="preview-container mt-2">
                    {imagePreviews[2] && <img src={imagePreviews[2]} alt="Preview 3" className="img-preview img-fluid" />}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" id="description" name="Description" onChange={handleInputChange}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="brand" className="form-label">Brand</label>
<input type="text" className="form-control" id="brand" name="Brand" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="gpu" className="form-label">GPU</label>
                  <input type="text" className="form-control" id="gpu" name="GPU" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="cpu" className="form-label">CPU</label>
                  <input type="text" className="form-control" id="cpu" name="CPU" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="ram" className="form-label">RAM</label>
                  <input type="text" className="form-control" id="ram" name="RAM" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="storage" className="form-label">Storage</label>
                  <input type="text" className="form-control" id="storage" name="Storage" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="stock" className="form-label">Stock</label>
                  <input type="number" className="form-control" id="stock" name="Stock" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input type="number" className="form-control" id="price" name="Price" onChange={handleInputChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleAddProduct}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdPanel;