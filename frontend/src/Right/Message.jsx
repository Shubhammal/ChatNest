import React from 'react'

function Message({message}) {
  const authUser = JSON.parse(localStorage.getItem('message'));
  console.log(message);
  const senderCheck = authUser.User._id === message.senderId;
  console.log(senderCheck);
  
  return (
    <div className='p-4 '>

    {senderCheck?<>
     <div className="chat chat-end">
  <div className="chat-bubble chat-bubble-accent">
    {message.message}
  </div>
  </div>
  </>:<>
  <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-info">
    {message.message}
  </div>
  </div></>}
    </div>
  )
}

export default Message