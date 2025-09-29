import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


function ViewBook() {
  const [modalStatus,setModalStatus]=useState(false)
  return (
    <div>
      <Header></Header>
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
              <div className="col-span-1">
                <img className='w-full' src="/public/book.jpg" alt="" />
              </div>
              <div className="col-span-3">
                <div className="flex justify-between my-5">
                  <h1 className='text-xl font-bold'>Title</h1>
                  <button onClick={()=>setModalStatus(!modalStatus)} className='text-gray-400'><FontAwesomeIcon icon={faEye} /></button>
                  </div>
                  <p className='my-3 text-blue-700'>- Author</p>
                  <div className="md:grid grid-cols-3 gap-5 my-10">
                      <p className='font-bold'>Publisher : demo</p>
                       <p className='font-bold'>Language : demo</p>
                        <p className='font-bold'>No. of pages : demo</p>
                         <p className='font-bold'>Seller Mail : demo</p>
                          <p className='font-bold'>Real Price : demo</p>
                           <p className='font-bold'>ISBN : demo</p>
                </div>
                <p className="font-bold text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque officia aspernatur cupiditate neque nostrum modi aliquam molestias aperiam placeat eum. Sunt, sed? Quo aliquid aspernatur, voluptatum adipisci est ipsa labore.
                Tenetur sapiente nesciunt nemo</p>
              </div>
          </div>
              <div className="flex justify-end">
                <Link to={'/all-books'} className='bg-blue-900 text-white p-2 rounded'><FontAwesomeIcon icon={faBackward} />Back</Link>
                <Link className='bg-blue-900 ms-5 text-white p-2 rounded'>Buy $ 123</Link>
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
  <img src="https://img.freepik.com/free-photo/close-up-woman-holding-book-hand_23-2147909853.jpg" alt="" width={'250px'} height={'250px'} className='mx-2 my-3'/>
   <img src="https://images.pexels.com/photos/19355480/pexels-photo-19355480/free-photo-of-rustic-books-and-autumn-leaf-composition.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={'250px'} height={'250px'} className='mx-2 my-3'/>
    <img src="https://images.pexels.com/photos/17750871/pexels-photo-17750871/free-photo-of-hand-touching-a-book.jpeg" alt="" width={'250px'} height={'250px'} className='mx-2 my-3'/>
</div>
</div>
          </div>
          </div>
      </div>
}
      <Footer></Footer>
    </div>
  )
}

export default ViewBook
