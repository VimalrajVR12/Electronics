import React, { useEffect, useState } from 'react'
import "../styles/Home.css"
import { auth } from './firebase';
// import { userName } from '../App'

const Home = () => {
  // useState
  // useEffect
  // auth
  // const [userName,setUserName]=useState("");
  // useEffect(()=>{
  //   auth.onAuthStateChanged((user)=>{
  //     if(user){
  //       setUserName(user.displayName);

  //     }else{
  //       setUserName("")
  //     }
  //   })
  // },[])
  return (
    <div>
      <h1>Home Page</h1>
      {/* <h4>{userName}</h4> */}
    </div>
  )
}
export default Home
