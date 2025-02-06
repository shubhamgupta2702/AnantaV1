import React from 'react'
import { NavLink } from 'react-router-dom'



 

const Button = ({ text }) => {
  
  return (
    <button className="text-zinc-700 md:px-14 md:py-4 px-8 py-3 m-auto md:m-0 w-fit bg-teal-200 rounded-full hover:bg-transparent duration-200 hover:border-white hover:text-white border-teal-200 border-2">{text}</button>
  )
}

const ButtononMain = () => {
  return (
    <>
    <div className='text-center items-center justify-center place-content-center mt-20 pb-20'>
      <NavLink to='/events' onClick={() => window.location.href = '/events'}>
    <button className="text-zinc-700 md:px-14 md:py-4 px-8 py-3 m-auto md:m-0 w-fit bg-teal-200 rounded-full hover:bg-transparent duration-200 hover:border-white hover:text-white border-teal-200 border-2 ">
        More
    </button>
        </NavLink>
    </div>
    </>
  )
}

export default Button
export  {ButtononMain}