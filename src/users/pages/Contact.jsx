import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='text-center'>
      <Header/>
     <div className="md:px-40 px-5">
       <h1 className="text-3xl py-5">Contacts</h1>
       <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem cupiditate doloribus, ratione maiores sit in nemo deleniti quod, delectus, odio quam iste voluptatibus harum repellat tempore deserunt! Nulla, labore temporibus?</p>
       <div className="md:flex justify-evenly items-center py-5">
          <p><button className="bg-gray-200 rounded-full p-1 me-1">
            <FontAwesomeIcon icon={faLocationDot} />
          </button>123 Main Street,153 <br />Anytown CA 19453</p>
          <p className='py-5'><button className="bg-gray-200 rounded-full p-1 me-1">
            <FontAwesomeIcon icon={faPhone} />
          </button>8970923779</p>
          <p><button className="bg-gray-200 rounded-full p-1 me-1">
            <FontAwesomeIcon icon={faEnvelope} />
          </button >bookstore@gmail.com</p>
       </div>
       <div className="md:grid grid-cols-2 md:px-40 gap-20 p-5">
        <form action="" className='bg-gray-300 rounded mt-5 md:mt-0'>
        <h1 className='py-5'>Send Me Message</h1>
        <div className="flex flex-col px-8">
          <input type="text" placeholder='Name' className='placeholder-gray-600 bg-white p-2 rounded'/>
          <input type="text" placeholder='Email ID' className='placeholder-gray-600 bg-white p-2 rounded my-3'/>
          <textarea type="text" placeholder='Message' className='placeholder-gray-600 bg-white p-2 rounded'/>
        </div>
        <Link className='my-3 bg-blue-900 text-white py-2 px-3 my-4 rounded inline-block'>Send <FontAwesomeIcon icon={faPaperPlane} /></Link>
       </form>
       <div className="w-full  mt-5 md:mt-0"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.063586248478!2d76.30459832354099!3d10.011606622837963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0590621175%3A0x31a7773875d3f172!2sPress%20Club%20Colony%2C%20Edappally%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682024!5e0!3m2!1sen!2sin!4v1758771212945!5m2!1sen!2sin" width="100%" height="300px"  allowfullscreen="" loading="lazy" style={{border:'0'}} referrerpolicy="no-referrer-when-downgrade"></iframe></div>
       </div>
     </div>
     <Footer></Footer>
    </div>
  )
}

export default Contact
