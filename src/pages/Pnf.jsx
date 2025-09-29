import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div>
     <div className="max-h-screen w-full flex flex-col justify-center items-center pt-5">
      <img src="/public/pnf.gif" alt="" height={'30%'} width={'30%'}/>
      <p>Oh No !</p>
<h1 className="text-3xl font-semibold">
Look like you're lost
</h1>
<p>The page you are looking is not available</p>
<Link to={'/'} className='bg-blue-900 text-white rounded p-2 my-5'>Back Home</Link>
     </div>
    </div>
  )
}

export default Pnf
