import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/Footer'

function Careers() {
  const [modalStatus,setModalStatus]=useState(false)
  return (
    <div>
      <Header/>
      <div className="md:px-40 p-5">
        <div className="text-center">
          <h1 className="text-3xl py-5 font-bold">Contacts</h1>
                 <p className='px-20 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem cupiditate doloribus, ratione maiores sit in nemo deleniti quod, delectus, odio quam iste voluptatibus harum repellat tempore deserunt! Nulla, labore temporibus?</p>
        </div>
       <h1 className='text-start font-bold text-2xl py-3'>Current Openings</h1>
       <div className="flex justify-center items-center">
        <input type="text" placeholder='Job Title' className='placeholder-gray-300 p-2 shadow'/>
        <button  className='bg-green-900 text-white p-2'><Link>Search</Link></button>
       </div>
       {/* duplicate */}
<div className="border border-gray-200 shadow p-5 my-5">
    <div className="flex mb-5">
      <div className="w-full">
        <h1 className='text-xl'>Hr Assistant</h1>
        <hr />
      </div>
      <button onClick={()=>setModalStatus(true)} className='bg-blue-900 text-white p-2 w-25'>
         Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button>
    </div>
    <p className="text-lg my-2"><FontAwesomeIcon icon={faLocationDot} />Kochi</p>
     <p className="text-lg my-2">Job Type : full-time</p> 
     <p className="text-lg my-2">Salary:20000-30000/month</p>
      <p className="text-lg my-2">Qualification</p>
       <p className="text-lg my-2">Experience : 1-2 yr</p>
        <p className="text-lg my-2">Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod asperiores incidunt iste praesentium autem. Perspiciatis eius temporibus vitae, provident aspernatur esse neque, rerum corrupti earum assumenda placeat, doloribus reiciendis iste.</p>
       
</div>
      </div>
            {/* modal */}
      {
        modalStatus &&
            <div className="relative z-10" >
                <div className="bg-gray-500/75 fixed inset-0 ">
                <div className="flex justify-center items-center md:min-h-screen rounded">
      
        <div className="bg-white rounded md:w-150 w-100" >
          <div className="flex justify-between items-center bg-black text-white p-3 rounded-t">
            <h3>Application Form</h3>
            <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark} />
          </div>
      
        <div className="relative p-5">
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-3">
              <input type="text" name="" id="" placeholder='Full Name' className='p-2 border rounded placeholder-text-gray-400 text-black w-full '/>
            </div>
            <div className="mb-3">
              <input type="text" name="" id="" placeholder='Qualification' className='p-2 border rounded placeholder-text-gray-400 text-black w-full'/>
            </div>
            <div className="mb-3">
              <input type="text" name="" id="" placeholder='Email ID' className='p-2 border rounded placeholder-text-gray-400 text-black w-full '/>
            </div>
            <div className="mb-3">
              <input type="text" name="" id="" placeholder='Phone' className='p-2 border rounded placeholder-text-gray-400 text-black w-full'/>
            </div>
            <div className="mb-3 col-span-2">
              <textarea placeholder='Cover Letter'  className='p-2 border rounded placeholder-text-gray-400 text-black w-full'></textarea>
            </div>
            <div className="mb-3 col-span-2">
              <label htmlFor="">Resume</label>
              <input type="file" className='p-2 border rounded  w-full file:bg-gray-400 file:p-2 file:text-white file:rounded'/>
            </div>
            </div>
            {/* modal footer */}
            <div className="w-full flex justify-end">
              <button className='py-2 px-3 rounded bg-gray-600 text-white'>
                Reset
              </button>
               <button className='py-2 px-3 rounded bg-blue-600 text-white ms-3'>
                Submit
              </button>
            </div>
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

export default Careers
