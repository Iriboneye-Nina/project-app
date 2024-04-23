import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <>
   <div className='flex text-center justify-between'>
   <ul className='bg-red-300 w-60 h-80'>
            <Link to ='Home'>
            <li >
              Home
            </li>
            </Link>
            <Link  to ='About'>
            <li>
              About
            </li>
            </Link>
          
            <Link  to ='contact'>
            <li>
              contact
            </li>
            </Link>
      </ul>
   </div>
  
   
    </>
        
   
  )
}

export default Sidebar


