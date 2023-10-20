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
      <Link to=""> <h4>
        {isAuthenticated && <p>{user.name}</p>}
      </h4>
      <h4>
        {isAuthenticated?<h4>  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></h4>
    :  <h4>
      <button onClick={() => loginWithRedirect()}>Log In</button>;
      </h4>
    }
      </h4></Link>
     
    </div>
  )
}

export default Navbar
