import React, { useState } from "react";

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
  ];

  const loopedItems = [...items, ...items, ...items];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    let newIndex = current + 1;
    if (newIndex >= items.length * 2) newIndex = items.length;
    setCurrent(newIndex);
  };

  const prevSlide = () => {
    let newIndex = current - 1;
    if (newIndex < 0) newIndex = items.length - 1;
    setCurrent(newIndex);
  };

  return (
    <div className="w-full flex items-center justify-center gap-4 mt-10 mb-10">
      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="bg-white shadow py-3 px-4 rounded-full hover:scale-110"
      >
        <i className="ri-arrow-left-s-fill"></i>
      </button>

      {/* CAROUSEL WINDOW */}
      <div className="overflow-hidden w-[69%]">
        <div
          className="flex items-center transition-transform duration-500"
          style={{
            width: `${loopedItems.length * 140}px`,
            transform: `translateX(-${current * 140}px)`,
          }}
        >
          {loopedItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center shrink-0 mx-3 w-[120px]"
            >
              <div className="border-4 border-[#017B65] rounded-full w-32 h-32 flex items-center justify-center">
                <img className="h-24" src={item.src} alt={item.name} />
              </div>
              <p className="text-md font-medium mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="bg-white shadow py-3 px-4 rounded-full hover:scale-110"
      >
        <i className="ri-arrow-right-s-fill"></i>
      </button>
    </div>
  );
};

export default SliderCarousel;
