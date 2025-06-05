import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import useGetMessage from '../context/stateMangement/useGetMessage.js'
import Loading from '../Component/Loading.jsx'
import useGetSocketMessage from '../context/useGetSocketMessage.js';
import useConversation from '../context/stateMangement/useConversation.js';
import axios from 'axios';
import sound from '../assets/1.mp3'

function Messages({newMessage}) {
  const { messages, loading } = useGetMessage();
  const { selectedConversation } = useConversation();
  const [myMess, setMy] = useState(messages);
  const lastMessageRef = useRef();

  useGetSocketMessage();

  useEffect(() => {
    const getMessage = async () => {
        try {
          const response = await axios.get(`api/message/get/${selectedConversation._id}`);
          console.log(response.data.messages);
          setMy(response.data.messages)
          console.log("kya bhai")
        } catch (error) {
          console.log("Error in getting all the message in" + error);
        }
    }
    setTimeout(() => {
      getMessage();
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }, 500)
    setTimeout(() => {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      const notification = new Audio(sound);
      notification.play();
    }, 1000)
  }, [newMessage, messages])

  
  return (
    <>
      {loading ? <>
        <Loading />
      </> : <>

        <div className='overflow-y-auto scrollbar-hide ' style={{ maxHeight: 'calc(84vh - 12vh)' }}>
          {!loading && Array.isArray(messages) && myMess.length === 0 && (
            <div>
              <p className='text-center mt-[20%] font-extrabold'>Say hi..</p>
            </div>
          )}
          {
            Array.isArray(myMess) &&
            myMess.length > 0 &&
            myMess.map((message) => (
              <div key={message._id} ref={lastMessageRef}>
                <Message message={message} />
              </div>
            ))
          }


        </div>
      </>}
    </>
  )
}

export default Messages