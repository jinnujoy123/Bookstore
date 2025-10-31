import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { addJobAPI } from '../../services/allAPI'
import { jobContext } from '../../contextAPI/ContextShare'

function AddJob() {
     const [modalStatus,setModalStatus]=useState(false)
     const [newJob,setNewJob]=useState({title:"",location:"",jobType:"",salary:"",qualification:"",experience:"",description:""})
const {addJobResponse,setAddJobResponse}=useContext(jobContext)
     const handleReset=()=>{
      setNewJob({title:"",location:"",jobType:"",salary:"",qualification:"",experience:"",description:""})
     }

     const handleAddJob=async()=>{
      const token=(sessionStorage.getItem("token"))
      const {title,location,jobType,salary,qualification,experience,description}=newJob
      if(!title || !location || !jobType || !salary || !qualification || !experience || !description){
        toast.info("Please complete the form!!!")
      }else if (token){
        const reqHeader={
      "Authorization": `Bearer ${token}`
       }
       try{
         const result=await addJobAPI(newJob,reqHeader)
        if(result.status==200){
          toast.success("Job added successfully!!!")
          setAddJobResponse(result.data)
          handleReset()
          setModalStatus(false)
        }else if(result.status==409){
          toast.warning(result.response.data)
          handleReset()
        }else{
          toast.error("Something went wrong!!!")
        }
     }catch(err){
       console.log((err));
       toast.warning("Something went wrong!!!")
      }
     }
    }

  return (
    <div>
      <button className='bg-blue-600 text-white border border-blue-600 rounded py-2 px-4 hover:bg-white hover:text-blue-600' onClick={()=>setModalStatus(true)}><FontAwesomeIcon  icon={faPlus} />
   Add Jobs
      </button>
      {
  modalStatus &&
      <div className="relative z-10" >
          <div className="bg-gray-500/75 fixed inset-0 ">
          <div className="flex justify-center items-center md:min-h-screen rounded">

  <div className="bg-white rounded w-100" >
    <div className="flex justify-between bg-black text-white p-3 rounded-t">
      <h3>Job Details
      </h3>
      <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark} />
    </div>

     <div className="bg-gray-200 p-8">
               <div className="mb-3">
                  <input value={newJob.title} onChange={e=>setNewJob({...newJob,title:e.target.value})} type="text" name="" id="" placeholder='Job Title' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                </div>
                <div className="mb-3">
                  <input  value={newJob.location} onChange={e=>setNewJob({...newJob,location:e.target.value})}  type="text" name="" id="" placeholder='Location' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                 </div>
                <div className="mb-3">
                  <input value={newJob.jobType} onChange={e=>setNewJob({...newJob,jobType:e.target.value})}  type="text" name="" id="" placeholder='Job Type' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                </div>
                <div className="mb-3">
                  <input value={newJob.salary} onChange={e=>setNewJob({...newJob,salary:e.target.value})}  type="text" name="" id="" placeholder='Salary' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                </div>
                 <div className="mb-3">
                  <input value={newJob.qualification} onChange={e=>setNewJob({...newJob,qualification:e.target.value})}  type="text" name="" id="" placeholder='Qualification' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                </div>
                <div className="mb-3">
                  <input value={newJob.experience} onChange={e=>setNewJob({...newJob,experience:e.target.value})}  type="text" name="" id="" placeholder='Experience' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                </div>
                <div className="mb-3">
                  <textarea value={newJob.description} onChange={e=>setNewJob({...newJob,description:e.target.value})}  rows={3} cols={5} type="text" name="" id="" placeholder='Description' className='p-1 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                </div>
                <div className="p-3 w-full flex md:justify-end">
                 <button onClick={handleReset} className='py-2 px-3 rounded bg-yellow-600 text-white'>
                Reset
              </button>
               <button  onClick={handleAddJob} className='py-2 px-3 rounded bg-green-600 text-white ms-3'>
                Submit
              </button>
              </div>
     </div>


</div>
          </div>
          </div>
      </div>
}
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

export default AddJob
