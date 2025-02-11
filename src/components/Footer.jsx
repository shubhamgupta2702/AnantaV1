import React from 'react'
import { BsThunderbolt } from 'react-icons/bs'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaAirbnb, FaDiscord, FaGithub, FaInbox, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter, FaThreads, FaX } from 'react-icons/fa6'
// import ".../index.css"

function Footer() {
  return (
    <>
     <footer className="relative  backdrop-blur-md  flex flex-col items-center  overflow-hidden pt-3 md:pt-5 mt-7 md:mt-12 md:pb-0">
    <div className="relative z-[1] container  px-6 md:px-12">
        <div className="m-auto mb-0 md:pb-7 pb-16 md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div className="w-full space-x-12 flex justify-center font-semibold text-white sm:w-7/12 md:justify-start">
                    <ul className=" space-y-8">
                        

                        <li><a href="#" className="hover:text-sky-400 transition">About</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition">Register</a></li>
                        
                        <li><a href="#" className="hover:text-sky-400 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-sky-400 transition">Terms of Use</a></li>
                    </ul>

                    <ul role="list" className="space-y-8">
                        <li>
                            <a href="#" className="flex items-center space-x-3 hover:text-violet-700 transition">
                                <FaDiscord className='w-5'/>
                                <span>Discord</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 hover:text-slate-600 transition">
                                <FaSquareXTwitter className='w-5'/>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 hover:text-red-700 transition">
                                <FaYoutube className='w-5'/>
                                <span>YouTube</span>
                            </a>
                        </li>
                        
                        
                        
                        <li>
                            <a href="#" className="flex items-center space-x-3 hover:text-purple-700 transition">
                                <FaInstagram/>
                                <span>Instagram</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                    

                    <span className="block text-white">Ananta Fest &copy; 2025</span>

                    <span className="flex justify-between text-white"> 
                        <a href="#" className="font-semibold">Terms of Use </a>
                        <a href="#" className="font-semibold"> Privacy Policy</a> 
                    </span>

                    <span className="block text-white">Need help? <a href="#" className="font-semibold text-white"> Contact Us</a></span>
                    <span className='block text-white'>Made by- <span className="font-semibold"> Shubham Gupta</span></span>
                </div>
            </div>
        </div>
    </div>
    
    
    
</footer>
      
    </>
  )
}

export default Footer
