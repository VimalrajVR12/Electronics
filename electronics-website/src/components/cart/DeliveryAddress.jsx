import React from 'react'
import "../../styles/payment.css"

const DeliveryAddress = ({data}) => {
    const {doorNo, street, city, district, state, pincode} = data;
  return (
    <h5>{doorNo} {street} {city} {district} {state}-{pincode}</h5>
  )
}

export default DeliveryAddress