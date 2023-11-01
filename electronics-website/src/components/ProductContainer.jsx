import React, { useRef } from 'react'
import styles from "../styles/ProductContainer.module.css"
import { starSVG } from './SVGs';
import { useNavigate } from 'react-router';



const ProductContainer = ({url,elRef,img,rating, title,price,discountPrice }) => {
  const navigate = useNavigate()
  const handleClick=(event)=>{
      if(url)navigate(url)
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