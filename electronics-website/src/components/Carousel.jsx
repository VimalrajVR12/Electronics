import React, { useEffect, useRef } from "react";
import styles from "../styles/Carousel.module.css";
import ProductContainer from "./ProductContainer";
import { nextSVG, prevSVG } from "./SVGs";

const Carousel = ({ data, width }) => {
  const containerRef = useRef();
  const elRef = useRef();
  const elements = data.map((el, i) => {
    if(i<12)return (
      <ProductContainer
        elRef={i===0?elRef:null}
        key={i+el.image}
        rating={el.rating}
        img={el.image}
        title={el.name}
        price={el.MRP}
        discountPrice={el.price}
      />
    );
  });
  const scrollAhead = () => {
    let times = 0;
    const scrollW = (elRef.current.getBoundingClientRect().width + 15)/50
    const interval = setInterval(()=>{
      if(times++<50)containerRef.current.scrollBy({
        left: scrollW,
      })
      else clearInterval(interval)
    },1)
  };

  const scrollBack = () => {
    let times = 0;
    const scrollW = (elRef.current.getBoundingClientRect().width + 15) / 50;
    const interval = setInterval(() => {
      if (times++ < 50)
        containerRef.current.scrollBy({
          left: -scrollW,
        });
      else clearInterval(interval);
    }, 1);
  };
  return (
    <div className={styles.container}>
      <span onClick={scrollBack}>{prevSVG}</span>
      <div className={styles.carousel} ref={containerRef}>{elements}</div>
      <span onClick={scrollAhead}>{nextSVG}</span>
    </div>
  );
};

export default Carousel;
