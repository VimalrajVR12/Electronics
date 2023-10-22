import React from 'react'
// import React, { useState } from 'react';
import { useState } from 'react';
import "../styles/Signup.css"
import InputControl from './InputControl';
import { Link,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import { auth } from './firebase';
// import styles from "./Login.module.css"
import styles from "../styles/Login.module.css";
// import { auth } from '../../firebase';

const Signup = () => {
  const navigate=useNavigate();
  const [values,setValues]=useState({
    name:"",
    email:"",
    pass:""
  })
  const [errormessage,setErrormessage]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

const handlesub=()=>{
  if(!values.name||!values.email||!values.pass){
    setErrormessage("fill all fields");
    return;
  }
  setErrormessage("");
  setSubmitButtonDisabled(true);
  createUserWithEmailAndPassword(auth,values.email,values.pass).then(async res=>{
    const user=res.user;
    await updateProfile(user,{
      displayName:values.name,
    })
navigate('/')

    console.log(user);
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
<h1 className={styles.heading}>Sign Up</h1>
<InputControl onChange={event=>setValues(prev=>({...prev,name:event.target.value}))} label="Name" placeholder="Enter your name"/>
{/* <Link/> */}
<InputControl onChange={event=>setValues(prev=>({...prev,email:event.target.value}))} label="Email" placeholder="Enter Email Address"/>
<InputControl onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))} label="Password" placeholder="Enter password"/>
<div className={styles.footer}>
<b className={styles.error}>{errormessage}</b>
    <button disabled={submitButtonDisabled} onClick={handlesub}>Sign Up</button>
    <p>Already have an account ? {" " }
    <span><Link to="/login">Login</Link></span></p>
</div>
    </div>
      
    </div>
  )
}

export default Signup
