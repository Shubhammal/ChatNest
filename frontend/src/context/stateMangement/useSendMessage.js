import React, { useState } from 'react'
import useConversation from './useConversation.js';
import axios from 'axios';

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const sendMessage = async(message)=>{
        setLoading(true);
        if(selectedConversation && selectedConversation._id){
            try {
                const response = await axios.post(`api/message/send/${selectedConversation._id}` , {message});
                setMessages([...messages, response.data]);
                setLoading(false);
                
            } catch (error) {
                console.log("Error in Sending all the message in" + error);
                setLoading(false);
            }
        }
        
    }

  return {loading, sendMessage};
}

export default useSendMessage