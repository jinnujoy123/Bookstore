import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'


function Header() {
  const [listStatus, setListStatus] = useState(false);
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
<div className="md:flex  items-center justify-end hidden ">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faXTwitter} />
        {/* login link */}
        <Link  to={'/login'}> <button  className='border border-black px-3 ms-3 rounded hover:text-white hover:bg-black'><FontAwesomeIcon icon={faUser} />Login</button></Link>
      </div>
    </div>
    <nav className='w-full p-3 bg-black text-white'>
      {/* menubar and login */}
      <div className="flex justify-between items-center md:hidden text-2xl">
        <button onClick={()=>setListStatus(!listStatus)}><FontAwesomeIcon icon={faBars} /></button>
         <Link  to={'/login'}> <button  className='border border-black px-3 ms-3 rounded hover:text-white hover:bg-black'><FontAwesomeIcon icon={faUser} />Login</button></Link>
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
