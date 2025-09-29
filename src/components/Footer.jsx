import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className="md:grid grid-cols-3 bg-gray-900 text-white p-5 py-10 ">
      <div className="me-10 pb-10">
        <h1 className='py-3'>ABOUT US</h1>
        <p className='text-justify text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut, cum necessitatibus corporis incidunt commodi modi est, voluptatibus ipsam officiis laudantium ex alias nobis sed maiores blanditiis voluptas perspiciatis adipisci</p>
      </div>
      <div className="md:ps-10 pb-10 text-start">
        <h1 className='py-3'>NEWSLETTER</h1>
        <p className='text-sm'>Stay updated with our latest trends</p>
        <div className="flex items-center">
          <input type="text" className='bg-white placeholder-gray-700 ps-2 h-10 my-4 ' placeholder='Email ID'/>
          <Link>
            <button className='py-2 bg-yellow-300 px-3 text-black '>
             <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
        </div>
      <div className="md:ps-10 text-start">
        <h1 className="py-3">FOLLOW US</h1>
        <p className='text-sm'>Let us be social</p>
        <div className="text-xl flex items-center my-4">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
         <FontAwesomeIcon icon={faLinkedin} />
       
      </div>
      </div>
      </div> 
      <div className="text-center text-sm bg-black text-white p-4">
        <p>Copyright@2025 | All rights reserved | Designed with ❤️ by Jinnu Joy</p>
      </div>
    </>
  )
}

export default Footer
