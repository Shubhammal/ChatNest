import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Left from './Left/Left'
import Right from './Right/Right'
import Signup from './Component/Signup'
import Login from './Component/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { userAuth } from './context/AuthProvider'
import Loading from './Component/Loading'

function App() {
 
  const [authUser, setAuthUser] = userAuth();
  console.log(authUser);

  return (
    <>
    <Routes>
      <Route path='/' element={
        authUser?
        <div className="flex h-screen "  style={{maxHeight:'Calc(100vh)'}}>
     <Left/>
     <Right/>
     </div>
     :
     <Navigate to={'/login'}/>
        }/>
        <Route path='/login' element={authUser? <Navigate to= {'/'}/> : <Login/>}/>
        <Route path='/signup' element={authUser? <Navigate to= {'/'}/> :<Signup/>}/>
    </Routes>
    {/* <Loading/> */}
    </>
  )
}

export default App
