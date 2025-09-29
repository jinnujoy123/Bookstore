import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <div>
      <div className="flex items-center justify-between p-3 md:px-20">
    <div className="flex items-center">
      <img src="/public/logo.png" alt="logo" width={'50px'} height={'50px'}/>
      <h1 className='text-lg whitespace-nowrap font-bold ms-2 '>BOOK STORE</h1>
    </div>
    <div className="">
      <Link  to={'/login'}> <button  className='border border-black px-3 py-2 ms-3 rounded hover:text-white hover:bg-black'><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button></Link> 
    </div>
   </div>
   <nav className='w-full p-3 bg-black text-white'>
    <marquee className='text-center'>Welcome, Admin! You're all set to manage and monitor the system. Let’s get to work!</marquee>
   </nav>
    </div>
  )
}

export default AdminHeader
