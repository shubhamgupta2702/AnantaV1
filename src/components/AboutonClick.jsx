import React from 'react'
import AboutFeatures from './AboutFeatures.jsx'
import Social from "./Social.jsx";
import Button from "./Button.jsx";
import { TiLocationArrow } from "react-icons/ti";

function AboutonClick() {
  return (
    <>
		<Social/>
		<img src="/img/backgroundneon.jpeg.jpg" 
		className='absolute left-0 top-0 size-full object-fill object-center'
		alt="" />
      <section className="relative h-screen overflow-hidden flex items-center justify-center ">
	<div className=" text-white py-20">
		<div className="container mx-auto flex flex-col md:flex-row items-center my-0 md:my-24">
			<div classNamee="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 className="text-3xl md:text-5xl pl-7 pb-3 text-yellow-300 tracking-loose font-serif font-bold">Ananta Fest</h1>
				<h2 className
        ="pl-7 text-2xl md:text-4xl leading-relaxed md:leading-snug mb-7">Space : The Timeless Infinity
				</h2>
				<p className="pl-7 text-sm md:text-base text-gray-50 mb-10">Explore your favourite events and
					register now to showcase your talent and win exciting prizes.</p>
					<div className='ml-12'>
					<Button
              id="join"
              title="Join Us"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300  flex-center gap-1"
							
            
            /></div>
			</div>
			<div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div className="h-48 flex flex-wrap content-center">
					<div>
						{/* <img className="inline-block mt-28 xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"/> */}
						</div>
						<div>
							<img className="inline-block mt-0 md:mt-0 p-8 md:p-0"  src="/img/ananta_logo.png"/></div>
							<div>
								{/* <img className="inline-block mt-28 lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"/> */}
								</div>
							</div>
						</div>
					</div>
				</div>
</section>

<AboutFeatures />
    </>
  )
}

export default AboutonClick
