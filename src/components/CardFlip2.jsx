import React from 'react'

function CardFlip2() {
  return (
    <>
     
     <div>
          
          <section className='flex  flex-wrap items-center justify-center object-center gap-8 relative w-full h-full py-0 my-0 px-0 mx-0 pb-10' >
           <section> 
          <div className='w-full grid place-content-center px-0 py-6 mx-0 my-0'>
          <div className='w-[300px] h-[350px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
            <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500 '>
    
            <div className='w-full h-full absolute rounded-3xl overflow-hidden  '>
              <img src="/img/SFM.jpg" alt=""  className='h-full w-full'/>
            </div>
            <div className='absolute rotate-y-180 w-full bg-[#0F1823] rounded-3xl overflow-hidden p-4 bg-opacity-80 text-neutral-200 space-y-5 backface-hidden'>
              <div>
              </div>
              <div className='flex flex-col space-y-2'>
              <span className='font-bold pb-[155px] pt-6 text-3xl text-center items-center justify-center'>Short Film</span>
            <span className='text-center  items-center justify-center rounded-lg bg-yellow-600 px-16 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-yellow-600 hover:bg-yellow-700 hover:ring-yellow-700'>
              <button className=''>Participate</button>
            </span>
              </div>
              <div className='flex flex-col space-y-5'>
                <span className='font-bold'>
    
                </span>
                <span>
                   {/* Description */}
                </span>
              </div>
            </div>
            </div>
    
    
          </div>
          </div>
          </section>
           <section> 
          <div className='w-full  grid place-content-center px-0 py-6 mx-0 my-0'>
          <div className='w-[300px] h-[350px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
            <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
    
            <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
              <img src="/img/TechTalk.png" alt=""  className='h-full w-full'/>
            </div>
            <div className='absolute rotate-y-180 w-full bg-[#0F1823] rounded-3xl overflow-hidden p-10 bg-opacity-80 text-neutral-200 space-y-5 backface-hidden'>
              <div>
              </div>
              <div className='flex flex-col space-y-2'>
              <span className='font-bold pb-[110px] pt-6 text-3xl text-center items-center justify-center'>Tech Talk</span>
            <span className='text-center  items-center justify-center rounded-lg bg-yellow-600 px-16 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-yellow-600 hover:bg-yellow-700 hover:ring-yellow-700'>
              <button className=''>Participate</button>
            </span>
              </div>
              <div className='flex flex-col space-y-5'>
                <span className='font-bold'>
    
                </span>
                <span>
                   {/* Description */}
                </span>
              </div>
            </div>
            </div>
    
    
          </div>
          </div>
          </section>
           <section> 
          <div className='w-full   grid place-content-center px-0 py-6 mx-0 my-0'>
          <div className='w-[300px] h-[350px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
            <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
    
            <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
              <img src="/img/Esports.png" alt=""  className='h-full w-full'/>
            </div>
            <div className='absolute rotate-y-180 w-full bg-[#0F1823] rounded-3xl overflow-hidden p-10 bg-opacity-80 text-neutral-200 space-y-5 backface-hidden'>
              <div>
              </div>
              <div className='flex flex-col space-y-2'>
              <span className='font-bold pb-[110px] pt-6 text-3xl text-center items-center justify-center'>E-Sports</span>
            <span className='text-center  items-center justify-center rounded-lg bg-yellow-600 px-16 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-yellow-600 hover:bg-yellow-700 hover:ring-yellow-700'>
              <button className=''>Participate</button>
            </span>
              </div>
              <div className='flex flex-col space-y-5'>
                <span className='font-bold'>
    
                </span>
                <span>
                   {/* Description */}
                </span>
              </div>
            </div>
            </div>
    
    
          </div>
          </div>
          </section>
           <section> 
          <div className='w-full  grid place-content-center px-0 py-6 mx-0 my-0'>
          <div className='w-[300px] h-[350px] bg-transparent cursor-pointer group rounded-3xl perspective-1000'>
            <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
    
            <div className='w-full h-full absolute rounded-3xl overflow-hidden'>
              <img src="/img/art.png" alt=""  className='h-full w-full'/>
            </div>
            <div className='absolute rotate-y-180 w-full bg-[#0F1823] rounded-3xl overflow-hidden p-10 bg-opacity-80 text-neutral-200 space-y-5 backface-hidden'>
              <div>
              </div>
              <div className='flex flex-col space-y-2'>
              <span className='font-bold pb-[108px] pt-6 text-3xl text-center items-center justify-center'>Art and Craft</span>
            <span className='text-center  items-center justify-center rounded-lg bg-yellow-600 px-16 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-yellow-600 hover:bg-yellow-700 hover:ring-yellow-700'>
              <button className=''>Participate</button>
            </span>
              </div>
              <div className='flex flex-col space-y-5'>
                <span className='font-bold'>
    
                </span>
                <span>
                   {/* Description */}
                </span>
              </div>
            </div>
            </div>
    
    
          </div>
          </div>
          </section>
          </section>
          </div> 
    </>
  )
}

export default CardFlip2
