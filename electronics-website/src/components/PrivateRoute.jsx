import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router';



const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const value = useContext(AuthContext);
    let {isAuth} = value.authState;
  
    useEffect(() => {
        if(!isAuth) return navigate("/signup");
    }, [])
  
    return children
}

export default PrivateRoute
