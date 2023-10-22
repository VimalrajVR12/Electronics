import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/ProductDetails.css"

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <img className="product-image" src={product.image} alt={product.name} />
      <h1 className="product-title">{product.name.slice(0, 60)}</h1>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-rating">Rating: {product.rating}</p>
      <p className="product-description">Description: {product.name}</p>
    </div>
  );
}

export default ProductDetails;

