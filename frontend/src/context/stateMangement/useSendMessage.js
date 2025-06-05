import React, { useState } from 'react'
import useConversation from './useConversation.js';
import axios from 'axios';

const useSendMessage=()=> {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const sendMessage = async (message)=>{
        setLoading(true);
        
            try {
                const response = await axios.post(`api/message/send/${selectedConversation._id}` , {message});
                setMessages([...messages, response.data]);

                // setMessages((prevMessages) => [...prevMessages, response.data]);
                setLoading(false);
                
            } catch (error) {
                console.log("Error in Sending all the message in" + error);
                setLoading(false);
            }
        
        
    };

  return {loading, sendMessage};
};

export default useSendMessage