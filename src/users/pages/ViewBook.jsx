import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { getSingleBookAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'


function ViewBook() {
  const [modalStatus,setModalStatus]=useState(false)
  const [book,setBook]=useState({})
  const {id} = useParams()

  useEffect(()=>{
      viewBookDetails()
  },[])


  

const viewBookDetails = async ()=>{
  const token = sessionStorage.getItem("token")
  if(token){
    const reqHeader={
      "Authorization":`Bearer ${token}`
    }
    try{
        const result=await getSingleBookAPI(id,reqHeader)
        if(result.status==200){
          setBook(result.data)
          console.log(result.data);
          
        }else if(result.response.status==401){
          toast.warning(result.response.data)
        }
    }catch(err){
      console.log(err);
      
    }
  }
}
console.log(book);

  return (
    <div>
      <Header></Header>
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
              <div className="col-span-1">
                <img className='w-full' src={book.imageUrl} alt="" />
              </div>
              <div className="col-span-3">
                <div className="flex justify-between my-5">
                  <h1 className='text-xl font-bold'>{book.title}</h1>
                  <button onClick={()=>setModalStatus(!modalStatus)} className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
                  </div>
                  <p className='my-3 text-blue-700'>- {book.author}</p>
                  <div className="md:grid grid-cols-3 gap-5 my-10">
                      <p className='font-bold'>Publisher : {book.publisher}</p>
                       <p className='font-bold'>Language : {book.language}</p>
                       <p className='font-bold'>Category : {book.category}</p>
                        <p className='font-bold'>No. of pages : {book.noOfPages}</p>
                         <p className='font-bold'>Seller Mail : {book.userMail}</p>
                          <p className='font-bold'>Real Price : {book.price}</p>
                           <p className='font-bold'>ISBN : {book.isbn}</p>
                </div>
                <p className="font-lightbold text-lg">{book.abstract}..</p>
              </div>
          </div>
              <div className="flex justify-end my-5">
                <Link to={'/all-books'} className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} />Back</Link>
                <Link className='bg-blue-900 ms-5 text-white p-2 rounded '>Buy at $ {book.discountPrice}</Link>
              </div>
        </div>
      </div>
      {/* modal */}
{
  modalStatus &&
      <div className="relative z-10" onClick={()=>setModalStatus(false)}>
          <div className="bg-gray-500/75 fixed inset-0 ">
          <div className="flex justify-center items-center md:min-h-screen rounded">

  <div className="bg-white rounded md:w-250 w-100" >
    <div className="flex justify-between bg-black text-white p-3 rounded-t">
      <h3>Books Images</h3>
      <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark} />
    </div>

    <p className="text-blue-600 my-5 ml-5">
      <FontAwesomeIcon  icon={faCamera} className='me-2'/>
      Camera click of the book in the hand of seller
    </p>

<div className="md:flex flex-wrap my-4 justify-center">
  {/* duplicate images */}
 {
  book?.uploadImg?.length>0?
  book?.uploadImg?.map(img=>(
     <img src={`${SERVERURL}/uploads/${img}`} alt="book images" width={'250px'} height={'250px'} className='mx-2 my-3' />
  ))
  :
  <p>User uploaded book images are unavailable</p>
 }
   
</div>
</div>
          </div>
          </div>
      </div>
}
      <Footer></Footer>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </div>
  )
}

export default ViewBook
