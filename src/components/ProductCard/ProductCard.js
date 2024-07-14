import React from 'react';
import './ProductCard.css';


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{product.price}</p>
      <button className="product-button">Personalize</button>
    </div>
  );
}

const ProductList = () => {
  const products = [
    {
      name: 'Sweatshirt',
      price: '$19.95 - $159.95',
      image: 'product1.png',
    },
    {
      name: 'Shirts',
      price: '$9.95 - $39.95',
      image: './product1.png'
    },
    {
      name: 'Badge',
      price: '$9.90 - $49.90',
      image: './product1.png'
    },
    {
      name: 'Phone case',
      price: '$19.95 - $24.95',
      image: './product1.png'
    }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
