import React, { useState } from 'react'
import { crossSVG, hamburgerSVG } from './SVGs';
import { NavLink } from 'react-router-dom';


const Hamburger = ({className}) => {
  const closed = { state: "close", style: {translate:"5000px"} };
  const [currState,setCurrState] = useState(closed)
  const opened = {
    state: "open",
    style: {
      top: "0",
      left: "0",
      backgroundColor: "rgba(0, 0, 0, .3)",
      height: "100vh",
      width: "100vw",
      zIndex: "1",
    },
  };
  const handleToggle = () =>
          setCurrState((prev) => (prev.state === "close" ? opened : closed))
  return (
    <div className={className}>
      <span onClick={handleToggle}>{hamburgerSVG}</span>
      <aside style={currState.style}>
        <span id="crossSVGContainer" onClick={handleToggle}>
          {crossSVG}
        </span>
        <NavLink onClick={handleToggle} title="Products" to="/products">
          Products
        </NavLink>
        <NavLink onClick={handleToggle} title="Wishlist" to="/wishlist">
          Wishlist
        </NavLink>
        <NavLink onClick={handleToggle} title="Cart" to="/cart">
          Cart
        </NavLink>
        <NavLink onClick={handleToggle} title="Log In" to="/login">
          Log In
        </NavLink>
      </aside>
    </div>
  );
}

export default Hamburger