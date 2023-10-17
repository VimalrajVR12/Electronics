import React from 'react'
import styles from "../styles/ProductContainer.module.css"
const ProductContainer = () => {
  return (
    <div className={styles.container}>
      <img src="/tvs/blaupunkt.png" alt="product" />
      <div className={styles.title}>
        <p>LG (32 inch) (2023)</p>
      </div>
    </div>
  );
}

export default ProductContainer