import React from 'react'
import Message from './Message'
import useGetMessage from '../context/stateMangement/useGetMessage.js'
import Loading from '../Component/Loading.jsx'

function Messages() {
  const { messages, loading } = useGetMessage();
  console.log(messages);

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
      {messages.length >0 &&messages.map((message)=>{
      return <Message key={message._id}  message={message}/>
    })}

    </div>
    </>}
    </>
  )
}

export default Messages