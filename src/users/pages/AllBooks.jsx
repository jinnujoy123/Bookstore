import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link} from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAllBooksAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import { searchBookContext } from '../../contextAPI/ContextShare'
function AllBooks() {
  const [listStatus,setListStatus]= useState(false)
   const [token,SetToken] =useState("")
   const [books,setBooks]=useState([])
   const [tempBooks,setTempBooks]=useState([])
   const [allCategories,setAllCategories]=useState([])
   const {searchKey,setSearchKey}=useContext(searchBookContext)

  useEffect(()=>{
     if(sessionStorage.getItem("token")){
      const userToken=sessionStorage.getItem("token")
    SetToken(userToken)
    getAllBooks(userToken)
   }
  },[searchKey])

const getAllBooks=async (userToken)=>{
  console.log(userToken)
  const reqHeader={
    "Authorization":`Bearer ${userToken}`
  }
  try{
    const result=await getAllBooksAPI(searchKey,reqHeader)
    if(result.status==200){
      setBooks(result.data)
      setTempBooks(result.data)
      const tempCategory=result.data.map(item=>item.category)
      const tempArray=[...new Set(tempCategory)]
      setAllCategories(tempArray)
    }else{
      // console.log(result);
      toast(result.response.data)
      
    }
    // console.log(books);
    
  }catch(err){
      console.log(err);
      
  }
}

// filtering according to book category
const filterBooks=(category)=>{
  if(category=='No-filter'){
    setBooks(tempBooks)

  }else{
    setBooks(tempBooks?.filter(item=>item.category.toLowerCase()==category.toLowerCase()))
    console.log(category);
    
    console.log(tempBooks);
    
  }
}

  return (
    <>
     <Header/>
    {token ?
     <>
     <div className="flex justify-center items-center flex-col my-5">
<h1 className='text-3xl font-bold'>Collections</h1>
<div className="flex my-5">
  <input type="text" className='p-2 shadow placeholder-gray-700' placeholder='Search by Title' onChange={e=>setSearchKey(e.target.value)} value={searchKey}/>
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
{
  allCategories?.length>0 &&
  allCategories.map((category,index)=>(
   <div key={index} className="mt-3">
      <input type="radio" id={category} name='filter' onClick={()=>filterBooks(category)}/>
      <label className='ms-3' htmlFor={category}>{category}</label>
      </div>
  ))
  
}
<div className="mt-3">
      <input type="radio" id='no-filter' name='filter' onClick={()=>filterBooks('No-filter')}/>
      <label className='ms-3' htmlFor='no-filter'>No-filter</label>
      </div>
  </div>

    
    </div>
   
  </div>
  <div className="col-span-3">
     <div className="md:grid grid-cols-4  mt-5">
       {
        books.length>0 ?
        books?.map(book=>(

<div 
  key={book?._id} 
  className="flex flex-col justify-between p-3 shadow rounded m-4 h-90" hidden={book?.status=='pending' || book?.status=='sold'} 
>
  <img 
    src={book.imageUrl} 
    alt="book" 
    className="h-40 w-full object-contain rounded"  
  />

  <div className="flex flex-col items-center text-center ">
    <p className="text-blue-700 font-semibold text-lg py-2">
      {book?.title.slice(0, 20)}
    </p>
    <p className="text-gray-700">{book?.author.slice(0, 20)}</p>
  </div>

 
  <Link 
    to={`/books/${book?._id}/view`} 
    className="bg-blue-800 text-white rounded p-2 mt-auto text-center"
  >
    View Book
  </Link>
</div>

        ))
        :
        <p>no books</p>
       }
      
      </div>
  </div>
</div>
     </>
     :
     <p>No books</p>
  }
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
    </>
  )
}

export default AllBooks
