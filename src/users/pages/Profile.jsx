import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addBookAPI } from '../../services/allAPI'

function Profile() {
  const [sellBookStatus,setSellBookStatus]=useState(true)
   const [bookStatus,setBookStatus]=useState(false)
    const [purchaseStatus,setPurchaseStatus]=useState(false)
    const [bookDetails,setBookDetails]=useState({
      title:"",author:"",noOfPages:"",imageUrl:"",price:"",discountPrice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadImages:[]
    })


    // console.log(bookDetails);
const [preview,setPreview]=useState("")
const [previewList,setPreviewList]=useState([])
const [token,setToken]=useState("")

useEffect(()=>{
if (sessionStorage.getItem("token")){
  setToken(sessionStorage.getItem("token"))
}
},[])

const handleReset=()=>{
  setBookDetails({
      title:"",author:"",noOfPages:"",imageUrl:"",price:"",discountPrice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadImages:[]
    })
setPreview("")
setPreviewList([])
}

    const handleUploadBookImage=(e)=>{
          // console.log(e.target.files[0]);
          const url=URL.createObjectURL(e.target.files[0])
          console.log(url);
          const fileArray=bookDetails.uploadImages
          fileArray.push(e.target.files[0])
          setBookDetails({...bookDetails,uploadImages:fileArray})
          setPreview(url)
          const bookImgArray=previewList
          bookImgArray.push(url)
          setPreviewList(bookImgArray)
    }

    const handleBookSubmit=async()=>{
      const {title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,language,isbn,category,uploadImages}=bookDetails
      if(!title||!author||!noOfPages||!imageUrl||!price||!discountPrice||!abstract||!publisher||!language||!isbn||!category||uploadImages.length==0){
      toast.info("Please fill the form!!!")
      }else{
        // api call
        const reqHeader={
          "Authorization":`Bearer ${token}`
        }
        const reqBody=new FormData()

        // append:reqBody.append(key,value)
       
          for(let key in bookDetails){
           if(key!="uploadImages"){
             reqBody.append(key,bookDetails[key])
           }else{
            bookDetails.uploadImages.forEach(img=>{
              reqBody.append("uploadImages",img)
            })
           }
          }
        console.log(reqBody);
        try{
          const result=await addBookAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status==401){
            toast.warning(result.response.data)
            // clear all field
            handleReset()
          }else if(result.status==200){
            toast.success("Book added successfully")
             // clear all field
            handleReset()
          }else{
            toast.error("something went wrong!!!")
            handleReset()
          }
          
        }
            catch(err){
              console.log("Something went wrong",err);
              
            }
      }
    }
    
  return (
    <div>
      <Header/>
      <div className="bg-black" style={{height:'150px'}}>
    <div className="bg-white p-3 " style={{height:'230px',width:'230px',borderRadius:'50%',marginLeft:'70px'}}>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile"  style={{height:'200px',width:'200px',borderRadius:'50%'}}/>
    </div>
      </div>

    <div className="md:flex justify-between px-20 mt-25">
      <div className="flex  items-center">
     <h1 className='font-bold text-2xl md:text-3xl'>Username</h1>
       <FontAwesomeIcon icon={faCircleCheck} style={{color:'blue'}}/>
      </div>
      <div className="">Edit</div>
    </div>
     
      <p className="md:px-20 px-5 my-5 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil laboriosam provident cum rerum eum odio praesentium ipsum tempore sit iste. Et dicta ad reprehenderit saepe id nam cupiditate non odio.
      Minima error commodi aperiam necessitatibus consectetur quaerat perferendis eos animi nisi distinctio nobis blanditiis a voluptates explicabo odio totam fugiat asperiores sapiente, cupiditate, ab mollitia rem repellendus. Dolores, provident accusamus?</p>
     <div className="md:px-40">
      <div className="flex justify-center items-center my-5 font-bold">
        <p onClick={()=>{setSellBookStatus(true);setPurchaseStatus(false);setBookStatus(false)}} className={sellBookStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>Sell Books</p>
        <p onClick={()=>{setBookStatus(true);setPurchaseStatus(false);setSellBookStatus(false)}} className={bookStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>Book Status</p>
        <p onClick={()=>{setPurchaseStatus(true);setSellBookStatus(false);setBookStatus(false)}} className={purchaseStatus?'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer':"p-4 border border-b border-gray-200 cursor-pointer"}>Purchase History</p>
      </div>
      {/* contents */}
      {/* Sell Books */}

      {
        sellBookStatus &&
        <div className="">
          <div className="p-10 my-20 mx-5 bg-gray-200">
              <div className="text-center font-medium"><h1 className="text-3xl">Book Details</h1>
                <div className="md:grid grid-cols-2 mt-10 w-full gap-2">
                   <div className="mb-3">
              <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" name="" id="" placeholder='Title' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
              <div className="mb-3">
              <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" name="" id="" placeholder='Publisher' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div> 
            <div className="mb-3">
              <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})}  type="text" name="" id="" placeholder='Author' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
              <div className="mb-3">
              <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})}  type="text" name="" id="" placeholder='Language' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
            <div className="mb-3">
              <input value={bookDetails.noOfPages} onChange={e=>setBookDetails({...bookDetails,noOfPages:e.target.value})}  type="text" name="" id="" placeholder='No. of Pages' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
              <div className="mb-3">
              <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})}  type="text" name="" id="" placeholder='ISBN' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
            <div className="mb-3">
              <input value={bookDetails.imageUrl} onChange={e=>setBookDetails({...bookDetails,imageUrl:e.target.value})}  type="text" name="" id="" placeholder='Image URL' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
              <div className="mb-3">
              <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})}  type="text" name="" id="" placeholder='Category' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
           
            
                  </div> 
             <div className="md:grid grid-cols-2 gap-2">
               <div className="w-full">
                 <div className="mb-3 ">
                  <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})}  type="text" name="" id="" placeholder='Price' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                             </div>
                             <div className="mb-3 ">
                  <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})}  type="text" name="" id="" placeholder='Discount Price' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                             </div>
                             <div className="mb-3 ">
                  <textarea  value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})}  name="" id="" placeholder='Abstract' rows={5} cols={5} className='bg-white p-2 rounded placeholder-text-gray-400 text-black w-full'></textarea>
               </div>
                </div>
                <div className="">
                  <div className="mb-3 flex justify-center items-center mt-10">
                             <label htmlFor="bookImage">
                  
                             <input onChange={e=>handleUploadBookImage(e)} type="file" id='bookImage' className='hidden'/>
                             {!preview ?
                              <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png" width={"200px"} height={'200px'} alt="book" />
                            :
                            <img src={preview} width={"200px"} height={'200px'} alt="book" />
                            }
                             </label>
                  </div>
                  {preview && <div className=" flex justify-center items-center ">
                    {
                      previewList ?.map(imgUrl=>(
                        <img src={imgUrl} alt="img" width={'70px'} height={'70px'} className='mx-3'/>
                      ))
                    }
                       { previewList.length<3 &&     <label htmlFor="bookImage">
                  
                             <input onChange={e=>handleUploadBookImage(e)} type="file" id='bookImage' className='hidden'/>
                             <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500'/>
                             </label>}
                  </div>
}
                </div>
             </div>
          
              </div>
              <div className="p-3 w-full flex md:justify-end">
                 <button onClick={handleReset} className='py-2 px-3 rounded bg-yellow-600 text-white'>
                Reset
              </button>
               <button onClick={handleBookSubmit} className='py-2 px-3 rounded bg-green-600 text-white ms-3'>
                Submit
              </button>
              </div>
          </div>
        </div>
      }
      {/* book status */}
      {bookStatus &&
      
      <div className="p-10 my-20 shadow rounded">
        {/* duplicate div according to book */}
        <div className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h1 className='text-2xl'>Book Title</h1>
                <h2 className='text-xl'>Author</h2>
                <h3 className='text-lg text-blue-500'
                >$ 300</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro perspiciatis nisi explicabo maiores repudiandae itaque autem? Iure ullam enim, ut repellat ipsum necessitatibus placeat quaerat voluptate vel ipsa quasi laborum!
                Aliquam reprehenderit veritatis placeat ex? Repudiandae, quasi. Perspiciatis, minima. Voluptatem architecto maiores deleniti est esse praesentium minima totam atque provident assumenda.</p>
                <div className="flex py-4">
                  <img src="https://cdn-icons-png.flaticon.com/128/11093/11093794.png" alt="pending icon" width={'150px'} height={'150px'}/>
                  <img src="https://cdn-icons-png.flaticon.com/512/7211/7211183.png" alt="approved icon" width={'150px'} height={'150px'}/>
                </div>
              </div>
              <div className="px-4 mt-4 md:mt-0">
                <img src="/public/book.jpg" alt="book" className='w-full'/>
              <div className="mt-4 float-end">
                <button className='py-2 px-3 rounded bg-red-600 text-white'>
                Delete
              </button>
              </div>
              </div>
            </div>
        </div>
      </div>
      
      }

      {/* purchase history */}
      {
        purchaseStatus && 
        
      <div className="p-10 my-20 shadow rounded">
        {/* duplicate div according to book */}
        <div className="p-5 rounded mt-4 bg-gray-100">
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h1 className='text-2xl'>Book Title</h1>
                <h2 className='text-xl'>Author</h2>
                <h3 className='text-lg text-blue-500'
                >$ 300</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro perspiciatis nisi explicabo maiores repudiandae itaque autem? Iure ullam enim, ut repellat ipsum necessitatibus placeat quaerat voluptate vel ipsa quasi laborum!
                Aliquam reprehenderit veritatis placeat ex? Repudiandae, quasi. Perspiciatis, minima. Voluptatem architecto maiores deleniti est esse praesentium minima totam atque provident assumenda.</p>
                <div className="flex py-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="pending icon" width={'150px'} height={'150px'} />
                  
                </div>
              </div>
             <div className="px-4 mt-4 md:mt-0">
                <img src="/public/book.jpg" alt="book" className='w-full'/>
              
              </div>
            </div>
        </div>
      </div>
      
      }
     </div>
      <Footer/>
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

export default Profile
