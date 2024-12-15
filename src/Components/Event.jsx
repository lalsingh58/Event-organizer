import React from 'react'
import { NavLink } from 'react-router-dom'

function Event({Eventname="Event 1",Eventimg = ""}) {
  return (
    <div className='p-2 h-[250px] w-[230px]'>
      <div className='h-[100%] w-[100%] p-2 flex flex-col gap-3 justify-center border-solid border-blue-600 '>
        <h1>{Eventname}</h1>
        <img className='h-[75%] w-[100%] object-cover border' src={Eventimg} alt={Eventname} />
        <button className='hover:text-red-600 bg-[#1B1833] w-100% h-[20%] rounded-md flex justify-center items-center '> 
            <NavLink to="/register" className='hover:text-red-500 '>Join Event</NavLink>
        </button>
      </div>
       
    </div>
  )
}

export default Event