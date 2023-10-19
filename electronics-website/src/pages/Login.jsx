import React from 'react'
import "../styles/Login.css"
import { useState } from 'react';
// import GoogleLoginComponent from './GoogleLogin';
import {GoogleLoginComponent} from "../pages/GoogleLogin"

  return (
    
    <div className='loginsignup'>
    <div className='loginsignup-container'>
    <h1>SignUp</h1>
    <div className='loginsignup-field'>
    <input type="text" placeholder='Your Name' />
    <input type="text" placeholder='Email Address' />
    <input type="text" placeholder='Password' />


    </div>
    <button>Continue</button>
    <p className="login-signup-login">Already have an account ?<span>Login</span></p>
    <div className="loginsigmup-agree">
      <input type="checkbox" name='' id='' />
      <p>By Continuing, i agree to the terms and privacy policy.</p>
    </div>

    </div>

      
    </div>
  )


export default Login
