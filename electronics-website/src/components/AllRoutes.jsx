import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'
import Payment from '../pages/Payment'
import PaymentSuccessful from '../pages/PaymentSuccessful'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import WishList from '../pages/WishList'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/products" element={ <Products /> }></Route>
        <Route path="/products/:productId" element={ <ProductDetails /> }></Route>
        <Route path="/cart" element={ <CartPage /> }></Route>
        <Route path="/payment" element={ <Payment /> }></Route>
        <Route path="/paymentSuccessful" element={ <PaymentSuccessful /> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/signup" element={ <Signup /> }></Route>
        <Route path="/wishlist" element={ <WishList /> }></Route>
    </Routes>
  )
}

export default AllRoutes
