import React, { createContext, useState } from 'react'

export const AuthContext = createContext();


const initialState = {
    isAuth: false,
    userId: "",
    userName: "",
    wishlist: [],
    cart: [],
    purchaseValue: ""
}
const AuthContextProvider = ({children}) => {
    const [authState, setAuthState] = useState(initialState);

    const value = {authState, setAuthState}

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
