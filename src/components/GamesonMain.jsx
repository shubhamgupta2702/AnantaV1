import React from 'react'
import { gamesData, gamesData2, gamesData3, gamesData4 } from "./dumy.js"
import GameCard from "./Gamecard.jsx"

function GamesonMain() {
  return (
    <>
      <div className="  scroll-smooth snap-y">
    <div className="animate-slide  bg-cover h-full top-0 left-0 right-0 bottom-0">
    
    <div className="max-w-[1440px] w-full mx-auto p-5">
      <h1 className=' pb-16 text-center text-teal-200 text-4xl md:text-5xl font-extrabold'>{gamesData.h1}</h1>
      <div className="flex justify-center md:justify-between gap-10 flex-wrap md:flex-nowrap">
        {
          gamesData.cards.map(({ delay, img, bg_img, card_h1, card_type, card_p, button }, key) => {
            return <GameCard key={key} delay={delay} img={img} bg_img={bg_img} card_h1={card_h1} card_type={card_type} card_p={card_p} button={button} />
          })
        }
      </div>
      
      </div>
      </div>
      
      </div>
      
    </>
  )
}

export default GamesonMain
