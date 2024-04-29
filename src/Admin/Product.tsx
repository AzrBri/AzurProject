
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
      Image1: 'https://www.lenovo.com/medias/lenovo-laptop-legion-5-pro-16ach6h-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzAwOTI1fGltYWdlL3BuZ3xoZDUvaDUxLzEzNTkzNjA3NDkyNDc4LnBuZ3w5NmM4NDczZjIwMTI0NzFmNDhlNDI4ZTZmMTkwMGQyNDE0YTZmNjFmZjIyZjM5ZWM5MGYwY2RhMjRiY2U4MjZj',
      Image2: 'https://www.lenovo.com/medias/lenovo-laptop-legion-5-pro-16ach6h-subseries-gaming-feature-4.png?context=bWFzdGVyfHJvb3R8MjU3NzI4fGltYWdlL3BuZ3xoZDIvaGFiLzEzNTkzNjA3NDkyNzAyLnBuZ3wxYmU1NmNiOTc2YTRmNzQ1NmVjOGRhNGYzYTMzNDZmNjEwYTdlOWJmOTdjMzRhNjgxZGVmZDUxNjE1NjNmZWEw',
      Image3: 'https://www.lenovo.com/medias/lenovo-laptop-legion-5-pro-16ach6h-subseries-gaming-feature-6.png?context=bWFzdGVyfHJvb3R8MjYzMjU2fGltYWdlL3BuZ3xoZDkvaGU2LzEzNTkzNjA3NDkyNzA0LnBuZ3w5Y2NkMmY0NDMyMTVhMDE5MTA2M2UyOWFhNWE2YWE0ZWIwMjc0MzE0NGQzMDU2MWZhZjFjMjQ4Nzc5Yjc5ODkw',
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
      Image1: 'https://dlcdnwebimg.asus.com/gain/d7df97d5-1eaa-4d1a-8bf8-d2e6af2b77c5/',
      Image2: 'https://dlcdnwebimg.asus.com/gain/d7800ee9-8e3e-4eea-ae19-4e49f6678a8c/',
      Image3: 'https://dlcdnwebimg.asus.com/gain/5a6d3846-3caf-407e-bf48-03caf6a67cb6/',
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
      Image1: 'https://dlcdnwebimg.asus.com/gain/ea0fc58c-5a42-4d83-b2e2-e9de5fc07907/',
      Image2: 'https://dlcdnwebimg.asus.com/gain/daf67f1a-93a0-4c1f-b331-1b2b6f5a5e72/',
      Image3: 'https://dlcdnwebimg.asus.com/gain/b6f99c48-d8d8-4604-bac7-f05bb72df9f0/',
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
Image1: 'https://cdn-ssl.msi.com/update/nb/picture/2021/SEA-GE76-SEA-08.png',
Image2: 'https://cdn-ssl.msi.com/update/nb/picture/2021/SEA-GE76-SEA-07.png',
Image3: 'https://cdn-ssl.msi.com/update/nb/picture/2021/SEA-GE76-SEA-06.png',
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
Image1: 'https://cdn-ssl.msi.com/update/nb/picture/2021/Pulse-GL66-SEA-01.png',
Image2: 'https://cdn-ssl.msi.com/update/nb/picture/2021/Pulse-GL66-SEA-02.png',
Image3: 'https://cdn-ssl.msi.com/update/nb/picture/2021/Pulse-GL66-SEA-03.png',
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