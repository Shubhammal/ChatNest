import React from 'react'
import useConversation from '../context/stateMangement/useConversation.js'
import { useSocketContext } from '../context/SocketContext.jsx';

function User({user }) {
  // const selectedConversation = useConversation((state) => state.selectedConversation);
  // const setSelectedConversation = useConversation((state) => state.setSelectedConversation);
  const {selectedConversation , setSelectedConversation} = useConversation();
  const {socket ,onlineUser} = useSocketContext()
  const isSelected = selectedConversation?._id === user?._id;
  const isOnline = onlineUser.includes(user._id)? "online":"";

  return (
    user?<>
    <div className={`hover:bg-slate-600 duration-300 ${isSelected?"bg-stone-800":""}`}
    onClick={()=>setSelectedConversation({...user},
      console.log("clicked the onClick", selectedConversation)
    )}>
    <div className='flex space-x-4 px-6 py-7 hover:bg-slate-800 duration-200 rounded-md'>
        <div className={`avatar ${isOnline}`}>
  <div className="mask mask-squircle w-16">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
    <div>
        <h1 className='flex font-extrabold'>
            {user.fullname}
        </h1>

        <h5 className='text-gray-500' >
            {user.Email}
        </h5>
    </div>
    </div>
    </div>
    </>:<></>
  )
}

export default User