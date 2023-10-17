import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css"
import {
  searchSVG,
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
      <NavLink title="Home" to="/">
        {homeSVG}
      </NavLink>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Products"
        />
        {searchSVG}
      </div>
      <div className={styles.optionsPC}>
        <NavLink title="Products" to="/products">
          {productSVG}
        </NavLink>
        <NavLink title="Wishlist" to="/wishlist">
          {wishlistSVG}
        </NavLink>
        <NavLink title='Cart' to="/cart">{cartSVG}</NavLink>
        <NavLink title={isAuth?"Log Out":"Log In"} to="/login">{isAuth ? loggedinSVG : loginSVG}</NavLink>
      </div>
    </div>
  );
}

export default Navbar
