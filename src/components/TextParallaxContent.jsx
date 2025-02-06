import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Cardcolor from "./Cardcolor";
import CardFlip from "./CardFlip";
import CardFlip2 from "./CardFlip2";
import Games from "./Games.jsx";
import Footer from './Footer.jsx'
import GamesonMain from "./GamesonMain.jsx";
import { ButtononMain } from "./Button2.jsx";


export const TextParallaxContentExample = () => {
  return (
    <div className="bg-[url(/img/peakpxhomephoneM.jpg)] md:bg-[url(/img/peakpxbackground.jpg)]   bg-fixed bg-cover md:bg-fixed md:bg-cover md:bg-no-repeat pt-0">
      
      
        <div className="">
        <ExampleContent />
        <GamesonMain/>
        <ButtononMain/>
        <Footer/>
        </div>
        
      
      
    </div>
  );
};

  


const ExampleContent = () => (
  
    <Cardcolor />
  
);