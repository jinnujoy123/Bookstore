import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'

function AdminCareers() {
  const [joblistStatus,setJoblistStatus]=useState(true)
  const [listApplicationStatus,setListApllicationStatus]=useState(false)
  return (
   <div>
     <AdminHeader/>
     <div className="md:grid grid-cols-5">
      <div className="col-span-1 ">
          <AdminSidebar/>
      </div>
        <div className="col-span-4 p-10">
          <h1 className='text-3xl text-center font-bold'>Careers</h1>
      
   {/* tabs */}
        <div className="flex justify-center items-center my-5 font-bold">
        <p onClick={()=>{setJoblistStatus(true);setListApllicationStatus(false);}} className={joblistStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>Job Posts</p>
        <p onClick={()=>{setListApllicationStatus(true);setJoblistStatus(false);}} className={listApplicationStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>View Applications</p>
       
        </div>

{/* contents */}
   {
    joblistStatus &&
<div className="">
  <div className="flex my-5 justify-between items-center">
     <div className="">
       <input type="text" placeholder='Search by Job Title' className='placeholder-gray-200 w-75 p-2 shadow'/>
            <button  className='bg-green-900 text-white p-2'><Link>Search</Link></button>
     </div>
      <button  className='bg-blue-900 text-white p-2'><Link>Add</Link></button>
  </div>
  <div className="border border-gray-200 shadow p-5 my-5">
      <div className="flex mb-5">
        <div className="w-full">
          <h1 className='text-xl font-bold'>Hr Assistant</h1>
          <hr />
        </div>
        <button className='bg-red-700 text-white p-2 w-25'>
           Delete<FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <p className="text-lg text-blue-900 my-2"><FontAwesomeIcon icon={faLocationDot} />Kochi</p>
       <p className="text-lg my-2">Job Type : full-time</p>
       <p className="text-lg my-2">Salary:20000-30000/month</p>
        <p className="text-lg my-2">Qualification</p>
         <p className="text-lg my-2">Experience : 1-2 yr</p>
          <p className="text-lg my-2">Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis voluptate vero blanditiis quaerat? Illo repellendus nostrum ullam, sapiente praesentium error nemo velit explicabo, blanditiis assumenda natus eaque tenetur illum!</p>
  
  </div>
</div>

   }
   {
    listApplicationStatus &&
    <div className="p-10 overflow-x-hidden font-bold">
<table className="w-full my-3 shadow">
  <thead>
    <tr>
      <th className="p-3 bg-blue-800 text-white border border-gray-500">Sl. No.</th>
      <th className="p-3 bg-blue-800 text-white border border-gray-500">Job title</th>
      <th className="p-3 bg-blue-800 text-white border border-gray-500">Name</th>
       <th className="p-3 bg-blue-800 text-white border border-gray-500">Qualification</th>
      <th className="p-3 bg-blue-800 text-white border border-gray-500">Email</th>
      <th className="p-3 bg-blue-800 text-white border border-gray-500">Phone</th>
      <th className="p-3 bg-blue-800 text-white border border-gray-500">Cover</th>
      <th className="p-3 bg-blue-800 text-white border border-gray-500">Resume</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td className="border border-gray-500 text-center p-3">
      1
    </td>
    <td className="border border-gray-500 text-center p-3">Front End Deeloper</td>
    <td className="border border-gray-500 text-center p-3">Max Miller</td>
    <td className="border border-gray-500 text-center p-3">BCA</td>
    <td className="border border-gray-500 text-center p-3">max@gmail.com</td>
    <td className="border border-gray-500 text-center p-3">9456789090</td>
    <td className="border border-gray-500 text-center p-3 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis pariatur voluptatem </td>
    <td className="border border-gray-500 text-center p-3"><Link className='text-blue-600 underline'>Resume</Link></td>
    </tr>
  </tbody>
</table>
    </div>

   }
     </div>
     </div>
     <Footer/>
    </div>
  )
}

export default AdminCareers
