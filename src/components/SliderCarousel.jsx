import React from 'react'
import { useState } from 'react';
import ring from "../assets/sliderRing.png";
import earring from "../assets/sliderEarring.png";
import bangles from "../assets/sliderBangles.png";
import bracelets from "../assets/sliderBracelet.png";
import pendant from "../assets/sliderPendant.png";
import necklace from "../assets/sliderNeck.png";
const SliderCarousel = () => {
 const items = [
   { src: ring, name: "Ring" },
   { src: earring, name: "Earring" },
   { src: bracelets, name: "Bracelet" },
   { src: bangles, name: "Bangle" },
   { src: necklace, name: "Necklace" },
   { src: pendant, name: "Pendant" },
   { src: ring, name: "Ring" },
   { src: ring, name: "Ring" },
   { src: earring, name: "Earring" },
   { src: bracelets, name: "Bracelet" },
   { src: bangles, name: "Bangle" },
   { src: necklace, name: "Necklace" },
   { src: pendant, name: "Pendant" },
   { src: ring, name: "Ring" },
   { src: ring, name: "Ring" },
   { src: earring, name: "Earring" },
   { src: bracelets, name: "Bracelet" },
   { src: bangles, name: "Bangle" },
   { src: necklace, name: "Necklace" },
   { src: pendant, name: "Pendant" },
   { src: ring, name: "Ring" },
   { src: ring, name: "Ring" },
   { src: earring, name: "Earring" },
   { src: bracelets, name: "Bracelet" },
   { src: bangles, name: "Bangle" },
   { src: necklace, name: "Necklace" },
   { src: pendant, name: "Pendant" },
   { src: ring, name: "Ring" },
   { src: ring, name: "Ring" },
   { src: earring, name: "Earring" },
   { src: bracelets, name: "Bracelet" },
   { src: bangles, name: "Bangle" },
   { src: necklace, name: "Necklace" },
   { src: pendant, name: "Pendant" },
   { src: ring, name: "Ring" },
   { src: ring, name: "Ring" },
   { src: earring, name: "Earring" },
   { src: bracelets, name: "Bracelet" },
   { src: bangles, name: "Bangle" },
   { src: necklace, name: "Necklace" },
   { src: pendant, name: "Pendant" },
   { src: ring, name: "Ring" },
   { src: ring, name: "Ring" },
   { src: earring, name: "Earring" },
   { src: bracelets, name: "Bracelet" },
   { src: bangles, name: "Bangle" },
   { src: necklace, name: "Necklace" },
   { src: pendant, name: "Pendant" },
   { src: ring, name: "Ring" },
   { src: ring, name: "Ring" },
   { src: earring, name: "Earring" },
   { src: bracelets, name: "Bracelet" },
   { src: bangles, name: "Bangle" },
   { src: necklace, name: "Necklace" },
   { src: pendant, name: "Pendant" },
   { src: ring, name: "Ring" },
 ];

 const [current, setCurrent] = useState(0);

 const nextSlide = () => {
   const newIndex = (current + 1) % items.length;
   console.log("Next Slide:", newIndex);
   setCurrent(newIndex);
 };

 const prevSlide = () => {
   const newIndex = (current - 1 + items.length) % items.length;
   console.log("Prev Slide:", newIndex);
   setCurrent(newIndex);
 };

 return (
   <div className="relative w-[90%] overflow-hidden mt-10 mb-10">
     {/* Slider Track */}
     <div
       className="flex items-center justify-center px-5 transition-transform duration-500"
       style={{ transform: `translateX(-${current * 120}px)` }}
     >
       {items.map((item, i) => (
         <div
           key={i}
           className="flex flex-col items-center justify-center shrink-0 mx-3"
         >
           <div className="border-4 border-[#017B65] rounded-full w-35 h-35 flex items-center justify-center">
             <img className="h-30" src={item.src} alt={item.name} />
           </div>
           <p className="text-md font-medium mt-2">{item.name}</p>
         </div>
       ))}
     </div>

     {/* Buttons */}
     <button
       className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-1 rounded-full"
       onClick={prevSlide}
     >
       ←
     </button>

     <button
       className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-1 rounded-full"
       onClick={nextSlide}
     >
       →
     </button>
   </div>
 );
}

export default SliderCarousel