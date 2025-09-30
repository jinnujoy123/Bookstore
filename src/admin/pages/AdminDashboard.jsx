import React from 'react'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

function AdminDashboard() {
  return (
 <div>
     <AdminHeader/>
     <div className="md:grid grid-cols-5">
      <div className="col-span-1 ">
          <AdminSidebar/>
      </div>
        <div className="col-span-4 p-10">
         <div className="md:grid grid-cols-3">
          <div className="md:px-5">
            <div className="bg-blue-900 p-4 flex items-center text-5xl rounded text-white my-5 md:my-0">
            <FontAwesomeIcon icon={faBook}/>
            <div className="text-center ms-10 md:ms-0">
              <h1 className="text-xl">Total Number of Books</h1>
              <h3 className="text-4xl">100+</h3>
            </div>
            </div>
          </div>
           <div className="md:px-5">
            <div className="bg-green-900 p-4 flex items-center text-5xl rounded text-white my-5 md:my-0">
            <FontAwesomeIcon icon={faUsers}/>
            <div className="text-center ms-10 md:ms-0">
              <h1 className="text-xl">Total Number of Users</h1>
              <h3 className="text-4xl">100+</h3>
            </div>
            </div>
          </div>
           <div className="md:px-5">
            <div className="bg-yellow-900 p-4 flex items-center text-5xl rounded text-white my-5 md:my-0">
            <FontAwesomeIcon icon={faUser}/>
            <div className="text-center ms-10 md:ms-0">
              <h1 className="text-xl">Total Number of Employees</h1>
              <h3 className="text-4xl">100+</h3>
            </div>
            </div>
          </div>
         </div>
         <div className="md:grid grid-cols-2 p-5 my-5">
              <div className="">bar chart</div>
              <div className="">pie chart</div>
         </div>
        </div>


     </div>
     <Footer/>
    </div>
  )
}

export default AdminDashboard

