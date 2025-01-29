import { motion } from "framer-motion"
import { variant1 } from "./motion.js"
import Button from "./Button2.jsx"
const GameCard = ({ delay, img, bg_img, card_h1, card_type, card_p, button, key }) => {
  return (
    <>
    
    <motion.div key={key} variants={variant1(delay)} initial='hidden' whileInView='show' className=" text-center relative rounded-2xl w-full md:w-[30%] basis shrink-0 grow  bg-opacity-50 p-5 border border-teal-400">
      <img className=' shadow-lg shadow-gray-900/75 rounded-2xl w-full h-60 object-cover object-center' src={bg_img} alt="" />
      <div className=' absolute top-12 mx-auto left-0 right-0'>
        
      </div>
        <p className=' text-white text-2xl font-bold'>{card_h1}</p>
        <p className=' text-white text-lg font-normal'>{card_type}</p>
      <p className=' text-zinc-400 text-sm font-medium text-center mt-7 mb-4'>{card_p}</p>
      <Button text={'Participate'}/>
    </motion.div>
    
    </>
  )
}

export default GameCard