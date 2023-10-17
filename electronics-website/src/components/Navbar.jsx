import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css"
import {
  homeSVG,
  wishlistSVG,
  cartSVG,
  loginSVG,
  loggedinSVG,
  productSVG,
} from "./SVGs";
const Navbar = () => {
  const isAuth = false;
  return (
    <div className={styles.containerPC}>
      <NavLink to="/">{homeSVG}</NavLink>
      <div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Products"
        />
      </div>
      <div className={styles.optionsPC}>
        <NavLink to="/products">{productSVG}</NavLink>
        <NavLink to="/wishlist">{wishlistSVG}</NavLink>
        <NavLink to="/cart">{cartSVG}</NavLink>
        <NavLink to="/login">{isAuth ? loggedinSVG : loginSVG}</NavLink>
      </div>
    </div>
  );
}

export default Navbar
