import React from 'react'
import styles from "../styles/Home.module.css"
import ProductContainer from '../components/ProductContainer';

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src="/banner.webp" alt="banner" />
      <ProductContainer/>
    </div>
  );
}

export default Home
