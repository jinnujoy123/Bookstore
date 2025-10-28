import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import SERVERURL from '../../services/serverURL'
import { userUpdateContext } from '../../contextAPI/ContextShare'


function Header() {
  const [listStatus, setListStatus] = useState(false);
  const [token,SetToken] =useState("")
  const [userDp,setUserDp]=useState("")
  const [dropDownStatus,setDropDownStatus]=useState(false)
   const {userEditResponse}=useContext(userUpdateContext)
  const navigate=useNavigate()

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const token=sessionStorage.getItem("token")
      SetToken(token)
      const user=JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile) 
      // console.log(user.profile);
      
           
    }
  },[token,userEditResponse])
console.log(userDp);

  const logout=()=>{
    sessionStorage.clear()
    SetToken("")
    setDropDownStatus(false)
    setUserDp(false)
    navigate('/')
  }

  return (
    <>
    <div className="grid grid-cols-3 p-3">
   <div className="flex items-center">
    <img src="/public/logo.png" alt="logo" width={'50px'} height={'50px'}/>
    <h1 className='text-lg whitespace-nowrap font-bold ms-2 md:hidden'>BOOK STORE</h1>
   </div>
   {/* title */}
<div className="md:flex justify-center items-center hidden">
        <h1 className='text-3xl font-bold'>BOOK STORE</h1>
</div>

{/* login */}
<div className="md:flex  items-center justify-end hidden text-xl">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faXTwitter} />
        {/* login link */}
         {
          !token ?
           <Link  to={'/login'}> <button  className='border border-black px-3 ms-3 rounded hover:text-white hover:bg-black'><FontAwesomeIcon icon={faUser} />Login</button></Link>
           :
           <div className="relative inline-block text-left">
           
              <button onClick={()=>setDropDownStatus(!dropDownStatus)} className="w-full bg-white px-3 py-2  shadow-xs hover:bg-gray-50">
                <img width={'40px'} height={'40px'} className='mx-2' style={{borderRadius:'50%'}} src={userDp==""?"https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png":userDp.startsWith("https://lh3.googleusercontent.com/")?userDp: `${SERVERURL}/uploads/${userDp}`} alt="" /></button>
           
              {
                dropDownStatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline:hidden">
                <div className="py-1">
                  <Link to={'/profile'} className='block px-4 py-2 text-sm text-gray-700'><p><FontAwesomeIcon icon={faAddressCard} className='me-2'/>Profile</p>
                  </Link>
                  <button onClick={logout} className='block px-4 py-2 text-sm text-gray-700 '><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button>
                </div>
              </div>
              }
           </div>
        }
      </div>
    </div>
    <nav className='w-full p-3 bg-black text-white'>
      {/* menubar and login */}
      <div className="flex justify-between items-center md:hidden text-2xl">
        <button onClick={()=>setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>

        {
          !token ?
           <Link  to={'/login'}> <button  className='border border-black px-3 ms-3 rounded hover:text-white hover:bg-black'><FontAwesomeIcon icon={faUser} />Login</button></Link>
           :
           <div className="">
            <button onClick={()=>setDropDownStatus(!dropDownStatus)} className="w-full  px-3 py-2  shadow-xs hover:bg-gray-50">
                <img width={'40px'} height={'40px'} className='mx-2' style={{borderRadius:'50%'}} src={userDp==""?"https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png":userDp.startsWith("https://lh3.googleusercontent.com/")?userDp: "https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png"} alt="" /></button>
           
              {
                dropDownStatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5 focus:outline:hidden">
                <div className="py-1">
                  <Link to={'/profile'} className='block px-4 py-2 text-sm text-gray-700'><p><FontAwesomeIcon icon={faAddressCard} className='me-2'/>Profile</p>
                  </Link>
                  <button onClick={logout} className='block px-4 py-2 text-sm text-gray-700 '><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button>
                </div>
              </div>
              }
           </div>
        }

      </div>

      <ul className={listStatus?"flex flex-col": "md:flex justify-center items-center hidden"}>
              <li  className="mx-4 mt-3 md:mt-0">
                <Link to="/" >HOME</Link>
              </li>
              <li  className="mx-4 mt-3 md:mt-0">
                <Link to="/all-books" >BOOKS</Link>
              </li>
              <li className="mx-4 mt-3 md:mt-0">
                <Link to="/careers" >CAREERS</Link>
              </li>
              <li className='mx-4 mt-3 md:mt-0'>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
    </nav>
    </>
  )
}

export default Header
