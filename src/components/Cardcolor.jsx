import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function Cardcolor() {
  return (
    <>
      <div className="min-h-screen w-full  flex flex-col justify-center relative overflow-hidden sm:py-7">
  <div className="max-w-7xl mx-auto">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
      
        <div className="col-span-1 md:col-span-8">
          <h1 className='mb-5 text-2xl drop-shadow-[0px_0px_25px_rgba(255,5,188,1)] font-extrabold text-indigo-400 md:text-2xl text-center font-circular-web'>Ananta Tech Fest - 2025</h1>
              <p className="mb-4 text-xl text-white md:text-2xl font-robert-regular">
              Welcome to Ananta 2025, the annual technical fest hosted by Hemvati Nandan Bahuguna Garhwal University, where innovation meets creativity, and technology knows no bounds! Get ready for a thrilling journey through the world of science, engineering, and cutting-edge technology. 
              </p>
              <p className="mb-8 text-xl text-white md:text-2xl  font-robert-regular">
              Whether you're a tech enthusiast, a problem solver, or a visionary,Ananta 2025 offers a platform for everyone to showcase their skills, learn, and grow.
              </p>
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-violet-950 bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-violet-500 before:transition-all before:duration-500 hover:text-white hover:shadow-violet-500 hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">
                  <a href="">
                Explore <FiArrowUpRight className="inline" /></a>
                </span>
              </button>
            </div>
        <div className="space-y-2">
          <p className=""></p>
          
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Cardcolor
