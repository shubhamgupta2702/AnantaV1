import React from 'react'
import { BsThunderbolt } from 'react-icons/bs'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaAirbnb, FaDiscord, FaGithub, FaInbox, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter, FaThreads, FaX } from 'react-icons/fa6'
// import ".../index.css"

function Footer() {
  return (
    <>
     <footer className="relative py-2 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-10">
    <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                    <ul className="list-disc list-inside space-y-8">
                        

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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
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
                </div>
            </div>
        </div>
    </div>
    <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
    </div>
    <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
</footer>
      
    </>
  )
}

export default Footer
