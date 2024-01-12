import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './product.css'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        console.log("collect res", response);
        setProducts(response.data.products);

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const username = localStorage.getItem('username');

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <div className='productContainer'>
        {products.map((product) => (
          // <div key={product.id}>
          //   <h3>{product.title}</h3>
          //   <p>{product.description}</p>
          //   <p>Brand: {product.brand}</p>
          //   <p>Price: {product.price}</p>
          //   <img src={product.image} alt={product.title} />
          // </div>
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;