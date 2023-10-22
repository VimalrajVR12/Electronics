// import React from 'react'
// import { useState } from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
// import "./LoginSignup.css"
// import user_icon from "../Assests/person.png"
// import email_icon from "../Assests/email.png"
// import password_icon from "../Assests/password.png"




// const Login = () => {
//   const [action,setAction]=useState("Sign Up")
//   const [values, setValues]=useState({
//     name:"",
//     email:"",
//     pass:""
//   }) 
//   const handlesub=()=>{
//     console.log(values);
//   }
//   // const { logout } = useAuth0();
//   // const { loginWithRedirect } = useAuth0();

//   // const { user, isAuthenticated, isLoading } = useAuth0();


//   return (
// <div className='container'>
//       {/* <h4>
//         {isAuthenticated && <p>{user.name}</p>}
//       </h4>
//       <h4>
//         {isAuthenticated?<h4>  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//     </button></h4>
//     :  <h4>
//       <button onClick={() => loginWithRedirect()}>Log In</button>;
//       </h4>
//     }
//       </h4> */}

//       <div className='header'>
//         <div className='text'>{action}</div>
//         <div className='underline'></div>
//       </div>
//       <div className='inputs'>
//       {action==="Login"? <div></div>: <div className='input'>
//         <img src={user_icon} alt="" />
//         <input type="text"  placeholder='Enter Your Name' onClick={(event)=>setValues((prev)=>({...prev,name:event.target.value}))}/>
//        </div>
//       }
//        <div className='input'>
//         <img src={email_icon} alt="" />

//         <input type="email" placeholder='Enter Your Email' onClick={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} />
//        </div>
//        <div className='input'>
//         <img src={password_icon} alt="" />
//         <input type="password"  placeholder='Password' onClick={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))}/>
//        </div>
//        {action==="Login"?<div></div>:<div className="forgot-password">Lost Password ? <span>Click Here !</span></div>
// }
//        <div className='submit-container'>
//         <div className={action==="Login"?"submit grey":"submit"} onClick={handlesub}>SignUp</div>
//         <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

//        </div>
//       </div>
      
//     </div>
//   )
// }

// export default Login


import React, { useEffect, useState } from 'react'
import InputControl from './InputControl'
import { Link, useNavigate } from 'react-router-dom'
// import styles from "./Login.module.css"
import styles from "../styles/Login.module.css"
import { auth } from './firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
    
    const navigate=useNavigate();
  const [values,setValues]=useState({

    email:"",
    pass:""
  })
  const [errormessage,setErrormessage]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

const handlesub=()=>{
  if(!values.email||!values.pass){
    setErrormessage("fill all fields");
    return;
  }
  setErrormessage("");
  setSubmitButtonDisabled(true);
  signInWithEmailAndPassword(auth,values.email,values.pass).then(async res=>{
    setSubmitButtonDisabled(false);
navigate('/')
    setSubmitButtonDisabled(false);
  }).catch(err=>{
    setSubmitButtonDisabled(false);
    setErrormessage(err.message);
    console.log(errormessage);
  });
}
  return (
     <div className={styles.container}>
    <div className={styles.innerBox}>
<h1 className={styles.heading}>Login</h1>
<InputControl onChange={event=>setValues(prev=>({...prev,email:event.target.value}))} label="Email" placeholder="Enter Email Address"/>
<InputControl onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))} label="Password" placeholder="Enter password"/>
<div className={styles.footer}>
<b className={styles.error}>{errormessage}</b>
    <button disabled={submitButtonDisabled} onClick={handlesub}>Login</button>
    <p>Already have an account ? {" " }
    <span><Link to="/signup">Sign up</Link></span></p>
    {/* <Link/> */}
</div>
    </div>
      
    </div>  )
}

export default Login
