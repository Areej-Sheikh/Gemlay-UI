import React from 'react'
import update1 from "../assets/updates1.png"
import update2 from "../assets/updates2.png"
import update3 from "../assets/updates3.png"

const Updates = () => {
  return (
    <div className="m-10">
      <div className="flex flex-col items-center justify-center text-xl m-10">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold mt-5">STAY UPDATED WITH US</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>
        <div className="text-[#007A64] font-semibold">
          KNOW ABOUT WHAT OTHERS THINK
        </div>
      </div>
      <div className="flex w-[23%] gap-6 rounded-full">
        <img src={update1} alt="" className="rounded-4xl" />
        <img src={update2} alt="" className="rounded-4xl" />
        <img src={update3} alt="" className="rounded-4xl" />
        <img src={update1} alt="" className="rounded-4xl" />
      </div>
      <div className="mt-14 text-[#007A64] flex justify-center text-lg">
        DISCOVER ALL <i className="ri-arrow-right-s-fill"></i>
      </div>
    </div>
  );
}

export default Updates