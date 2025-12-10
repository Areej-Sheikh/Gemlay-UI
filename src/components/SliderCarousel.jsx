import React, { useState, useEffect, useRef } from "react";
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
    { src: earring, name: "Earring" },
    { src: bracelets, name: "Bracelet" },
    { src: bangles, name: "Bangle" },
    { src: necklace, name: "Necklace" },
    { src: pendant, name: "Pendant" },
  ];

  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const child = containerRef.current.querySelector(".carousel-item");
        if (child) setItemWidth(child.offsetWidth + 24);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % items.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 mb-10 gap-4">
      <div className="flex items-center w-full justify-center gap-4">
        <button
          onClick={prevSlide}
          className="bg-white shadow py-3 px-4 rounded-full hover:scale-110 transition-transform"
        >
          <i className="ri-arrow-left-s-fill text-2xl"></i>
        </button>

        <div className="overflow-hidden w-[90%] sm:w-[70%]">
          <div
            ref={containerRef}
            className="flex items-center transition-transform duration-500"
            style={{ transform: `translateX(-${current * itemWidth}px)` }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="carousel-item flex flex-col items-center justify-center shrink-0 mx-3 w-24 sm:w-32"
              >
                <div className="border-4 border-[#017B65] rounded-full w-24 sm:w-32 h-24 sm:h-32 flex items-center justify-center">
                  <img
                    className="h-16 sm:h-24"
                    src={item.src}
                    alt={item.name}
                  />
                </div>
                <p className="text-sm sm:text-md font-medium mt-2 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="bg-white shadow py-3 px-4 rounded-full hover:scale-110 transition-transform"
        >
          <i className="ri-arrow-right-s-fill text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default SliderCarousel;
