import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/Signup.css"
import { AuthContext } from '../context/AuthContext'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const baseURL = `http://localhost:8080`
const initialState = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  password: "",
  confirmPassword: ""
}
const initialSignInState = {
  email: "",
  password: ""
}
const Signup = () => {
  const [userData, setUserData] = useState(initialState);
  const [signUpMSG, setSignUpMSG] = useState("");
  const [signInData, setSignInData] = useState(initialSignInState);
  const [signInMSG, setSignInMSG] = useState("");
  const [seconds, setSeconds] = useState(5);
  const [openPopUp, setOpenPopUp] = useState(false);
  const value = useContext(AuthContext);
  const navigate = useNavigate();
  let {authState, setAuthState} = value;
  // console.log(authState, setAuthState);

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  }

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    
    setSignUpMSG("");
    CreateUser();
    setUserData(initialState);
  }

  const CreateUser = async() => {
    let {confirmPassword: temp, ...obj} = userData;
    obj.userName = `${obj.firstName} ${obj.lastName}`
    // console.log(obj);

    if(userData.firstName != "" && userData.lastName != "" && userData.email != "" && userData.mobile != "" && userData.password != "" && userData.confirmPassword != ""){
      if(obj.password.length >= 8){
        if(userData.password === userData.confirmPassword){
          let res = await axios.get(`${baseURL}/users?email=${obj.email}`);
          console.log(res.data);

          if(res.data.length > 0){
            setSignUpMSG("User Already Exists. Please Login.");
            document.getElementById("userCheck").style.color = "green"
          }
          else{
            let data = await axios.post(`${baseURL}/users`, obj);
            console.log(data.data);

            setSignUpMSG("Account created successfully. Login to continue.");
            document.getElementById("userCheck").style.color = "green"
          }
        }
        else{
          setSignUpMSG("Password & Confirm Password does not match.");
          document.getElementById("userCheck").style.color = "red"
        }
      }
      else{
        setSignUpMSG("Password must be atleast 8 characters long.");
        document.getElementById("userCheck").style.color = "red"
      }
    }
    else{
        setSignUpMSG("Please fill all the fields.");
        document.getElementById("userCheck").style.color = "red"
    }
  }

  const handleSignInChange = (e) => {
    setSignInData({...signInData, [e.target.name]: e.target.value});
  }

  const handleSigInSubmit = async (e) => {
    e.preventDefault();
    setSignInMSG("");

    let res = await axios.get(`${baseURL}/users?email=${signInData.email}&password=${signInData.password}`);
    if(res.data.length > 0){
      let wish = await axios.get(`${baseURL}/wishlist`);
      let cart = await axios.get(`${baseURL}/cart`);
      setAuthState({...authState, 
                  isAuth: true, 
                  userId: res.data[0].id, 
                  userName: res.data[0].firstName, 
                  wishlist: wish.data, 
                  cart: cart.data
                });
      openPopUpBar();
    }
    else{
      let email = await axios.get(`${baseURL}/users?email=${signInData.email}`);
      console.log(email.data);
      if(email.data.length > 0){
        setSignInMSG("Invalid Password")
        document.getElementById("info").style.color = "red";
      }
      else{
        setSignInMSG("Invalid User")
        document.getElementById("info").style.color = "red";
      }
    }
  }
  
  // Pop-Up Box Starts

  let body1 = document.getElementById("popup");
      
  // let closeBtn = document.getElementById("closeBtn");
  // closeBtn.addEventListener("click", closePopUpBar);

  let timer;
  function openPopUpBar(){
      // body1.classList.add("open-popup");
      setOpenPopUp(true);
      
      let interval = setInterval(() => {
          setSeconds(prev => {
            if(prev == 1){
              closePopUpBar();
              setOpenPopUp(false);
              return clearInterval(interval);
            }

            return prev - 1
          });
      }, 1000)
      // timer = setTimeout(() => { closePopUpBar(), setOpenPopUp(false) }, 5000);
  }
  function closePopUpBar(){
      // body1.classList.remove("open-popup")
      setOpenPopUp(false);
      navigate("/");
  }

  // Pop-Up Box Ends


  // Google Authentication Starts

  const firebaseConfig = {
    apiKey: "AIzaSyCSu7rmm1BTqnXGZlq1z4WGkURh-tCBZZ8",
    authDomain: "telemedicine-86590.firebaseapp.com",
    projectId: "telemedicine-86590",
    storageBucket: "telemedicine-86590.appspot.com",
    messagingSenderId: "340614239963",
    appId: "1:340614239963:web:ebc488e173e5b306a6defe",
    measurementId: "G-DJQ3MZTQV9"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const GoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(async(result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                let res = await axios.get(`${baseURL}/users?email=${signInData.email}&password=${signInData.password}`);
                let wish = await axios.get(`${baseURL}/wishlist`);
                let cart = await axios.get(`${baseURL}/cart`);
                setAuthState({...authState, 
                            isAuth: true, 
                            userId: res.data[0].id, 
                            userName: res.data[0].firstName, 
                            wishlist: wish.data, 
                            cart: cart.data 
                          });
                openPopUpBar();
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

  // Google Authentication Ends

  

  return (
    <div id='form'>
      <div className="container" id="mainContent">
            <input type="checkbox" id="hidden-btn" />
            <form onSubmit={handleSignUpFormSubmit} className="signup">
                <label for="">Sign up</label>
                <input type="text" placeholder="First Name" value={userData.firstName} name="firstName" onChange={handleChange} id="SignupFirstName" />
                <input type="text" placeholder="Last Name" value={userData.lastName} name="lastName" onChange={handleChange} id="SignupLastName" />
                <input type="text" placeholder="Mobile No" value={userData.mobile} name="mobile" onChange={handleChange} id="SignupMobile" />
                <input type="email" placeholder="Email" value={userData.email} name="email" onChange={handleChange} id="SignupEmail" />
                <div id="passwordField">
                    <input type="password" placeholder="Password" value={userData.password} name="password" onChange={handleChange} id="SignupPassword" />
                    <i className="fa-solid fa-eye-slash" id="SignupeyeIcon"></i>
                </div>
                <div id="passwordField">
                    <input type="password" placeholder="Confirm Password" value={userData.confirmPassword} name="confirmPassword" onChange={handleChange} id="SignupConfirmPassword" />
                    <i className="fa-solid fa-eye-slash" id="SignupConfirmeyeIcon"></i>
                </div>
                <button type='submit' id="create-account-button">Sign up</button><br />
                <div id="userCheck" style={{marginTop: "-10px", fontWeight: "500"}}>{signUpMSG}</div>
            </form>
    
            <form onSubmit={handleSigInSubmit} className="login">
                <label for="hidden-btn">Sign in</label>
                <input type="email" placeholder="Email"  value={signInData.email} name="email" onChange={handleSignInChange} id="SigninEmail" />
                <div id="passwordField">
                    <input type="password" placeholder="Password" value={signInData.password} name="password" onChange={handleSignInChange} id="SigninPassword" />
                    <i className="fa-solid fa-eye-slash" id="SignineyeIcon"></i>
                </div>
                <button id="signin-button">Login</button><br />
                <div id="info">{signInMSG}</div>
                <div style={{background: "transparent"}}>
                    <a href="">Forgot your password</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Create New Account</a>
                </div><br />
                <button type="button" onClick={GoogleSignin} id="google-signin">Sign in with Google</button>
            </form>
            <div id="popup-container">
                <div className={openPopUp ? "popup open-popup"  : "popup"} id="popup">
                    <img src="https://www.pngall.com/wp-content/uploads/9/Green-Tick-Vector-PNG-Images.png" alt="" />
                    <h2>Login Successful</h2>
                    <p>You will be redirected in {seconds} seconds</p>
                    <button onClick={closePopUpBar} type="button" id="closeBtn">OK</button>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Signup
