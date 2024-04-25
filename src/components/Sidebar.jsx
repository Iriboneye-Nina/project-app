import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <>
   <div className=''>
   <div className='bg-red-300 w-60 h-80 flex flex-col'>
         <Link to="/" >Home</Link>
         <Link to="/About" >About</Link>
         <Link to="/Contact" >Contact</Link>
   </div>
  </div>
   
    </>
        
   
  )
}

export default Sidebar


