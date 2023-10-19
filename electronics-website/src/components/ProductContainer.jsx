import React from 'react'
import styles from "../styles/ProductContainer.module.css"
const ProductContainer = ({ img, title,price,discountPrice }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="product" />
      <div className={styles.details}>
          <p className={styles.price}>{price}</p>
        <p className={styles.title}>{title}</p>
          <p className={styles.discountPrice}>{discountPrice}</p>
      </div>
    </div>
  );
};

export default ProductContainer