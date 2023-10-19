import React from 'react'
import styles from "../styles/Home.module.css"
import Carousel from '../components/Carousel';
import Separator from "../components/Separator"
import Heading from '../components/Heading';
const tvs = [
  {
    title: "Blaupunkt CyberSound",
    img: "/tvs/blaupunkt.png",
    price: "24,999",
    discountPrice: "19,999",
  },
  {
    title: "Kodak 4K",
    img: "/tvs/kodak.png",
    price: "19,999",
    discountPrice: "14,999",
  },
  {
    title: "Moto Envision",
    img: "/tvs/moto.png",
    price: "29,999",
    discountPrice: "19,999",
  },
  {
    title: "Samsung TV",
    img: "/tvs/samsung.png",
    price: "49,999",
    discountPrice: "39,999",
  },
  {
    title: "Moto Envision",
    img: "/tvs/moto.png",
    price: "39,999",
    discountPrice: "34,999",
  },
  {
    title: "Thompson TV",
    img: "/tvs/thompson.png",
    price: "19,999",
    discountPrice: "14,999",
  },
  {
    title: "Blaupunkt CyberSound",
    img: "/tvs/blaupunkt.png",
    price: "24,999",
    discountPrice: "19,999",
  },
  {
    title: "Kodak 4K",
    img: "/tvs/kodak.png",
    price: "19,999",
    discountPrice: "14,999",
  },
  {
    title: "Moto Envision",
    img: "/tvs/moto.png",
    price: "29,999",
    discountPrice: "19,999",
  },
  {
    title: "Samsung TV",
    img: "/tvs/samsung.png",
    price: "49,999",
    discountPrice: "39,999",
  },
  {
    title: "Moto Envision",
    img: "/tvs/moto.png",
    price: "39,999",
    discountPrice: "34,999",
  },
  {
    title: "Thompson TV",
    img: "/tvs/thompson.png",
    price: "19,999",
    discountPrice: "14,999",
  },
];
const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/banner.webp" alt="banner" />
      <Separator />
      <Heading body={"TVs"} />
      <Carousel data={tvs} />
      <Separator />
    </div>
  );
}

export default Home
