import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../context/stateMangement/useSendMessage.js';
import Message from './Message.jsx';

function Typesend({ onNewMessage }) {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onNewMessage(message);
    let temp = message;
    setMessage("");
    await sendMessage(temp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-[99%] pr-0 flex input input-bordered input-lg '>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type here"
          className="w-[100%] " />

        <button className='p-2 rounded-e-btn pr-5 hover:bg-slate-500'>
          <IoIosSend className='w-[2em] h-[2em] ' />
        </button>
      </div>
    </form>
  )
}

export default Typesend;