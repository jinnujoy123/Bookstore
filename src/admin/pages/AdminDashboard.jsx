import React from 'react'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'

function AdminDashboard() {
  return (
 <div>
     <AdminHeader/>
     <div className="md:grid grid-cols-5">
      <div className="col-span-1 ">
          <AdminSidebar/>
      </div>
        <div className="col-span-4 ">
          Dashboard
        </div>


     </div>
     <Footer/>
    </div>
  )
}

export default AdminDashboard

