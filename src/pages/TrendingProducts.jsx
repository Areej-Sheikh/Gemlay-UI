import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import menu from "../assets/menuOptions.png"

const TrendingProducts = () => {
  return (
    <div className="m-10">
      <div className="flex flex-col items-center justify-center text-xl m-10">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold">TRENDING PRODUCTS</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>

        <div className="text-[#007A64] font-semibold">
          DISCOVER YOUR WORLD OF JEWELLERY
        </div>
      </div>
      <div>
        <div className=" border  py-2 px-4 w-[20%] flex flex-col items-center justify-center rounded-2xl">
          <div className="flex items-center justify-between w-full">
            <div
              className="px-5 py-2 text-white font-semibold rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(42,123,155,0.82) 0%, rgba(87,199,133,0.77) 100%)",
              }}
            >
              TRENDING
            </div>
            <div className="text-2xl">
              <i class="ri-heart-add-2-line"></i>
            </div>
          </div>
          <img src={product1} alt="" className="w-[83%] mb-3" />
          <div className="flex w-full">
            <div className="flex flex-col overflow-hidden flex-1">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">₹22,232</p>
                <span className="line-through text-xs text-gray-500">
                  ₹25,342
                </span>
              </div>

              <div className="truncate text-sm font-medium">
                Yemeraly Wings Diamond
              </div>

              <div className="text-xs text-green-600">
                10% on Making Charges
              </div>
            </div>

            <div className="flex items-center justify-center ml-3">
              <img src={menu} alt="" className="h-16 object-contain" />
            </div>
          </div>

          <div className="flex items-center justify-between w-full mt-5">
            <p className="text-xs">View Similar</p>
            <button
              className="text-sm px-5 py-2 text-white font-semibold rounded-br-2xl rounded-tl-2xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(42,123,155,1) 0%, rgba(1,119,98,1) 100%)",
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
