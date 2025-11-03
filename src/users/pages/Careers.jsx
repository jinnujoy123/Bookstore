import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/Footer'
import { addApplicationAPI, getAllJobsAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'

function Careers() {
  const [modalStatus,setModalStatus]=useState(false)
const [jobTitle,setJobTitle]=useState('')
const [jobId,setJobId]=useState('')
   const [allJobs,setAllJobs]=useState([])
   const [searchKey,setSearchKey]=useState("")
  const [ApplicationDetails,setApplicationDetails]=useState({
    fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
  })
  const [fileKey,setFileKey]=useState(Date.now())
  const navigate=useNavigate()
   console.log(ApplicationDetails);

   useEffect(()=>{
    getAllJobs()
    },[searchKey])

    const handleApplyJob=(job)=>{
      setJobId(job._id)
      setJobTitle(job.title)
      setModalStatus(true)
    }

    const handleSubmitApplication=async()=>{
 const token=sessionStorage.getItem("token")
const {fullname,email,qualification,phone,coverLetter,resume}=ApplicationDetails
if (!token){
  toast.info("Please login to appluy job!!!")
  setTimeout(()=>{
    navigate('/login')
  },2000)
}else if(!fullname || !email || !qualification || !phone || !coverLetter || !resume){
  toast.info("Please fill the form completely!!")
}else{
  const reqHeader={
          "Authorization":`Bearer ${token}`
        }
        const reqBody=new FormData()
        for (let key in ApplicationDetails){
          reqBody.append(key,ApplicationDetails[key])
        }
        reqBody.append("jobTitle",jobTitle)
        reqBody.append("jobId",jobId)
        const result=await addApplicationAPI(reqBody,reqHeader)
        if(result.status==200){
          toast.success("Application submitted successfully")
          handleReset()
          setModalStatus(false)
        }else if(result.status==409){
          toast.warning(result.response.data)
        }else{
          toast.error("Something went wrong!!!")
        }
}

    }

    const handleReset=()=>{
      setApplicationDetails({
    fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
  })
 setFileKey(Date.now())
    }
  
  const getAllJobs=async()=>{
         try{
  const result=await getAllJobsAPI(searchKey)
  if(result.status==200){  
    setAllJobs(result.data)
  }
      }catch(err){
      console.log(err);        
      }
    }
  
  return (
    <div>
      <Header/>
      <div className="md:px-40 p-5">
        <div className="text-center">
          <h1 className="text-3xl py-5 font-bold">Careers</h1>
                 <p className='px-20 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem cupiditate doloribus, ratione maiores sit in nemo deleniti quod, delectus, odio quam iste voluptatibus harum repellat tempore deserunt! Nulla, labore temporibus?</p>
        </div>
       <h1 className='text-start font-bold text-2xl py-3'>Current Openings</h1>
       <div className="flex justify-center items-center">
        <input onChange={e=>setSearchKey(e.target.value)}  type="text" placeholder='Job Title' className='placeholder-gray-300 p-2 shadow'/>
        <button  className='bg-green-900 text-white p-2'>Search</button>
       </div>
       {/* duplicate */}

        {
           allJobs?.length>0 ?
           allJobs?.map(job=>(
       <div key={job._id} className="border border-gray-200 shadow p-5 my-5">
             <div className="flex mb-5">
               <div className="w-full">
                 <h1 className='text-xl font-bold'>{job.title}</h1>
                 <hr />
               </div>
              <button onClick={()=>handleApplyJob(job)} className='bg-blue-900 text-white p-2 w-25'>
         Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button>
             </div>
             <p className="text-lg text-blue-900 my-2"><FontAwesomeIcon icon={faLocationDot} />Kochi</p>
              <p className="text-lg my-2">Job Type : {job.jobType}</p>
              <p className="text-lg my-2">Salary: {job.salary}</p>
               <p className="text-lg my-2">Qualification : {job.qualification}</p>
                <p className="text-lg my-2">Experience : {job.experience}</p>
                 <p className="text-lg my-2 text-justify">Description: {job.description}</p>
         
         </div>
           )):
           <div className="py-10 text-red-700 text-center">
             <p>No job openings1!!!</p>
           </div>
         }

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
              <input type="text" value={ApplicationDetails?.fullname} onChange={e=>setApplicationDetails({...ApplicationDetails,fullname:e.target.value})} name="" id="" placeholder='Full Name' className='p-2 border rounded placeholder-text-gray-400 text-black w-full '/>
            </div>
            <div className="mb-3">
              <input type="text" value={ApplicationDetails?.qualification} onChange={e=>setApplicationDetails({...ApplicationDetails,qualification:e.target.value})}  name="" id="" placeholder='Qualification' className='p-2 border rounded placeholder-text-gray-400 text-black w-full'/>
            </div>
            <div className="mb-3">
              <input type="text" value={ApplicationDetails?.email} onChange={e=>setApplicationDetails({...ApplicationDetails,email:e.target.value})} name="" id="" placeholder='Email ID' className='p-2 border rounded placeholder-text-gray-400 text-black w-full '/>
            </div>
            <div className="mb-3">
              <input type="text" value={ApplicationDetails?.phone} onChange={e=>setApplicationDetails({...ApplicationDetails,phone:e.target.value})} name="" id="" placeholder='Phone' className='p-2 border rounded placeholder-text-gray-400 text-black w-full'/>
            </div>
            <div className="mb-3 col-span-2">
              <textarea placeholder='Cover Letter' value={ApplicationDetails?.coverLetter} onChange={e=>setApplicationDetails({...ApplicationDetails,coverLetter:e.target.value})}  className='p-2 border rounded placeholder-text-gray-400 text-black w-full'></textarea>
            </div>
            <div className="mb-3 col-span-2">
              <label htmlFor="">Resume</label>
              <input key={fileKey}  onChange={e=>setApplicationDetails({...ApplicationDetails,resume:e.target.files[0]})} type="file" className='p-2 border rounded  w-full file:bg-gray-400 file:p-2 file:text-white file:rounded'/>
            </div>
            </div>
            {/* modal footer */}
            <div className="w-full flex justify-end">
              <button onClick={handleReset} className='py-2 px-3 rounded bg-gray-600 text-white'>
                Reset
              </button>
               <button onClick={handleSubmitApplication} className='py-2 px-3 rounded bg-blue-600 text-white ms-3'>
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

export default Careers
