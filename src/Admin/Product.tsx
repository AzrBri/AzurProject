
import { useState } from 'react';

export interface ProductArray {
  Product_id: number;
  Product_name: string;
  Image1: string;
  Image2: string;
  Image3: string;
  Description: string;
  Brand: string;
  GPU: string;
  CPU: string;
  RAM: string;
  Storage: string;
  Stock: number;
  Price: number;
}

export const ProductData = () => {
  const [products, setProducts] = useState<ProductArray[]>([
    {
      Product_id: 1,
      Product_name: 'Lenovo Legion 5 Pro',
      Image1: '1_1.png',
      Image2: '1_2.png',
      Image3: '1_3.png',
      Description: 'The Lenovo Legion 5 Pro is a powerful gaming laptop featuring a 16-inch QHD+ display with up to 165Hz refresh rate, AMD Ryzen processors, and up to NVIDIA GeForce RTX 3070 graphics.',
      Brand: 'Lenovo',
      GPU: 'NVIDIA GeForce RTX 3070',
      CPU: 'AMD Ryzen 7 5800H',
      RAM: '16GB DDR4',
      Storage: '1TB SSD',
      Stock: 10,
      Price: 1499.99
    },
    {
      Product_id: 2,
      Product_name: 'ASUS ROG Zephyrus G14',
      Image1: '2_1.png',
      Image2: '2_2.png',
      Image3: '2_3.png',
      Description: 'The ASUS ROG Zephyrus G14 is a powerful and portable gaming laptop with an AMD Ryzen 9 processor, NVIDIA GeForce RTX 3060 graphics, and a 14-inch 120Hz display.',
      Brand: 'Asus',
      GPU: 'NVIDIA GeForce RTX 3060',
      CPU: 'AMD Ryzen 9 5900HS',
      RAM: '16GB DDR4',
      Storage: '1TB SSD',
      Stock: 8,
      Price: 1499.99
    },
    {
      Product_id: 3,
      Product_name: 'ASUS ROG Strix Scar 17',
      Image1: '3_1.png',
      Image2: '3_2.png',
      Image3: '3_3.png',
      Description: 'The ASUS ROG Strix Scar 17 is a powerful gaming laptop with a 17.3-inch QHD 165Hz display, Intel Core i9 processor, and NVIDIA GeForce RTX 3080 graphics.',
      Brand: 'Asus',
      GPU: 'NVIDIA GeForce RTX 3080',
      CPU: 'Intel Core i9-11900H',
      RAM: '32GB DDR4',
      Storage: '1TB SSD',
      Stock: 5,
      Price: 2999.99
    },
    {
Product_id: 4,
Product_name: 'MSI GE76 Raider',
Image1: '4_1.png',
Image2: '4_2.png',
Image3: '4_3.png',
Description: 'The MSI GE76 Raider is a powerful gaming laptop with a 17.3-inch QHD 165Hz display, Intel Core i7 processor, and NVIDIA GeForce RTX 3080 graphics.',
Brand: 'MSI',
GPU: 'NVIDIA GeForce RTX 3080',
CPU: 'Intel Core i7-11800H',
RAM: '32GB DDR4',
Storage: '1TB SSD',
Stock: 7,
Price: 2699.99
},
{
Product_id: 5,
Product_name: 'MSI Pulse GL66',
Image1: '5_1.png',
Image2: '5_2.png',
Image3: '5_3.png',
Description: 'The MSI Pulse GL66 is a budget-friendly gaming laptop with a 15.6-inch 144Hz display, Intel Core i5 processor, and NVIDIA GeForce RTX 3060 graphics.',
Brand: 'MSI',
GPU: 'NVIDIA GeForce RTX 3060',
CPU: 'Intel Core i5-11400H',
RAM: '16GB DDR4',
Storage: '512GB SSD',
Stock: 12,
Price: 1199.99
}
  ]);

  return { products, setProducts };
};

export default ProductData;