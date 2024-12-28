import React, { useEffect } from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../context/stateMangement/useConversation.js'
import Loading from '../Component/Loading.jsx'

function Right() {
  const{selectedConversation, setSelectedConversation} = useConversation();
  useEffect(()=>{
    return setSelectedConversation(null);
  },[setSelectedConversation]);
  return (
    <div className='w-[100%]'>
      {!selectedConversation?<Loading mess={`Select any Conversation to start the chat`}/> : <>
        <ChatUser/>
      <div
        className=" flex-1  overflow-y-auto"
        style={{ minHeight: "calc(84vh - 8vh)", maxHeight:"calc(84vh -8vh)" }}
      >
        <Messages/>
      </div>
      <div className='w-[100%] '>
      <Typesend />
      </div>
      </>}
      
    </div>
  )
}

export default Right;