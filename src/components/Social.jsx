import React from 'react'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaAirbnb, FaDiscord, FaGithub, FaInbox, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter, FaThreads, FaX } from 'react-icons/fa6'

function Social() {
  return (
    <>
      <div className=" flex flex-row gap-6 text-3xl z-50 fixed bottom-5 right-5 text-white cursor-pointer">
      <a href="/"
      className='hover:text-purple-500'
        > 
        <FaDiscord/>
           </a>
           <a href="/"
        className='hover:text-red-600'
        > <FaYoutube/>
           </a>
           <a href="https://ananta2025.netlify.app/"
        className='hover:text-slate-500'
        > <FaSquareXTwitter/>
           </a>
           <a 
           href="https://ananta2025.netlify.app/"
        
        className='hover:text-purple-900'
        > <FaInstagram/>
           </a>
           
      </div>
    </>
  )
}

export default Social
