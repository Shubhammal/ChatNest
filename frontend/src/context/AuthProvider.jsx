import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialUserstate = Cookies.get('jwt') || localStorage.getItem('message');
    const [authUser, setAuthUser] = useState(initialUserstate ? JSON.parse(initialUserstate) : undefined);
    return (
        <AuthContext.Provider value={[ authUser, setAuthUser ]}>
            {children}
        </AuthContext.Provider>
    )
}

export const userAuth = () => useContext(AuthContext);