import React, { useEffect, useState } from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../context/stateMangement/useConversation.js'
import Loading from '../Component/Loading.jsx'

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleNewMessage = (message) => {
    setNewMessage(message);
  };

  const handleMessageDisplayed = () => {
    setNewMessage(""); // Clear the newMessage after it's displayed
  };

  return (
    <div className='w-[100%]'>
      {!selectedConversation ? <Loading mess={`Select any Conversation to start the chat`}/> : <>
        <ChatUser/>
        <div
          className="flex-1 overflow-y-auto"
          style={{ minHeight: "calc(84vh - 8vh)", maxHeight:"calc(84vh -8vh)" }}
        >
          <Messages 
            newMessage={newMessage} 
            onMessageDisplayed={handleMessageDisplayed}
          />
        </div>
        <div className='w-[100%]'>
          <Typesend onNewMessage={handleNewMessage} />
        </div>
      </>}
    </div>
  )
}

export default Right;