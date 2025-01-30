



import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaAirbnb, FaDiscord, FaGithub, FaInbox, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter, FaThreads, FaX } from 'react-icons/fa6'


import Button from "./Button.jsx";
import Social from "./Social.jsx";
import Technologies from "./Technologies.jsx";
import Contact from "./Contact.jsx";
import Example from "./TildCard.jsx";
import { SmoothScrollHero } from "./SmoothScroll.jsx";
import { TextParallaxContentExample } from "./TextParallaxContent.jsx";
import HorizontalCards from "./HorizontalScrollCard.jsx";
import CardSwiper from "./CardSwiper.jsx";
import Cardcolor from "./Cardcolor.jsx";

import CardFlip from "./CardFlip.jsx";


const Hero = () => {
  

  return (
    <>
    <div className="relative h-dvh w-screen overflow-x-hidden">
       
        
    

      
        <div>
          {/* <div className="mask-clip-path absolute-center place-content-end absolute z-50 size-78 cursor-pointer overflow-hidden rounded-lg">
            <img src="/img/ananta_logo.png" alt="" />
          </div> */}

          
          <video
            src= "/videos/backVideo.mp4"
            autoPlay
            loop
            muted
            className="absolute  left-0 top-0 size-full object-fill object-center"
            
          />
        </div>

        

        <div className="absolute left-0 top-0 z-40 size-full sm:px-10 ">
          <div className="mt-56 px-5 sm:px-10">
            <h1 className="ananta-heading font-extrabold uppercase  text-4xl md:text-6xl text-yellow-400">
              Ananta  Fest 2025
            </h1>
            <h2 className
        ="pl-0 text-2xl md:text-4xl text-white leading-relaxed md:leading-snug mb-7">Space : The Timeless Infinity
				</h2>

            <p className="mb-12 mt-7 max-w-96 text-3xl md:text-2xl font-robert-regular text-blue-100">
            Ananta fest is a science and technology festival held annually at the Hemvati Nandan Bahuguna Garhwal University<br />
            </p>

            <Button
              id="join"
              title="Join Us"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300  flex-center gap-1"
            
            />
          </div>
        </div>
        
    </div>
    <Social/>
    {/* <Technologies/> */}
    <TextParallaxContentExample />
    {/* <SmoothScrollHero/> */}
    {/* <HorizontalCards /> */}
    {/* <CardSwiper /> */}
    {/* <CardFlip/> */}
    {/* <Gallery/> */}
    {/* <Contact/> */}
    {/* <Example /> */}
    
    </>

    
  );
};

export default Hero;
