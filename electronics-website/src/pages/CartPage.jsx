import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import CartProduct1 from "../components/cart/CartProduct1";
import "../styles/CartPage.css";
import { AuthContext } from "../context/AuthContext";


const coupon = [
  {
    code: "MASAI30",
    discount: 30
  },
  {
    code: "MASAI15",
    discount: 15
  },
  {
    code: "MASAI50",
    discount: 50
  }
]
const baseURL = `http://localhost:8080`
const CartPage = () => {
  
  const [cartData, setCartData] = useState([]);
  const [cart, setCart] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalMRP, setTotalMRP] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const value = useContext(AuthContext);
  let {isAuth, purchaseValue} = value.authState;
  

  
  const fetchCart = async() => {
    try {
      setCart(false);
      let data = await axios.get(`${baseURL}/cart`);
      console.log(data.data);
      setCartData(data.data);
      setCart(true);
      calculateTotalPrice(data.data);
    } catch (error) {
      console.log("Fetching cart items error", error)
    }
  }

  const changeQuantity = async(value, id) => {
    // console.log(id);
    let temp = cartData.filter((ele) => ele.id == id);
    console.log(temp);
    temp[0].quantity = temp[0].quantity + value;
    try {
      let res = await axios.patch(`${baseURL}/cart/${id}`, { quantity : temp[0].quantity});
      // console.log(res);
      fetchCart();
    } catch (error) {
      console.log("Error in updating quantity", error)
    }
  }

  const calculateTotalPrice = (arr) => {
    let total = arr.reduce((acc, cur) => {
      return acc = acc + cur.price*cur.quantity;
    }, 0)
    // console.log(total)
    setTotalPrice(total);
    value.setAuthState({...value.authState, purchaseValue: total});

    let total1 = arr.reduce((acc, cur) => {
      return acc = acc + cur.MRP*cur.quantity;
    }, 0);
    // console.log(total1)
    setTotalMRP(total1);
    // setDiscountText(`You will save ₹${totalMRP - totalPrice - discount} on this order`);

  }

  const handleTransfer = async(id) => {
    handleDelete(id);
    let temp = cartData.filter((ele) => ele.id == id);
    // console.log(temp[0]);
    try {
      let res = await axios.post(`${baseURL}/wishlist`, temp[0]);
    } catch (error) {
      console.log("Error in Transferring to WishList", error)
    }
  }

  const handleDelete = async (id) => {
    console.log(id);
    try {
      let res = await axios.delete(`${baseURL}/cart/${id}`);
      fetchCart();
    } catch (error) {
      console.log("Error in Deleting Product from Cart", error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = coupon.filter(ele => ele.code === code);
    // console.log(temp);
    if(temp.length > 0) setMsg(`${temp[0].discount}% discount applied`)
    else setMsg(`Coupon Expired`)

    setTotalPrice(totalPrice - Math.round(totalPrice*(temp[0].discount/100)));
    value.setAuth({...value.auth, purchaseValue: totalPrice});
    // setDiscountText(`You will save ₹${totalMRP - totalPrice} on this order`)
    setCode("");
  }

  useEffect(() => {
    if(isAuth)  fetchCart();
  }, [])
  
  return (
    <div className='mainContainer'>
      <div className='cartpage_container'>
        <div className='cartpage_products'>
          <div>
            {cartData.map((ele, i) => ( 
            <CartProduct1 productData={ele} 
                          changeQuantity={changeQuantity} 
                          handleDelete={handleDelete}
                          handleTransfer={handleTransfer}
                          key={i}/> 
            ))}
          </div>
        </div>
        <div className='cartpage_priceDetails'>
          <div className='cartpage_priceDetails_coupon'>
            <h3 >Coupon</h3>
            <form className='couponForm' onSubmit={handleSubmit}>
              <div style={{marginBottom: "-6px"}}>
                <input type="text" placeholder='Enter Coupon' onChange={(e) => { setCode(e.target.value) }} value={code}/>
                <hr style={{ marginTop: "-5px", height: "2px", color: "#0000ff", opacity: "1"}}/>
              </div>
              <button type='submit' style={{color: "blue"}} >Check</button>
            </form>
            <p className='cartpage_priceDetails_msg'>{msg}</p>
          </div>
          <hr />
          <div>
          <div className='cartpage_priceDetails_price'>
            <h3 >Price Details</h3>
            <div className='flex'>
              <h6>Price ({cartData.length} items)</h6>
              <h6>₹{totalMRP}</h6>
            </div>
            <div className='flex'>
              <h6>Discount</h6>
              <h6 style={{color: "green", fontWeight: "500"}}>-₹{totalMRP - totalPrice - discount}</h6>
            </div>
            <div className='flex'>
              <h6>Total Amount</h6>
              <h6>₹{totalPrice}</h6>
            </div>
          </div>

          <div className='cartpage_priceDetails_button'>
            <button onClick={() => { navigate("/payments") }}>Place Order</button>
            <span>You will save ₹{totalMRP - totalPrice - discount} on this order</span>
          </div>
          </div>
          
          
        </div>
      </div>
      <div className='cartpage_suggestions'>

      </div>
    </div>
  )
}

export default CartPage