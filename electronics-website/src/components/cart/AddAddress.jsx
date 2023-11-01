import React, { useContext, useEffect, useRef, useState } from 'react'
import "../../styles/payment.css"
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'


const baseURL = `http://localhost:8080/address`
const initialState = {
    name: "",
    mobile: "",
    doorNo: "",
    street: "",
    city: "",
    district: "",
    state: "",
    pincode: ""
}
const AddAddress = ({fetchAddress, data=initialState}) => {
    const [openAddress, setOpenAddress] = useState(false);
    const [newAddress, setNewAddress] = useState(data);
    const inputRef = useRef(null);
    const value = useContext(AuthContext);
    let {userId} = value.authState;

    const handleChange = (e) => {
        setNewAddress({...newAddress, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(newAddress.name != "" && newAddress.mobile != "" && newAddress.doorNo != "" && newAddress.street != "" && newAddress.city != "" && newAddress.district != "" && newAddress.state != "" && newAddress.pincode != ""){
            let obj = {...newAddress, userId: userId};
            console.log(obj);

            try {
                let data = await axios.post(`http://localhost:8080/address`, obj);
            } catch (error) {
                console.log("Error adding address", error)
            }
            fetchAddress();
            setNewAddress(initialState);
        }
        else{
            alert("Please Fill in all fields")
        }
        
    }

    useEffect(() => {
        if(openAddress)
            inputRef.current.focus();
    }, [openAddress])
    // console.log(newAddress);
  return (
    <div>
        {openAddress ? <div className='addAddress_field'>
            <h5 style={{color: "blue"}}><input type="checkbox" checked /> ADD A NEW ADDRESS </h5>
            <form onSubmit={handleSubmit} className='address_form'>
                <div>
                    <input type="text" placeholder='Name' name='name' ref={inputRef} value={newAddress.name} onChange={handleChange}/>
                    <input type="text" placeholder='Mobile' name='mobile' value={newAddress.mobile} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" placeholder='Door No' name='doorNo' value={newAddress.doorNo} onChange={handleChange}/>
                    <input type="text" placeholder='Street' name='street' value={newAddress.street} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder='City' name='city' value={newAddress.city} onChange={handleChange}/>
                    <input type="text" placeholder='District' name='district' value={newAddress.district} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" placeholder='State' name='state' value={newAddress.state} onChange={handleChange}/>
                    <input type="text" placeholder='Pin Code' name='pincode' value={newAddress.pincode} onChange={handleChange}/>
                </div>
                <div className='button'>
                    <button type='submit'>Save Address</button>
                    <button type='button' onClick={() => { setOpenAddress(false) }}>Cancel</button>
                </div>
            </form>
        </div> : <div className='addAddress' onClick={() => {setOpenAddress(!openAddress)}}>
            <h2>+</h2>
            <h4>Add a new address</h4>
        </div>}
        
        
    </div>
  )
}

export default AddAddress