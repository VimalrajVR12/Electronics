import React, { useRef } from 'react'
import styles from "../styles/ProductContainer.module.css"
import { starSVG } from './SVGs';
const ProductContainer = ({elRef,img,rating, title,price,discountPrice }) => {
  const handleClick=(event)=>{
  }
  return (
    <div onClick={handleClick} ref={elRef} className={styles.container}>
      <img src={img} alt="product" />
      <div className={styles.details}>
        <div className={styles.top}>
          <p className={styles.title}>{title}</p>
          <p>{rating}{starSVG}</p>
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