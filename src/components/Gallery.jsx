import React from 'react'
import Footer from './Footer.jsx'
import Social from "./Social.jsx"

function Gallery() {
  return (
    <>
    
    <Social/>
<div className=' bg-[url(/img/peakpx1.jpg)] sm:bg-[url(/img/peakpx1.jpg)] md:bg-[url(/img/peakpx5.jpg)] bg-center md:bg-fixed md:bg-cover md:bg-no-repeat backdrop-blur-md '>
<div className=' text-center pt-24 md:pt-28 text-teal-200 text-4xl md:text-5xl font-extrabold '>Gallery</div>
<div class="p-4 md:p-14 pt-11 md:pt-28 grid grid-cols-2 md:grid-cols-4 gap-4 ">
    <div class="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery11.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600  cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery1.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600  cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery7.JPG" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery8.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery2.JPG" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery6.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery3.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery4.JPG" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery5.JPG" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg border-2 border-teal-600 cursor-pointer hover:scale-105 hover:duration-200 hover:ease-in-out hover:shadow-lg" src="/Gallery/gallery17.jpg" alt=""/>
        </div>
    </div>
    
    
    
    
</div>
<Footer/>
</div>



    </>
  )
}

export default Gallery
