import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div style={{display: "flex", marginTop: "20px", justifyContent: "space-around"}}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/wishlist">WishList</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
     
    </div>
  )
}

export default Navbar
