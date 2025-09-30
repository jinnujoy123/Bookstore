import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  const [userDetails,setUserDetails]=useState({username:"",email:"",password: ""})
  const[passwordStatus,setPasswordStatus]=useState(false)
  return (
    <>
  <div className="w-full min-h-screen bg-cover bg-center flex justify-center items-center flex-col bg-[url('/public/auth.jpg')]">
    <div className="p-10">
     <h1 className="text-3xl font-bold text-center">BOOK STORE</h1>
     <div className="bg-black text-white p-5 text-center my-5 flex justify-center items-center flex-col">

      <div className="border mb-5 flex justify-center items-center " style={{width:'100px',height:'100px',borderRadius:'50%'}}>
    <FontAwesomeIcon icon={faUser} />
      </div>
      <h1 className="text-2xl">{register?"Register":"Login"}</h1>
      <form className='my-5 w-full flex flex-col text-black'>

        
        {register &&
        <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='bg-white p-2 w-full rounded placeholder-gray-500 my-3'/>
        }
          <input type="text" value={userDetails.email} onChange={e=>setUserDetails({...userDetails,email:e.target.value})} placeholder='Email ID' className='bg-white w-full p-2 rounded placeholder-gray-500 mb-3'/>


          <div className="flex items-center justify-center bg-white pt-1 px-1 rounded">
            <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='Password' className='bg-white w-full h-full px-2 rounded placeholder-gray-500 mb-3'/>
            {
              !passwordStatus ?
              <FontAwesomeIcon icon={faEye} onClick={()=>setPasswordStatus(!passwordStatus)} className='text-gray-200 cursor-pointer'/>
              :
              <FontAwesomeIcon onClick={()=>setPasswordStatus(!passwordStatus)} icon={faEyeSlash} className='text-gray-200 cursor-pointer'/>
            }
          </div>


          <div className="flex justify-between ">
            <p className="text-xs text-orange-300 me-8 w-full pt-2 ">*Never share your password with others</p>
           {
            !register && 
             <button className="text-sm underline">Forgot Password</button>
           }
          </div>
          <div className="text-center py-4">
            {register?
            <button className='bg-green-700 p-2 w-full rounded'>
             Register
            </button>
            :
            <button className='bg-green-700 p-2 w-full rounded'>
              Login
            </button>}
          </div>

{/* google Authentication */}
 {
  register?
  <p className='text-sm text-blue-600'>Are you Already a user? <Link className='underline ms-5' to={'/login'} >Login</Link></p>
  :
  <p className='text-sm text-blue-600'>Are you a New User? <Link className='underline ms-5' to={'/register'}>Register</Link></p>
 }


      </form>
     </div>
    </div>
  </div>
    </>
  )
}

export default Auth
