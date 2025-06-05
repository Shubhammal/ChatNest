import React, { createContext, useContext, useEffect, useState } from "react";
import { userAuth } from './AuthProvider.jsx'
import io from 'socket.io-client'

// const SOCKET_URL = 'http://localhost:5002'; // Example URL
// const socket = io(SOCKET_URL);

const socketContext = createContext();

export const useSocketContext = () => {
    return useContext(socketContext)
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const [authUser] = userAuth();

    useEffect(() => {
        if (authUser && authUser.User?._id) {
            const socket = io("http://localhost:5002/", {
                query: {
                    userId: authUser.User._id,
                }
            })
            setSocket(socket)
            socket.on("getOnline", (users) => {
                setOnlineUser(users);
                console.log("Socket Connected " + users);
            });
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])
    return (
        <socketContext.Provider value={{ socket, onlineUser }}>
            {children}
        </socketContext.Provider>
    )
}