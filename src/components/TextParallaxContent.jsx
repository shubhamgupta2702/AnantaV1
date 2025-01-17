import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";


export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black pt-16">
      
      <TextParallaxContent
        imgUrl="/img/anantafestlogo.png"
        subheading="Ananta 2025"
        heading="Word From Team"
      >
        <ExampleContent />
      </TextParallaxContent>
      
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
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
      className="sticky z-0 overflow-hidden rounded-3xl"
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
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-white md:text-2xl">
      Welcome to Ananta 2025, the annual technical fest hosted by Hemvati Nandan Bahuguna Garhwal University, where innovation meets creativity, and technology knows no bounds! Get ready for a thrilling journey through the world of science, engineering, and cutting-edge technology. 
      </p>
      <p className="mb-8 text-xl text-white md:text-2xl">
      Whether you're a tech enthusiast, a problem solver, or a visionary,Ananta 2025 offers a platform for everyone to showcase their skills, learn, and grow.
      </p>
      <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-violet-950 bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-violet-500 before:transition-all before:duration-500 hover:text-white hover:shadow-violet-500 hover:before:left-0 hover:before:w-full">
        <span className="relative z-10">
          <a href="">
        Explore <FiArrowUpRight className="inline" /></a>
        </span>
      </button>
    </div>
  </div>
);