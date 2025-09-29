
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './users/pages/Home'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Auth from './pages/Auth'
import AllBooks from './users/pages/AllBooks'
import ViewBook from './users/pages/ViewBook'
import Profile from './users/pages/Profile'
import Contact from './users/pages/Contact'
import Careers from './users/pages/Careers'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminResource from './admin/pages/AdminResource'
import AdminCareers from './admin/pages/AdminCareers'
import AdminSettings from './admin/pages/AdminSettings'
import Pnf from './pages/Pnf'

function App() {

const [loading,setLoading]=useState(true)
useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },2000)
},[])
  return (
    <>
   <Routes>
     <Route path='/' element={loading?<Preloader/>:<Home/>}/>
     <Route path='/login' element={<Auth/>}/>
     <Route path='/register' element={<Auth register/>}/>
     <Route path='/all-books' element={<AllBooks/>}/>
     <Route path='/book/:id/view' element={<ViewBook/>}/>
      <Route path='/profile' element={<Profile/>}/>
       <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Pnf/>}/>

        <Route path='/admin-dashboard' element={loading?<Preloader/>:<AdminDashboard/>}/>
       
        <Route path='/admin-resources' element={<AdminResource/>} />
        <Route path='/admin-settings' element={<AdminSettings/>} /> 
        <Route path='/admin-careers' element={<AdminCareers/>} />
        </Routes>
    </>
  )
}

export default App
