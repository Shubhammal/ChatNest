import React from 'react'

function ChatUser() {
  return (
    <>
      <div className='pt-5 pl-5 pb-3 flex space-x-4 bg-gray-700 rounded-btn hover:bg-slate-800 duration-300'>
        <div>
          <div class="avatar online">
            <div class="ring-primary ring-offset-base-100 h-16 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>

        <div>
          <h1 className='font-extrabold pl-1'>Shubham Malviya</h1>
          <span className='font-semibold pl-1'>Online</span>
        </div>
      </div>
    </>
  )
}

export default ChatUser