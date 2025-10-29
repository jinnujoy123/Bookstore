import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminHeader() {
  const navigate=useNavigate()
  const [token,setToken]=useState("")
  
 useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      setToken(token)    
    }
  },[])

  const logout=()=>{
    console.log(sessionStorage);    
    sessionStorage.clear()
    setToken("")
    navigate('/admin-dashboard')
  }
  return (
    <div>
      <div className="flex items-center justify-between p-3 md:px-10">
    <div className="flex items-center">
      <img src="/public/logo.png" alt="logo" width={'50px'} height={'50px'}/>
      <h1 className='text-lg whitespace-nowrap font-bold ms-2 '>BOOK STORE</h1>
    </div>
    <div className="">
      { token ?
        <button  onClick={logout}> <button  className='border border-black px-3 py-2 ms-3 rounded hover:text-white hover:bg-black'><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button></button>
        :
         <Link  to={'/login'}> <button  className='border border-black px-3 py-2 ms-3 rounded hover:text-white hover:bg-black'><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Login</button></Link> 
      }
    </div>
   </div>
   <nav className='w-full p-3 bg-black text-white'>
    <marquee className='text-center'>Welcome, Admin! You're all set to manage and monitor the system. Let’s get to work!</marquee>
   </nav>
    </div>
  )
}

export default AdminHeader
