import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
// import styles from "./cartPage.module.css"
import "../styles/CartPage.css"
import CartProduct from '../components/CartProduct'
import { AuthContext } from '../context/AuthContext'


const coupon = [
  {
    code: "MASAI30",
    discount: 30,
  },
  {
    code: "MASAI15",
    discount: 15,
  },
  {
    code: "MASAI50",
    discount: 50
  }
]



const parentStyle = { 
  display: "flex", 
  flexDirection: "row", 
  columnGap: "20px",   
  // border: "5px solid blue", 
  margin: "50px"
}

const priceDetailsStyle = {
  display: "flex", justifyContent: "space-between", margin: "10px"
}
const baseURL = `http://localhost:8080/cart`;
const CartPage = () => {
  
  const [cartData, setCartData] = useState([]);
  const [cart, setCart] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalMRP, setTotalMRP] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  const value = useContext(AuthContext)
  const navigate = useNavigate();


  
  const fetchCart = async() => {
    try {
      setCart(false);
      let data = await axios.get(`${baseURL}`);
      console.log(data.data);
      setCartData(data.data);
      setCart(true);
      calculateTotalPrice(data.data);
    } catch (error) {
      console.log("Fetching cart items error", error);
    }
  };

  const changeQuantity = async (value, id) => {
    // console.log(id);
    let temp = cartData.filter((ele) => ele.id == id);
    console.log(temp);
    temp[0].quantity = temp[0].quantity + value;
    try {
      let res = await axios.patch(`${baseURL}/${id}`, { quantity: temp[0].quantity });
      console.log(res);
      fetchCart();
    } catch (error) {
      console.log("Error in updating quantity", error);
    }
  };

  const calculateTotalPrice = (arr) => {
    let total = arr.reduce((acc, cur) => {
      return (acc = acc + cur.price * cur.quantity);
    }, 0);
    // console.log(total)
    setTotalPrice(total);
    value.setAuthState({...value.authState, purchaseValue: total});

    let total1 = arr.reduce((acc, cur) => {
      return (acc = acc + cur.MRP * cur.quantity);
    }, 0);
    // console.log(total1)
    setTotalMRP(total1);
  }

  const handleTransfer = async (id) => {
    handleDelete(id);
    let temp = cartData.filter((ele) => ele.id == id);
    // console.log(temp[0]);
    try {
      let res = await axios.post(`http://localhost:8080/wishlist`, temp[0]);
      
    } catch (error) {
      console.log("Error in Transferring to WishList", error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      let res = await axios.delete(`${baseURL}/cart/${id}`);
      fetchCart();
    } catch (error) {
      console.log("Error in Deleting Product from Cart", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = coupon.filter(ele => ele.code === code);
    console.log(temp);
    if(temp.length > 0) setMsg(`${temp[0].discount}% discount applied`)
    else setMsg(`Coupon Expired`)

    setTotalPrice(totalPrice - Math.round(totalPrice*(temp[0].discount/100)));
    setCode("");
  };

  useEffect(() => {
    fetchCart();
  }, [])
  return (
    <div style={parentStyle}>
      <div>
        <div>
          <h1>Your Cart</h1>
        </div>
        <div>
          {cartData.map((ele, i) => ( 
          <CartProduct productData={ele} 
                        changeQuantity={changeQuantity} 
                        handleDelete={handleDelete}
                        handleTransfer={handleTransfer}
                        key={i}/> 
          ))}
        </div>
      </div>
      <div style={{width: "30%"}}>
        
        <div>
          <h1>Price Details</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Coupon' onChange={(e) => { setCode(e.target.value) }} value={code}/>
            <input type="submit" />
          </form>
          <p>{msg}</p>
        </div>
        
        
        <div>
          
          <div style={priceDetailsStyle}>
            <h3>Price ({cartData.length} items)</h3>
            <h3>₹{totalMRP}</h3>
          </div>
          <div style={priceDetailsStyle}>
            <h3>Discount</h3>
            <h3>₹{totalMRP - totalPrice - discount}</h3>
          </div>
          <div style={priceDetailsStyle}>
            <h3>Total Amount</h3>
            <h3>₹{totalPrice}</h3>
          </div>
          
          
        </div>
        <button onClick={() => { navigate("/payments") }}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CartPage
