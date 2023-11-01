import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import "../styles/payment.css"
import { AuthContext } from "../context/AuthContext"
import DeliveryAddress from '../components/cart/DeliveryAddress';
import AddAddress from '../components/cart/AddAddress';
import { useNavigate } from 'react-router';

const baseURL = `http://localhost:8080/`
const Payment = () => {
  const [addressState, setAddressState] = useState(false)
  const [address, setAddress] = useState([]);
  const [editComponent, setEditComponent] = useState(false);
  const [paymentState, setPaymentState] = useState(true);
  const [generateOTP, setGenerateOTP] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [OTP, setOTP] = useState("");
  const value = useContext(AuthContext);
  let {userId, userName, purchaseValue} = value.authState;
  const navigate = useNavigate();
  console.log(purchaseValue);
  
  const fetchAddress = async() => {
    try {
      let data = await axios.get(`${baseURL}address`);
      console.log(data.data);
      setAddress(data.data);
    } catch (error) {
      console.log("Error in Fetching Address", error)
    }
  }

  const handleAddress = (id) => {
    setAddressState(!addressState);
    setPaymentState(!paymentState);
    let temp = Math.floor(1000 + Math.random() * 9000);
    console.log(temp);
    setGenerateOTP(temp);
    alert(`Your OTP is ${temp}`);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(OTP);
    if(OTP == generateOTP){
      navigate('/paymentSuccessful')
    }
    else
      setErrorMsg("Wrong OTP");

    setOTP("");
  }

  const initPayment = () => {
    
    const options = {
      key: "rzp_test_puTZEoPXcmjlOJ",
      amount: purchaseValue * 100,
      currency: "INR",
      name: `Purchase from ${userName}`,
      description: "Test Transaction",
      // callback_url: navigate("/"),
    };

    const newWindow = new window.Razorpay(options);
    newWindow.open();
  };

  useEffect(() => {
    fetchAddress();
  }, [])
  
  return (
    <div>
      <div className='addressContainer'>
        <div className='delivery_heading' onClick={() => { setAddressState(!addressState) }}>
          <h3> <span style={{marginRight: "40px"}}>{addressState ? "+" : "--"}</span> Delivery Address</h3>
        </div>
        <div style={addressState ? {display: "none"} : {display: "block"}}>
          {address?.map((ele, i) => {
            return <div key={ele.id} className='delivery_address'>
                <h3>  {ele.name} - {ele.mobile}</h3>
                <DeliveryAddress data={ele} />
                <div>
                  <button onClick={() => {handleAddress(ele.id)}}>Deliver Here</button>
                  <button onClick={() => { setEditComponent(true)}}>Edit</button>
                </div>
            </div>
          })}
        </div>
        <div>
          <AddAddress fetchAddress={fetchAddress}/>
        </div>
      </div>
      <div className='paymentContainer'>
        <div className='payment_heading' onClick={() => { setPaymentState(!paymentState) }}>
          <h3> <span style={{marginRight: "40px"}}>{paymentState ? "+" : "--"}</span> Payment Details</h3>
        </div>
        <div className='payment_body' style={paymentState ? {display: "none"} : {display: "block"}}>
          <div className='payment_cashOnDelivery'>
            <h5 style={{color: "blue"}}><input type="checkbox" checked /> CASH ON DELIVERY </h5>
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder='Enter OTP' value={OTP} onChange={(e) => { setOTP(e.target.value) }}/>
              <input type="submit" />
              <h3>{errorMsg}</h3>
            </form>
          </div>
          <div className='payment_onlinePayment'>
            <h5 onClick={initPayment} style={{color: "blue"}}><input type="checkbox" checked /> PAY WITH CARDS </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment

