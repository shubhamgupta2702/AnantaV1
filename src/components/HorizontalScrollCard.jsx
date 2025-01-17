import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalCards = () => {
  return (
    <div className="bg-black">
      <div className="text-center text-7xl text-white py-6">Events</div>
      
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[400px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        className="absolute object-contain object-center inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default HorizontalCards;

const cards = [
  {
    url: "/img/Workshop.jpg",
    title: "Workshop",
    id: 1,
  },
  {
    url: "/img/Esports.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/img/Treasure.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/img/SFM.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/img/seminar.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/img/quiz.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/img/Poetry.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/img/Hackathon.jpg",
    title: "Title 8",
    id: 8,
  },
  
  {
    url: "/img/fashion1.png",
    title: "Title 10",
    id: 9,
  },
  {
    url: "/img/dancewar.png",
    title: "Title 11",
    id: 10,
  },
  {
    url: "/img/art.png",
    title: "Title 12",
    id: 11,
  },
  {
    url: "/img/1707296857560_oy54jy_2_0.jpg",
    title: "Title 13",
    id: 12,
  },
  
];