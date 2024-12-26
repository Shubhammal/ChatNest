import React, { useEffect, useState } from 'react'
import useConversation from './UseConversation.js';
import axios from 'axios'

function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(()=>{
        const getMessage = async(req,res)=>{
            setLoading(true);
            if(selectedConversation && selectedConversation._id){
                try {
                    const response = await axios.get(`api/message/get/${selectedConversation._id}`);
                    setMessages(response.data.messages || []);
                    setLoading(false);
                    
                } catch (error) {
                    console.log("Error in getting all the message in" + error);
                }
            }
            
        }
        getMessage();
    },[selectedConversation, setMessages])

    return{ messages , loading}
}

export default useGetMessage