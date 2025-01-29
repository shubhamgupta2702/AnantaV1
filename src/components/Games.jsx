import { gamesData, gamesData2, gamesData3, gamesData4 } from "./dumy.js"
import Footer from "./Footer.jsx"
import GameCard from "./Gamecard.jsx"
import Social from "./Social.jsx"

const Games = () => {
  return (
    <>
    <Social/>
    <div className=" bg-[url(/img/planet-06.png)] sm:bg-[url(/img/planet-06.png)] md:bg-[url(/img/planet-06.png)] bg-fixed md:bg-fixed md:bg-cover md:bg-no-repeat scroll-smooth snap-y">
    <div className="animate-slide backdrop-blur-md bg-cover h-full top-0 left-0 right-0 bottom-0">
    
    <div className="max-w-[1440px] w-full mx-auto p-5">
      <h1 className=' pb-16 text-center text-teal-200 text-4xl pt-14 font-extrabold'>{gamesData.h1}</h1>
      <div className="flex justify-center md:justify-between gap-10 flex-wrap md:flex-nowrap">
        {
          gamesData.cards.map(({ delay, img, bg_img, card_h1, card_type, card_p, button }, key) => {
            return <GameCard key={key} delay={delay} img={img} bg_img={bg_img} card_h1={card_h1} card_type={card_type} card_p={card_p} button={button} />
          })
        }
      </div>
      <div className="flex pt-8 justify-center md:justify-between gap-10 flex-wrap md:flex-nowrap">
        {
          gamesData2.cards.map(({ delay, img, bg_img, card_h1, card_type, card_p, button }, key) => {
            return <GameCard key={key} delay={delay} img={img} bg_img={bg_img} card_h1={card_h1} card_type={card_type} card_p={card_p} button={button} />
          })
        }
      </div>
      <div className="flex pt-8 justify-center md:justify-between gap-10 flex-wrap md:flex-nowrap">
        {
          gamesData3.cards.map(({ delay, img, bg_img, card_h1, card_type, card_p, button }, key) => {
            return <GameCard key={key} delay={delay} img={img} bg_img={bg_img} card_h1={card_h1} card_type={card_type} card_p={card_p} button={button} />
          })
        }
      </div>
      <div className="flex pt-8 justify-center md:justify-between gap-10 flex-wrap md:flex-nowrap">
        {
          gamesData4.cards.map(({ delay, img, bg_img, card_h1, card_type, card_p, button }, key) => {
            return <GameCard key={key} delay={delay} img={img} bg_img={bg_img} card_h1={card_h1} card_type={card_type} card_p={card_p} button={button} />
          })
        }
      </div>
      </div>
      <Footer/>
      </div>
      </div>
      
      
    </>
  )
}

export default Games