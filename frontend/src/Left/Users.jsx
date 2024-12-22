import React from 'react'
import User from './User'

function Users() {
  return (
    <div className='overflow-y-auto scrollbar-hide ' style={{maxHeight:'calc(84vh - 3vh)'}}>
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>
    <User/>
    </div>
  )
}

export default Users