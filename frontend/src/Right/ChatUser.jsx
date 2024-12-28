import React from 'react'
import Logout from '../Component/Logout'
import useConversation from '../context/stateMangement/useConversation.js';
import { useSocketContext } from '../context/SocketContext.jsx';

function ChatUser() {
  
  // const selectedConversation =  useConversation((state) =>  state.selectedConversation);
  const {selectedConversation} = useConversation();
  const {socket ,onlineUser} = useSocketContext();
  const isOnline = onlineUser.includes(selectedConversation._id)? "online":"";
  return (
    <>
      <div className=' flex justify-between items-center bg-gray-700 rounded-btn hover:bg-slate-800 duration-300'>
        <div className='flex pt-5 pl-5 pb-3 space-x-4'>
        <div>
          <div className={`avatar ${isOnline}`}>
            <div className="ring-primary ring-offset-base-100 h-16 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className='font-extrabold pl-1'>{selectedConversation?.fullname}</h1>
          <span className='font-semibold pl-1'>{isOnline?"Online" : "Offline"}</span>
        </div>
        </div>
        <div className='flex space-x-reverse hover:bg-black duration-200 h-[100%]'>
        <Logout />
        </div>
      </div>
    </>
  )
}

export default ChatUser