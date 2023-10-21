import {useState,useRef,useEffect} from 'react'
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css"
import {
  homeSVG,
  wishlistSVG,
  cartSVG,
  loginSVG,
  loggedinSVG,
  productSVG,
  hamburgerSVG,
} from "./SVGs";
import Hamburger from './Hamburger';
const Navbar = () => {
  const isAuth = false;
  const interval = useRef(null);
  
  return (
    <div className={styles.container}>
      <NavLink title="Home" to="/">
        {homeSVG}
      </NavLink>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search Products"
      />
      <Hamburger className={styles.hamburger}/>
        <div className={styles.options}>
          <NavLink title="Products" to="/products">
            {productSVG}
          </NavLink>
          <NavLink title="Wishlist" to="/wishlist">
            {wishlistSVG}
          </NavLink>
          <NavLink title="Cart" to="/cart">
            {cartSVG}
          </NavLink>
          <NavLink title={isAuth ? "Log Out" : "Log In"} to="/login">
            {isAuth ? loggedinSVG : loginSVG}
          </NavLink>
        </div>
    </div>
  );
}

export default Navbar
