import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'

function AdminResource() {
  const [booklistStatus,setBooklistStatus]=useState(true)
  const [userslist,setUserslist]=useState(false)
  return (
   <div>
     <AdminHeader/>
     <div className="md:grid grid-cols-5">
      <div className="col-span-1 ">
          <AdminSidebar/>
      </div>
        <div className="col-span-4 ">
        <div className="p-10">
          <h1 className="text-3xl text-center font-bold">All Collections</h1>
        </div>
        {/* tabs */}
        <div className="flex justify-center items-center my-5 font-bold">
        <p onClick={()=>{setBooklistStatus(true);setUserslist(false);}} className={booklistStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>Books</p>
        <p onClick={()=>{setUserslist(true);setBooklistStatus(false);}} className={userslist?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>Users</p>
       
      </div>
      {/* contents */}
      {booklistStatus &&
      <div className="md:grid grid-cols-4 w-full mt-5">

        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<p>$ 30</p>
          </div>
        </div>
<div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="/public/book.jpg" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<p>$ 30</p>
          </div>
        </div>
        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<p>$ 30</p>
          </div>
        </div>
        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="/public/book.jpg" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<p>$ 30</p>
          </div>
        </div>
      </div>
      
      }

      {/* users */}
      {userslist &&
      <div className="md:grid grid-cols-3  w-full mt-5">

        <div className="p-3 shadow rounded mx-4 my-2 bg-gray-200">
          <p className='text-red-700 font-bold text-lg'>ID : 56780977865457</p>
          <div className="flex justify-center items-center mt-3">
            <img width={'70px'} height={'70px'} src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg" alt="user" style={{borderRadius:'50%'}}/>
            <div className="flex flex-col justify-center items-center text-lg ml-6 font-bold">
            <p className='text-blue-900'>Username</p>
              <p>email</p>
            </div>
          </div>
        </div>
        <div className="p-3 shadow rounded mx-4 my-2 bg-gray-200">
          <p className='text-red-700 font-bold text-lg'>ID : 56780977865457</p>
          <div className="flex justify-center items-center mt-3">
            <img width={'70px'} height={'70px'} src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg" alt="user" style={{borderRadius:'50%'}}/>
            <div className="flex flex-col text-lg ml-6 font-bold">
            <p className='text-blue-900'>Username</p>
              <p>email</p>
            </div>
          </div>
        </div>
        <div className="p-3 shadow rounded mx-4 my-2 bg-gray-200">
          <p className='text-red-700 font-bold text-lg'>ID : 56780977865457</p>
          <div className="flex justify-center items-center mt-3">
            <img width={'70px'} height={'70px'} src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg" alt="user" style={{borderRadius:'50%'}}/>
            <div className="flex flex-col font-bold text-lg ml-6">
             <p className='text-blue-900'>Username</p>
              <p>email</p>
            </div>
          </div>
        </div>

        
      </div>
      
      }
        </div>


     </div>
     <Footer/>
    </div>
  )
}

export default AdminResource
