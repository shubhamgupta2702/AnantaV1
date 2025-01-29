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
    <div className="bg-[url(/img/cover.png)]  bg-fixed md:bg-fixed md:bg-cover md:bg-no-repeat pt-0">
      
      <TextParallaxContent
        imgUrl="/img/cover.png"
        subheading=""
        heading="WELCOME TO ANANTA 2025"
        className="backdrop-blur-md"
        
      >
        <div className="backdrop-blur-md">
        <ExampleContent />
        <GamesonMain/>
        <ButtononMain/>
        <Footer/>
        </div>
        
      </TextParallaxContent>
      
    </div>
  );
};

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh] backdrop-blur-md">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-none"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  // <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
  //   <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      
  //   </h2>
    <Cardcolor />
  // </div>
);