import React from 'react'
import Logout from '../Component/Logout'

function ChatUser() {
  return (
    <>
      <div className=' flex justify-between items-center bg-gray-700 rounded-btn hover:bg-slate-800 duration-300'>
        <div className='flex pt-5 pl-5 pb-3 space-x-4'>
        <div>
          <div className="avatar online">
            <div className="ring-primary ring-offset-base-100 h-16 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className='font-extrabold pl-1'>Shubham Malviya</h1>
          <span className='font-semibold pl-1'>Online</span>
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