import React from 'react'
import styles from "../styles/ProductContainer.module.css"
const ProductContainer = ({ img, title }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="product" />
      <div className={styles.title}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProductContainer