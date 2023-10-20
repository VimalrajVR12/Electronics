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
  const [width, setWidth] = useState(1024);
  const elRef = useRef();
  const interval = useRef(null);
  useEffect(() => {
    const update = () => {
      setWidth((prev) => {
      console.log(prev);
      return elRef.current.offsetWidth;
      });
    };
    if (!interval.current) interval.current = setInterval(update, 250);
    return () => {
    clearInterval(interval.current);
    };
    }, []);
  return (
    <div ref={elRef} className={styles.container}>
      <NavLink title="Home" to="/">
        {homeSVG}
      </NavLink>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search Products"
      />
      {width < 768 ? (
        <Hamburger/>
      ) : (
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
      )}
    </div>
  );
}

export default Navbar
