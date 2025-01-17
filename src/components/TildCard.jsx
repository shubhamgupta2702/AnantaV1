import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const Example = () => {
  return (
    <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
              className="w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] sm:justify-between items-center sm:flex-row "
              
            >
    <h2 className='pt-24 text-center text-5xl text-white justify-center font-bold font-serif items-center'>Gallery</h2>
    <div className="flex mx-28 gap-11  py-12 text-slate-900">
      <TiltCard />
      <TiltCard />
      <TiltCard />
      <TiltCard />
    </div>
    </motion.section>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className=" text-2xl font-bold"
        >
          <img src="https://firebasestorage.googleapis.com/v0/b/dev-antaragni.appspot.com/o/applandingpagenew%2FSnapinsta.app_463888627_18368874169108143_7432917026333997894_n_1080.jpg-1729284091671?alt=media&token=6096a5b6-e598-442b-8fbd-9bc0e54ed2be" alt="" />
        </p>
      </div>
    </motion.div>
  );
};

export default Example;