import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <div className='overflow-y-auto scrollbar-hide ' style={{maxHeight:'calc(84vh - 12vh)'}}>
      <Message/>
    
    </div>
  )
}

export default Messages