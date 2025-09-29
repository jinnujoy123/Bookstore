import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { faPen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function AdminSettings() {
  return (
    <div>
     <AdminHeader/>
     <div className="md:grid grid-cols-5">
      <div className="col-span-1 bg-blue-100">
          <AdminSidebar/>
      </div>
        <div className="col-span-4 ">
          <h1 className="text-3xl font-bold text-center py-8">Settings</h1>
         <div className="md:grid grid-cols-2">
           <div className="p-8 text-justify">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui asperiores cum, beatae officia, quod voluptas vitae ut amet ratione minima similique impedit nostrum laudantium eveniet sint atque exercitationem eligendi? <br /><br />
            Explicabo sint deserunt quia assumenda, itaque voluptates praesentium modi dolor et quos sapiente ut commodi odit asperiores quae minima suscipit illo alias labore rerum. Illum quis voluptatibus animi quam similique.
            Tempora eos consequatur non quas, ex debitis sapiente est odio praesentium optio, accusamus dolorum cupiditate quidem a exercitationem illum quibusdam ipsam perferendis totam commodi natus laudantium voluptatibus alias! Nesciunt, est!
                   </p>
           </div>
           <div className="px-10 py-8">
             
           <div className='rounded bg-blue-100 p-5 flex flex-col justify-center items-center '>
                       <div className="">
                         <input type="file" id='adminPic' className='hidden'/>
                         <label htmlFor="adminPic" >
                         <img src='https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg' style={{width:'200px',height:'200px',borderRadius:'50%'}} alt='admin profile' />
                          <FontAwesomeIcon icon={faPen} style={{marginLeft:'140px',marginTop:'-100px'}} className="bg-yellow-400 p-1"/>
                         </label>
                       </div>

                     <div className="my-3 ">
                       <input type="text" placeholder='Username' className='bg-white placeholder-gray-200 rounded p-2 w-full mt-3 '/>
                       <input type="text" placeholder='Password' className='bg-white placeholder-gray-200 rounded p-2 mt-3 w-full'/>
                       <input type="text" placeholder='Confirm Password' className='bg-white placeholder-gray-200 rounded p-2 mt-3 w-full'/>
                                        <div className="flex my-5">
                                     <Link className='rounded p-3 bg-yellow-400 text-white me-2 w-full text-center'>Reset</Link>
                                     <Link className='rounded p-3 bg-green-800 text-white text-center w-full'>Update</Link>
                                        </div>
                     </div>
            
           </div>
           </div>
         </div>
        </div>


     </div>
     <Footer/>
    </div>
  )
}

export default AdminSettings
