import React,{useRef} from 'react'
import styles from "../styles/Carousel.module.css"
import ProductContainer from './ProductContainer';
const Carousel = ({data}) => {
  
  return (
    <div className={styles.container}>
      {data.map((el,i) => (
        <ProductContainer key={i} img={el.img} title={el.title} />
      ))}
    </div>
  );
}

export default Carousel