



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
import Gallery from "./Gallery.jsx";


const Hero = () => {
  

  return (
    <>
    <div className="relative h-dvh w-screen overflow-x-hidden">
       
        
    

      
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            
          </div>

          
          <video
            src= "videos/backVideo.mp4"
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-fill object-center"
            
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="ananta-heading uppercase font-black text-8xl  text-white">
              Ananta <br /> Fest 2025
            </h1>

            <p className="mb-5 max-w-80 font-robert-regular text-blue-100">
            Ananta fest is a science and technology festival held annually at the Hemvati Nandan Bahuguna Garhwal University<br />
            </p>

            <Button
              id="join"
              title="Join Us"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
        
    </div>
    <Social/>
    {/* <Technologies/> */}
    <TextParallaxContentExample />
    {/* <SmoothScrollHero/> */}
    {/* <HorizontalCards /> */}
    <CardSwiper />
    <Gallery/>
    
    {/* <Example /> */}
    
    </>

    
  );
};

export default Hero;
