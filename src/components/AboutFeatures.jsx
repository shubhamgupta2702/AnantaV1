import React from 'react'
import Footer from './Footer.jsx'

function AboutFeatures() {
  return (
    <>
    
      <div className="bg-[url(/img/peakpx6.jpg)] md:bg-[url(/img/peakpx4.jpg)] backdrop-blur-md bg-center md:bg-fixed md:bg-cover md:bg-no-repeat  pt-40 sm:pt-12 mx-0">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-0 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-4">
        <div className="relative overflow-hidden rounded-3xl px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
          <img className="absolute inset-0 h-full w-full object-cover brightness-200 " src="/img/event.png" alt=""/>
          
          
          
            <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
              <p>“"What happens is not as important as how you react to what happens." "The journey of a thousand miles begins with one step." "The only true wisdom is in knowing you know nothing." "Just as treasures are uncovered from the earth, so virtue appears from good deeds, and wisdom appears from a pure and peaceful mind..”</p>
            </blockquote>
            {/* <figcaption className="mt-6 text-sm leading-6 text-gray-300"><strong className="font-semibold text-white">Shehab Najib,</strong> ceo of ISREN</figcaption> */}
          {/* </figure> */}
        </div>
      </div>
      <div>
        <div className="text-base leading-7 text-white lg:max-w-lg">
          <p className="text-base font-semibold leading-7 text-yellow-400">Ananta 2025</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">About Ananta Fest</h1>
          <div className="max-w-xl">
            <p className="mt-6">Ananta Fest - The Annual Cultural Festival Of HNBGU Is One Of The Largest And Most Anticipated Festivals.</p><br />
            Translated Literally To The Fire Within, Everyone Associated Will Feel Inside. Continuing Its Rich Legacy Of Years, Ananta Combines The Zeal And Desire Of The Students Of HNBGU And Across India To Showcase And Celebrate Their Amazing Cultural Talent As It Has Evolved To Be A Platform For Global Cultural Interaction Over The Years. It Has Been The Touchstone Of India's College Cultural Heritage.
            
          </div>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
          <div>
            <dt className="text-sm font-semibold leading-6 text-white">Events</dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">10+</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold leading-6 text-white">No. of Years</dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">From 2021</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold leading-6 text-white">Sponsors</dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">2</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold leading-6 text-white"></dt>
            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white"></dd>
          </div>
        </dl>
        <div className="mt-4 flex ">
          <a href="#" className="text-xl font-extrabold leading-7 text-yellow-500">Register <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </div>
  </div>
<Footer/>
</div>


    </>
  )
}

export default AboutFeatures
