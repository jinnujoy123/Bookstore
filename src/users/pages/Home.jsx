import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Home() {
  return (
    <div>
      <Header/>
    {/* landing */}
    <div className="flex flex-col justify-center items-center  bg-[url(/landingpage.jpg)] bg-center bg-cover text-white " style={{height:'500px'}}>
    
      <div className="w-full flex flex-col justify-center items-center " style={{backgroundColor:'rgba(0,0,0,0.5',height:'500px'}}>
        <h1 className="text-5xl font-bold ">Wonderful Gifts</h1>
        <p>Give your family and friends a book</p>
        <div className="mt-9">
          <input type="text" placeholder='Search Books' className='bg-white rounded-3xl py-2 ps-4 placeholder-gray-700 w-90' />
           <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginLeft:'-40px',color:'gray'}}/>
        </div>
      </div>
  
    </div>
    {/* arrival */}
    <section className="p-5 md:px-40 flex flex-col justify-center items-center">
      <h1 className='text-2xl font-bold pt-8'>NEW ARRIVALS</h1>
      <h1 className="text-3xl whitespace-nowrap py-4">Explore Our Latest Collections</h1>
      <div className="md:grid grid-cols-4 w-full mt-5">

        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<p>$ 30</p>
          </div>
        </div>
<div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="/public/book.jpg" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<p>$ 30</p>
          </div>
        </div>
        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<p>$ 30</p>
          </div>
        </div>
        <div className="p-3 shadow rounded mx-4">
          <img width={'100%'} height={'300px'} src="/public/book.jpg" alt="book" />
          <div className="flex flex-col justify-center items-center">
<p className="text-blue-700 font-bold text-lg">Author</p>
<p>Book Title</p>
<p>$ 30</p>
          </div>
        </div>
      </div>
      <div className="">
        <Link to={'all-books'} className='bg-blue-600 p-3 text-white font-bold my-4 inline-block rounded'>Explore More...</Link>
      </div>
    </section>
    {/* author */}
    <section className="md:grid grid-cols-2 gap-10 items-center my-5 md:px-40 p-5">
      <div className="text-center">
        <h1 className='text-lg font-medium'>FEATURED AUTHORS</h1>
        <h1 className='text-xl'>Captivates with every word</h1>
        <p className="text-justify my-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt maxime nam enim porro distinctio! Repellendus incidunt sapiente fuga, quisquam, iure magni natus aperiam cumque pariatur repellat porro iusto dolor.
        Perferendis in pariatur optio! Dolorem distinctio aliquid illo illum explicabo, voluptas molestias accusamus sequi consequuntur eius similique eveniet magnam quo deleniti quas omnis accusantium eos beatae itaque, expedita dolore iste.</p>
         <p className="text-justify my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt maxime nam enim porro distinctio! Repellendus incidunt sapiente fuga, quisquam, iure magni natus aperiam cumque pariatur repellat porro iusto dolor.
        Perferendis in pariatur optio! Dolorem distinctio aliquid illo illum explicabo, voluptas molestias accusamus sequi consequuntur eius similique eveniet magnam quo deleniti quas omnis accusantium eos beatae itaque, expedita dolore iste.</p>

      </div>
      <div className="flex justify-center items-center  p-5 ">
        <img  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="author" />
        </div>
    </section>
    {/* testimony */}
    <section className="md:px-40 p-5 flex flex-col justify-center items-center">
       <h1 className='text-lg font-medium'>TESTIMONIALS</h1>
        <h1 className='text-xl'>See What Others Are Saying</h1>
<div className="py-5 flex flex-col justify-center items-center">
<img style={{borderRadius:'50%'}} width={'200px'} height={'200px'} src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="user1" />
</div>
<h1>Treesa Joseph</h1>
<p className='pt-3 pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, neque? Asperiores perspiciatis velit nulla fuga molestias tempora ipsam itaque veniam eum nesciunt facere voluptatem quo officiis similique quos, qui deleniti.</p>
    </section>
      <Footer/>
    </div>
  )
}

export default Home
