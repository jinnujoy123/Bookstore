import { faHome, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import SERVERURL from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'
import { updateUserProfileAPI } from '../../services/allAPI'
import { userUpdateContext } from '../../contextAPI/ContextShare'

function Edit() {
    const [offCanvasStatus,setOffCanvasStatus]=useState(false)
     const [userDetails,setUserDetails]=useState({username:"",password: "",cpassword:"",bio:"",profile:""})
    const [token,setToken]=useState("")
    const [existingProfile,setExistingProfile]=useState("")
    const [preview,setPreview]=useState("")
    const {setUserEditResponse}=useContext(userUpdateContext)
     useEffect(()=>{
        if(sessionStorage.getItem("token")){
            const userToken=sessionStorage.getItem("token")
            setToken(userToken)
            const user=JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
            setExistingProfile(user.profile)
        }
     },[])

     const handlePictureUpload=(e)=>{
        console.log(e.target.files);        
        setUserDetails({...userDetails,profile:e.target.files[0]})
        const url=URL.createObjectURL(e.target.files[0])
        setPreview(url)
     }
     const handleReset=()=>{
        const user=JSON.parse(sessionStorage.getItem("user")) 
        setUserDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
        setExistingProfile(user.profile)
        setPreview("")
     }
     const handleUpdate=async()=>{
        const {username,password,bio,role,cpassword,profile}=userDetails               
        if(!username||!password||!cpassword||!bio){
            toast.info("Please fill the form completely")
        }else{
            if(password!=cpassword){
                toast.warning("Password & confirm password doesn't match")
            }else{
                const reqHeader={
                    "Authorization":`Bearer ${token}`
                }
                const reqBody=new FormData()
                if(preview){
                    for(let key in userDetails){
                        reqBody.append(key,userDetails[key])
                    }
                    const result=await updateUserProfileAPI(reqBody,reqHeader)
                    if(result.status==200){
                        // toast.success("Profile updation completed")
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        handleReset()
                        setOffCanvasStatus(false)
                        setUserEditResponse(userUpdateContext)
                    }else{
                        toast.error("Something went wrong")
                        console.log(result);
                        
                    }
                }else{
                    const result=await updateUserProfileAPI({username,password,cpassword,bio,profile:existingProfile},reqHeader)
                    if(result.status==200){
                        toast.success("Profile updation completed")
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        handleReset()
                        setOffCanvasStatus(false)
                    }else{
                        toast.error("Something went wrong")
                        console.log(result);
                        
                    }
                }

            }
        }
     }
  return (
    <div>
      <button className='text-blue-600 border border-blue-600 rounded p-3 hover:text-white hover:bg-blue-600' onClick={()=>setOffCanvasStatus(true)}>
    <FontAwesomeIcon icon={faPenToSquare} />Edit
      </button>
      {/* off canvas */}
     {offCanvasStatus && 
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity w-full h-full">
      <div className="bg-white h-full w-90 z-50 top-0 left-0">
                <div className="bg-gray-900 px-3 py-4 flex justify-between text-white text-2xl">
     
         <h1>Edit User Profile</h1>
         <FontAwesomeIcon icon={faXmark}  onClick={()=>setOffCanvasStatus(false)} />
                </div>
                <div className="flex justify-center items-center flex-col my-5">
                    <label htmlFor="profilePic">

                    <input  type="file" onChange={e=>handlePictureUpload(e)} id='profilePic' style={{display:'none'}}/>
                    {
                        existingProfile==""?
                    <img className='z-52' src={preview?preview:"https://www.pngall.com/wp-content/uploads/17/User-Icon-Circle-Identity-Icon-PNG-thumb.png"} alt="profile" style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                    : existingProfile.startsWith("https://lh3.googleusercontent.com/")?
                    <img className='z-52' src={preview?preview:existingProfile} alt="profile"  style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                    :
                    <img className='z-52' src={preview?preview:`${SERVERURL}/uploads/${existingProfile}`} alt="profile"  style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                    }
                    <button className='bg-yellow-300 z-53 fixed text-white py-3 px-4 rounded' style={{marginTop:'-20px',marginLeft:'75px'}}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    </label>
                    <div className="mt-10 mb-3 w-full px-5">
                        <input type="text" value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} placeholder='Username' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded'/>
                    </div>
                    <div className=" mb-3 w-full px-5">
                        <input type="text" value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})}placeholder='Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded'/>
                    </div>
                    <div className=" mb-3 w-full px-5">
                        <input type="text" value={userDetails.cpassword} onChange={e=>setUserDetails({...userDetails,cpassword:e.target.value})}placeholder='Confirm Password' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded'/>
                    </div>
                    <div className=" mb-3 w-full px-5">
                        <input type="text" value={userDetails.bio} onChange={e=>setUserDetails({...userDetails,bio:e.target.value})}placeholder='Bio' className='w-full border border-gray-300 placeholder-gray-200 p-2 rounded'/>
                    </div>
                    <div className="flex justify-end w-full px-5 mt-7">
                        <button onClick={handleReset} className='bg-amber-600 text-white rounded border py-3 px-4 hover:text-amber-600 hover:border-amber-600 hover:bg-white '>Reset</button>
                        <button onClick={handleUpdate} className='bg-green-600 text-white rounded border py-3 px-4 hover:text-green-600 hover:border-green-600 hover:bg-white '>Update</button>
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

export default Edit
