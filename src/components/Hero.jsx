
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import { BsGithub } from 'react-icons/bs'
import { FaDiscord, FaGithub, FaInbox, FaInstagram, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter, FaThreads } from 'react-icons/fa6'


import Button from "./Button";

const Hero = () => {
  

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
       
        
    

      
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            
          </div>

          
          <video
            src= "videos/backVideo.mp4"
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="ananta-heading uppercase font-black text-8xl  text-white">
              Ananta<b></b> <br />Tech Fest
            </h1>

            <p className="mb-5 max-w-80 font-robert-regular text-blue-100">
            Ananta fest is a science and technology festival held annually at the Hemvati Nandan Bahuguna Garhwal University<br />
            </p>

            <Button
              id="watch-trailer"
              title="Join Us"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      

      <div className="flex flex-row gap-6 text-3xl absolute bottom-5 right-5 text-white">
      <a href="/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        > <FaDiscord/>
           </a>
           <a href="/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        > <FaYoutube/>
           </a>
           <a href="/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        > <FaSquareXTwitter/>
           </a>
           <a href="/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
        className='mr-7'
        > <FaInstagram/>
           </a>
      </div>
    </div>
  );
};

export default Hero;
