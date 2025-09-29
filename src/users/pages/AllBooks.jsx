import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link} from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function AllBooks() {
  const [listStatus,setListStatus]= useState(false)
  return (
    <>
     <Header/>
     <>
     <div className="flex justify-center items-center flex-col my-5">
<h1 className='text-3xl font-bold'>Collections</h1>
<div className="flex my-5">
  <input type="text" className='p-2 shadow placeholder-gray-700' placeholder='Search by Title'/>
  <button className='bg-blue-900 text-white px-2'>Search</button>
</div>
     </div>
{/* grid */}

<div className="md:grid grid-cols-4 p-5 md:px-30">
  <div className="col-span-1 px-10">
    <div className="flex justify-between">
      <h1 className='text-2xl font-semibold py-3'>Filter</h1>
      <button onClick={()=>setListStatus(!listStatus)} className='text-2xl md:hidden'><FontAwesomeIcon icon={faBars} /></button>
    </div>
    <div className={listStatus?"block":'md:block hidden'}>

    <div className="">
      <div className="mt-3">
      <input type="radio" id='Literary Fiction' name='filter'/>
      <label className='ms-3' htmlFor="Literary Fiction">Literary Fiction</label>
      </div>
      <div className="mt-3">
      <input type="radio" id='Philosophy' name='filter'/>
      <label className='ms-3' htmlFor="Philosophy">Philosophy</label>
      </div>
      <div className="mt-3">
      <input type="radio" id='Romance' name='filter'/>
      <label className='ms-3' htmlFor="Romance">Romance</label>
      </div>
      <div className="mt-3">
      <input type="radio" id='Mystery/Thriller' name='filter'/>
      <label className='ms-3' htmlFor="Mystery/Thriller">Mystery/Thriller</label>
      </div>
      <div className="mt-3">
      <input type="radio" id='Politics' name='filter'/>
      <label className='ms-3' htmlFor="Politics">Politics</label>
      </div>
      <div className="mt-3">
      <input type="radio" id='Self-help' name='filter'/>
      <label className='ms-3' htmlFor="Self-help">Self-help</label>
      </div>
      <div className="mt-3">
      <input type="radio" id='Auto=biography' name='filter'/>
      <label className='ms-3' htmlFor="Auto-biography">Auto-biography</label>
      </div>
      <div className="mt-3">
      <input type="radio" id='Horror' name='filter'/>
      <label className='ms-3' htmlFor="Horror">Horror</label>
      </div>
      <div className="mt-3">
      <input type="radio" id='No-filter' name='filter'/>
      <label className='ms-3' htmlFor="No-filter">No-filter</label>
      </div>
    </div>
    </div>
   
  </div>
  <div className="col-span-3">
     <div className="md:grid grid-cols-4  mt-5">
        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<Link to={'/book/1/view'} className='bg-blue-800 text-white rounded px-2' >View Book</Link>
          </div>
        </div>
<div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<Link to={'/book/id/view'} className='bg-blue-800 text-white rounded px-2' >View Book</Link>
          </div>
        </div>
        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<Link to={'/book/id/view'} className='bg-blue-800 text-white rounded px-2' >View Book</Link>
          </div>
        </div>
        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<Link to={'/book/id/view'} className='bg-blue-800 text-white rounded px-2' >View Book</Link>
          </div>
        </div>
      </div>
  </div>
</div>
     </>
     <Footer/>
    </>
  )
}

export default AllBooks
