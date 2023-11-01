import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../context/AuthContext';


const PaymentSuccessful = () => {
  const navigate = useNavigate();
  const value = useContext(AuthContext);

  const button = {
    backgroundColor: "#1a6aa0",
    border: "1px solid #1a6aa0",
    color: "white",
    padding: "5px",
    fontSize: "16px",
    borderRadius: "6px",
    padding: "20px"
}

  return (
    <div>
      <img src="https://us.v-cdn.net/6033805/uploads/NFFSMTHMR4G8/quaintlikelyflyingfish-max-1mb.gif" alt="" style={{width: "200px"}}/>
    <h2 style={{color: "#1a6aa0", marginTop: "-15px"}}>thank for ordering .. your products  are comming soon</h2>
    <button style={button} type="submit"onClick={() => { 
      navigate("/");
      
      }}>shop more</button>
   
    <p>Your order id: 25972 <span id='order'></span></p>
     
    <img  src="https://img.freepik.com/free-psd/fast-delivery-transport-3d-rendering_1419-2403.jpg?t=st=1694785141~exp=
   1694785741~hmac=22f8a23643d70f667428cb0849934cba952196523d39e108b39487022bf96c53" alt="" style={{width: "25%"}} />
    </div>
  )
}

export default PaymentSuccessful
