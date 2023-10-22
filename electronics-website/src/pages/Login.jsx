import React from 'react'
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginSignup.css"
import user_icon from "../Assests/person.png"
import email_icon from "../Assests/email.png"
import password_icon from "../Assests/password.png"




const Login = () => {
  const [action,setAction]=useState("Sign Up")
  
  // const { logout } = useAuth0();
  // const { loginWithRedirect } = useAuth0();

  // const { user, isAuthenticated, isLoading } = useAuth0();


  return (
<div className='container'>
      {/* <h4>
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
      </h4> */}

      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
      {action==="Login"? <div></div>: <div className='input'>
        <img src={user_icon} alt="" />
        <input type="text"  placeholder='Enter Your Name'/>
       </div>
      }
       <div className='input'>
        <img src={email_icon} alt="" />
        <input type="email" placeholder='Enter Your Email' />
       </div>
       <div className='input'>
        <img src={password_icon} alt="" />
        <input type="password"  placeholder='Password'/>
       </div>
       {action==="Login"?<div></div>:<div className="forgot-password">Lost Password ? <span>Click Here !</span></div>
}
       <div className='submit-container'>
        <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>SignUp</div>
        <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

       </div>
      </div>
      
    </div>
  )
}

export default Login

