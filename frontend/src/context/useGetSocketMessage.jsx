import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext.jsx'
import useConversation from './stateMangement/useConversation.js';
import sound from '../assets/1.mp3'

function useGetSocketMessage() {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {

        socket.on("newMessage", (newMessage) => {
            const notification = new Audio(sound);
            notification.play();


            setMessages([...messages, newMessage]);
            console.log(messages);
        })
        return () => socket.off("newMessage");
    }, [socket, messages, setMessages])
}

export default useGetSocketMessage;