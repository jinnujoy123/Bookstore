import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Profile() {
  const [sellBookStatus,setSellBookStatus]=useState(true)
   const [bookStatus,setBookStatus]=useState(false)
    const [purchaseStatus,setPurchaseStatus]=useState(false)
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
              <input type="text" name="" id="" placeholder='Title' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
              <div className="mb-3">
              <input type="text" name="" id="" placeholder='Publisher' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
            <div className="mb-3">
              <input type="text" name="" id="" placeholder='Author' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
              <div className="mb-3">
              <input type="text" name="" id="" placeholder='Language' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
            <div className="mb-3">
              <input type="text" name="" id="" placeholder='No. of Pages' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
              <div className="mb-3">
              <input type="text" name="" id="" placeholder='ISBN' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
            <div className="mb-3">
              <input type="text" name="" id="" placeholder='Image URL' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
              <div className="mb-3">
              <input type="text" name="" id="" placeholder='Category' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
            </div>
            
            
                  </div> 
             <div className="md:grid grid-cols-2 gap-2">
               <div className="w-full">
                 <div className="mb-3 ">
                  <input type="text" name="" id="" placeholder='Price' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                             </div>
                             <div className="mb-3 ">
                  <input type="text" name="" id="" placeholder='Discount Price' className='p-2 rounded placeholder-text-gray-400 text-black bg-white w-full'/>
                             </div>
                             <div className="mb-3 ">
                  <textarea name="" id="" placeholder='Abstract' rows={5} cols={5} className='bg-white p-2 rounded placeholder-text-gray-400 text-black w-full'></textarea>
               </div>
                </div>
                <div className="mb-3 flex justify-center items-center mt-10">
           <label htmlFor="bookImage">

           <input type="file" id='bookImage' className='hidden'/>
           <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png" width={"200px"} height={'200px'} alt="" />
           </label>
                </div>
             </div>
          
              </div>
              <div className="p-3 w-full flex md:justify-end">
                 <button className='py-2 px-3 rounded bg-yellow-600 text-white'>
                Reset
              </button>
               <button className='py-2 px-3 rounded bg-green-600 text-white ms-3'>
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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTCQowQB00nhcnOmLh-UUFuPQMNI6SwVKAw&s" alt="pending icon" width={'150px'} height={'150px'}/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwPzwjd7slg0dR4uJ7YjQx2sYncuHgFevng&s" alt="approved icon" width={'150px'} height={'150px'}/>
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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTCQowQB00nhcnOmLh-UUFuPQMNI6SwVKAw&s" alt="pending icon" width={'150px'} height={'150px'} style={{borderRadius:'50%'}}/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwPzwjd7slg0dR4uJ7YjQx2sYncuHgFevng&s" alt="approved icon" width={'150px'} height={'150px'}/>
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
     </div>
      <Footer/>
    </div>
  )
}

export default Profile
