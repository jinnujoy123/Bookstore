import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { getAllUsersAPI, listbooksAPI, updateBookStatusAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


function AdminResource() {
  const [booklistStatus,setBooklistStatus]=useState(true)
  const [usersListStatus,setUsersListStatus]=useState(false)
  const [allUsers,setAllUsers]=useState([])
  const [userBooks,setUserBooks]=useState([])
  const [updateBookStatus,setUpdateBookStatus]=useState({})

  useEffect(()=>{
      if(sessionStorage.getItem("token")){
        const token=sessionStorage.getItem("token")
        if(booklistStatus==true){
            getAllBooksAdmin(token)
            console.log(userBooks);
            
        }else if(usersListStatus==true){
          getAllUsers(token)
          console.log(allUsers);
          
        }else{
          console.log("Something went wrong");
          
        }
      }
  },[usersListStatus,updateBookStatus])

  const getAllUsers=async(userToken)=>{
    const reqHeader={
              "Authorization":`Bearer ${userToken}`
            }
            try{
              const result=await getAllUsersAPI(reqHeader)
              // console.log(result.data);
              
              if(result.status==200){
                setAllUsers(result.data)
              }else{
                console.log(result);
                
              }
            }catch(err){
              console.log(err);
              
            }
  }

  const getAllBooksAdmin=async(userToken)=>{
    const reqHeader={
              "Authorization":`Bearer ${userToken}`
            }
            try{
              const result=await listbooksAPI(reqHeader)
              // console.log(result);
              
              if(result.status==200){
                setUserBooks(result.data)
              }else{
                console.log(result);
                
              }
            }catch(err){
              console.log(err);
              
            }
  }

  const approveBook = async(book)=>{
     const userToken=sessionStorage.getItem("token")
     const reqHeader={
      "Authorization":`Bearer ${userToken}`
    }
   try{
      const result=await updateBookStatusAPI(book,reqHeader)
      // console.log(result.data);
      
      if(result.status==200){
      setUpdateBookStatus(result.data)
      }
   }catch(err){
      console.log(err);
      
   }
   
  
  }

  
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
        <p onClick={()=>{setBooklistStatus(true);setUsersListStatus(false);}} className={booklistStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>Books</p>
        <p onClick={()=>{setUsersListStatus(true);setBooklistStatus(false);}} className={usersListStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>Users</p>
       
      </div>
      {/* contents */}
      {booklistStatus &&
      <div className="md:grid grid-cols-4 gap-4 w-full my-10">

      {
        userBooks?.length>0 ?
        userBooks?.map((book)=>(
            <div 
  key={book?._id} 
  className="p-3 shadow rounded mx-4 flex flex-col justify-between h-100 "
>
  <div className="flex flex-col items-center">
    <img 
      src={book?.imageUrl} 
      alt="book" 
      className="w-full h-40 object-contain rounded"
    />
    <div className="flex flex-col justify-center items-center mt-2">
      <p className='pt-3 italic'>{book?.title}</p>
      <p className="pt-3 text-blue-700 font-bold text-lg">{book?.author}</p>
      <p className='pt-3 text-red-600'>$ {book?.discountPrice}</p>
    </div>
  </div>

 {
  book?.status=='pending' &&
 <button onClick={()=>approveBook(book)} className="bg-green-700 p-3 my-3 text-white font-bold rounded ">
    Approve
  </button>
}
{
  book?.status=='approved' &&
  <div className="flex justify-end items-center w-full pb-4">
    <FontAwesomeIcon icon={faCircleCheck} className='text-blue-600 text-3xl'/>
  </div>
}
</div>

        ))
        :
        <div className="">
          No Books
        </div>
      }

      </div>
      
      }

      {/* users */}
      {usersListStatus &&
      <div className="md:grid grid-cols-3 gap-4  w-full mt-5 px-3">

        {/* duplicate card */}
        
          {
            allUsers?.length>0 ?
            allUsers?.map((user,index)=>(
              <div key={index} className="p-3 shadow rounded m-4 bg-gray-200">
          <p className='text-red-700 text-md'>ID : {user?._id}</p>
          <div className="flex justify-center items-center mt-3">
            <img width={'50px'} height={'50px'}  src={user?.profile==""?"https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png":user?.profile.startsWith("https://lh3.googleusercontent.com/")?user?.profile: `${SERVERURL}/uploads/${user?.profile}`} alt="user" style={{borderRadius:'50%'}}/>
            <div className="flex flex-col justify-center items-center text-lg ml-6 font-bold">
            <p className="text-blue-900">{user?.username}</p>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
            ))
            :
            <div className="">No Users</div>
          }
        
      </div>
      
      }
        </div>


     </div>
     <Footer/>
    </div>
  )
}

export default AdminResource
