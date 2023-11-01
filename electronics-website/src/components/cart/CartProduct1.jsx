import React from 'react'
import "../../styles/CartPage.css"



const CartProduct1 = ({productData, changeQuantity, handleDelete, handleTransfer}) => {
    // console.log(productData);
  return (
    <div className='productContainer'>
      <div>
        <img src={productData.image} alt="" width="100"/>
      </div>
      <div className='productData_body'>
        <h5>{productData.title}</h5>
        <p>₹{productData.price}   <span style={{textDecoration: "line-through", opacity: "0.5"}}>₹{productData.MRP}</span></p>
        <div style={{display: "flex", columnGap: "50px"}}>
          <div className='productContainer_button'>
              <button className='button' style={productData.quantity == 5 ? { cursor: "not-allowed" } : {}} disabled={productData.quantity == 5} onClick={() => {changeQuantity(+1, productData.id)}}>+</button>
              <button className='button' style={{margin: "-20px"}}>{productData.quantity}</button>
              <button className='button' style={productData.quantity == 1 ? { cursor: "not-allowed" } : {}} disabled={productData.quantity == 1} onClick={() => {changeQuantity(-1, productData.id)}}>-</button>
          </div>
          <div className='productContainer_button'>
              <button className='button' onClick={() => { handleDelete(productData.id) }}>Remove</button>
              <button className='button' onClick={() => { handleTransfer(productData.id) }}>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct1
