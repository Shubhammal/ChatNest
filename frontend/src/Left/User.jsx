import React from 'react'

function User({user }) {

  return (
    user?<>
    <div className='flex space-x-4 px-6 py-7 hover:bg-slate-800 duration-200 rounded-md'>
        <div className="avatar online">
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
    </>:<></>
  )
}

export default User