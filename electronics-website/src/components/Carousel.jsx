import React, { useEffect, useRef } from "react";
import styles from "../styles/Carousel.module.css";
import ProductContainer from "./ProductContainer";
import { nextSVG, prevSVG } from "./SVGs";

const Carousel = ({ data, width }) => {
  const containerRef = useRef();
  const elRef = useRef();
  const elements = data.map((el, i) => {
    return (
      <ProductContainer
      elRef={i===0?elRef:null}
        key={i + el.img}
        img={el.img}
        title={el.title}
        price={el.price}
        discountPrice={el.discountPrice}
      />
    );
  });
  const scrollAhead = () => {
    containerRef.current.scrollBy({
      left: elRef.current.getBoundingClientRect().width + 15,
      behavior: "smooth",
    });
  };

  const scrollBack = () => {
    containerRef.current.scrollBy({
      left: -elRef.current.getBoundingClientRect().width-15,
      behavior: "smooth",
    });
  };
  useEffect(()=>{
    console.log(elRef.current.getBoundingClientRect().width)
  },[])
  return (
    <div className={styles.container}>
      <span onClick={scrollBack}>{prevSVG}</span>
      <div className={styles.carousel} ref={containerRef}>
        {elements}
      </div>
      <span onClick={scrollAhead}>{nextSVG}</span>
    </div>
  );
};

export default Carousel;
