import axios from 'axios';
import React, { useState } from 'react'
import { IoIosLogOut } from "react-icons/io";
import  Cookies  from 'js-cookie';
import { Navigate } from 'react-router-dom';

 export default function Logout() {
  const [loading ,setLoading] = useState(false);
  const handleLogout= async()=>{
    setLoading(true);
    try {
      const response = await axios.post('/api/user/logout');
      localStorage.removeItem("message");
      Cookies.remove("jwt");
      setLoading(false);
      alert("logout successfully");
      return <Navigate to={'api/user/login'}/>
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <button className='h-[100%] rounded-full' onClick={handleLogout}>
        <IoIosLogOut className='h-[100%] w-[2em] mr-4'/>
    </button>
    </>
  )
}
