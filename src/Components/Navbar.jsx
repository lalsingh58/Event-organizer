import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='h-20 w-[100%] flex flex-row justify-between items-center p-[20px] bg-[#021526] text-lg'>

        <div>
            <img src="" alt="logo" />
        </div>
        <ul className='flex gap-14'>
          <li>
             <NavLink to="/" className='hover:text-red-500 '>Home</NavLink>
          </li>

          <li>
             <NavLink to="/events" className='hover:text-red-500 '>Events</NavLink>
          </li>

          <li>
             <NavLink to="/dashboard" className='hover:text-red-500 '>Dashboard</NavLink>
          </li>

          <li>
            <NavLink to="/Contact" className='hover:text-red-500 '>Contact Us</NavLink>
          </li>

          <li>
            <NavLink to="/register" className='hover:text-red-500 '>Register</NavLink>
          </li>

        </ul>
        <button className='bg-gray-800  border-transparent h-[45px] w-[90px] rounded-lg hover:bg-[#0B192C] hover:text-red-600 text-l '>            
          <NavLink to="/login" className='hover:text-red-500 '>Log IN</NavLink>
        </button>
    </div>
  )
}

export default Navbar