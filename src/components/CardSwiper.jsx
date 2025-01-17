import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { i } from 'framer-motion/client';

function CardSwiper() {
  const [active, setActive] = useState(null)
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <h2 className='pt-24 text-center bg-black text-5xl text-white justify-center font-bold font-serif items-center'>Gallery</h2>
      <div className='h-screen bg-[#000] text-white flex items-center justify-center '>
        <div className='max-w-5xl'>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={(cur) => setActive(cur.realIndex)}
      loop={true}
      centeredSlides={true}
      speed={800}
      autoplay={{
        delay: 3000,
      }}
      modules={[Autoplay]}
    >
      
      <SwiperSlide>
        
        <div className='h-96 flex group-hover:scale-150 inset-0 z-0 transition-transform duration-300 '>
          <div className={`card card-active animated_card hover:h-[395px]  cursor-pointer overflow-hidden rounded-[16px] group  `}>
          
          <img 
          className=''
          src="/img/art.png" alt="" />

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-96 flex group-hover:scale-150 inset-0 z-0 transition-transform duration-300 '>
          <div className={`card card-active to-red-600/40 border-violet-600 animated_card hover:h-[395px]  cursor-pointer overflow-hidden rounded-[16px] group`}>
          
          <img className='' src="/img/art.png" alt="" />

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-96 flex group-hover:scale-150 inset-0 z-0 transition-transform duration-300 '>
          <div className={`card card-active to-red-600/40 border-violet-600 animated_card hover:h-[395px]  cursor-pointer overflow-hidden rounded-[16px] group`}>
          
          <img className='' src="/img/art.png" alt="" />

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-96 flex group-hover:scale-150 inset-0 z-0 transition-transform duration-300 '>
          <div className={`card card-active to-red-600/40 border-violet-600 animated_card hover:h-[395px]  cursor-pointer overflow-hidden rounded-[16px] group`}>
          
          <img className='' src="/img/art.png" alt="" />

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-96 flex group-hover:scale-150 inset-0 z-0 transition-transform duration-300 '>
          <div className={`card card-active to-red-600/40 border-violet-600 animated_card hover:h-[395px]  cursor-pointer overflow-hidden rounded-[16px] group`}>
          
          <img className='' src="/img/art.png" alt="" />

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-96 flex group-hover:scale-150 inset-0 z-0 transition-transform duration-300 '>
          <div className={`card card-active to-red-600/40 border-violet-600 animated_card hover:h-[395px]  cursor-pointer overflow-hidden rounded-[16px] group`}>
          
          <img className='' src="/img/art.png" alt="" />

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-96 flex group-hover:scale-150 inset-0 z-0 transition-transform duration-300 '>
          <div className={`card card-active to-red-600/40 border-violet-600 animated_card hover:h-[395px]  cursor-pointer overflow-hidden rounded-[16px] group`}>
          
          <img className='' src="/img/art.png" alt="" />

          </div>
        </div>
      </SwiperSlide>
     

      
      
      
    </Swiper>
        </div>
      </div>
      

    </>
  )
}

export default CardSwiper
