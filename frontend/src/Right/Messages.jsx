import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../context/stateMangement/useGetMessage.js'
import Loading from '../Component/Loading.jsx'
import useGetSocketMessage from '../context/usegetSocketMessage.jsx';

function Messages() {
  const { messages, loading } = useGetMessage();
  useGetSocketMessage();
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMessageRef.current){
        lastMessageRef.current.scrollIntoView({behavior:"smooth"});
      }
    },100)
  },[messages]) 

  return (
    <>
    {loading? <>
    <Loading/>
    </>: <>

    <div className='overflow-y-auto scrollbar-hide ' style={{ maxHeight: 'calc(84vh - 12vh)' }}>
      {!loading && Array.isArray(messages) && messages.length === 0 && (
        <div>
          <p className='text-center mt-[20%] font-extrabold'>Say hi..</p>
        </div>
      )}
      {
      Array.isArray(messages) &&
      messages.length > 0 &&
      messages.map((message) => (
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