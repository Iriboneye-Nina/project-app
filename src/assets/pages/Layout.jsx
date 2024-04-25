import React from 'react'
import Navbar from '../../components/Navbar'

import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div >
    <Navbar/>
    <div className='flex flex-row h-[12rem] w-full'>
     <div>
     <Sidebar/>
      
     </div>
     
    
    <div className='bg-yellow-400 w-full'>
        <Outlet/>
    </div>
    </div>
    <div/>
    </div>
 
    </>

  )
}

export default Layout
