import React, { useEffect, useState } from 'react';
import "../styles/Products.css"

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('name'); 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; 

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

 

  const filteredProducts = products
  .filter((product) => 
    product.name && product.name.toLowerCase().includes(filter.toLowerCase()))
  .sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Filter products"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
      </select>
      <ul className="product-grid">
        {currentProducts.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}><img src={`${product.image}`} alt='broken'></img>
            <p>{product.name.slice(0, 60)}</p>
            <p>{product.rating}</p>
            <p>Price: ${product.price}</p>
            </a>
            
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

