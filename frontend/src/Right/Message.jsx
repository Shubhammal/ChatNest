import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("message"));
  const senderCheck = message.senderId === authUser?.User?._id;
  console.log(authUser);
  

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className='p-4 '>

      {senderCheck ? <>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-accent">
            {message.message}
          </div>
          <div>{formattedTime}</div>
        </div>
      </> : <>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-info">
            {message.message}
          </div>
          <div>{formattedTime}</div>
        </div></>}
    </div>
  );
}

export default Message;
