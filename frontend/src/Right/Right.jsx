import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'

function Right() {
  return (
    <div className='w-[100%]'>
      <ChatUser/>
      <div
        className=" flex-1  overflow-y-auto"
        style={{ minHeight: "calc(84vh - 8vh)", maxHeight:"calc(84vh -8vh)" }}
      >
        <Messages/>
      </div>
      <div className='w-[100%] '>
      <Typesend />
      </div>
    </div>
  )
}

export default Right