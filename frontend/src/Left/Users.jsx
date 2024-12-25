import React from 'react'
import User from './User'
import UserGetAllUsers from '../context/UserGetAllUsers'

function Users() {
  const [allUser, loading] = UserGetAllUsers();
  console.log(allUser);
  return (
    <div className='overflow-y-auto scrollbar-hide ' style={{maxHeight:'calc(84vh - 3vh)'}}>
    <User fullName='shubham' status="check whether it is presented or not!!" />
    { allUser.map((user, index)=>{
      return <User key={user._id || index} user = {user}/>
    })
  }
  
    </div>
  )
}

export default Users