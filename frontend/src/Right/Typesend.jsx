import React from 'react'
import { IoIosSend } from "react-icons/io";

function Typesend() {
  return (
    <div className='w-[99%] pr-0 flex input input-bordered input-lg '>
      <input
  type="text"
  placeholder="Type here"
  class="w-[100%] " />

    <button className='p-2 rounded-e-btn pr-5 hover:bg-slate-500'>
      <IoIosSend className='w-[2em] h-[2em] '/>
    </button>
    </div>
  )
}

export default Typesend