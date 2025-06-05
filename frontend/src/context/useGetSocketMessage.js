import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext.jsx'
import useConversation from './stateMangement/useConversation.js';


const useGetSocketMessage=()=> {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage]);
            // setMessages((prevMessages) => [...prevMessages, newMessage]);
            console.log('Updated Messages:', [...messages, newMessage]);

            console.log(messages);
        });
       
        return () => socket.off("newMessage");
    }, [socket, messages, setMessages])
}

export default useGetSocketMessage;