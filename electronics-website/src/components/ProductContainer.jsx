import React from 'react'
import styles from "../styles/ProductContainer.module.css"
const ProductContainer = ({elRef,img,rating, title,price,discountPrice }) => {
  return (
    <div ref={elRef} className={styles.container}>
      <img src={img} alt="product" />
      <div className={styles.details}>
        <div className={styles.top}>
          <p className={styles.title}>{title}</p>
          <p>{rating}</p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.price}>{price}</p>
          <p className={styles.discountPrice}>{discountPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer