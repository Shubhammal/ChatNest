import React, { createContext, useContext, useEffect, useState } from "react";
import {userAuth} from './AuthProvider.jsx'
import io from 'socket.io-client'

const socketContext = createContext();

export const useSocketContext =()=>{
    return useContext(socketContext)
}

export const SocketProvider =({children})=>{
    const [socket,setSocket] = useState(null);
    const [onlineUser , setOnlineUser] = useState([]);
    const [authUser] = userAuth();

    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:5002/", {
                query:{
                    userId:authUser.User._id,
                }
            })
            setSocket(socket)
            socket.on("getOnline", (users)=>{
                setOnlineUser(users);
                console.log("Socket disconnecte" + users);
            });
            return()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]) 
    return(
        <socketContext.Provider value={{socket,onlineUser}}>
            {children}
        </socketContext.Provider>
    )
}