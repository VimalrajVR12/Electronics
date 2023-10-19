import React from 'react'
import styles from "../styles/Home.module.css"
import Carousel from '../components/Carousel';
import Separator from "../components/Separator"
import Heading from '../components/Heading';
const tvs = [
  { title: "Blaupunkt CyberSound", img: "/tvs/blaupunkt.png" },
  { title: "Kodak 4K", img: "/tvs/kodak.png" },
  { title: "Moto Envision", img: "/tvs/moto.png" },
  { title: "Samsung TV", img: "/tvs/samsung.png" },
  { title: "Moto Envision", img: "/tvs/moto.png" },
  { title: "Thompson TV", img: "/tvs/thompson.png" },
  { title: "Blaupunkt CyberSound", img: "/tvs/blaupunkt.png" },
  { title: "Kodak 4K", img: "/tvs/kodak.png" },
  { title: "Moto Envision", img: "/tvs/moto.png" },
  { title: "Samsung TV", img: "/tvs/samsung.png" },
  { title: "Moto Envision", img: "/tvs/moto.png" },
  { title: "Thompson TV", img: "/tvs/thompson.png" },
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
