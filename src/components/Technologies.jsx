import React from 'react'
import { motion } from 'framer-motion';
import { RiReactjsLine, RiTailwindCssFill, RiTailwindCssLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiMongodb, DiPostgresql, DiRedis } from 'react-icons/di';
import { SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

function Technologies() {
  return (
    <>
    <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
          className="w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] sm:justify-between items-center sm:flex-row "
          
        >
          <motion.div
          initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}>
            <div className='pb-20'>
              <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.9,
                delay: 0.2,
              }}>
              <h2 className='pt-24 text-center text-5xl text-white justify-center font-bold font-serif items-center'>Technologies</h2>
              </motion.h2>


            </div>

          </motion.div>
          <motion.div
          initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}>
            <div className='flex flex-wrap items-center justify-center gap-4 pb-24'>
              <div className='p-4'>
                <SiMongodb className='text-green-400 text-7xl'/>
              </div>
              <div className='p-4'>
                <SiExpress className='text-green-400 text-7xl'/>
              </div>
              
              <div>
                <RiReactjsLine className='text-7xl text-cyan-400' />
              </div>
              
              <div className='p-4'>
                <FaNodeJs className='text-green-500 text-7xl'/>
              </div>
              <div className='p-4'>
                <DiRedis className='text-red-700 text-7xl'/>
              </div>
              <div className='p-4'>
                <TbBrandNextjs className=' text-7xl'/>
              </div>
              <div className='p-4'>
                <BiLogoPostgresql className='text-sky-500 text-7xl'/>
              </div>

            </div>
            </motion.div>
          



        </motion.section>
      
    </>
  )
}

export default Technologies
