import React,{useEffect, useRef, useState} from 'react'
import styles from "../styles/Carousel.module.css"
import ProductContainer from './ProductContainer';
const Carousel = ({data}) => {
  
  return (
    <div className={styles.container}>
      {data.map((el,i) => <ProductContainer key={i+el.img} img={el.img} title={el.title} price={el.price} discountPrice={el.discountPrice} />)}
    </div>
  );
}

export default Carousel